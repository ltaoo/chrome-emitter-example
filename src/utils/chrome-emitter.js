const checker = require("./checker");
const log = require("./log");
const {
  CUSTOM_EVENT_NAME,
  SPECIAL_CUSTOM_EVENT_NAME,
  SYNC_EVENT_NAME,
  SYNC_SUFFIX,
  DATA_KEY,
  TIME_KEY,
} = require("./constants");

const ACTIVE_TAB_KEY = "__EMITTER_ACTIVE_KEY__";
const QUERY_CURRENT_TAB = "__EMITTER_QUERY_CURRENT_TAB__";
const CURRENT_TAB = "__EMITTER_CURRENT_TAB__";
let HAS_INIT = false;

const {
  getCurrentScriptName,
  checkIsAtInjectedScript,
  checkIsAtContentScript,
  checkIsAtBackgroundScript,
} = checker;
const { chrome } = window;
const from = window.location.href;
const currentScriptName = getCurrentScriptName();

const isAtInjectedScript = checkIsAtInjectedScript();
const isAtContentScript = checkIsAtContentScript();
const isAtBackgroundScript = checkIsAtBackgroundScript();

// 当前所在脚本的唯一 id
const UNIQUE_ID = `@@__EMITTER_${new Date().valueOf().toString()}__`;
let currentTab = null;
let STORAGE_CHANGED_HANDLER = null;

const HANDLER_MAP = {};
const OPTIONS_MAP = {};
const SYNCED_EVENT = {};

/**
 * 底层用来向外广播事件的方法
 * interface Action {
 *   type: string;
 *   payload: Array<any>;
 * }
 * @param {Action} action
 */
function dispatch(action) {
  // const { cb } = action;
  if (isAtInjectedScript) {
    log("[emitter] dispatch event", action);
    window.dispatchEvent(
      new CustomEvent(SPECIAL_CUSTOM_EVENT_NAME, {
        detail: action,
      })
    );
    return;
  }
  log("[emitter] dispatch event", action, SYNCED_EVENT);
  if (isAtContentScript && SYNCED_EVENT[action.type] !== undefined) {
    // 可能是向 injected 广播，所以需要 dispatchEvent
    window.dispatchEvent(
      new CustomEvent(CUSTOM_EVENT_NAME, {
        detail: action,
      })
    );
    return;
  }
  // 使用 storage.local.set 来触发改变，从而通知到全部有 onChanged.addListener 的地方
  const current = new Date().valueOf();
  chrome.storage.local.set({
    [TIME_KEY]: current,
    [DATA_KEY]: {
      value: current,
      type: action.type,
      payload: action.payload,
    },
  });
}
/**
 * 底层用来监听全局的所有事件，可以理解为一个「广播中心」
 * @param {function} cb
 */
function addStoreListener(cb) {
  if (isAtInjectedScript) {
    // log('[injected] listener custom event');
    window.addEventListener(CUSTOM_EVENT_NAME, function (event) {
      log("[emitter] receive event", event.detail);
      cb(event.detail);
    });
    return;
  }
  if (isAtContentScript) {
    window.addEventListener(SPECIAL_CUSTOM_EVENT_NAME, function (event) {
      log("[emitter] receive event", event.detail);
      cb(event.detail);
    });
  }
  STORAGE_CHANGED_HANDLER = (changes) => {
    const { __data__ } = changes;
    // clear 时走这里
    if (__data__ === undefined || __data__.newValue === undefined) {
      return;
    }
    chrome.storage.local.remove([TIME_KEY, DATA_KEY]);
    const action = __data__.newValue;
    cb(action);
  };
  chrome.storage.onChanged.addListener(STORAGE_CHANGED_HANDLER);
}

const emitter = {
  /**
   * 用来发出事件的方法
   * @param {string} eventName
   * @param  {...any} params
   */
  emit(eventName, ...params) {
    let name = eventName;
    if (isAtInjectedScript && eventName !== SYNC_EVENT_NAME) {
      log("[emitter] emit event", eventName);
      // 如果是在 injected 发出事件，实际是发到了 content
      // 由于可能需要转发，所以实际发出的事件名做了处理，添加 SYNC_SUFFIX
      name = eventName + SYNC_SUFFIX;
    }
    log(
      "[emitter] emit event",
      name,
      "original event name is",
      eventName,
      "and params is",
      params
    );
    dispatch({
      type: name,
      payload: params,
    });
  },
  /**
   * 监听事件
   * @param {string} eventName
   * @param {function} handler
   * interface Options {
   *   // 只有当该 tab 是当前展示的，才调用
   *   active: boolean;
   * }
   * @param {Options} options
   */
  on(eventName, handler, options) {
    let name = eventName;
    if (isAtInjectedScript) {
      // 如果是在 inserted 中监听事件，通知 content 也要监听一份，同时需要改写该事件名
      name = eventName + SYNC_SUFFIX;
      log("[emitter] sync event listen to content", name);
      emitter.emit(SYNC_EVENT_NAME, name);
    }
    HANDLER_MAP[name] = handler;
    const DEFAULT_OPTIONS = {
      // 是否所在 tab 为激活状态才调用
      active: true,
      // 只在哪些脚本中 on 生效
      at: [],
    };
    OPTIONS_MAP[name] = Object.assign({}, DEFAULT_OPTIONS, options);
  },
  remove(eventName) {
    delete HANDLER_MAP[eventName];
  },
};

// function request(eventName, ...params) {
//   return new Promise((resolve) => {
//     emitter.on(eventName + "RECEIVE", (...result) => {
//       emitter.remove(eventName + "RECEIVE");
//       resolve(...result);
//     });
//     emitter.emit(eventName, ...params);
//   });
// }
// function response(eventName, handler) {
//   emitter.on(eventName, () => {
//     const value = handler();
//     emitter.emit(eventName + "RECEIVE", value);
//   });
// }

// emitter.request = request;
// emitter.response = response;
function init() {
  if (HAS_INIT === true) {
    return;
  }
  // 初始化监听，主要用于同步 injected 监听的事件
  addStoreListener((action) => {
    log(
      "[emitter] addStoreListener receive event and action is",
      action,
      "current script name is",
      currentScriptName,
      HANDLER_MAP,
      window[CURRENT_TAB] && window[CURRENT_TAB].active
    );
    const { type, payload } = action;
    // 如果是 injected 请求 content 同步监听事件的请求
    if (isAtContentScript && type === SYNC_EVENT_NAME) {
      log("[emitter] save synced event", action);
      const eventName = payload[0];
      const name = eventName.replace(SYNC_SUFFIX, "");
      SYNCED_EVENT[name] = eventName;

      HANDLER_MAP[name] = (...params) => {
        log("[emitter] event from injected so emit to injected");
        emitter.emit(eventName, ...params);
      };
      return;
    }
    if (isAtContentScript && type.includes(SYNC_SUFFIX)) {
      // 如果是 content 并且收到的事件是由 injected 发出的，就再向外广播一次
      const name = type.replace(SYNC_SUFFIX, "");
      dispatch(action);
      return;
    }

    const handler = HANDLER_MAP[type];
    const options = OPTIONS_MAP[type];

    if (handler === undefined) {
      if (HANDLER_MAP[type + SYNC_SUFFIX]) {
        HANDLER_MAP[type + SYNC_SUFFIX](...payload);
        return;
      }
      log("[emitter]", "at", type, "listener is not exist");
      return;
    }

    log(
      "[emitter] check is at content script and has options",
      options,
      action
    );
    handler(...payload);
  });

  // 这两个用来实现只向单个 tab 发送消息
  if (isAtContentScript && currentTab === null) {
    emitter.emit(QUERY_CURRENT_TAB, UNIQUE_ID);
    emitter.on(UNIQUE_ID, (tab) => {
      currentTab = tab;
      window[CURRENT_TAB] = tab;
    });
  }
  if (isAtBackgroundScript) {
    window.REGISTERED_TABS = [];
    emitter.on(QUERY_CURRENT_TAB, (from) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        window[ACTIVE_TAB_KEY] = tabs[0];
        emitter.emit(from, tabs[0]);
      });
    });
  }
  HAS_INIT = true;
}

init();

if (isAtContentScript) {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") {
      if (
        chrome.storage.onChanged.hasListeners() &&
        STORAGE_CHANGED_HANDLER !== null
      ) {
        // 在 tab 切换时注销掉监听
        log("[emitter] remove storage listener");
        chrome.storage.onChanged.removeListener(STORAGE_CHANGED_HANDLER);
        HAS_INIT = false;
      }
      return;
    }
    init();
  });
}

module.exports = emitter;
module.exports.dispatch = dispatch;
module.exports.addStoreListener = addStoreListener;
// export default emitter;
