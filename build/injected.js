/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/injected.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/injected.js":
/*!*************************!*\
  !*** ./src/injected.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const emitter = require('chrome-emitter');
const emitter = __webpack_require__(/*! ./utils/chrome-emitter */ "./src/utils/chrome-emitter.js");
const { getContent } = __webpack_require__(/*! ./utils */ "./src/utils/index.js");

console.log('here is inserted');

// emitter.on('popup-to-inserted', (msg, str, num) => {
//   const content = getContent(msg);
//   console.log('[inserted] from popup', content, str, num);
// });
// emitter.on('options-to-inserted', (msg) => {
//   const content = getContent(msg);
//   console.log('[inserted] from options', content);
// });
// emitter.on('background-to-inserted', (msg) => {
//   const content = getContent(msg);
//   console.log('[inserted] from background', content);
// });
// emitter.on('content-to-inserted', (msg) => {
//   const content = getContent(msg);
//   console.log('[inserted] from content', content);
// });

// const fixedBtn = document.createElement('button');
// fixedBtn.innerText = '发送消息到 background';
// fixedBtn.onclick = () => {
//   emitter.emit('injected-to-background');
// };
document.body.onclick = () => {
  // console.log('[inserted]', 'click body');
  emitter.emit('injected-to-background');
};


/***/ }),

/***/ "./src/utils/checker.js":
/*!******************************!*\
  !*** ./src/utils/checker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const SCRIPTS = {
  NONE: 0,
  CONTENT: 1,
  INJECTED: 2,
  BACKGROUND: 3,
};
const SCRIPT_NAMES = {
  0: "NONE",
  1: "CONTENT",
  2: "INJECTED",
  3: "BACKGROUND",
  4: "POPUP",
  5: "OPTIONS",
};
function checkScript() {
  if (chrome === undefined) {
    return SCRIPTS.NONE;
  }
  if (chrome.storage === undefined) {
    return SCRIPTS.INJECTED;
  }
  if (chrome.tabs === undefined) {
    return SCRIPTS.CONTENT;
  }
  const bgWindow = chrome.extension.getBackgroundPage();
  if (window === bgWindow) {
    return SCRIPTS.BACKGROUND;
  }
  return SCRIPTS.NONE;
}

module.exports.checkIsAtContentScript = function checkIsAtContentScript() {
  return checkScript() === SCRIPTS.CONTENT;
}
module.exports.checkIsAtInjectedScript = function checkIsAtInjectedScript() {
  return checkScript() === SCRIPTS.INJECTED;
}

module.exports.checkIsAtBackgroundScript = function checkIsAtInjectedScript() {
  return checkScript() === SCRIPTS.BACKGROUND;
}

module.exports.getCurrentScriptName = function getCurrentScriptName() {
  return SCRIPT_NAMES[checkScript()];
}


/***/ }),

/***/ "./src/utils/chrome-emitter.js":
/*!*************************************!*\
  !*** ./src/utils/chrome-emitter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const checker = __webpack_require__(/*! ./checker */ "./src/utils/checker.js");
const log = __webpack_require__(/*! ./log */ "./src/utils/log.js");
const {
  CUSTOM_EVENT_NAME,
  SPECIAL_CUSTOM_EVENT_NAME,
  SYNC_EVENT_NAME,
  SYNC_SUFFIX,
  DATA_KEY,
  TIME_KEY,
} = __webpack_require__(/*! ./constants */ "./src/utils/constants.js");

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


/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const CUSTOM_EVENT_NAME = "__CHROME_EMITTER_A__";
const SPECIAL_CUSTOM_EVENT_NAME = "__CHROME_EMITTER_B__";
const SYNC_EVENT_NAME = "__CHROME_SYNC_NAME__";
const SYNC_SUFFIX = "@__CHROME_SUFFIX__";
const TIME_KEY = "__time__";
const DATA_KEY = "__data__";
const HAS_LISTEN = "__CHROME_HAS_LISTEN__";

module.exports.CUSTOM_EVENT_NAME = CUSTOM_EVENT_NAME;
module.exports.SPECIAL_CUSTOM_EVENT_NAME = SPECIAL_CUSTOM_EVENT_NAME;
module.exports.SYNC_EVENT_NAME = SYNC_EVENT_NAME;
module.exports.SYNC_SUFFIX = SYNC_SUFFIX;
module.exports.TIME_KEY = TIME_KEY;
module.exports.DATA_KEY = DATA_KEY;
module.exports.HAS_LISTEN = HAS_LISTEN;


/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.getContent = function getContent(msg) {
  const content = `${new Date().toLocaleTimeString()} - ${msg}`;
  return content;
};

module.exports.loadJs = function loadJs(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;

    document.documentElement.appendChild(script);

    script.onload = resolve;
    script.onerror = reject;
  });
};


/***/ }),

/***/ "./src/utils/log.js":
/*!**************************!*\
  !*** ./src/utils/log.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const checker = __webpack_require__(/*! ./checker */ "./src/utils/checker.js");

const DEBUGGER = true;

const { getCurrentScriptName } = checker;

const currentScriptName = getCurrentScriptName() || "UNKNOWN";

module.exports = function log(...params) {
  if (DEBUGGER === false) {
    return;
  }
  const info = [currentScriptName, ...params];
  console.log(...info);
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaGVja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaHJvbWUtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDZEQUF3QjtBQUNoRCxPQUFPLGFBQWEsR0FBRyxtQkFBTyxDQUFDLHFDQUFTOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtB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Rzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0NBQW9DO0FBQzdEO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQSxxQkFBcUIsZ0NBQWdDLEtBQUssSUFBSTtBQUM5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2ZBLGdCQUFnQixtQkFBTyxDQUFDLHlDQUFXOztBQUVuQzs7QUFFQSxPQUFPLHVCQUF1Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5qZWN0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmplY3RlZC5qc1wiKTtcbiIsIi8vIGNvbnN0IGVtaXR0ZXIgPSByZXF1aXJlKCdjaHJvbWUtZW1pdHRlcicpO1xuY29uc3QgZW1pdHRlciA9IHJlcXVpcmUoJy4vdXRpbHMvY2hyb21lLWVtaXR0ZXInKTtcbmNvbnN0IHsgZ2V0Q29udGVudCB9ID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5jb25zb2xlLmxvZygnaGVyZSBpcyBpbnNlcnRlZCcpO1xuXG4vLyBlbWl0dGVyLm9uKCdwb3B1cC10by1pbnNlcnRlZCcsIChtc2csIHN0ciwgbnVtKSA9PiB7XG4vLyAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4vLyAgIGNvbnNvbGUubG9nKCdbaW5zZXJ0ZWRdIGZyb20gcG9wdXAnLCBjb250ZW50LCBzdHIsIG51bSk7XG4vLyB9KTtcbi8vIGVtaXR0ZXIub24oJ29wdGlvbnMtdG8taW5zZXJ0ZWQnLCAobXNnKSA9PiB7XG4vLyAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4vLyAgIGNvbnNvbGUubG9nKCdbaW5zZXJ0ZWRdIGZyb20gb3B0aW9ucycsIGNvbnRlbnQpO1xuLy8gfSk7XG4vLyBlbWl0dGVyLm9uKCdiYWNrZ3JvdW5kLXRvLWluc2VydGVkJywgKG1zZykgPT4ge1xuLy8gICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuLy8gICBjb25zb2xlLmxvZygnW2luc2VydGVkXSBmcm9tIGJhY2tncm91bmQnLCBjb250ZW50KTtcbi8vIH0pO1xuLy8gZW1pdHRlci5vbignY29udGVudC10by1pbnNlcnRlZCcsIChtc2cpID0+IHtcbi8vICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbi8vICAgY29uc29sZS5sb2coJ1tpbnNlcnRlZF0gZnJvbSBjb250ZW50JywgY29udGVudCk7XG4vLyB9KTtcblxuLy8gY29uc3QgZml4ZWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbi8vIGZpeGVkQnRuLmlubmVyVGV4dCA9ICflj5HpgIHmtojmga/liLAgYmFja2dyb3VuZCc7XG4vLyBmaXhlZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuLy8gICBlbWl0dGVyLmVtaXQoJ2luamVjdGVkLXRvLWJhY2tncm91bmQnKTtcbi8vIH07XG5kb2N1bWVudC5ib2R5Lm9uY2xpY2sgPSAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKCdbaW5zZXJ0ZWRdJywgJ2NsaWNrIGJvZHknKTtcbiAgZW1pdHRlci5lbWl0KCdpbmplY3RlZC10by1iYWNrZ3JvdW5kJyk7XG59O1xuIiwiY29uc3QgU0NSSVBUUyA9IHtcbiAgTk9ORTogMCxcbiAgQ09OVEVOVDogMSxcbiAgSU5KRUNURUQ6IDIsXG4gIEJBQ0tHUk9VTkQ6IDMsXG59O1xuY29uc3QgU0NSSVBUX05BTUVTID0ge1xuICAwOiBcIk5PTkVcIixcbiAgMTogXCJDT05URU5UXCIsXG4gIDI6IFwiSU5KRUNURURcIixcbiAgMzogXCJCQUNLR1JPVU5EXCIsXG4gIDQ6IFwiUE9QVVBcIixcbiAgNTogXCJPUFRJT05TXCIsXG59O1xuZnVuY3Rpb24gY2hlY2tTY3JpcHQoKSB7XG4gIGlmIChjaHJvbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBTQ1JJUFRTLk5PTkU7XG4gIH1cbiAgaWYgKGNocm9tZS5zdG9yYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gU0NSSVBUUy5JTkpFQ1RFRDtcbiAgfVxuICBpZiAoY2hyb21lLnRhYnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBTQ1JJUFRTLkNPTlRFTlQ7XG4gIH1cbiAgY29uc3QgYmdXaW5kb3cgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKCk7XG4gIGlmICh3aW5kb3cgPT09IGJnV2luZG93KSB7XG4gICAgcmV0dXJuIFNDUklQVFMuQkFDS0dST1VORDtcbiAgfVxuICByZXR1cm4gU0NSSVBUUy5OT05FO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5jaGVja0lzQXRDb250ZW50U2NyaXB0ID0gZnVuY3Rpb24gY2hlY2tJc0F0Q29udGVudFNjcmlwdCgpIHtcbiAgcmV0dXJuIGNoZWNrU2NyaXB0KCkgPT09IFNDUklQVFMuQ09OVEVOVDtcbn1cbm1vZHVsZS5leHBvcnRzLmNoZWNrSXNBdEluamVjdGVkU2NyaXB0ID0gZnVuY3Rpb24gY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLklOSkVDVEVEO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5jaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0ID0gZnVuY3Rpb24gY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLkJBQ0tHUk9VTkQ7XG59XG5cbm1vZHVsZS5leHBvcnRzLmdldEN1cnJlbnRTY3JpcHROYW1lID0gZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdE5hbWUoKSB7XG4gIHJldHVybiBTQ1JJUFRfTkFNRVNbY2hlY2tTY3JpcHQoKV07XG59XG4iLCJjb25zdCBjaGVja2VyID0gcmVxdWlyZShcIi4vY2hlY2tlclwiKTtcbmNvbnN0IGxvZyA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcbmNvbnN0IHtcbiAgQ1VTVE9NX0VWRU5UX05BTUUsXG4gIFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUsXG4gIFNZTkNfRVZFTlRfTkFNRSxcbiAgU1lOQ19TVUZGSVgsXG4gIERBVEFfS0VZLFxuICBUSU1FX0tFWSxcbn0gPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5cbmNvbnN0IEFDVElWRV9UQUJfS0VZID0gXCJfX0VNSVRURVJfQUNUSVZFX0tFWV9fXCI7XG5jb25zdCBRVUVSWV9DVVJSRU5UX1RBQiA9IFwiX19FTUlUVEVSX1FVRVJZX0NVUlJFTlRfVEFCX19cIjtcbmNvbnN0IENVUlJFTlRfVEFCID0gXCJfX0VNSVRURVJfQ1VSUkVOVF9UQUJfX1wiO1xubGV0IEhBU19JTklUID0gZmFsc2U7XG5cbmNvbnN0IHtcbiAgZ2V0Q3VycmVudFNjcmlwdE5hbWUsXG4gIGNoZWNrSXNBdEluamVjdGVkU2NyaXB0LFxuICBjaGVja0lzQXRDb250ZW50U2NyaXB0LFxuICBjaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0LFxufSA9IGNoZWNrZXI7XG5jb25zdCB7IGNocm9tZSB9ID0gd2luZG93O1xuY29uc3QgZnJvbSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuY29uc3QgY3VycmVudFNjcmlwdE5hbWUgPSBnZXRDdXJyZW50U2NyaXB0TmFtZSgpO1xuXG5jb25zdCBpc0F0SW5qZWN0ZWRTY3JpcHQgPSBjaGVja0lzQXRJbmplY3RlZFNjcmlwdCgpO1xuY29uc3QgaXNBdENvbnRlbnRTY3JpcHQgPSBjaGVja0lzQXRDb250ZW50U2NyaXB0KCk7XG5jb25zdCBpc0F0QmFja2dyb3VuZFNjcmlwdCA9IGNoZWNrSXNBdEJhY2tncm91bmRTY3JpcHQoKTtcblxuLy8g5b2T5YmN5omA5Zyo6ISa5pys55qE5ZSv5LiAIGlkXG5jb25zdCBVTklRVUVfSUQgPSBgQEBfX0VNSVRURVJfJHtuZXcgRGF0ZSgpLnZhbHVlT2YoKS50b1N0cmluZygpfV9fYDtcbmxldCBjdXJyZW50VGFiID0gbnVsbDtcbmxldCBTVE9SQUdFX0NIQU5HRURfSEFORExFUiA9IG51bGw7XG5cbmNvbnN0IEhBTkRMRVJfTUFQID0ge307XG5jb25zdCBPUFRJT05TX01BUCA9IHt9O1xuY29uc3QgU1lOQ0VEX0VWRU5UID0ge307XG5cbi8qKlxuICog5bqV5bGC55So5p2l5ZCR5aSW5bm/5pKt5LqL5Lu255qE5pa55rOVXG4gKiBpbnRlcmZhY2UgQWN0aW9uIHtcbiAqICAgdHlwZTogc3RyaW5nO1xuICogICBwYXlsb2FkOiBBcnJheTxhbnk+O1xuICogfVxuICogQHBhcmFtIHtBY3Rpb259IGFjdGlvblxuICovXG5mdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgLy8gY29uc3QgeyBjYiB9ID0gYWN0aW9uO1xuICBpZiAoaXNBdEluamVjdGVkU2NyaXB0KSB7XG4gICAgbG9nKFwiW2VtaXR0ZXJdIGRpc3BhdGNoIGV2ZW50XCIsIGFjdGlvbik7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSwge1xuICAgICAgICBkZXRhaWw6IGFjdGlvbixcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbG9nKFwiW2VtaXR0ZXJdIGRpc3BhdGNoIGV2ZW50XCIsIGFjdGlvbiwgU1lOQ0VEX0VWRU5UKTtcbiAgaWYgKGlzQXRDb250ZW50U2NyaXB0ICYmIFNZTkNFRF9FVkVOVFthY3Rpb24udHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIOWPr+iDveaYr+WQkSBpbmplY3RlZCDlub/mkq3vvIzmiYDku6XpnIDopoEgZGlzcGF0Y2hFdmVudFxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KENVU1RPTV9FVkVOVF9OQU1FLCB7XG4gICAgICAgIGRldGFpbDogYWN0aW9uLFxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyDkvb/nlKggc3RvcmFnZS5sb2NhbC5zZXQg5p2l6Kem5Y+R5pS55Y+Y77yM5LuO6ICM6YCa55+l5Yiw5YWo6YOo5pyJIG9uQ2hhbmdlZC5hZGRMaXN0ZW5lciDnmoTlnLDmlrlcbiAgY29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgIFtUSU1FX0tFWV06IGN1cnJlbnQsXG4gICAgW0RBVEFfS0VZXToge1xuICAgICAgdmFsdWU6IGN1cnJlbnQsXG4gICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgIHBheWxvYWQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgIH0sXG4gIH0pO1xufVxuLyoqXG4gKiDlupXlsYLnlKjmnaXnm5HlkKzlhajlsYDnmoTmiYDmnInkuovku7bvvIzlj6/ku6XnkIbop6PkuLrkuIDkuKrjgIzlub/mkq3kuK3lv4PjgI1cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbmZ1bmN0aW9uIGFkZFN0b3JlTGlzdGVuZXIoY2IpIHtcbiAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCkge1xuICAgIC8vIGxvZygnW2luamVjdGVkXSBsaXN0ZW5lciBjdXN0b20gZXZlbnQnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihDVVNUT01fRVZFTlRfTkFNRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gcmVjZWl2ZSBldmVudFwiLCBldmVudC5kZXRhaWwpO1xuICAgICAgY2IoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzQXRDb250ZW50U2NyaXB0KSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gcmVjZWl2ZSBldmVudFwiLCBldmVudC5kZXRhaWwpO1xuICAgICAgY2IoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgfVxuICBTVE9SQUdFX0NIQU5HRURfSEFORExFUiA9IChjaGFuZ2VzKSA9PiB7XG4gICAgY29uc3QgeyBfX2RhdGFfXyB9ID0gY2hhbmdlcztcbiAgICAvLyBjbGVhciDml7botbDov5nph4xcbiAgICBpZiAoX19kYXRhX18gPT09IHVuZGVmaW5lZCB8fCBfX2RhdGFfXy5uZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbVElNRV9LRVksIERBVEFfS0VZXSk7XG4gICAgY29uc3QgYWN0aW9uID0gX19kYXRhX18ubmV3VmFsdWU7XG4gICAgY2IoYWN0aW9uKTtcbiAgfTtcbiAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSKTtcbn1cblxuY29uc3QgZW1pdHRlciA9IHtcbiAgLyoqXG4gICAqIOeUqOadpeWPkeWHuuS6i+S7tueahOaWueazlVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSAgey4uLmFueX0gcGFyYW1zXG4gICAqL1xuICBlbWl0KGV2ZW50TmFtZSwgLi4ucGFyYW1zKSB7XG4gICAgbGV0IG5hbWUgPSBldmVudE5hbWU7XG4gICAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCAmJiBldmVudE5hbWUgIT09IFNZTkNfRVZFTlRfTkFNRSkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIGVtaXQgZXZlbnRcIiwgZXZlbnROYW1lKTtcbiAgICAgIC8vIOWmguaenOaYr+WcqCBpbmplY3RlZCDlj5Hlh7rkuovku7bvvIzlrp7pmYXmmK/lj5HliLDkuoYgY29udGVudFxuICAgICAgLy8g55Sx5LqO5Y+v6IO96ZyA6KaB6L2s5Y+R77yM5omA5Lul5a6e6ZmF5Y+R5Ye655qE5LqL5Lu25ZCN5YGa5LqG5aSE55CG77yM5re75YqgIFNZTkNfU1VGRklYXG4gICAgICBuYW1lID0gZXZlbnROYW1lICsgU1lOQ19TVUZGSVg7XG4gICAgfVxuICAgIGxvZyhcbiAgICAgIFwiW2VtaXR0ZXJdIGVtaXQgZXZlbnRcIixcbiAgICAgIG5hbWUsXG4gICAgICBcIm9yaWdpbmFsIGV2ZW50IG5hbWUgaXNcIixcbiAgICAgIGV2ZW50TmFtZSxcbiAgICAgIFwiYW5kIHBhcmFtcyBpc1wiLFxuICAgICAgcGFyYW1zXG4gICAgKTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBuYW1lLFxuICAgICAgcGF5bG9hZDogcGFyYW1zLFxuICAgIH0pO1xuICB9LFxuICAvKipcbiAgICog55uR5ZCs5LqL5Lu2XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlclxuICAgKiBpbnRlcmZhY2UgT3B0aW9ucyB7XG4gICAqICAgLy8g5Y+q5pyJ5b2T6K+lIHRhYiDmmK/lvZPliY3lsZXnpLrnmoTvvIzmiY3osIPnlKhcbiAgICogICBhY3RpdmU6IGJvb2xlYW47XG4gICAqIH1cbiAgICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zXG4gICAqL1xuICBvbihldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBsZXQgbmFtZSA9IGV2ZW50TmFtZTtcbiAgICBpZiAoaXNBdEluamVjdGVkU2NyaXB0KSB7XG4gICAgICAvLyDlpoLmnpzmmK/lnKggaW5zZXJ0ZWQg5Lit55uR5ZCs5LqL5Lu277yM6YCa55+lIGNvbnRlbnQg5Lmf6KaB55uR5ZCs5LiA5Lu977yM5ZCM5pe26ZyA6KaB5pS55YaZ6K+l5LqL5Lu25ZCNXG4gICAgICBuYW1lID0gZXZlbnROYW1lICsgU1lOQ19TVUZGSVg7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gc3luYyBldmVudCBsaXN0ZW4gdG8gY29udGVudFwiLCBuYW1lKTtcbiAgICAgIGVtaXR0ZXIuZW1pdChTWU5DX0VWRU5UX05BTUUsIG5hbWUpO1xuICAgIH1cbiAgICBIQU5ETEVSX01BUFtuYW1lXSA9IGhhbmRsZXI7XG4gICAgY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xuICAgICAgLy8g5piv5ZCm5omA5ZyoIHRhYiDkuLrmv4DmtLvnirbmgIHmiY3osIPnlKhcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIC8vIOWPquWcqOWTquS6m+iEmuacrOS4rSBvbiDnlJ/mlYhcbiAgICAgIGF0OiBbXSxcbiAgICB9O1xuICAgIE9QVElPTlNfTUFQW25hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKTtcbiAgfSxcbiAgcmVtb3ZlKGV2ZW50TmFtZSkge1xuICAgIGRlbGV0ZSBIQU5ETEVSX01BUFtldmVudE5hbWVdO1xuICB9LFxufTtcblxuLy8gZnVuY3Rpb24gcmVxdWVzdChldmVudE5hbWUsIC4uLnBhcmFtcykge1xuLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbi8vICAgICBlbWl0dGVyLm9uKGV2ZW50TmFtZSArIFwiUkVDRUlWRVwiLCAoLi4ucmVzdWx0KSA9PiB7XG4vLyAgICAgICBlbWl0dGVyLnJlbW92ZShldmVudE5hbWUgKyBcIlJFQ0VJVkVcIik7XG4vLyAgICAgICByZXNvbHZlKC4uLnJlc3VsdCk7XG4vLyAgICAgfSk7XG4vLyAgICAgZW1pdHRlci5lbWl0KGV2ZW50TmFtZSwgLi4ucGFyYW1zKTtcbi8vICAgfSk7XG4vLyB9XG4vLyBmdW5jdGlvbiByZXNwb25zZShldmVudE5hbWUsIGhhbmRsZXIpIHtcbi8vICAgZW1pdHRlci5vbihldmVudE5hbWUsICgpID0+IHtcbi8vICAgICBjb25zdCB2YWx1ZSA9IGhhbmRsZXIoKTtcbi8vICAgICBlbWl0dGVyLmVtaXQoZXZlbnROYW1lICsgXCJSRUNFSVZFXCIsIHZhbHVlKTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIGVtaXR0ZXIucmVxdWVzdCA9IHJlcXVlc3Q7XG4vLyBlbWl0dGVyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5mdW5jdGlvbiBpbml0KCkge1xuICBpZiAoSEFTX0lOSVQgPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8g5Yid5aeL5YyW55uR5ZCs77yM5Li76KaB55So5LqO5ZCM5q2lIGluamVjdGVkIOebkeWQrOeahOS6i+S7tlxuICBhZGRTdG9yZUxpc3RlbmVyKChhY3Rpb24pID0+IHtcbiAgICBsb2coXG4gICAgICBcIltlbWl0dGVyXSBhZGRTdG9yZUxpc3RlbmVyIHJlY2VpdmUgZXZlbnQgYW5kIGFjdGlvbiBpc1wiLFxuICAgICAgYWN0aW9uLFxuICAgICAgXCJjdXJyZW50IHNjcmlwdCBuYW1lIGlzXCIsXG4gICAgICBjdXJyZW50U2NyaXB0TmFtZSxcbiAgICAgIEhBTkRMRVJfTUFQLFxuICAgICAgd2luZG93W0NVUlJFTlRfVEFCXSAmJiB3aW5kb3dbQ1VSUkVOVF9UQUJdLmFjdGl2ZVxuICAgICk7XG4gICAgY29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XG4gICAgLy8g5aaC5p6c5pivIGluamVjdGVkIOivt+axgiBjb250ZW50IOWQjOatpeebkeWQrOS6i+S7tueahOivt+axglxuICAgIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiB0eXBlID09PSBTWU5DX0VWRU5UX05BTUUpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSBzYXZlIHN5bmNlZCBldmVudFwiLCBhY3Rpb24pO1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gcGF5bG9hZFswXTtcbiAgICAgIGNvbnN0IG5hbWUgPSBldmVudE5hbWUucmVwbGFjZShTWU5DX1NVRkZJWCwgXCJcIik7XG4gICAgICBTWU5DRURfRVZFTlRbbmFtZV0gPSBldmVudE5hbWU7XG5cbiAgICAgIEhBTkRMRVJfTUFQW25hbWVdID0gKC4uLnBhcmFtcykgPT4ge1xuICAgICAgICBsb2coXCJbZW1pdHRlcl0gZXZlbnQgZnJvbSBpbmplY3RlZCBzbyBlbWl0IHRvIGluamVjdGVkXCIpO1xuICAgICAgICBlbWl0dGVyLmVtaXQoZXZlbnROYW1lLCAuLi5wYXJhbXMpO1xuICAgICAgfTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzQXRDb250ZW50U2NyaXB0ICYmIHR5cGUuaW5jbHVkZXMoU1lOQ19TVUZGSVgpKSB7XG4gICAgICAvLyDlpoLmnpzmmK8gY29udGVudCDlubbkuJTmlLbliLDnmoTkuovku7bmmK/nlLEgaW5qZWN0ZWQg5Y+R5Ye655qE77yM5bCx5YaN5ZCR5aSW5bm/5pKt5LiA5qyhXG4gICAgICBjb25zdCBuYW1lID0gdHlwZS5yZXBsYWNlKFNZTkNfU1VGRklYLCBcIlwiKTtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlciA9IEhBTkRMRVJfTUFQW3R5cGVdO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPUFRJT05TX01BUFt0eXBlXTtcblxuICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChIQU5ETEVSX01BUFt0eXBlICsgU1lOQ19TVUZGSVhdKSB7XG4gICAgICAgIEhBTkRMRVJfTUFQW3R5cGUgKyBTWU5DX1NVRkZJWF0oLi4ucGF5bG9hZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxvZyhcIltlbWl0dGVyXVwiLCBcImF0XCIsIHR5cGUsIFwibGlzdGVuZXIgaXMgbm90IGV4aXN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxvZyhcbiAgICAgIFwiW2VtaXR0ZXJdIGNoZWNrIGlzIGF0IGNvbnRlbnQgc2NyaXB0IGFuZCBoYXMgb3B0aW9uc1wiLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGFjdGlvblxuICAgICk7XG4gICAgaGFuZGxlciguLi5wYXlsb2FkKTtcbiAgfSk7XG5cbiAgLy8g6L+Z5Lik5Liq55So5p2l5a6e546w5Y+q5ZCR5Y2V5LiqIHRhYiDlj5HpgIHmtojmga9cbiAgaWYgKGlzQXRDb250ZW50U2NyaXB0ICYmIGN1cnJlbnRUYWIgPT09IG51bGwpIHtcbiAgICBlbWl0dGVyLmVtaXQoUVVFUllfQ1VSUkVOVF9UQUIsIFVOSVFVRV9JRCk7XG4gICAgZW1pdHRlci5vbihVTklRVUVfSUQsICh0YWIpID0+IHtcbiAgICAgIGN1cnJlbnRUYWIgPSB0YWI7XG4gICAgICB3aW5kb3dbQ1VSUkVOVF9UQUJdID0gdGFiO1xuICAgIH0pO1xuICB9XG4gIGlmIChpc0F0QmFja2dyb3VuZFNjcmlwdCkge1xuICAgIHdpbmRvdy5SRUdJU1RFUkVEX1RBQlMgPSBbXTtcbiAgICBlbWl0dGVyLm9uKFFVRVJZX0NVUlJFTlRfVEFCLCAoZnJvbSkgPT4ge1xuICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpID0+IHtcbiAgICAgICAgd2luZG93W0FDVElWRV9UQUJfS0VZXSA9IHRhYnNbMF07XG4gICAgICAgIGVtaXR0ZXIuZW1pdChmcm9tLCB0YWJzWzBdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIEhBU19JTklUID0gdHJ1ZTtcbn1cblxuaW5pdCgpO1xuXG5pZiAoaXNBdENvbnRlbnRTY3JpcHQpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09IFwidmlzaWJsZVwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5oYXNMaXN0ZW5lcnMoKSAmJlxuICAgICAgICBTVE9SQUdFX0NIQU5HRURfSEFORExFUiAhPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIC8vIOWcqCB0YWIg5YiH5o2i5pe25rOo6ZSA5o6J55uR5ZCsXG4gICAgICAgIGxvZyhcIltlbWl0dGVyXSByZW1vdmUgc3RvcmFnZSBsaXN0ZW5lclwiKTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSKTtcbiAgICAgICAgSEFTX0lOSVQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW5pdCgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMuZGlzcGF0Y2ggPSBkaXNwYXRjaDtcbm1vZHVsZS5leHBvcnRzLmFkZFN0b3JlTGlzdGVuZXIgPSBhZGRTdG9yZUxpc3RlbmVyO1xuLy8gZXhwb3J0IGRlZmF1bHQgZW1pdHRlcjtcbiIsImNvbnN0IENVU1RPTV9FVkVOVF9OQU1FID0gXCJfX0NIUk9NRV9FTUlUVEVSX0FfX1wiO1xuY29uc3QgU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSA9IFwiX19DSFJPTUVfRU1JVFRFUl9CX19cIjtcbmNvbnN0IFNZTkNfRVZFTlRfTkFNRSA9IFwiX19DSFJPTUVfU1lOQ19OQU1FX19cIjtcbmNvbnN0IFNZTkNfU1VGRklYID0gXCJAX19DSFJPTUVfU1VGRklYX19cIjtcbmNvbnN0IFRJTUVfS0VZID0gXCJfX3RpbWVfX1wiO1xuY29uc3QgREFUQV9LRVkgPSBcIl9fZGF0YV9fXCI7XG5jb25zdCBIQVNfTElTVEVOID0gXCJfX0NIUk9NRV9IQVNfTElTVEVOX19cIjtcblxubW9kdWxlLmV4cG9ydHMuQ1VTVE9NX0VWRU5UX05BTUUgPSBDVVNUT01fRVZFTlRfTkFNRTtcbm1vZHVsZS5leHBvcnRzLlNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUgPSBTUEVDSUFMX0NVU1RPTV9FVkVOVF9OQU1FO1xubW9kdWxlLmV4cG9ydHMuU1lOQ19FVkVOVF9OQU1FID0gU1lOQ19FVkVOVF9OQU1FO1xubW9kdWxlLmV4cG9ydHMuU1lOQ19TVUZGSVggPSBTWU5DX1NVRkZJWDtcbm1vZHVsZS5leHBvcnRzLlRJTUVfS0VZID0gVElNRV9LRVk7XG5tb2R1bGUuZXhwb3J0cy5EQVRBX0tFWSA9IERBVEFfS0VZO1xubW9kdWxlLmV4cG9ydHMuSEFTX0xJU1RFTiA9IEhBU19MSVNURU47XG4iLCJtb2R1bGUuZXhwb3J0cy5nZXRDb250ZW50ID0gZnVuY3Rpb24gZ2V0Q29udGVudChtc2cpIHtcbiAgY29uc3QgY29udGVudCA9IGAke25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9IC0gJHttc2d9YDtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5sb2FkSnMgPSBmdW5jdGlvbiBsb2FkSnMoc3JjKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgfSk7XG59O1xuIiwiY29uc3QgY2hlY2tlciA9IHJlcXVpcmUoXCIuL2NoZWNrZXJcIik7XG5cbmNvbnN0IERFQlVHR0VSID0gdHJ1ZTtcblxuY29uc3QgeyBnZXRDdXJyZW50U2NyaXB0TmFtZSB9ID0gY2hlY2tlcjtcblxuY29uc3QgY3VycmVudFNjcmlwdE5hbWUgPSBnZXRDdXJyZW50U2NyaXB0TmFtZSgpIHx8IFwiVU5LTk9XTlwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxvZyguLi5wYXJhbXMpIHtcbiAgaWYgKERFQlVHR0VSID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpbmZvID0gW2N1cnJlbnRTY3JpcHROYW1lLCAuLi5wYXJhbXNdO1xuICBjb25zb2xlLmxvZyguLi5pbmZvKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=injected.js.map