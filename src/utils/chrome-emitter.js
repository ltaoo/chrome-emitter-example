const checker = require('./checker');

const CUSTOM_EVENT_NAME = "__CHROME_EMITTER_A__";
const SPECIAL_CUSTOM_EVENT_NAME = "__CHROME_EMITTER_B__";
const SYNC_EVENT_NAME = '__CHROME_SYNC_NAME__';
const SYNC_SUFFIX = ':__CHROME_SUFFIX__'
const TIME_KEY = "__time__";
const DATA_KEY = "__data__";
const HAS_LISTEN = '__CHROME_HAS_LISTEN__';

const { checkIsAtInjectedScript, checkIsAtContentScript, checkIsAtBackgroundScript } = checker;
const { chrome } = window;

const isAtInjectedScript = checkIsAtInjectedScript();
const isAtContentScript = checkIsAtContentScript();

// console.log("[emitter.js]", "current run background", window.location.href);

function dispatch(action) {
  console.log('[emitter] dispatch', action);
  if (isAtInjectedScript) {
    console.log('[emitter][injected] dispatch custom event', action.type);
    window.dispatchEvent(
      new CustomEvent(SPECIAL_CUSTOM_EVENT_NAME, {
        detail: action,
      })
    );
    return;
  }
  if (isAtContentScript) {
    console.log('[emitter][content] dispatch custom event', action.type);
    // 这里能否优化，我们是可以知道要广播的事件是否是 content 和 injected 通信？
    window.dispatchEvent(
      new CustomEvent(CUSTOM_EVENT_NAME, {
        detail: action,
      })
    );
  }
  console.log('[emitter] dispatch event', action);
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
function addStoreListener(cb) {
  if (isAtInjectedScript) {
    // console.log('[injected] listener custom event');
    window.addEventListener(CUSTOM_EVENT_NAME, function (event) {
      // console.log('[injected] reply custom event');
      cb(event.detail);
    });
    return;
  }
  if (isAtContentScript) {
    // console.log('[content] listener custom event');
    window.addEventListener(SPECIAL_CUSTOM_EVENT_NAME, function (event) {
      // console.log('[emitter][content] reply custom event from inserted', event);
      cb(event.detail);
    });
  }
  chrome.storage.onChanged.addListener((changes) => {
    const { __data__ } = changes;
    // clear 时走这里
    if (__data__ === undefined || __data__.newValue === undefined) {
      return;
    }
    chrome.storage.local.remove([TIME_KEY, DATA_KEY]);
    const nextAction = __data__.newValue;
    const { type, payload } = nextAction;
    cb({
      type,
      payload,
    });
  });
}

const emitter = {
  emit(eventName, ...params) {
    let name = eventName;
    if (isAtInjectedScript) {
      name = eventName + SYNC_SUFFIX;
    }
    console.log('[emitter] emit', name);
    dispatch({
      type: name,
      payload: params,
    });
  },
  on(eventName, handler) {
    // 如果是在 inserted 中监听事件，content 也要监听一份，同时需要改写该事件
    let name = eventName;
    if (isAtInjectedScript) {
      name = eventName + SYNC_SUFFIX;
      console.log(101, '[emitter][injected] 1. listen event at injected, so sync to content', eventName, name);
      emitter.emit(SYNC_EVENT_NAME, name);
    }
    HANDLER_MAP[name] = handler;
  },
};

const HANDLER_MAP = {};
if (window[HAS_LISTEN] === undefined) {
  // addStoreListener 一个文件只调用一次
  addStoreListener((action) => {
    const { type, payload } = action;
    if (checkIsAtBackgroundScript()) {
      console.log(action, HANDLER_MAP, HANDLER_MAP[type]);
    }
    // console.log('[emitter]', action, HANDLER_MAP);
    // if (isAtContentScript) {
    //   emitter.emit(action);
    // }
    // inserted 向外广播非「同步 inserted 监听事件」的一条消息
    if (isAtContentScript && type.replace(SYNC_SUFFIX, '') !== SYNC_EVENT_NAME && type.includes(SYNC_SUFFIX)) {
      console.log(115, type, type.replace(SYNC_SUFFIX, ''));
      const name = type.replace(SYNC_SUFFIX, '');
      // 那就再向外广播一次
      emitter.emit(name);
      return;
    }
    const handler = HANDLER_MAP[type];
    if (handler !== undefined) {
      handler(...payload);
    }
  });
  if (isAtContentScript) {
    // 注册一个同步 injected 通信的东西，只要传参数就好了
    // console.log('[content] listen sync event');
    emitter.on(SYNC_EVENT_NAME, (eventName) => {
      console.log('[emitter][content] 2. receive sync request from injected', eventName);
      const name = eventName.replace(SYNC_SUFFIX, '');
      emitter.on(name, (...params) => {
        emitter.emit(eventName, ...params);
      });
    });
  }
}

module.exports = emitter;
