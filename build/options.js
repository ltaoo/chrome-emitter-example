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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/options.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/chrome-emitter */ "./src/utils/chrome-emitter/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");



console.log("here is options");

document.body.onload = () => {
  const toBackgroundBtn = document.getElementById("toBackground");
  const toContentBtn = document.getElementById("toContent");
  const toInsertedBtn = document.getElementById("toInjected");

  const message = "hello i am options";
  toBackgroundBtn.onclick = () => {
    _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit("options-to-background", message);
  };
  toContentBtn.onclick = () => {
    _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit("options-to-content", message);
  };
  toInsertedBtn.onclick = () => {
    _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit("options-to-injected", message);
  };
};

_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on("background-to-options", (msg) => {
  const fromPopupText = document.getElementById("fromPopup");
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[options] from popup', content);
  fromPopupText.innerText = content;
});
_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on("background-to-options", (msg) => {
  const fromBackgroundText = document.getElementById("fromBackground");
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[options] from background', content);
  fromBackgroundText.innerText = content;
});
_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on("content-to-options", (msg) => {
  const fromContentText = document.getElementById("fromContent");
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[options] from content', content);
  fromContentText.innerText = content;
});
_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on("injected-to-options", (msg) => {
  const fromInjectedText = document.getElementById("fromInjected");
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[options] from injected', content);
  fromInjectedText.innerText = content;
});


/***/ }),

/***/ "./src/utils/chrome-emitter/checker.js":
/*!*********************************************!*\
  !*** ./src/utils/chrome-emitter/checker.js ***!
  \*********************************************/
/*! exports provided: checkIsAtContentScript, checkIsAtInjectedScript, checkIsAtBackgroundScript, checkIsAtPopup, checkIsAtOptions, getCurrentScriptName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsAtContentScript", function() { return checkIsAtContentScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsAtInjectedScript", function() { return checkIsAtInjectedScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsAtBackgroundScript", function() { return checkIsAtBackgroundScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsAtPopup", function() { return checkIsAtPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsAtOptions", function() { return checkIsAtOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentScriptName", function() { return getCurrentScriptName; });
const SCRIPTS = {
  NONE: 0,
  CONTENT: 1,
  INJECTED: 2,
  BACKGROUND: 3,
  POPUP: 4,
  OPTIONS: 5,
};
const SCRIPT_NAMES = {
  0: "NONE",
  1: "CONTENT",
  2: "INJECTED",
  3: "BACKGROUND",
  4: "POPUP",
  5: "OPTIONS",
};
const { chrome } = window;
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
  const views = chrome.extension.getViews({ type: "popup" });
  if (views.length !== 0) {
    return SCRIPTS.POPUP;
  }
  return SCRIPTS.OPTIONS;
}

function checkIsAtContentScript() {
  return checkScript() === SCRIPTS.CONTENT;
}
function checkIsAtInjectedScript() {
  return checkScript() === SCRIPTS.INJECTED;
}
function checkIsAtBackgroundScript() {
  return checkScript() === SCRIPTS.BACKGROUND;
}
function checkIsAtPopup() {
  return checkScript() === SCRIPTS.POPUP;
}
function checkIsAtOptions() {
  return checkScript() === SCRIPTS.OPTIONS;
}

function getCurrentScriptName() {
  return SCRIPT_NAMES[checkScript()];
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getCurrentScriptName,
  checkIsAtBackgroundScript,
  checkIsAtInjectedScript,
  checkIsAtContentScript,
});


/***/ }),

/***/ "./src/utils/chrome-emitter/index.js":
/*!*******************************************!*\
  !*** ./src/utils/chrome-emitter/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checker */ "./src/utils/chrome-emitter/checker.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ "./src/utils/chrome-emitter/log.js");



const EMITTER_CONFIG = {
  removeListenerWhenTabHidden: true,
};

const CUSTOM_EVENT_NAME = "@@__EMITTER_A__";
const SPECIAL_CUSTOM_EVENT_NAME = "@@__EMITTER_B__";
const SYNC_EVENT_TO_CONTENT = "@@__SYNC_NAME__";
const TIME_KEY = "__time__";
const DATA_KEY = "__data__";
const ACTIVE_TAB_KEY = "@@__EMITTER_ACTIVE_KEY__";
const QUERY_CURRENT_TAB = "@@__EMITTER_QUERY_CURRENT_TAB__";
const CURRENT_TAB = "@@__EMITTER_CURRENT_TAB__";
const FORM_INJECTED_SUFFIX = "@@__EMITTER_FROM_INJECTED__";
// 当前所在脚本的唯一 id
const UNIQUE_ID = `@@__EMITTER_${new Date().valueOf().toString()}__`;
const HANDLER_MAP = {};
const OPTIONS_MAP = {};
// 保存 injected 同步到 content 中的事件
const SYNCED_EVENT = {};

const {
  checkIsAtInjectedScript,
  checkIsAtContentScript,
  checkIsAtBackgroundScript,
} = _checker__WEBPACK_IMPORTED_MODULE_0__["default"];
const isAtInjectedScript = checkIsAtInjectedScript();
const isAtContentScript = checkIsAtContentScript();
const isAtBackgroundScript = checkIsAtBackgroundScript();

const { chrome } = window;

let HAS_INIT = false;
let currentTab = null;
let STORAGE_CHANGED_HANDLER = null;

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
    Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] dispatch event", action);
    window.dispatchEvent(
      new CustomEvent(SPECIAL_CUSTOM_EVENT_NAME, {
        detail: action,
      })
    );
    return;
  }
  if (isAtContentScript && action.type.includes(FORM_INJECTED_SUFFIX)) {
    Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] dispatch event", action, SYNCED_EVENT);
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
let INJECTED_EVENT_HANDLER = null;
let CONTENT_EVENT_HANDLER = null;
/**
 * 底层用来监听全局的所有事件，可以理解为一个「广播中心」
 * @param {function} cb
 */
function addStoreListener(cb) {
  if (isAtInjectedScript) {
    // log('[injected] listener custom event');
    INJECTED_EVENT_HANDLER = function (event) {
      Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] receive event", event.detail);
      cb(event.detail);
    };
    window.addEventListener(CUSTOM_EVENT_NAME, INJECTED_EVENT_HANDLER);
    return;
  }
  if (isAtContentScript) {
    CONTENT_EVENT_HANDLER = function (event) {
      Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] receive event", event.detail);
      cb(event.detail);
    };
    window.addEventListener(SPECIAL_CUSTOM_EVENT_NAME, CONTENT_EVENT_HANDLER);
  }
  STORAGE_CHANGED_HANDLER = (changes) => {
    const __data__ = changes[DATA_KEY];
    // clear 时走这里
    if (__data__ === undefined || __data__.newValue === undefined) {
      return;
    }
    chrome.storage.local.remove([TIME_KEY, DATA_KEY]);
    const action = __data__.newValue;
    cb(action);
  };
  Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] add storage listener");
  chrome.storage.onChanged.addListener(STORAGE_CHANGED_HANDLER);
}
/**
 * 移除所有监听器
 */
function removeStoreListener() {
  Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] remove all listeners");
  if (INJECTED_EVENT_HANDLER) {
    window.removeEventListener(CUSTOM_EVENT_NAME, INJECTED_EVENT_HANDLER);
  }
  if (CONTENT_EVENT_HANDLER) {
    window.removeEventListener(
      SPECIAL_CUSTOM_EVENT_NAME,
      CONTENT_EVENT_HANDLER
    );
  }
  if (chrome.storage.onChanged.hasListeners()) {
    chrome.storage.onChanged.removeListener(STORAGE_CHANGED_HANDLER);
  }
}

const emitter = {
  /**
   * 用来发出事件的方法
   * @param {string} eventName
   * @param  {...any} params
   */
  emit(eventName, ...params) {
    let name = eventName;

    const isEventFromInjected =
      isAtInjectedScript && eventName !== SYNC_EVENT_TO_CONTENT;
    if (isEventFromInjected) {
      name = eventName + FORM_INJECTED_SUFFIX;
    }
    Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])(
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
  on(eventName, handler) {
    let name = eventName;
    if (isAtInjectedScript) {
      // 如果是在 inserted 中监听事件，通知 content 监听该事件，injected 内监听一个修改过的事件
      name = eventName + FORM_INJECTED_SUFFIX;
      Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] sync event listener to content", name);
      emitter.emit(SYNC_EVENT_TO_CONTENT, eventName, name);
    }
    HANDLER_MAP[name] = handler;
  },
  remove(eventName) {
    delete HANDLER_MAP[eventName];
  },
  config(name, value) {
    if (value === undefined) {
      return EMITTER_CONFIG;
    }
    EMITTER_CONFIG[name] = value;
    return EMITTER_CONFIG;
  },
};

function init() {
  if (HAS_INIT === true) {
    return;
  }
  Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] init event listeners");
  addStoreListener((action) => {
    Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])(
      "[emitter] addStoreListener receive event and action is",
      action.type,
      HANDLER_MAP,
      SYNCED_EVENT
    );
    const { type, payload } = action;

    // 如果是 injected 请求 content 同步监听事件的请求
    if (isAtContentScript && type === SYNC_EVENT_TO_CONTENT) {
      Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] save synced event", action.type);
      const [originalEventName, modifiedEventName] = payload;
      SYNCED_EVENT[originalEventName] = modifiedEventName;

      HANDLER_MAP[originalEventName] = (...params) => {
        // log("[emitter] event from injected so emit to injected");
        dispatch({
          type: modifiedEventName,
          payload: params,
        });
      };
      return;
    }

    if (isAtContentScript && type.includes(FORM_INJECTED_SUFFIX)) {
      Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] check is synced event", action.type);
      // 如果是 content 并且收到的事件是由 injected 发出的，先看看是否是发给自己的
      const name = type.replace(FORM_INJECTED_SUFFIX, "");
      const handler = HANDLER_MAP[name];
      if (handler !== undefined) {
        handler(...payload);
        return;
      }
      // 不是发给自己 content，那就再向外广播一次
      dispatch({
        type: name,
        payload,
      });
      return;
    }

    // 如果是 content 发送到 injected 的事件
    if (isAtInjectedScript && HANDLER_MAP[type + FORM_INJECTED_SUFFIX]) {
      Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] check is synced event", action.type);
      HANDLER_MAP[type + FORM_INJECTED_SUFFIX](...payload);
      return;
    }

    const handler = HANDLER_MAP[type];

    if (handler === undefined) {
      Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter]", "at", type, "listener is not exist");
      return;
    }

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

function tabChangeHandler() {
  Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])('[emitter]', EMITTER_CONFIG.removeListenerWhenTabHidden, document.visibilityState);
  if (EMITTER_CONFIG.removeListenerWhenTabHidden === false) {
    return;
  }
  Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])("[emitter] document visible changed", document.visibilityState);
  if (document.visibilityState !== "visible") {
    if (
      chrome.storage.onChanged.hasListeners() &&
      STORAGE_CHANGED_HANDLER !== null
    ) {
      // 在 tab 切换时注销掉监听
      removeStoreListener();
      HAS_INIT = false;
    }
    return;
  }
  init();
}
if (isAtContentScript) {
  document.addEventListener("visibilitychange", tabChangeHandler);
}

/* harmony default export */ __webpack_exports__["default"] = (emitter);


/***/ }),

/***/ "./src/utils/chrome-emitter/log.js":
/*!*****************************************!*\
  !*** ./src/utils/chrome-emitter/log.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
const checker = __webpack_require__(/*! ./checker */ "./src/utils/chrome-emitter/checker.js");

const DEBUGGER = false;
// const DEBUGGER = true;

const { getCurrentScriptName } = checker;

const currentScriptName = getCurrentScriptName() || "UNKNOWN";

function log(...params) {
  if (DEBUGGER === false) {
    return;
  }
  const info = [currentScriptName, ...params];
  console.log(...info);
};


/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getContent, loadJs, createFixedContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return getContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJs", function() { return loadJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFixedContainer", function() { return createFixedContainer; });
function getContent(msg) {
  const content = `${new Date().toLocaleTimeString()} - ${msg}`;
  return content;
}

function loadJs(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;

    document.documentElement.appendChild(script);

    script.onload = resolve;
    script.onerror = reject;
  });
}

function createFixedContainer(id, content, styles = '') {
  const $container = document.createElement("div");
  $container.style =
    "z-index: 999; position: fixed; right: 20px; top: 20px; padding: 4px 10px; background-color: #fff;" + styles;
  $container.innerHTML = `<div id="${id}" style="display: flex; align-items: center; text-align: center; min-width: 180px; height: 30px;">
  ${content}
</div>
`;
  return $container;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nocm9tZS1lbWl0dGVyL2NoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nocm9tZS1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaHJvbWUtZW1pdHRlci9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQTZDO0FBQ1I7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDZEQUFPO0FBQ1g7QUFDQTtBQUNBLElBQUksNkRBQU87QUFDWDtBQUNBO0FB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QUFLLElBQUk7QUFDOUQ7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUIsYUFBYSxXQUFXLG1CQUFtQix3QkFBd0I7QUFDdEcscUNBQXFDLEdBQUcsdUJBQXVCLHFCQUFxQixvQkFBb0Isa0JBQWtCLGNBQWM7QUFDeEksSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9vcHRpb25zLmpzXCIpO1xuIiwiaW1wb3J0IGVtaXR0ZXIgZnJvbSBcIi4vdXRpbHMvY2hyb21lLWVtaXR0ZXJcIjtcbmltcG9ydCB7IGdldENvbnRlbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zb2xlLmxvZyhcImhlcmUgaXMgb3B0aW9uc1wiKTtcblxuZG9jdW1lbnQuYm9keS5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHRvQmFja2dyb3VuZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9CYWNrZ3JvdW5kXCIpO1xuICBjb25zdCB0b0NvbnRlbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvQ29udGVudFwiKTtcbiAgY29uc3QgdG9JbnNlcnRlZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9JbmplY3RlZFwiKTtcblxuICBjb25zdCBtZXNzYWdlID0gXCJoZWxsbyBpIGFtIG9wdGlvbnNcIjtcbiAgdG9CYWNrZ3JvdW5kQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZW1pdHRlci5lbWl0KFwib3B0aW9ucy10by1iYWNrZ3JvdW5kXCIsIG1lc3NhZ2UpO1xuICB9O1xuICB0b0NvbnRlbnRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBlbWl0dGVyLmVtaXQoXCJvcHRpb25zLXRvLWNvbnRlbnRcIiwgbWVzc2FnZSk7XG4gIH07XG4gIHRvSW5zZXJ0ZWRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBlbWl0dGVyLmVtaXQoXCJvcHRpb25zLXRvLWluamVjdGVkXCIsIG1lc3NhZ2UpO1xuICB9O1xufTtcblxuZW1pdHRlci5vbihcImJhY2tncm91bmQtdG8tb3B0aW9uc1wiLCAobXNnKSA9PiB7XG4gIGNvbnN0IGZyb21Qb3B1cFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb21Qb3B1cFwiKTtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgY29uc29sZS5sb2coJ1tvcHRpb25zXSBmcm9tIHBvcHVwJywgY29udGVudCk7XG4gIGZyb21Qb3B1cFRleHQuaW5uZXJUZXh0ID0gY29udGVudDtcbn0pO1xuZW1pdHRlci5vbihcImJhY2tncm91bmQtdG8tb3B0aW9uc1wiLCAobXNnKSA9PiB7XG4gIGNvbnN0IGZyb21CYWNrZ3JvdW5kVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbUJhY2tncm91bmRcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4gIGNvbnNvbGUubG9nKCdbb3B0aW9uc10gZnJvbSBiYWNrZ3JvdW5kJywgY29udGVudCk7XG4gIGZyb21CYWNrZ3JvdW5kVGV4dC5pbm5lclRleHQgPSBjb250ZW50O1xufSk7XG5lbWl0dGVyLm9uKFwiY29udGVudC10by1vcHRpb25zXCIsIChtc2cpID0+IHtcbiAgY29uc3QgZnJvbUNvbnRlbnRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9tQ29udGVudFwiKTtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgY29uc29sZS5sb2coJ1tvcHRpb25zXSBmcm9tIGNvbnRlbnQnLCBjb250ZW50KTtcbiAgZnJvbUNvbnRlbnRUZXh0LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG59KTtcbmVtaXR0ZXIub24oXCJpbmplY3RlZC10by1vcHRpb25zXCIsIChtc2cpID0+IHtcbiAgY29uc3QgZnJvbUluamVjdGVkVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbUluamVjdGVkXCIpO1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICBjb25zb2xlLmxvZygnW29wdGlvbnNdIGZyb20gaW5qZWN0ZWQnLCBjb250ZW50KTtcbiAgZnJvbUluamVjdGVkVGV4dC5pbm5lclRleHQgPSBjb250ZW50O1xufSk7XG4iLCJjb25zdCBTQ1JJUFRTID0ge1xuICBOT05FOiAwLFxuICBDT05URU5UOiAxLFxuICBJTkpFQ1RFRDogMixcbiAgQkFDS0dST1VORDogMyxcbiAgUE9QVVA6IDQsXG4gIE9QVElPTlM6IDUsXG59O1xuY29uc3QgU0NSSVBUX05BTUVTID0ge1xuICAwOiBcIk5PTkVcIixcbiAgMTogXCJDT05URU5UXCIsXG4gIDI6IFwiSU5KRUNURURcIixcbiAgMzogXCJCQUNLR1JPVU5EXCIsXG4gIDQ6IFwiUE9QVVBcIixcbiAgNTogXCJPUFRJT05TXCIsXG59O1xuY29uc3QgeyBjaHJvbWUgfSA9IHdpbmRvdztcbmZ1bmN0aW9uIGNoZWNrU2NyaXB0KCkge1xuICBpZiAoY2hyb21lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gU0NSSVBUUy5OT05FO1xuICB9XG4gIGlmIChjaHJvbWUuc3RvcmFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFNDUklQVFMuSU5KRUNURUQ7XG4gIH1cbiAgaWYgKGNocm9tZS50YWJzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gU0NSSVBUUy5DT05URU5UO1xuICB9XG4gIGNvbnN0IGJnV2luZG93ID0gY2hyb21lLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO1xuICBpZiAod2luZG93ID09PSBiZ1dpbmRvdykge1xuICAgIHJldHVybiBTQ1JJUFRTLkJBQ0tHUk9VTkQ7XG4gIH1cbiAgY29uc3Qgdmlld3MgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFZpZXdzKHsgdHlwZTogXCJwb3B1cFwiIH0pO1xuICBpZiAodmlld3MubGVuZ3RoICE9PSAwKSB7XG4gICAgcmV0dXJuIFNDUklQVFMuUE9QVVA7XG4gIH1cbiAgcmV0dXJuIFNDUklQVFMuT1BUSU9OUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNBdENvbnRlbnRTY3JpcHQoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLkNPTlRFTlQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLklOSkVDVEVEO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNBdEJhY2tncm91bmRTY3JpcHQoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLkJBQ0tHUk9VTkQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0F0UG9wdXAoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLlBPUFVQO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNBdE9wdGlvbnMoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLk9QVElPTlM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0TmFtZSgpIHtcbiAgcmV0dXJuIFNDUklQVF9OQU1FU1tjaGVja1NjcmlwdCgpXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRDdXJyZW50U2NyaXB0TmFtZSxcbiAgY2hlY2tJc0F0QmFja2dyb3VuZFNjcmlwdCxcbiAgY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQsXG4gIGNoZWNrSXNBdENvbnRlbnRTY3JpcHQsXG59O1xuIiwiaW1wb3J0IGNoZWNrZXIgZnJvbSBcIi4vY2hlY2tlclwiO1xuaW1wb3J0IGxvZyBmcm9tIFwiLi9sb2dcIjtcblxuY29uc3QgRU1JVFRFUl9DT05GSUcgPSB7XG4gIHJlbW92ZUxpc3RlbmVyV2hlblRhYkhpZGRlbjogdHJ1ZSxcbn07XG5cbmNvbnN0IENVU1RPTV9FVkVOVF9OQU1FID0gXCJAQF9fRU1JVFRFUl9BX19cIjtcbmNvbnN0IFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUgPSBcIkBAX19FTUlUVEVSX0JfX1wiO1xuY29uc3QgU1lOQ19FVkVOVF9UT19DT05URU5UID0gXCJAQF9fU1lOQ19OQU1FX19cIjtcbmNvbnN0IFRJTUVfS0VZID0gXCJfX3RpbWVfX1wiO1xuY29uc3QgREFUQV9LRVkgPSBcIl9fZGF0YV9fXCI7XG5jb25zdCBBQ1RJVkVfVEFCX0tFWSA9IFwiQEBfX0VNSVRURVJfQUNUSVZFX0tFWV9fXCI7XG5jb25zdCBRVUVSWV9DVVJSRU5UX1RBQiA9IFwiQEBfX0VNSVRURVJfUVVFUllfQ1VSUkVOVF9UQUJfX1wiO1xuY29uc3QgQ1VSUkVOVF9UQUIgPSBcIkBAX19FTUlUVEVSX0NVUlJFTlRfVEFCX19cIjtcbmNvbnN0IEZPUk1fSU5KRUNURURfU1VGRklYID0gXCJAQF9fRU1JVFRFUl9GUk9NX0lOSkVDVEVEX19cIjtcbi8vIOW9k+WJjeaJgOWcqOiEmuacrOeahOWUr+S4gCBpZFxuY29uc3QgVU5JUVVFX0lEID0gYEBAX19FTUlUVEVSXyR7bmV3IERhdGUoKS52YWx1ZU9mKCkudG9TdHJpbmcoKX1fX2A7XG5jb25zdCBIQU5ETEVSX01BUCA9IHt9O1xuY29uc3QgT1BUSU9OU19NQVAgPSB7fTtcbi8vIOS/neWtmCBpbmplY3RlZCDlkIzmraXliLAgY29udGVudCDkuK3nmoTkuovku7ZcbmNvbnN0IFNZTkNFRF9FVkVOVCA9IHt9O1xuXG5jb25zdCB7XG4gIGNoZWNrSXNBdEluamVjdGVkU2NyaXB0LFxuICBjaGVja0lzQXRDb250ZW50U2NyaXB0LFxuICBjaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0LFxufSA9IGNoZWNrZXI7XG5jb25zdCBpc0F0SW5qZWN0ZWRTY3JpcHQgPSBjaGVja0lzQXRJbmplY3RlZFNjcmlwdCgpO1xuY29uc3QgaXNBdENvbnRlbnRTY3JpcHQgPSBjaGVja0lzQXRDb250ZW50U2NyaXB0KCk7XG5jb25zdCBpc0F0QmFja2dyb3VuZFNjcmlwdCA9IGNoZWNrSXNBdEJhY2tncm91bmRTY3JpcHQoKTtcblxuY29uc3QgeyBjaHJvbWUgfSA9IHdpbmRvdztcblxubGV0IEhBU19JTklUID0gZmFsc2U7XG5sZXQgY3VycmVudFRhYiA9IG51bGw7XG5sZXQgU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIgPSBudWxsO1xuXG4vKipcbiAqIOW6leWxgueUqOadpeWQkeWkluW5v+aSreS6i+S7tueahOaWueazlVxuICogaW50ZXJmYWNlIEFjdGlvbiB7XG4gKiAgIHR5cGU6IHN0cmluZztcbiAqICAgcGF5bG9hZDogQXJyYXk8YW55PjtcbiAqIH1cbiAqIEBwYXJhbSB7QWN0aW9ufSBhY3Rpb25cbiAqL1xuZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gIC8vIGNvbnN0IHsgY2IgfSA9IGFjdGlvbjtcbiAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCkge1xuICAgIGxvZyhcIltlbWl0dGVyXSBkaXNwYXRjaCBldmVudFwiLCBhY3Rpb24pO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUsIHtcbiAgICAgICAgZGV0YWlsOiBhY3Rpb24sXG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiBhY3Rpb24udHlwZS5pbmNsdWRlcyhGT1JNX0lOSkVDVEVEX1NVRkZJWCkpIHtcbiAgICBsb2coXCJbZW1pdHRlcl0gZGlzcGF0Y2ggZXZlbnRcIiwgYWN0aW9uLCBTWU5DRURfRVZFTlQpO1xuICAgIC8vIOWPr+iDveaYr+WQkSBpbmplY3RlZCDlub/mkq3vvIzmiYDku6XpnIDopoEgZGlzcGF0Y2hFdmVudFxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KENVU1RPTV9FVkVOVF9OQU1FLCB7XG4gICAgICAgIGRldGFpbDogYWN0aW9uLFxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyDkvb/nlKggc3RvcmFnZS5sb2NhbC5zZXQg5p2l6Kem5Y+R5pS55Y+Y77yM5LuO6ICM6YCa55+l5Yiw5YWo6YOo5pyJIG9uQ2hhbmdlZC5hZGRMaXN0ZW5lciDnmoTlnLDmlrlcbiAgY29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgIFtUSU1FX0tFWV06IGN1cnJlbnQsXG4gICAgW0RBVEFfS0VZXToge1xuICAgICAgdmFsdWU6IGN1cnJlbnQsXG4gICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgIHBheWxvYWQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgIH0sXG4gIH0pO1xufVxubGV0IElOSkVDVEVEX0VWRU5UX0hBTkRMRVIgPSBudWxsO1xubGV0IENPTlRFTlRfRVZFTlRfSEFORExFUiA9IG51bGw7XG4vKipcbiAqIOW6leWxgueUqOadpeebkeWQrOWFqOWxgOeahOaJgOacieS6i+S7tu+8jOWPr+S7peeQhuino+S4uuS4gOS4quOAjOW5v+aSreS4reW/g+OAjVxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2JcbiAqL1xuZnVuY3Rpb24gYWRkU3RvcmVMaXN0ZW5lcihjYikge1xuICBpZiAoaXNBdEluamVjdGVkU2NyaXB0KSB7XG4gICAgLy8gbG9nKCdbaW5qZWN0ZWRdIGxpc3RlbmVyIGN1c3RvbSBldmVudCcpO1xuICAgIElOSkVDVEVEX0VWRU5UX0hBTkRMRVIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSByZWNlaXZlIGV2ZW50XCIsIGV2ZW50LmRldGFpbCk7XG4gICAgICBjYihldmVudC5kZXRhaWwpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoQ1VTVE9NX0VWRU5UX05BTUUsIElOSkVDVEVEX0VWRU5UX0hBTkRMRVIpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaXNBdENvbnRlbnRTY3JpcHQpIHtcbiAgICBDT05URU5UX0VWRU5UX0hBTkRMRVIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSByZWNlaXZlIGV2ZW50XCIsIGV2ZW50LmRldGFpbCk7XG4gICAgICBjYihldmVudC5kZXRhaWwpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSwgQ09OVEVOVF9FVkVOVF9IQU5ETEVSKTtcbiAgfVxuICBTVE9SQUdFX0NIQU5HRURfSEFORExFUiA9IChjaGFuZ2VzKSA9PiB7XG4gICAgY29uc3QgX19kYXRhX18gPSBjaGFuZ2VzW0RBVEFfS0VZXTtcbiAgICAvLyBjbGVhciDml7botbDov5nph4xcbiAgICBpZiAoX19kYXRhX18gPT09IHVuZGVmaW5lZCB8fCBfX2RhdGFfXy5uZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbVElNRV9LRVksIERBVEFfS0VZXSk7XG4gICAgY29uc3QgYWN0aW9uID0gX19kYXRhX18ubmV3VmFsdWU7XG4gICAgY2IoYWN0aW9uKTtcbiAgfTtcbiAgbG9nKFwiW2VtaXR0ZXJdIGFkZCBzdG9yYWdlIGxpc3RlbmVyXCIpO1xuICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIpO1xufVxuLyoqXG4gKiDnp7vpmaTmiYDmnInnm5HlkKzlmahcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlU3RvcmVMaXN0ZW5lcigpIHtcbiAgbG9nKFwiW2VtaXR0ZXJdIHJlbW92ZSBhbGwgbGlzdGVuZXJzXCIpO1xuICBpZiAoSU5KRUNURURfRVZFTlRfSEFORExFUikge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKENVU1RPTV9FVkVOVF9OQU1FLCBJTkpFQ1RFRF9FVkVOVF9IQU5ETEVSKTtcbiAgfVxuICBpZiAoQ09OVEVOVF9FVkVOVF9IQU5ETEVSKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBTUEVDSUFMX0NVU1RPTV9FVkVOVF9OQU1FLFxuICAgICAgQ09OVEVOVF9FVkVOVF9IQU5ETEVSXG4gICAgKTtcbiAgfVxuICBpZiAoY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmhhc0xpc3RlbmVycygpKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSKTtcbiAgfVxufVxuXG5jb25zdCBlbWl0dGVyID0ge1xuICAvKipcbiAgICog55So5p2l5Y+R5Ye65LqL5Lu255qE5pa55rOVXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtICB7Li4uYW55fSBwYXJhbXNcbiAgICovXG4gIGVtaXQoZXZlbnROYW1lLCAuLi5wYXJhbXMpIHtcbiAgICBsZXQgbmFtZSA9IGV2ZW50TmFtZTtcblxuICAgIGNvbnN0IGlzRXZlbnRGcm9tSW5qZWN0ZWQgPVxuICAgICAgaXNBdEluamVjdGVkU2NyaXB0ICYmIGV2ZW50TmFtZSAhPT0gU1lOQ19FVkVOVF9UT19DT05URU5UO1xuICAgIGlmIChpc0V2ZW50RnJvbUluamVjdGVkKSB7XG4gICAgICBuYW1lID0gZXZlbnROYW1lICsgRk9STV9JTkpFQ1RFRF9TVUZGSVg7XG4gICAgfVxuICAgIGxvZyhcbiAgICAgIFwiW2VtaXR0ZXJdIGVtaXQgZXZlbnRcIixcbiAgICAgIG5hbWUsXG4gICAgICBcIm9yaWdpbmFsIGV2ZW50IG5hbWUgaXNcIixcbiAgICAgIGV2ZW50TmFtZSxcbiAgICAgIFwiYW5kIHBhcmFtcyBpc1wiLFxuICAgICAgcGFyYW1zXG4gICAgKTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBuYW1lLFxuICAgICAgcGF5bG9hZDogcGFyYW1zLFxuICAgIH0pO1xuICB9LFxuICAvKipcbiAgICog55uR5ZCs5LqL5Lu2XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlclxuICAgKiBpbnRlcmZhY2UgT3B0aW9ucyB7XG4gICAqICAgLy8g5Y+q5pyJ5b2T6K+lIHRhYiDmmK/lvZPliY3lsZXnpLrnmoTvvIzmiY3osIPnlKhcbiAgICogICBhY3RpdmU6IGJvb2xlYW47XG4gICAqIH1cbiAgICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zXG4gICAqL1xuICBvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICBsZXQgbmFtZSA9IGV2ZW50TmFtZTtcbiAgICBpZiAoaXNBdEluamVjdGVkU2NyaXB0KSB7XG4gICAgICAvLyDlpoLmnpzmmK/lnKggaW5zZXJ0ZWQg5Lit55uR5ZCs5LqL5Lu277yM6YCa55+lIGNvbnRlbnQg55uR5ZCs6K+l5LqL5Lu277yMaW5qZWN0ZWQg5YaF55uR5ZCs5LiA5Liq5L+u5pS56L+H55qE5LqL5Lu2XG4gICAgICBuYW1lID0gZXZlbnROYW1lICsgRk9STV9JTkpFQ1RFRF9TVUZGSVg7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gc3luYyBldmVudCBsaXN0ZW5lciB0byBjb250ZW50XCIsIG5hbWUpO1xuICAgICAgZW1pdHRlci5lbWl0KFNZTkNfRVZFTlRfVE9fQ09OVEVOVCwgZXZlbnROYW1lLCBuYW1lKTtcbiAgICB9XG4gICAgSEFORExFUl9NQVBbbmFtZV0gPSBoYW5kbGVyO1xuICB9LFxuICByZW1vdmUoZXZlbnROYW1lKSB7XG4gICAgZGVsZXRlIEhBTkRMRVJfTUFQW2V2ZW50TmFtZV07XG4gIH0sXG4gIGNvbmZpZyhuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gRU1JVFRFUl9DT05GSUc7XG4gICAgfVxuICAgIEVNSVRURVJfQ09ORklHW25hbWVdID0gdmFsdWU7XG4gICAgcmV0dXJuIEVNSVRURVJfQ09ORklHO1xuICB9LFxufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaWYgKEhBU19JTklUID09PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxvZyhcIltlbWl0dGVyXSBpbml0IGV2ZW50IGxpc3RlbmVyc1wiKTtcbiAgYWRkU3RvcmVMaXN0ZW5lcigoYWN0aW9uKSA9PiB7XG4gICAgbG9nKFxuICAgICAgXCJbZW1pdHRlcl0gYWRkU3RvcmVMaXN0ZW5lciByZWNlaXZlIGV2ZW50IGFuZCBhY3Rpb24gaXNcIixcbiAgICAgIGFjdGlvbi50eXBlLFxuICAgICAgSEFORExFUl9NQVAsXG4gICAgICBTWU5DRURfRVZFTlRcbiAgICApO1xuICAgIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuXG4gICAgLy8g5aaC5p6c5pivIGluamVjdGVkIOivt+axgiBjb250ZW50IOWQjOatpeebkeWQrOS6i+S7tueahOivt+axglxuICAgIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiB0eXBlID09PSBTWU5DX0VWRU5UX1RPX0NPTlRFTlQpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSBzYXZlIHN5bmNlZCBldmVudFwiLCBhY3Rpb24udHlwZSk7XG4gICAgICBjb25zdCBbb3JpZ2luYWxFdmVudE5hbWUsIG1vZGlmaWVkRXZlbnROYW1lXSA9IHBheWxvYWQ7XG4gICAgICBTWU5DRURfRVZFTlRbb3JpZ2luYWxFdmVudE5hbWVdID0gbW9kaWZpZWRFdmVudE5hbWU7XG5cbiAgICAgIEhBTkRMRVJfTUFQW29yaWdpbmFsRXZlbnROYW1lXSA9ICguLi5wYXJhbXMpID0+IHtcbiAgICAgICAgLy8gbG9nKFwiW2VtaXR0ZXJdIGV2ZW50IGZyb20gaW5qZWN0ZWQgc28gZW1pdCB0byBpbmplY3RlZFwiKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IG1vZGlmaWVkRXZlbnROYW1lLFxuICAgICAgICAgIHBheWxvYWQ6IHBhcmFtcyxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiB0eXBlLmluY2x1ZGVzKEZPUk1fSU5KRUNURURfU1VGRklYKSkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIGNoZWNrIGlzIHN5bmNlZCBldmVudFwiLCBhY3Rpb24udHlwZSk7XG4gICAgICAvLyDlpoLmnpzmmK8gY29udGVudCDlubbkuJTmlLbliLDnmoTkuovku7bmmK/nlLEgaW5qZWN0ZWQg5Y+R5Ye655qE77yM5YWI55yL55yL5piv5ZCm5piv5Y+R57uZ6Ieq5bex55qEXG4gICAgICBjb25zdCBuYW1lID0gdHlwZS5yZXBsYWNlKEZPUk1fSU5KRUNURURfU1VGRklYLCBcIlwiKTtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBIQU5ETEVSX01BUFtuYW1lXTtcbiAgICAgIGlmIChoYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaGFuZGxlciguLi5wYXlsb2FkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8g5LiN5piv5Y+R57uZ6Ieq5bexIGNvbnRlbnTvvIzpgqPlsLHlho3lkJHlpJblub/mkq3kuIDmrKFcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogbmFtZSxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOWmguaenOaYryBjb250ZW50IOWPkemAgeWIsCBpbmplY3RlZCDnmoTkuovku7ZcbiAgICBpZiAoaXNBdEluamVjdGVkU2NyaXB0ICYmIEhBTkRMRVJfTUFQW3R5cGUgKyBGT1JNX0lOSkVDVEVEX1NVRkZJWF0pIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSBjaGVjayBpcyBzeW5jZWQgZXZlbnRcIiwgYWN0aW9uLnR5cGUpO1xuICAgICAgSEFORExFUl9NQVBbdHlwZSArIEZPUk1fSU5KRUNURURfU1VGRklYXSguLi5wYXlsb2FkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVyID0gSEFORExFUl9NQVBbdHlwZV07XG5cbiAgICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl1cIiwgXCJhdFwiLCB0eXBlLCBcImxpc3RlbmVyIGlzIG5vdCBleGlzdFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVyKC4uLnBheWxvYWQpO1xuICB9KTtcblxuICAvLyDov5nkuKTkuKrnlKjmnaXlrp7njrDlj6rlkJHljZXkuKogdGFiIOWPkemAgea2iOaBr1xuICBpZiAoaXNBdENvbnRlbnRTY3JpcHQgJiYgY3VycmVudFRhYiA9PT0gbnVsbCkge1xuICAgIGVtaXR0ZXIuZW1pdChRVUVSWV9DVVJSRU5UX1RBQiwgVU5JUVVFX0lEKTtcbiAgICBlbWl0dGVyLm9uKFVOSVFVRV9JRCwgKHRhYikgPT4ge1xuICAgICAgY3VycmVudFRhYiA9IHRhYjtcbiAgICAgIHdpbmRvd1tDVVJSRU5UX1RBQl0gPSB0YWI7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGlzQXRCYWNrZ3JvdW5kU2NyaXB0KSB7XG4gICAgd2luZG93LlJFR0lTVEVSRURfVEFCUyA9IFtdO1xuICAgIGVtaXR0ZXIub24oUVVFUllfQ1VSUkVOVF9UQUIsIChmcm9tKSA9PiB7XG4gICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuICAgICAgICB3aW5kb3dbQUNUSVZFX1RBQl9LRVldID0gdGFic1swXTtcbiAgICAgICAgZW1pdHRlci5lbWl0KGZyb20sIHRhYnNbMF0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgSEFTX0lOSVQgPSB0cnVlO1xufVxuXG5pbml0KCk7XG5cbmZ1bmN0aW9uIHRhYkNoYW5nZUhhbmRsZXIoKSB7XG4gIGxvZygnW2VtaXR0ZXJdJywgRU1JVFRFUl9DT05GSUcucmVtb3ZlTGlzdGVuZXJXaGVuVGFiSGlkZGVuLCBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpO1xuICBpZiAoRU1JVFRFUl9DT05GSUcucmVtb3ZlTGlzdGVuZXJXaGVuVGFiSGlkZGVuID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsb2coXCJbZW1pdHRlcl0gZG9jdW1lbnQgdmlzaWJsZSBjaGFuZ2VkXCIsIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSk7XG4gIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09IFwidmlzaWJsZVwiKSB7XG4gICAgaWYgKFxuICAgICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmhhc0xpc3RlbmVycygpICYmXG4gICAgICBTVE9SQUdFX0NIQU5HRURfSEFORExFUiAhPT0gbnVsbFxuICAgICkge1xuICAgICAgLy8g5ZyoIHRhYiDliIfmjaLml7bms6jplIDmjonnm5HlkKxcbiAgICAgIHJlbW92ZVN0b3JlTGlzdGVuZXIoKTtcbiAgICAgIEhBU19JTklUID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpbml0KCk7XG59XG5pZiAoaXNBdENvbnRlbnRTY3JpcHQpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgdGFiQ2hhbmdlSGFuZGxlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVtaXR0ZXI7XG4iLCJjb25zdCBjaGVja2VyID0gcmVxdWlyZShcIi4vY2hlY2tlclwiKTtcblxuY29uc3QgREVCVUdHRVIgPSBmYWxzZTtcbi8vIGNvbnN0IERFQlVHR0VSID0gdHJ1ZTtcblxuY29uc3QgeyBnZXRDdXJyZW50U2NyaXB0TmFtZSB9ID0gY2hlY2tlcjtcblxuY29uc3QgY3VycmVudFNjcmlwdE5hbWUgPSBnZXRDdXJyZW50U2NyaXB0TmFtZSgpIHx8IFwiVU5LTk9XTlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2coLi4ucGFyYW1zKSB7XG4gIGlmIChERUJVR0dFUiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgaW5mbyA9IFtjdXJyZW50U2NyaXB0TmFtZSwgLi4ucGFyYW1zXTtcbiAgY29uc29sZS5sb2coLi4uaW5mbyk7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRlbnQobXNnKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSAtICR7bXNnfWA7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEpzKHNyYykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgc2NyaXB0LnNyYyA9IHNyYztcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRml4ZWRDb250YWluZXIoaWQsIGNvbnRlbnQsIHN0eWxlcyA9ICcnKSB7XG4gIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAkY29udGFpbmVyLnN0eWxlID1cbiAgICBcInotaW5kZXg6IDk5OTsgcG9zaXRpb246IGZpeGVkOyByaWdodDogMjBweDsgdG9wOiAyMHB4OyBwYWRkaW5nOiA0cHggMTBweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcIiArIHN0eWxlcztcbiAgJGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIiR7aWR9XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1pbi13aWR0aDogMTgwcHg7IGhlaWdodDogMzBweDtcIj5cbiAgJHtjb250ZW50fVxuPC9kaXY+XG5gO1xuICByZXR1cm4gJGNvbnRhaW5lcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=options.js.map