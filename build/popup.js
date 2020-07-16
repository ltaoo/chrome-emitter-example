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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/chrome-emitter */ "./src/utils/chrome-emitter/index.js");


console.log("here is popup");

const toBackgroundBtn = document.getElementById('toBackground');
const toContentBtn = document.getElementById('toContent');
const toOptionsBtn = document.getElementById('toOptions');
const toInsertedBtn = document.getElementById('toInjected');

const screenshot = document.getElementById('screenshot');

const message = 'hello i am popup';
toBackgroundBtn.onclick = () => {
  console.log('[popup] send message to background');
  _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('popup-to-background', message);
};
toContentBtn.onclick = () => {
  console.log('[popup] send message to content');
  _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('popup-to-content', message);
};
toOptionsBtn.onclick = () => {
  console.log('[popup] send message to options');
  _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('popup-to-options', message);
};
toInsertedBtn.onclick = () => {
  console.log('[popup] send message to injected');
  _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('popup-to-injected', message);
};

screenshot.onclick = () => {
  _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('startScreenshot');
};


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

// const DEBUGGER = false;
const DEBUGGER = true;

const { getCurrentScriptName } = checker;

const currentScriptName = getCurrentScriptName() || "UNKNOWN";

function log(...params) {
  if (DEBUGGER === false) {
    return;
  }
  const info = [currentScriptName, ...params];
  console.log(...info);
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaHJvbWUtZW1pdHRlci9jaGVja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaHJvbWUtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2hyb21lLWVtaXR0ZXIvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUE2Qzs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQU87QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFPO0FBQ1Q7QUFDQTtB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxvREFBRztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxvREFBRztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQU0sb0RBQUc7QUFDVDtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0NBQW9DO0FBQzdEO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUUsb0RBQUc7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFHO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQzdTdkI7QUFBQTtBQUFBLGdCQUFnQixtQkFBTyxDQUFDLHdEQUFXOztBQUVuQztBQUNBOztBQUVBLE9BQU8sdUJBQXVCOztBQUU5Qjs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BvcHVwLmpzXCIpO1xuIiwiaW1wb3J0IGVtaXR0ZXIgZnJvbSAnLi91dGlscy9jaHJvbWUtZW1pdHRlcic7XG5cbmNvbnNvbGUubG9nKFwiaGVyZSBpcyBwb3B1cFwiKTtcblxuY29uc3QgdG9CYWNrZ3JvdW5kQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvQmFja2dyb3VuZCcpO1xuY29uc3QgdG9Db250ZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvQ29udGVudCcpO1xuY29uc3QgdG9PcHRpb25zQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvT3B0aW9ucycpO1xuY29uc3QgdG9JbnNlcnRlZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0luamVjdGVkJyk7XG5cbmNvbnN0IHNjcmVlbnNob3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuc2hvdCcpO1xuXG5jb25zdCBtZXNzYWdlID0gJ2hlbGxvIGkgYW0gcG9wdXAnO1xudG9CYWNrZ3JvdW5kQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdbcG9wdXBdIHNlbmQgbWVzc2FnZSB0byBiYWNrZ3JvdW5kJyk7XG4gIGVtaXR0ZXIuZW1pdCgncG9wdXAtdG8tYmFja2dyb3VuZCcsIG1lc3NhZ2UpO1xufTtcbnRvQ29udGVudEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnW3BvcHVwXSBzZW5kIG1lc3NhZ2UgdG8gY29udGVudCcpO1xuICBlbWl0dGVyLmVtaXQoJ3BvcHVwLXRvLWNvbnRlbnQnLCBtZXNzYWdlKTtcbn07XG50b09wdGlvbnNCdG4ub25jbGljayA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1twb3B1cF0gc2VuZCBtZXNzYWdlIHRvIG9wdGlvbnMnKTtcbiAgZW1pdHRlci5lbWl0KCdwb3B1cC10by1vcHRpb25zJywgbWVzc2FnZSk7XG59O1xudG9JbnNlcnRlZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnW3BvcHVwXSBzZW5kIG1lc3NhZ2UgdG8gaW5qZWN0ZWQnKTtcbiAgZW1pdHRlci5lbWl0KCdwb3B1cC10by1pbmplY3RlZCcsIG1lc3NhZ2UpO1xufTtcblxuc2NyZWVuc2hvdC5vbmNsaWNrID0gKCkgPT4ge1xuICBlbWl0dGVyLmVtaXQoJ3N0YXJ0U2NyZWVuc2hvdCcpO1xufTtcbiIsImNvbnN0IFNDUklQVFMgPSB7XG4gIE5PTkU6IDAsXG4gIENPTlRFTlQ6IDEsXG4gIElOSkVDVEVEOiAyLFxuICBCQUNLR1JPVU5EOiAzLFxuICBQT1BVUDogNCxcbiAgT1BUSU9OUzogNSxcbn07XG5jb25zdCBTQ1JJUFRfTkFNRVMgPSB7XG4gIDA6IFwiTk9ORVwiLFxuICAxOiBcIkNPTlRFTlRcIixcbiAgMjogXCJJTkpFQ1RFRFwiLFxuICAzOiBcIkJBQ0tHUk9VTkRcIixcbiAgNDogXCJQT1BVUFwiLFxuICA1OiBcIk9QVElPTlNcIixcbn07XG5jb25zdCB7IGNocm9tZSB9ID0gd2luZG93O1xuZnVuY3Rpb24gY2hlY2tTY3JpcHQoKSB7XG4gIGlmIChjaHJvbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBTQ1JJUFRTLk5PTkU7XG4gIH1cbiAgaWYgKGNocm9tZS5zdG9yYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gU0NSSVBUUy5JTkpFQ1RFRDtcbiAgfVxuICBpZiAoY2hyb21lLnRhYnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBTQ1JJUFRTLkNPTlRFTlQ7XG4gIH1cbiAgY29uc3QgYmdXaW5kb3cgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKCk7XG4gIGlmICh3aW5kb3cgPT09IGJnV2luZG93KSB7XG4gICAgcmV0dXJuIFNDUklQVFMuQkFDS0dST1VORDtcbiAgfVxuICBjb25zdCB2aWV3cyA9IGNocm9tZS5leHRlbnNpb24uZ2V0Vmlld3MoeyB0eXBlOiBcInBvcHVwXCIgfSk7XG4gIGlmICh2aWV3cy5sZW5ndGggIT09IDApIHtcbiAgICByZXR1cm4gU0NSSVBUUy5QT1BVUDtcbiAgfVxuICByZXR1cm4gU0NSSVBUUy5PUFRJT05TO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0F0Q29udGVudFNjcmlwdCgpIHtcbiAgcmV0dXJuIGNoZWNrU2NyaXB0KCkgPT09IFNDUklQVFMuQ09OVEVOVDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzQXRJbmplY3RlZFNjcmlwdCgpIHtcbiAgcmV0dXJuIGNoZWNrU2NyaXB0KCkgPT09IFNDUklQVFMuSU5KRUNURUQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0F0QmFja2dyb3VuZFNjcmlwdCgpIHtcbiAgcmV0dXJuIGNoZWNrU2NyaXB0KCkgPT09IFNDUklQVFMuQkFDS0dST1VORDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzQXRQb3B1cCgpIHtcbiAgcmV0dXJuIGNoZWNrU2NyaXB0KCkgPT09IFNDUklQVFMuUE9QVVA7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0F0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGNoZWNrU2NyaXB0KCkgPT09IFNDUklQVFMuT1BUSU9OUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHROYW1lKCkge1xuICByZXR1cm4gU0NSSVBUX05BTUVTW2NoZWNrU2NyaXB0KCldO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEN1cnJlbnRTY3JpcHROYW1lLFxuICBjaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0LFxuICBjaGVja0lzQXRJbmplY3RlZFNjcmlwdCxcbiAgY2hlY2tJc0F0Q29udGVudFNjcmlwdCxcbn07XG4iLCJpbXBvcnQgY2hlY2tlciBmcm9tIFwiLi9jaGVja2VyXCI7XG5pbXBvcnQgbG9nIGZyb20gXCIuL2xvZ1wiO1xuXG5jb25zdCBFTUlUVEVSX0NPTkZJRyA9IHtcbiAgcmVtb3ZlTGlzdGVuZXJXaGVuVGFiSGlkZGVuOiB0cnVlLFxufTtcblxuY29uc3QgQ1VTVE9NX0VWRU5UX05BTUUgPSBcIkBAX19FTUlUVEVSX0FfX1wiO1xuY29uc3QgU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSA9IFwiQEBfX0VNSVRURVJfQl9fXCI7XG5jb25zdCBTWU5DX0VWRU5UX1RPX0NPTlRFTlQgPSBcIkBAX19TWU5DX05BTUVfX1wiO1xuY29uc3QgVElNRV9LRVkgPSBcIl9fdGltZV9fXCI7XG5jb25zdCBEQVRBX0tFWSA9IFwiX19kYXRhX19cIjtcbmNvbnN0IEFDVElWRV9UQUJfS0VZID0gXCJAQF9fRU1JVFRFUl9BQ1RJVkVfS0VZX19cIjtcbmNvbnN0IFFVRVJZX0NVUlJFTlRfVEFCID0gXCJAQF9fRU1JVFRFUl9RVUVSWV9DVVJSRU5UX1RBQl9fXCI7XG5jb25zdCBDVVJSRU5UX1RBQiA9IFwiQEBfX0VNSVRURVJfQ1VSUkVOVF9UQUJfX1wiO1xuY29uc3QgRk9STV9JTkpFQ1RFRF9TVUZGSVggPSBcIkBAX19FTUlUVEVSX0ZST01fSU5KRUNURURfX1wiO1xuLy8g5b2T5YmN5omA5Zyo6ISa5pys55qE5ZSv5LiAIGlkXG5jb25zdCBVTklRVUVfSUQgPSBgQEBfX0VNSVRURVJfJHtuZXcgRGF0ZSgpLnZhbHVlT2YoKS50b1N0cmluZygpfV9fYDtcbmNvbnN0IEhBTkRMRVJfTUFQID0ge307XG5jb25zdCBPUFRJT05TX01BUCA9IHt9O1xuLy8g5L+d5a2YIGluamVjdGVkIOWQjOatpeWIsCBjb250ZW50IOS4reeahOS6i+S7tlxuY29uc3QgU1lOQ0VEX0VWRU5UID0ge307XG5cbmNvbnN0IHtcbiAgY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQsXG4gIGNoZWNrSXNBdENvbnRlbnRTY3JpcHQsXG4gIGNoZWNrSXNBdEJhY2tncm91bmRTY3JpcHQsXG59ID0gY2hlY2tlcjtcbmNvbnN0IGlzQXRJbmplY3RlZFNjcmlwdCA9IGNoZWNrSXNBdEluamVjdGVkU2NyaXB0KCk7XG5jb25zdCBpc0F0Q29udGVudFNjcmlwdCA9IGNoZWNrSXNBdENvbnRlbnRTY3JpcHQoKTtcbmNvbnN0IGlzQXRCYWNrZ3JvdW5kU2NyaXB0ID0gY2hlY2tJc0F0QmFja2dyb3VuZFNjcmlwdCgpO1xuXG5jb25zdCB7IGNocm9tZSB9ID0gd2luZG93O1xuXG5sZXQgSEFTX0lOSVQgPSBmYWxzZTtcbmxldCBjdXJyZW50VGFiID0gbnVsbDtcbmxldCBTVE9SQUdFX0NIQU5HRURfSEFORExFUiA9IG51bGw7XG5cbi8qKlxuICog5bqV5bGC55So5p2l5ZCR5aSW5bm/5pKt5LqL5Lu255qE5pa55rOVXG4gKiBpbnRlcmZhY2UgQWN0aW9uIHtcbiAqICAgdHlwZTogc3RyaW5nO1xuICogICBwYXlsb2FkOiBBcnJheTxhbnk+O1xuICogfVxuICogQHBhcmFtIHtBY3Rpb259IGFjdGlvblxuICovXG5mdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgLy8gY29uc3QgeyBjYiB9ID0gYWN0aW9uO1xuICBpZiAoaXNBdEluamVjdGVkU2NyaXB0KSB7XG4gICAgbG9nKFwiW2VtaXR0ZXJdIGRpc3BhdGNoIGV2ZW50XCIsIGFjdGlvbik7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSwge1xuICAgICAgICBkZXRhaWw6IGFjdGlvbixcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzQXRDb250ZW50U2NyaXB0ICYmIGFjdGlvbi50eXBlLmluY2x1ZGVzKEZPUk1fSU5KRUNURURfU1VGRklYKSkge1xuICAgIGxvZyhcIltlbWl0dGVyXSBkaXNwYXRjaCBldmVudFwiLCBhY3Rpb24sIFNZTkNFRF9FVkVOVCk7XG4gICAgLy8g5Y+v6IO95piv5ZCRIGluamVjdGVkIOW5v+aSre+8jOaJgOS7pemcgOimgSBkaXNwYXRjaEV2ZW50XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoQ1VTVE9NX0VWRU5UX05BTUUsIHtcbiAgICAgICAgZGV0YWlsOiBhY3Rpb24sXG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIOS9v+eUqCBzdG9yYWdlLmxvY2FsLnNldCDmnaXop6blj5HmlLnlj5jvvIzku47ogIzpgJrnn6XliLDlhajpg6jmnIkgb25DaGFuZ2VkLmFkZExpc3RlbmVyIOeahOWcsOaWuVxuICBjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgW1RJTUVfS0VZXTogY3VycmVudCxcbiAgICBbREFUQV9LRVldOiB7XG4gICAgICB2YWx1ZTogY3VycmVudCxcbiAgICAgIHR5cGU6IGFjdGlvbi50eXBlLFxuICAgICAgcGF5bG9hZDogYWN0aW9uLnBheWxvYWQsXG4gICAgfSxcbiAgfSk7XG59XG5sZXQgSU5KRUNURURfRVZFTlRfSEFORExFUiA9IG51bGw7XG5sZXQgQ09OVEVOVF9FVkVOVF9IQU5ETEVSID0gbnVsbDtcbi8qKlxuICog5bqV5bGC55So5p2l55uR5ZCs5YWo5bGA55qE5omA5pyJ5LqL5Lu277yM5Y+v5Lul55CG6Kej5Li65LiA5Liq44CM5bm/5pKt5Lit5b+D44CNXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYlxuICovXG5mdW5jdGlvbiBhZGRTdG9yZUxpc3RlbmVyKGNiKSB7XG4gIGlmIChpc0F0SW5qZWN0ZWRTY3JpcHQpIHtcbiAgICAvLyBsb2coJ1tpbmplY3RlZF0gbGlzdGVuZXIgY3VzdG9tIGV2ZW50Jyk7XG4gICAgSU5KRUNURURfRVZFTlRfSEFORExFUiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIHJlY2VpdmUgZXZlbnRcIiwgZXZlbnQuZGV0YWlsKTtcbiAgICAgIGNiKGV2ZW50LmRldGFpbCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihDVVNUT01fRVZFTlRfTkFNRSwgSU5KRUNURURfRVZFTlRfSEFORExFUik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpc0F0Q29udGVudFNjcmlwdCkge1xuICAgIENPTlRFTlRfRVZFTlRfSEFORExFUiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIHJlY2VpdmUgZXZlbnRcIiwgZXZlbnQuZGV0YWlsKTtcbiAgICAgIGNiKGV2ZW50LmRldGFpbCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihTUEVDSUFMX0NVU1RPTV9FVkVOVF9OQU1FLCBDT05URU5UX0VWRU5UX0hBTkRMRVIpO1xuICB9XG4gIFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSID0gKGNoYW5nZXMpID0+IHtcbiAgICBjb25zdCBfX2RhdGFfXyA9IGNoYW5nZXNbREFUQV9LRVldO1xuICAgIC8vIGNsZWFyIOaXtui1sOi/memHjFxuICAgIGlmIChfX2RhdGFfXyA9PT0gdW5kZWZpbmVkIHx8IF9fZGF0YV9fLm5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFtUSU1FX0tFWSwgREFUQV9LRVldKTtcbiAgICBjb25zdCBhY3Rpb24gPSBfX2RhdGFfXy5uZXdWYWx1ZTtcbiAgICBjYihhY3Rpb24pO1xuICB9O1xuICBsb2coXCJbZW1pdHRlcl0gYWRkIHN0b3JhZ2UgbGlzdGVuZXJcIik7XG4gIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihTVE9SQUdFX0NIQU5HRURfSEFORExFUik7XG59XG4vKipcbiAqIOenu+mZpOaJgOacieebkeWQrOWZqFxuICovXG5mdW5jdGlvbiByZW1vdmVTdG9yZUxpc3RlbmVyKCkge1xuICBsb2coXCJbZW1pdHRlcl0gcmVtb3ZlIGFsbCBsaXN0ZW5lcnNcIik7XG4gIGlmIChJTkpFQ1RFRF9FVkVOVF9IQU5ETEVSKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoQ1VTVE9NX0VWRU5UX05BTUUsIElOSkVDVEVEX0VWRU5UX0hBTkRMRVIpO1xuICB9XG4gIGlmIChDT05URU5UX0VWRU5UX0hBTkRMRVIpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUsXG4gICAgICBDT05URU5UX0VWRU5UX0hBTkRMRVJcbiAgICApO1xuICB9XG4gIGlmIChjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuaGFzTGlzdGVuZXJzKCkpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIoU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIpO1xuICB9XG59XG5cbmNvbnN0IGVtaXR0ZXIgPSB7XG4gIC8qKlxuICAgKiDnlKjmnaXlj5Hlh7rkuovku7bnmoTmlrnms5VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0gIHsuLi5hbnl9IHBhcmFtc1xuICAgKi9cbiAgZW1pdChldmVudE5hbWUsIC4uLnBhcmFtcykge1xuICAgIGxldCBuYW1lID0gZXZlbnROYW1lO1xuXG4gICAgY29uc3QgaXNFdmVudEZyb21JbmplY3RlZCA9XG4gICAgICBpc0F0SW5qZWN0ZWRTY3JpcHQgJiYgZXZlbnROYW1lICE9PSBTWU5DX0VWRU5UX1RPX0NPTlRFTlQ7XG4gICAgaWYgKGlzRXZlbnRGcm9tSW5qZWN0ZWQpIHtcbiAgICAgIG5hbWUgPSBldmVudE5hbWUgKyBGT1JNX0lOSkVDVEVEX1NVRkZJWDtcbiAgICB9XG4gICAgbG9nKFxuICAgICAgXCJbZW1pdHRlcl0gZW1pdCBldmVudFwiLFxuICAgICAgbmFtZSxcbiAgICAgIFwib3JpZ2luYWwgZXZlbnQgbmFtZSBpc1wiLFxuICAgICAgZXZlbnROYW1lLFxuICAgICAgXCJhbmQgcGFyYW1zIGlzXCIsXG4gICAgICBwYXJhbXNcbiAgICApO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IG5hbWUsXG4gICAgICBwYXlsb2FkOiBwYXJhbXMsXG4gICAgfSk7XG4gIH0sXG4gIC8qKlxuICAgKiDnm5HlkKzkuovku7ZcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyXG4gICAqIGludGVyZmFjZSBPcHRpb25zIHtcbiAgICogICAvLyDlj6rmnInlvZPor6UgdGFiIOaYr+W9k+WJjeWxleekuueahO+8jOaJjeiwg+eUqFxuICAgKiAgIGFjdGl2ZTogYm9vbGVhbjtcbiAgICogfVxuICAgKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnNcbiAgICovXG4gIG9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIGxldCBuYW1lID0gZXZlbnROYW1lO1xuICAgIGlmIChpc0F0SW5qZWN0ZWRTY3JpcHQpIHtcbiAgICAgIC8vIOWmguaenOaYr+WcqCBpbnNlcnRlZCDkuK3nm5HlkKzkuovku7bvvIzpgJrnn6UgY29udGVudCDnm5HlkKzor6Xkuovku7bvvIxpbmplY3RlZCDlhoXnm5HlkKzkuIDkuKrkv67mlLnov4fnmoTkuovku7ZcbiAgICAgIG5hbWUgPSBldmVudE5hbWUgKyBGT1JNX0lOSkVDVEVEX1NVRkZJWDtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSBzeW5jIGV2ZW50IGxpc3RlbmVyIHRvIGNvbnRlbnRcIiwgbmFtZSk7XG4gICAgICBlbWl0dGVyLmVtaXQoU1lOQ19FVkVOVF9UT19DT05URU5ULCBldmVudE5hbWUsIG5hbWUpO1xuICAgIH1cbiAgICBIQU5ETEVSX01BUFtuYW1lXSA9IGhhbmRsZXI7XG4gIH0sXG4gIHJlbW92ZShldmVudE5hbWUpIHtcbiAgICBkZWxldGUgSEFORExFUl9NQVBbZXZlbnROYW1lXTtcbiAgfSxcbiAgY29uZmlnKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBFTUlUVEVSX0NPTkZJRztcbiAgICB9XG4gICAgRU1JVFRFUl9DT05GSUdbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gRU1JVFRFUl9DT05GSUc7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBpZiAoSEFTX0lOSVQgPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbG9nKFwiW2VtaXR0ZXJdIGluaXQgZXZlbnQgbGlzdGVuZXJzXCIpO1xuICBhZGRTdG9yZUxpc3RlbmVyKChhY3Rpb24pID0+IHtcbiAgICBsb2coXG4gICAgICBcIltlbWl0dGVyXSBhZGRTdG9yZUxpc3RlbmVyIHJlY2VpdmUgZXZlbnQgYW5kIGFjdGlvbiBpc1wiLFxuICAgICAgYWN0aW9uLnR5cGUsXG4gICAgICBIQU5ETEVSX01BUCxcbiAgICAgIFNZTkNFRF9FVkVOVFxuICAgICk7XG4gICAgY29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XG5cbiAgICAvLyDlpoLmnpzmmK8gaW5qZWN0ZWQg6K+35rGCIGNvbnRlbnQg5ZCM5q2l55uR5ZCs5LqL5Lu255qE6K+35rGCXG4gICAgaWYgKGlzQXRDb250ZW50U2NyaXB0ICYmIHR5cGUgPT09IFNZTkNfRVZFTlRfVE9fQ09OVEVOVCkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIHNhdmUgc3luY2VkIGV2ZW50XCIsIGFjdGlvbi50eXBlKTtcbiAgICAgIGNvbnN0IFtvcmlnaW5hbEV2ZW50TmFtZSwgbW9kaWZpZWRFdmVudE5hbWVdID0gcGF5bG9hZDtcbiAgICAgIFNZTkNFRF9FVkVOVFtvcmlnaW5hbEV2ZW50TmFtZV0gPSBtb2RpZmllZEV2ZW50TmFtZTtcblxuICAgICAgSEFORExFUl9NQVBbb3JpZ2luYWxFdmVudE5hbWVdID0gKC4uLnBhcmFtcykgPT4ge1xuICAgICAgICAvLyBsb2coXCJbZW1pdHRlcl0gZXZlbnQgZnJvbSBpbmplY3RlZCBzbyBlbWl0IHRvIGluamVjdGVkXCIpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogbW9kaWZpZWRFdmVudE5hbWUsXG4gICAgICAgICAgcGF5bG9hZDogcGFyYW1zLFxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQXRDb250ZW50U2NyaXB0ICYmIHR5cGUuaW5jbHVkZXMoRk9STV9JTkpFQ1RFRF9TVUZGSVgpKSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gY2hlY2sgaXMgc3luY2VkIGV2ZW50XCIsIGFjdGlvbi50eXBlKTtcbiAgICAgIC8vIOWmguaenOaYryBjb250ZW50IOW5tuS4lOaUtuWIsOeahOS6i+S7tuaYr+eUsSBpbmplY3RlZCDlj5Hlh7rnmoTvvIzlhYjnnIvnnIvmmK/lkKbmmK/lj5Hnu5noh6rlt7HnmoRcbiAgICAgIGNvbnN0IG5hbWUgPSB0eXBlLnJlcGxhY2UoRk9STV9JTkpFQ1RFRF9TVUZGSVgsIFwiXCIpO1xuICAgICAgY29uc3QgaGFuZGxlciA9IEhBTkRMRVJfTUFQW25hbWVdO1xuICAgICAgaWYgKGhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBoYW5kbGVyKC4uLnBheWxvYWQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyDkuI3mmK/lj5Hnu5noh6rlt7EgY29udGVudO+8jOmCo+WwseWGjeWQkeWkluW5v+aSreS4gOasoVxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBuYW1lLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c5pivIGNvbnRlbnQg5Y+R6YCB5YiwIGluamVjdGVkIOeahOS6i+S7tlxuICAgIGlmIChpc0F0SW5qZWN0ZWRTY3JpcHQgJiYgSEFORExFUl9NQVBbdHlwZSArIEZPUk1fSU5KRUNURURfU1VGRklYXSkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIGNoZWNrIGlzIHN5bmNlZCBldmVudFwiLCBhY3Rpb24udHlwZSk7XG4gICAgICBIQU5ETEVSX01BUFt0eXBlICsgRk9STV9JTkpFQ1RFRF9TVUZGSVhdKC4uLnBheWxvYWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZXIgPSBIQU5ETEVSX01BUFt0eXBlXTtcblxuICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXVwiLCBcImF0XCIsIHR5cGUsIFwibGlzdGVuZXIgaXMgbm90IGV4aXN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZXIoLi4ucGF5bG9hZCk7XG4gIH0pO1xuXG4gIC8vIOi/meS4pOS4queUqOadpeWunueOsOWPquWQkeWNleS4qiB0YWIg5Y+R6YCB5raI5oGvXG4gIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiBjdXJyZW50VGFiID09PSBudWxsKSB7XG4gICAgZW1pdHRlci5lbWl0KFFVRVJZX0NVUlJFTlRfVEFCLCBVTklRVUVfSUQpO1xuICAgIGVtaXR0ZXIub24oVU5JUVVFX0lELCAodGFiKSA9PiB7XG4gICAgICBjdXJyZW50VGFiID0gdGFiO1xuICAgICAgd2luZG93W0NVUlJFTlRfVEFCXSA9IHRhYjtcbiAgICB9KTtcbiAgfVxuICBpZiAoaXNBdEJhY2tncm91bmRTY3JpcHQpIHtcbiAgICB3aW5kb3cuUkVHSVNURVJFRF9UQUJTID0gW107XG4gICAgZW1pdHRlci5vbihRVUVSWV9DVVJSRU5UX1RBQiwgKGZyb20pID0+IHtcbiAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XG4gICAgICAgIHdpbmRvd1tBQ1RJVkVfVEFCX0tFWV0gPSB0YWJzWzBdO1xuICAgICAgICBlbWl0dGVyLmVtaXQoZnJvbSwgdGFic1swXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBIQVNfSU5JVCA9IHRydWU7XG59XG5cbmluaXQoKTtcblxuZnVuY3Rpb24gdGFiQ2hhbmdlSGFuZGxlcigpIHtcbiAgbG9nKCdbZW1pdHRlcl0nLCBFTUlUVEVSX0NPTkZJRy5yZW1vdmVMaXN0ZW5lcldoZW5UYWJIaWRkZW4sIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSk7XG4gIGlmIChFTUlUVEVSX0NPTkZJRy5yZW1vdmVMaXN0ZW5lcldoZW5UYWJIaWRkZW4gPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxvZyhcIltlbWl0dGVyXSBkb2N1bWVudCB2aXNpYmxlIGNoYW5nZWRcIiwgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlKTtcbiAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSAhPT0gXCJ2aXNpYmxlXCIpIHtcbiAgICBpZiAoXG4gICAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuaGFzTGlzdGVuZXJzKCkgJiZcbiAgICAgIFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSICE9PSBudWxsXG4gICAgKSB7XG4gICAgICAvLyDlnKggdGFiIOWIh+aNouaXtuazqOmUgOaOieebkeWQrFxuICAgICAgcmVtb3ZlU3RvcmVMaXN0ZW5lcigpO1xuICAgICAgSEFTX0lOSVQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGluaXQoKTtcbn1cbmlmIChpc0F0Q29udGVudFNjcmlwdCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCB0YWJDaGFuZ2VIYW5kbGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW1pdHRlcjtcbiIsImNvbnN0IGNoZWNrZXIgPSByZXF1aXJlKFwiLi9jaGVja2VyXCIpO1xuXG4vLyBjb25zdCBERUJVR0dFUiA9IGZhbHNlO1xuY29uc3QgREVCVUdHRVIgPSB0cnVlO1xuXG5jb25zdCB7IGdldEN1cnJlbnRTY3JpcHROYW1lIH0gPSBjaGVja2VyO1xuXG5jb25zdCBjdXJyZW50U2NyaXB0TmFtZSA9IGdldEN1cnJlbnRTY3JpcHROYW1lKCkgfHwgXCJVTktOT1dOXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZyguLi5wYXJhbXMpIHtcbiAgaWYgKERFQlVHR0VSID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpbmZvID0gW2N1cnJlbnRTY3JpcHROYW1lLCAuLi5wYXJhbXNdO1xuICBjb25zb2xlLmxvZyguLi5pbmZvKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=popup.js.map