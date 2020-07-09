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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const emitter = require('chrome-emitter');
const emitter = __webpack_require__(/*! ./utils/chrome-emitter */ "./src/utils/chrome-emitter.js");
const { getContent } = __webpack_require__(/*! ./utils */ "./src/utils/index.js");

console.log("here is popup");

const toBackgroundBtn = document.getElementById('toBackground');
const toContentBtn = document.getElementById('toContent');
const toOptionsBtn = document.getElementById('toOptions');
const toInsertedBtn = document.getElementById('toInsertedScript');

const screenshot = document.getElementById('screenshot');

const fromBackgroundText = document.getElementById('fromBackground');
const fromContentText = document.getElementById('fromContent');
const fromOptionsText = document.getElementById('fromOptions');
const fromInsertedText = document.getElementById('fromInsertedScript');

const message = 'hello i am popup';
toBackgroundBtn.onclick = () => {
  console.log('[popup] send message to background');
  emitter.emit('popup-to-background', message);
};
toContentBtn.onclick = () => {
  console.log('[popup] send message to content');
  emitter.emit('popup-to-content', message);
};
toOptionsBtn.onclick = () => {
  console.log('[popup] send message to options');
  emitter.emit('popup-to-options', message);
};
toInsertedBtn.onclick = () => {
  console.log('[popup] send message to inserted');
  emitter.emit('popup-to-inserted', message, 'hahaha', 1);
};

screenshot.onclick = () => {
  emitter.emit('startScreenshot');
  // emitter.emit('start-screenshot');
};

emitter.on('background-to-popup', (msg) => {
  const content = getContent(msg);
  fromBackgroundText.innerText = content;
});
emitter.on('content-to-popup', (msg) => {
  const content = getContent(msg);
  fromContentText.innerText = content;
});
emitter.on('options-to-popup', (msg) => {
  const content = getContent(msg);
  fromOptionsText.innerText = content;
});
emitter.on('inserted-to-popup', (msg) => {
  const content = getContent(msg);
  fromInsertedText.innerText = content;
});



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaGVja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaHJvbWUtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDZEQUF3QjtBQUNoRCxPQUFPLGFBQWEsR0FBRyxtQkFBTyxDQUFDLHFDQUFTOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN4REQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1Q0EsZ0JBQWdCLG1CQUFPLENBQUMseUNBQVc7QUFDbkMsWUFBWSxtQkFBTyxDQUFDLGlDQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHQUFHLG1CQUFPLENBQUMsNkNBQWE7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsT0FBTyxTQUFTO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLGdDQUFnQztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvQ0FBb0M7QUFDN0Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUNBLHFCQUFxQixnQ0FBZ0MsS0FBSyxJQUFJO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDZkEsZ0JBQWdCLG1CQUFPLENBQUMseUNBQVc7O0FBRW5DOztBQUVBLE9BQU8sdUJBQXVCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BvcHVwLmpzXCIpO1xuIiwiLy8gY29uc3QgZW1pdHRlciA9IHJlcXVpcmUoJ2Nocm9tZS1lbWl0dGVyJyk7XG5jb25zdCBlbWl0dGVyID0gcmVxdWlyZSgnLi91dGlscy9jaHJvbWUtZW1pdHRlcicpO1xuY29uc3QgeyBnZXRDb250ZW50IH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmNvbnNvbGUubG9nKFwiaGVyZSBpcyBwb3B1cFwiKTtcblxuY29uc3QgdG9CYWNrZ3JvdW5kQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvQmFja2dyb3VuZCcpO1xuY29uc3QgdG9Db250ZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvQ29udGVudCcpO1xuY29uc3QgdG9PcHRpb25zQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvT3B0aW9ucycpO1xuY29uc3QgdG9JbnNlcnRlZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0luc2VydGVkU2NyaXB0Jyk7XG5cbmNvbnN0IHNjcmVlbnNob3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuc2hvdCcpO1xuXG5jb25zdCBmcm9tQmFja2dyb3VuZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJvbUJhY2tncm91bmQnKTtcbmNvbnN0IGZyb21Db250ZW50VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcm9tQ29udGVudCcpO1xuY29uc3QgZnJvbU9wdGlvbnNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zyb21PcHRpb25zJyk7XG5jb25zdCBmcm9tSW5zZXJ0ZWRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zyb21JbnNlcnRlZFNjcmlwdCcpO1xuXG5jb25zdCBtZXNzYWdlID0gJ2hlbGxvIGkgYW0gcG9wdXAnO1xudG9CYWNrZ3JvdW5kQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdbcG9wdXBdIHNlbmQgbWVzc2FnZSB0byBiYWNrZ3JvdW5kJyk7XG4gIGVtaXR0ZXIuZW1pdCgncG9wdXAtdG8tYmFja2dyb3VuZCcsIG1lc3NhZ2UpO1xufTtcbnRvQ29udGVudEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnW3BvcHVwXSBzZW5kIG1lc3NhZ2UgdG8gY29udGVudCcpO1xuICBlbWl0dGVyLmVtaXQoJ3BvcHVwLXRvLWNvbnRlbnQnLCBtZXNzYWdlKTtcbn07XG50b09wdGlvbnNCdG4ub25jbGljayA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1twb3B1cF0gc2VuZCBtZXNzYWdlIHRvIG9wdGlvbnMnKTtcbiAgZW1pdHRlci5lbWl0KCdwb3B1cC10by1vcHRpb25zJywgbWVzc2FnZSk7XG59O1xudG9JbnNlcnRlZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnW3BvcHVwXSBzZW5kIG1lc3NhZ2UgdG8gaW5zZXJ0ZWQnKTtcbiAgZW1pdHRlci5lbWl0KCdwb3B1cC10by1pbnNlcnRlZCcsIG1lc3NhZ2UsICdoYWhhaGEnLCAxKTtcbn07XG5cbnNjcmVlbnNob3Qub25jbGljayA9ICgpID0+IHtcbiAgZW1pdHRlci5lbWl0KCdzdGFydFNjcmVlbnNob3QnKTtcbiAgLy8gZW1pdHRlci5lbWl0KCdzdGFydC1zY3JlZW5zaG90Jyk7XG59O1xuXG5lbWl0dGVyLm9uKCdiYWNrZ3JvdW5kLXRvLXBvcHVwJywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICBmcm9tQmFja2dyb3VuZFRleHQuaW5uZXJUZXh0ID0gY29udGVudDtcbn0pO1xuZW1pdHRlci5vbignY29udGVudC10by1wb3B1cCcsIChtc2cpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgZnJvbUNvbnRlbnRUZXh0LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG59KTtcbmVtaXR0ZXIub24oJ29wdGlvbnMtdG8tcG9wdXAnLCAobXNnKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4gIGZyb21PcHRpb25zVGV4dC5pbm5lclRleHQgPSBjb250ZW50O1xufSk7XG5lbWl0dGVyLm9uKCdpbnNlcnRlZC10by1wb3B1cCcsIChtc2cpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgZnJvbUluc2VydGVkVGV4dC5pbm5lclRleHQgPSBjb250ZW50O1xufSk7XG5cbiIsImNvbnN0IFNDUklQVFMgPSB7XG4gIE5PTkU6IDAsXG4gIENPTlRFTlQ6IDEsXG4gIElOSkVDVEVEOiAyLFxuICBCQUNLR1JPVU5EOiAzLFxufTtcbmNvbnN0IFNDUklQVF9OQU1FUyA9IHtcbiAgMDogXCJOT05FXCIsXG4gIDE6IFwiQ09OVEVOVFwiLFxuICAyOiBcIklOSkVDVEVEXCIsXG4gIDM6IFwiQkFDS0dST1VORFwiLFxuICA0OiBcIlBPUFVQXCIsXG4gIDU6IFwiT1BUSU9OU1wiLFxufTtcbmZ1bmN0aW9uIGNoZWNrU2NyaXB0KCkge1xuICBpZiAoY2hyb21lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gU0NSSVBUUy5OT05FO1xuICB9XG4gIGlmIChjaHJvbWUuc3RvcmFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFNDUklQVFMuSU5KRUNURUQ7XG4gIH1cbiAgaWYgKGNocm9tZS50YWJzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gU0NSSVBUUy5DT05URU5UO1xuICB9XG4gIGNvbnN0IGJnV2luZG93ID0gY2hyb21lLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO1xuICBpZiAod2luZG93ID09PSBiZ1dpbmRvdykge1xuICAgIHJldHVybiBTQ1JJUFRTLkJBQ0tHUk9VTkQ7XG4gIH1cbiAgcmV0dXJuIFNDUklQVFMuTk9ORTtcbn1cblxubW9kdWxlLmV4cG9ydHMuY2hlY2tJc0F0Q29udGVudFNjcmlwdCA9IGZ1bmN0aW9uIGNoZWNrSXNBdENvbnRlbnRTY3JpcHQoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLkNPTlRFTlQ7XG59XG5tb2R1bGUuZXhwb3J0cy5jaGVja0lzQXRJbmplY3RlZFNjcmlwdCA9IGZ1bmN0aW9uIGNoZWNrSXNBdEluamVjdGVkU2NyaXB0KCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5JTkpFQ1RFRDtcbn1cblxubW9kdWxlLmV4cG9ydHMuY2hlY2tJc0F0QmFja2dyb3VuZFNjcmlwdCA9IGZ1bmN0aW9uIGNoZWNrSXNBdEluamVjdGVkU2NyaXB0KCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5CQUNLR1JPVU5EO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5nZXRDdXJyZW50U2NyaXB0TmFtZSA9IGZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHROYW1lKCkge1xuICByZXR1cm4gU0NSSVBUX05BTUVTW2NoZWNrU2NyaXB0KCldO1xufVxuIiwiY29uc3QgY2hlY2tlciA9IHJlcXVpcmUoXCIuL2NoZWNrZXJcIik7XG5jb25zdCBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5jb25zdCB7XG4gIENVU1RPTV9FVkVOVF9OQU1FLFxuICBTUEVDSUFMX0NVU1RPTV9FVkVOVF9OQU1FLFxuICBTWU5DX0VWRU5UX05BTUUsXG4gIFNZTkNfU1VGRklYLFxuICBEQVRBX0tFWSxcbiAgVElNRV9LRVksXG59ID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuXG5jb25zdCBBQ1RJVkVfVEFCX0tFWSA9IFwiX19FTUlUVEVSX0FDVElWRV9LRVlfX1wiO1xuY29uc3QgUVVFUllfQ1VSUkVOVF9UQUIgPSBcIl9fRU1JVFRFUl9RVUVSWV9DVVJSRU5UX1RBQl9fXCI7XG5jb25zdCBDVVJSRU5UX1RBQiA9IFwiX19FTUlUVEVSX0NVUlJFTlRfVEFCX19cIjtcbmxldCBIQVNfSU5JVCA9IGZhbHNlO1xuXG5jb25zdCB7XG4gIGdldEN1cnJlbnRTY3JpcHROYW1lLFxuICBjaGVja0lzQXRJbmplY3RlZFNjcmlwdCxcbiAgY2hlY2tJc0F0Q29udGVudFNjcmlwdCxcbiAgY2hlY2tJc0F0QmFja2dyb3VuZFNjcmlwdCxcbn0gPSBjaGVja2VyO1xuY29uc3QgeyBjaHJvbWUgfSA9IHdpbmRvdztcbmNvbnN0IGZyb20gPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbmNvbnN0IGN1cnJlbnRTY3JpcHROYW1lID0gZ2V0Q3VycmVudFNjcmlwdE5hbWUoKTtcblxuY29uc3QgaXNBdEluamVjdGVkU2NyaXB0ID0gY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQoKTtcbmNvbnN0IGlzQXRDb250ZW50U2NyaXB0ID0gY2hlY2tJc0F0Q29udGVudFNjcmlwdCgpO1xuY29uc3QgaXNBdEJhY2tncm91bmRTY3JpcHQgPSBjaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0KCk7XG5cbi8vIOW9k+WJjeaJgOWcqOiEmuacrOeahOWUr+S4gCBpZFxuY29uc3QgVU5JUVVFX0lEID0gYEBAX19FTUlUVEVSXyR7bmV3IERhdGUoKS52YWx1ZU9mKCkudG9TdHJpbmcoKX1fX2A7XG5sZXQgY3VycmVudFRhYiA9IG51bGw7XG5sZXQgU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIgPSBudWxsO1xuXG5jb25zdCBIQU5ETEVSX01BUCA9IHt9O1xuY29uc3QgT1BUSU9OU19NQVAgPSB7fTtcbmNvbnN0IFNZTkNFRF9FVkVOVCA9IHt9O1xuXG4vKipcbiAqIOW6leWxgueUqOadpeWQkeWkluW5v+aSreS6i+S7tueahOaWueazlVxuICogaW50ZXJmYWNlIEFjdGlvbiB7XG4gKiAgIHR5cGU6IHN0cmluZztcbiAqICAgcGF5bG9hZDogQXJyYXk8YW55PjtcbiAqIH1cbiAqIEBwYXJhbSB7QWN0aW9ufSBhY3Rpb25cbiAqL1xuZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gIC8vIGNvbnN0IHsgY2IgfSA9IGFjdGlvbjtcbiAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCkge1xuICAgIGxvZyhcIltlbWl0dGVyXSBkaXNwYXRjaCBldmVudFwiLCBhY3Rpb24pO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUsIHtcbiAgICAgICAgZGV0YWlsOiBhY3Rpb24sXG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxvZyhcIltlbWl0dGVyXSBkaXNwYXRjaCBldmVudFwiLCBhY3Rpb24sIFNZTkNFRF9FVkVOVCk7XG4gIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiBTWU5DRURfRVZFTlRbYWN0aW9uLnR5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyDlj6/og73mmK/lkJEgaW5qZWN0ZWQg5bm/5pKt77yM5omA5Lul6ZyA6KaBIGRpc3BhdGNoRXZlbnRcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudChDVVNUT01fRVZFTlRfTkFNRSwge1xuICAgICAgICBkZXRhaWw6IGFjdGlvbixcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8g5L2/55SoIHN0b3JhZ2UubG9jYWwuc2V0IOadpeinpuWPkeaUueWPmO+8jOS7juiAjOmAmuefpeWIsOWFqOmDqOaciSBvbkNoYW5nZWQuYWRkTGlzdGVuZXIg55qE5Zyw5pa5XG4gIGNvbnN0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICBbVElNRV9LRVldOiBjdXJyZW50LFxuICAgIFtEQVRBX0tFWV06IHtcbiAgICAgIHZhbHVlOiBjdXJyZW50LFxuICAgICAgdHlwZTogYWN0aW9uLnR5cGUsXG4gICAgICBwYXlsb2FkOiBhY3Rpb24ucGF5bG9hZCxcbiAgICB9LFxuICB9KTtcbn1cbi8qKlxuICog5bqV5bGC55So5p2l55uR5ZCs5YWo5bGA55qE5omA5pyJ5LqL5Lu277yM5Y+v5Lul55CG6Kej5Li65LiA5Liq44CM5bm/5pKt5Lit5b+D44CNXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYlxuICovXG5mdW5jdGlvbiBhZGRTdG9yZUxpc3RlbmVyKGNiKSB7XG4gIGlmIChpc0F0SW5qZWN0ZWRTY3JpcHQpIHtcbiAgICAvLyBsb2coJ1tpbmplY3RlZF0gbGlzdGVuZXIgY3VzdG9tIGV2ZW50Jyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoQ1VTVE9NX0VWRU5UX05BTUUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIHJlY2VpdmUgZXZlbnRcIiwgZXZlbnQuZGV0YWlsKTtcbiAgICAgIGNiKGV2ZW50LmRldGFpbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpc0F0Q29udGVudFNjcmlwdCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIHJlY2VpdmUgZXZlbnRcIiwgZXZlbnQuZGV0YWlsKTtcbiAgICAgIGNiKGV2ZW50LmRldGFpbCk7XG4gICAgfSk7XG4gIH1cbiAgU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIgPSAoY2hhbmdlcykgPT4ge1xuICAgIGNvbnN0IHsgX19kYXRhX18gfSA9IGNoYW5nZXM7XG4gICAgLy8gY2xlYXIg5pe26LWw6L+Z6YeMXG4gICAgaWYgKF9fZGF0YV9fID09PSB1bmRlZmluZWQgfHwgX19kYXRhX18ubmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1RJTUVfS0VZLCBEQVRBX0tFWV0pO1xuICAgIGNvbnN0IGFjdGlvbiA9IF9fZGF0YV9fLm5ld1ZhbHVlO1xuICAgIGNiKGFjdGlvbik7XG4gIH07XG4gIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihTVE9SQUdFX0NIQU5HRURfSEFORExFUik7XG59XG5cbmNvbnN0IGVtaXR0ZXIgPSB7XG4gIC8qKlxuICAgKiDnlKjmnaXlj5Hlh7rkuovku7bnmoTmlrnms5VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0gIHsuLi5hbnl9IHBhcmFtc1xuICAgKi9cbiAgZW1pdChldmVudE5hbWUsIC4uLnBhcmFtcykge1xuICAgIGxldCBuYW1lID0gZXZlbnROYW1lO1xuICAgIGlmIChpc0F0SW5qZWN0ZWRTY3JpcHQgJiYgZXZlbnROYW1lICE9PSBTWU5DX0VWRU5UX05BTUUpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSBlbWl0IGV2ZW50XCIsIGV2ZW50TmFtZSk7XG4gICAgICAvLyDlpoLmnpzmmK/lnKggaW5qZWN0ZWQg5Y+R5Ye65LqL5Lu277yM5a6e6ZmF5piv5Y+R5Yiw5LqGIGNvbnRlbnRcbiAgICAgIC8vIOeUseS6juWPr+iDvemcgOimgei9rOWPke+8jOaJgOS7peWunumZheWPkeWHuueahOS6i+S7tuWQjeWBmuS6huWkhOeQhu+8jOa3u+WKoCBTWU5DX1NVRkZJWFxuICAgICAgbmFtZSA9IGV2ZW50TmFtZSArIFNZTkNfU1VGRklYO1xuICAgIH1cbiAgICBsb2coXG4gICAgICBcIltlbWl0dGVyXSBlbWl0IGV2ZW50XCIsXG4gICAgICBuYW1lLFxuICAgICAgXCJvcmlnaW5hbCBldmVudCBuYW1lIGlzXCIsXG4gICAgICBldmVudE5hbWUsXG4gICAgICBcImFuZCBwYXJhbXMgaXNcIixcbiAgICAgIHBhcmFtc1xuICAgICk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogbmFtZSxcbiAgICAgIHBheWxvYWQ6IHBhcmFtcyxcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOebkeWQrOS6i+S7tlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAgICogaW50ZXJmYWNlIE9wdGlvbnMge1xuICAgKiAgIC8vIOWPquacieW9k+ivpSB0YWIg5piv5b2T5YmN5bGV56S655qE77yM5omN6LCD55SoXG4gICAqICAgYWN0aXZlOiBib29sZWFuO1xuICAgKiB9XG4gICAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9uc1xuICAgKi9cbiAgb24oZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgbGV0IG5hbWUgPSBldmVudE5hbWU7XG4gICAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCkge1xuICAgICAgLy8g5aaC5p6c5piv5ZyoIGluc2VydGVkIOS4reebkeWQrOS6i+S7tu+8jOmAmuefpSBjb250ZW50IOS5n+imgeebkeWQrOS4gOS7ve+8jOWQjOaXtumcgOimgeaUueWGmeivpeS6i+S7tuWQjVxuICAgICAgbmFtZSA9IGV2ZW50TmFtZSArIFNZTkNfU1VGRklYO1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIHN5bmMgZXZlbnQgbGlzdGVuIHRvIGNvbnRlbnRcIiwgbmFtZSk7XG4gICAgICBlbWl0dGVyLmVtaXQoU1lOQ19FVkVOVF9OQU1FLCBuYW1lKTtcbiAgICB9XG4gICAgSEFORExFUl9NQVBbbmFtZV0gPSBoYW5kbGVyO1xuICAgIGNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgICAgIC8vIOaYr+WQpuaJgOWcqCB0YWIg5Li65r+A5rS754q25oCB5omN6LCD55SoXG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAvLyDlj6rlnKjlk6rkupvohJrmnKzkuK0gb24g55Sf5pWIXG4gICAgICBhdDogW10sXG4gICAgfTtcbiAgICBPUFRJT05TX01BUFtuYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyk7XG4gIH0sXG4gIHJlbW92ZShldmVudE5hbWUpIHtcbiAgICBkZWxldGUgSEFORExFUl9NQVBbZXZlbnROYW1lXTtcbiAgfSxcbn07XG5cbi8vIGZ1bmN0aW9uIHJlcXVlc3QoZXZlbnROYW1lLCAuLi5wYXJhbXMpIHtcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4vLyAgICAgZW1pdHRlci5vbihldmVudE5hbWUgKyBcIlJFQ0VJVkVcIiwgKC4uLnJlc3VsdCkgPT4ge1xuLy8gICAgICAgZW1pdHRlci5yZW1vdmUoZXZlbnROYW1lICsgXCJSRUNFSVZFXCIpO1xuLy8gICAgICAgcmVzb2x2ZSguLi5yZXN1bHQpO1xuLy8gICAgIH0pO1xuLy8gICAgIGVtaXR0ZXIuZW1pdChldmVudE5hbWUsIC4uLnBhcmFtcyk7XG4vLyAgIH0pO1xuLy8gfVxuLy8gZnVuY3Rpb24gcmVzcG9uc2UoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4vLyAgIGVtaXR0ZXIub24oZXZlbnROYW1lLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgdmFsdWUgPSBoYW5kbGVyKCk7XG4vLyAgICAgZW1pdHRlci5lbWl0KGV2ZW50TmFtZSArIFwiUkVDRUlWRVwiLCB2YWx1ZSk7XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBlbWl0dGVyLnJlcXVlc3QgPSByZXF1ZXN0O1xuLy8gZW1pdHRlci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaWYgKEhBU19JTklUID09PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIOWIneWni+WMluebkeWQrO+8jOS4u+imgeeUqOS6juWQjOatpSBpbmplY3RlZCDnm5HlkKznmoTkuovku7ZcbiAgYWRkU3RvcmVMaXN0ZW5lcigoYWN0aW9uKSA9PiB7XG4gICAgbG9nKFxuICAgICAgXCJbZW1pdHRlcl0gYWRkU3RvcmVMaXN0ZW5lciByZWNlaXZlIGV2ZW50IGFuZCBhY3Rpb24gaXNcIixcbiAgICAgIGFjdGlvbixcbiAgICAgIFwiY3VycmVudCBzY3JpcHQgbmFtZSBpc1wiLFxuICAgICAgY3VycmVudFNjcmlwdE5hbWUsXG4gICAgICBIQU5ETEVSX01BUCxcbiAgICAgIHdpbmRvd1tDVVJSRU5UX1RBQl0gJiYgd2luZG93W0NVUlJFTlRfVEFCXS5hY3RpdmVcbiAgICApO1xuICAgIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuICAgIC8vIOWmguaenOaYryBpbmplY3RlZCDor7fmsYIgY29udGVudCDlkIzmraXnm5HlkKzkuovku7bnmoTor7fmsYJcbiAgICBpZiAoaXNBdENvbnRlbnRTY3JpcHQgJiYgdHlwZSA9PT0gU1lOQ19FVkVOVF9OQU1FKSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gc2F2ZSBzeW5jZWQgZXZlbnRcIiwgYWN0aW9uKTtcbiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IHBheWxvYWRbMF07XG4gICAgICBjb25zdCBuYW1lID0gZXZlbnROYW1lLnJlcGxhY2UoU1lOQ19TVUZGSVgsIFwiXCIpO1xuICAgICAgU1lOQ0VEX0VWRU5UW25hbWVdID0gZXZlbnROYW1lO1xuXG4gICAgICBIQU5ETEVSX01BUFtuYW1lXSA9ICguLi5wYXJhbXMpID0+IHtcbiAgICAgICAgbG9nKFwiW2VtaXR0ZXJdIGV2ZW50IGZyb20gaW5qZWN0ZWQgc28gZW1pdCB0byBpbmplY3RlZFwiKTtcbiAgICAgICAgZW1pdHRlci5lbWl0KGV2ZW50TmFtZSwgLi4ucGFyYW1zKTtcbiAgICAgIH07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiB0eXBlLmluY2x1ZGVzKFNZTkNfU1VGRklYKSkge1xuICAgICAgLy8g5aaC5p6c5pivIGNvbnRlbnQg5bm25LiU5pS25Yiw55qE5LqL5Lu25piv55SxIGluamVjdGVkIOWPkeWHuueahO+8jOWwseWGjeWQkeWkluW5v+aSreS4gOasoVxuICAgICAgY29uc3QgbmFtZSA9IHR5cGUucmVwbGFjZShTWU5DX1NVRkZJWCwgXCJcIik7XG4gICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZXIgPSBIQU5ETEVSX01BUFt0eXBlXTtcbiAgICBjb25zdCBvcHRpb25zID0gT1BUSU9OU19NQVBbdHlwZV07XG5cbiAgICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoSEFORExFUl9NQVBbdHlwZSArIFNZTkNfU1VGRklYXSkge1xuICAgICAgICBIQU5ETEVSX01BUFt0eXBlICsgU1lOQ19TVUZGSVhdKC4uLnBheWxvYWQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsb2coXCJbZW1pdHRlcl1cIiwgXCJhdFwiLCB0eXBlLCBcImxpc3RlbmVyIGlzIG5vdCBleGlzdFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2coXG4gICAgICBcIltlbWl0dGVyXSBjaGVjayBpcyBhdCBjb250ZW50IHNjcmlwdCBhbmQgaGFzIG9wdGlvbnNcIixcbiAgICAgIG9wdGlvbnMsXG4gICAgICBhY3Rpb25cbiAgICApO1xuICAgIGhhbmRsZXIoLi4ucGF5bG9hZCk7XG4gIH0pO1xuXG4gIC8vIOi/meS4pOS4queUqOadpeWunueOsOWPquWQkeWNleS4qiB0YWIg5Y+R6YCB5raI5oGvXG4gIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiBjdXJyZW50VGFiID09PSBudWxsKSB7XG4gICAgZW1pdHRlci5lbWl0KFFVRVJZX0NVUlJFTlRfVEFCLCBVTklRVUVfSUQpO1xuICAgIGVtaXR0ZXIub24oVU5JUVVFX0lELCAodGFiKSA9PiB7XG4gICAgICBjdXJyZW50VGFiID0gdGFiO1xuICAgICAgd2luZG93W0NVUlJFTlRfVEFCXSA9IHRhYjtcbiAgICB9KTtcbiAgfVxuICBpZiAoaXNBdEJhY2tncm91bmRTY3JpcHQpIHtcbiAgICB3aW5kb3cuUkVHSVNURVJFRF9UQUJTID0gW107XG4gICAgZW1pdHRlci5vbihRVUVSWV9DVVJSRU5UX1RBQiwgKGZyb20pID0+IHtcbiAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XG4gICAgICAgIHdpbmRvd1tBQ1RJVkVfVEFCX0tFWV0gPSB0YWJzWzBdO1xuICAgICAgICBlbWl0dGVyLmVtaXQoZnJvbSwgdGFic1swXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBIQVNfSU5JVCA9IHRydWU7XG59XG5cbmluaXQoKTtcblxuaWYgKGlzQXRDb250ZW50U2NyaXB0KSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSBcInZpc2libGVcIikge1xuICAgICAgaWYgKFxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuaGFzTGlzdGVuZXJzKCkgJiZcbiAgICAgICAgU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIgIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICAvLyDlnKggdGFiIOWIh+aNouaXtuazqOmUgOaOieebkeWQrFxuICAgICAgICBsb2coXCJbZW1pdHRlcl0gcmVtb3ZlIHN0b3JhZ2UgbGlzdGVuZXJcIik7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihTVE9SQUdFX0NIQU5HRURfSEFORExFUik7XG4gICAgICAgIEhBU19JTklUID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGluaXQoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLmRpc3BhdGNoID0gZGlzcGF0Y2g7XG5tb2R1bGUuZXhwb3J0cy5hZGRTdG9yZUxpc3RlbmVyID0gYWRkU3RvcmVMaXN0ZW5lcjtcbi8vIGV4cG9ydCBkZWZhdWx0IGVtaXR0ZXI7XG4iLCJjb25zdCBDVVNUT01fRVZFTlRfTkFNRSA9IFwiX19DSFJPTUVfRU1JVFRFUl9BX19cIjtcbmNvbnN0IFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUgPSBcIl9fQ0hST01FX0VNSVRURVJfQl9fXCI7XG5jb25zdCBTWU5DX0VWRU5UX05BTUUgPSBcIl9fQ0hST01FX1NZTkNfTkFNRV9fXCI7XG5jb25zdCBTWU5DX1NVRkZJWCA9IFwiQF9fQ0hST01FX1NVRkZJWF9fXCI7XG5jb25zdCBUSU1FX0tFWSA9IFwiX190aW1lX19cIjtcbmNvbnN0IERBVEFfS0VZID0gXCJfX2RhdGFfX1wiO1xuY29uc3QgSEFTX0xJU1RFTiA9IFwiX19DSFJPTUVfSEFTX0xJU1RFTl9fXCI7XG5cbm1vZHVsZS5leHBvcnRzLkNVU1RPTV9FVkVOVF9OQU1FID0gQ1VTVE9NX0VWRU5UX05BTUU7XG5tb2R1bGUuZXhwb3J0cy5TUEVDSUFMX0NVU1RPTV9FVkVOVF9OQU1FID0gU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRTtcbm1vZHVsZS5leHBvcnRzLlNZTkNfRVZFTlRfTkFNRSA9IFNZTkNfRVZFTlRfTkFNRTtcbm1vZHVsZS5leHBvcnRzLlNZTkNfU1VGRklYID0gU1lOQ19TVUZGSVg7XG5tb2R1bGUuZXhwb3J0cy5USU1FX0tFWSA9IFRJTUVfS0VZO1xubW9kdWxlLmV4cG9ydHMuREFUQV9LRVkgPSBEQVRBX0tFWTtcbm1vZHVsZS5leHBvcnRzLkhBU19MSVNURU4gPSBIQVNfTElTVEVOO1xuIiwibW9kdWxlLmV4cG9ydHMuZ2V0Q29udGVudCA9IGZ1bmN0aW9uIGdldENvbnRlbnQobXNnKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSAtICR7bXNnfWA7XG4gIHJldHVybiBjb250ZW50O1xufTtcblxubW9kdWxlLmV4cG9ydHMubG9hZEpzID0gZnVuY3Rpb24gbG9hZEpzKHNyYykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgc2NyaXB0LnNyYyA9IHNyYztcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gIH0pO1xufTtcbiIsImNvbnN0IGNoZWNrZXIgPSByZXF1aXJlKFwiLi9jaGVja2VyXCIpO1xuXG5jb25zdCBERUJVR0dFUiA9IHRydWU7XG5cbmNvbnN0IHsgZ2V0Q3VycmVudFNjcmlwdE5hbWUgfSA9IGNoZWNrZXI7XG5cbmNvbnN0IGN1cnJlbnRTY3JpcHROYW1lID0gZ2V0Q3VycmVudFNjcmlwdE5hbWUoKSB8fCBcIlVOS05PV05cIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb2coLi4ucGFyYW1zKSB7XG4gIGlmIChERUJVR0dFUiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgaW5mbyA9IFtjdXJyZW50U2NyaXB0TmFtZSwgLi4ucGFyYW1zXTtcbiAgY29uc29sZS5sb2coLi4uaW5mbyk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=popup.js.map