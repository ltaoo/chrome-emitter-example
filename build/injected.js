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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/chrome-emitter */ "./src/utils/chrome-emitter/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");



console.log("here is inserted");

const CONTAINER_ID = "__emitter_injected_id__";

const $container = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createFixedContainer"])(
  CONTAINER_ID,
  "由 injected 插入页面",
  "top: 80px;"
);
$container.onclick = () => {
  _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('injected-to-content', 'hello i am injected');
  _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('injected-to-options', 'hello i am injected');
  _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('injected-to-background', 'hello i am injected');
}

document.body.onload = () => {
  document.body.appendChild($container);
};

function updateContainer(content) {
  const $container = document.querySelector(`#${CONTAINER_ID}`);
  $container.innerText = content;
}

_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on('popup-to-injected', (msg, str, num) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[injected] from popup', content, str, num);
});
_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on('options-to-injected', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[injected] from options', content);
});
_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on('background-to-injected', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[injected] from background', content);
});
_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on('content-to-injected', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[injected] from content', content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaHJvbWUtZW1pdHRlci9jaGVja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaHJvbWUtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2hyb21lLWVtaXR0ZXIvbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUE2QztBQUNjOztBQUUzRDs7QUFFQTs7QUFFQSxtQkFBbUIsbUVBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEVBQUUsNkRBQU87QUFDVCxFQUFFLDZE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O0FBQUE7QUFBTztBQUNQLHFCQUFxQixnQ0FBZ0MsS0FBSyxJQUFJO0FBQzlEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCLGFBQWEsV0FBVyxtQkFBbUIsd0JBQXdCO0FBQ3RHLHFDQUFxQyxHQUFHLHVCQUF1QixxQkFBcUIsb0JBQW9CLGtCQUFrQixjQUFjO0FBQ3hJLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmplY3RlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luamVjdGVkLmpzXCIpO1xuIiwiaW1wb3J0IGVtaXR0ZXIgZnJvbSBcIi4vdXRpbHMvY2hyb21lLWVtaXR0ZXJcIjtcbmltcG9ydCB7IGdldENvbnRlbnQsIGNyZWF0ZUZpeGVkQ29udGFpbmVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc29sZS5sb2coXCJoZXJlIGlzIGluc2VydGVkXCIpO1xuXG5jb25zdCBDT05UQUlORVJfSUQgPSBcIl9fZW1pdHRlcl9pbmplY3RlZF9pZF9fXCI7XG5cbmNvbnN0ICRjb250YWluZXIgPSBjcmVhdGVGaXhlZENvbnRhaW5lcihcbiAgQ09OVEFJTkVSX0lELFxuICBcIueUsSBpbmplY3RlZCDmj5LlhaXpobXpnaJcIixcbiAgXCJ0b3A6IDgwcHg7XCJcbik7XG4kY29udGFpbmVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGVtaXR0ZXIuZW1pdCgnaW5qZWN0ZWQtdG8tY29udGVudCcsICdoZWxsbyBpIGFtIGluamVjdGVkJyk7XG4gIGVtaXR0ZXIuZW1pdCgnaW5qZWN0ZWQtdG8tb3B0aW9ucycsICdoZWxsbyBpIGFtIGluamVjdGVkJyk7XG4gIGVtaXR0ZXIuZW1pdCgnaW5qZWN0ZWQtdG8tYmFja2dyb3VuZCcsICdoZWxsbyBpIGFtIGluamVjdGVkJyk7XG59XG5cbmRvY3VtZW50LmJvZHkub25sb2FkID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCRjb250YWluZXIpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyKGNvbnRlbnQpIHtcbiAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0NPTlRBSU5FUl9JRH1gKTtcbiAgJGNvbnRhaW5lci5pbm5lclRleHQgPSBjb250ZW50O1xufVxuXG5lbWl0dGVyLm9uKCdwb3B1cC10by1pbmplY3RlZCcsIChtc2csIHN0ciwgbnVtKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4gIHVwZGF0ZUNvbnRhaW5lcihjb250ZW50KTtcbiAgY29uc29sZS5sb2coJ1tpbmplY3RlZF0gZnJvbSBwb3B1cCcsIGNvbnRlbnQsIHN0ciwgbnVtKTtcbn0pO1xuZW1pdHRlci5vbignb3B0aW9ucy10by1pbmplY3RlZCcsIChtc2cpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgdXBkYXRlQ29udGFpbmVyKGNvbnRlbnQpO1xuICBjb25zb2xlLmxvZygnW2luamVjdGVkXSBmcm9tIG9wdGlvbnMnLCBjb250ZW50KTtcbn0pO1xuZW1pdHRlci5vbignYmFja2dyb3VuZC10by1pbmplY3RlZCcsIChtc2cpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgdXBkYXRlQ29udGFpbmVyKGNvbnRlbnQpO1xuICBjb25zb2xlLmxvZygnW2luamVjdGVkXSBmcm9tIGJhY2tncm91bmQnLCBjb250ZW50KTtcbn0pO1xuZW1pdHRlci5vbignY29udGVudC10by1pbmplY3RlZCcsIChtc2cpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgdXBkYXRlQ29udGFpbmVyKGNvbnRlbnQpO1xuICBjb25zb2xlLmxvZygnW2luamVjdGVkXSBmcm9tIGNvbnRlbnQnLCBjb250ZW50KTtcbn0pO1xuIiwiY29uc3QgU0NSSVBUUyA9IHtcbiAgTk9ORTogMCxcbiAgQ09OVEVOVDogMSxcbiAgSU5KRUNURUQ6IDIsXG4gIEJBQ0tHUk9VTkQ6IDMsXG4gIFBPUFVQOiA0LFxuICBPUFRJT05TOiA1LFxufTtcbmNvbnN0IFNDUklQVF9OQU1FUyA9IHtcbiAgMDogXCJOT05FXCIsXG4gIDE6IFwiQ09OVEVOVFwiLFxuICAyOiBcIklOSkVDVEVEXCIsXG4gIDM6IFwiQkFDS0dST1VORFwiLFxuICA0OiBcIlBPUFVQXCIsXG4gIDU6IFwiT1BUSU9OU1wiLFxufTtcbmNvbnN0IHsgY2hyb21lIH0gPSB3aW5kb3c7XG5mdW5jdGlvbiBjaGVja1NjcmlwdCgpIHtcbiAgaWYgKGNocm9tZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFNDUklQVFMuTk9ORTtcbiAgfVxuICBpZiAoY2hyb21lLnN0b3JhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBTQ1JJUFRTLklOSkVDVEVEO1xuICB9XG4gIGlmIChjaHJvbWUudGFicyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFNDUklQVFMuQ09OVEVOVDtcbiAgfVxuICBjb25zdCBiZ1dpbmRvdyA9IGNocm9tZS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKTtcbiAgaWYgKHdpbmRvdyA9PT0gYmdXaW5kb3cpIHtcbiAgICByZXR1cm4gU0NSSVBUUy5CQUNLR1JPVU5EO1xuICB9XG4gIGNvbnN0IHZpZXdzID0gY2hyb21lLmV4dGVuc2lvbi5nZXRWaWV3cyh7IHR5cGU6IFwicG9wdXBcIiB9KTtcbiAgaWYgKHZpZXdzLmxlbmd0aCAhPT0gMCkge1xuICAgIHJldHVybiBTQ1JJUFRTLlBPUFVQO1xuICB9XG4gIHJldHVybiBTQ1JJUFRTLk9QVElPTlM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzQXRDb250ZW50U2NyaXB0KCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5DT05URU5UO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNBdEluamVjdGVkU2NyaXB0KCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5JTkpFQ1RFRDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0KCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5CQUNLR1JPVU5EO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNBdFBvcHVwKCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5QT1BVUDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzQXRPcHRpb25zKCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5PUFRJT05TO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdE5hbWUoKSB7XG4gIHJldHVybiBTQ1JJUFRfTkFNRVNbY2hlY2tTY3JpcHQoKV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0Q3VycmVudFNjcmlwdE5hbWUsXG4gIGNoZWNrSXNBdEJhY2tncm91bmRTY3JpcHQsXG4gIGNoZWNrSXNBdEluamVjdGVkU2NyaXB0LFxuICBjaGVja0lzQXRDb250ZW50U2NyaXB0LFxufTtcbiIsImltcG9ydCBjaGVja2VyIGZyb20gXCIuL2NoZWNrZXJcIjtcbmltcG9ydCBsb2cgZnJvbSBcIi4vbG9nXCI7XG5cbmNvbnN0IEVNSVRURVJfQ09ORklHID0ge1xuICByZW1vdmVMaXN0ZW5lcldoZW5UYWJIaWRkZW46IHRydWUsXG59O1xuXG5jb25zdCBDVVNUT01fRVZFTlRfTkFNRSA9IFwiQEBfX0VNSVRURVJfQV9fXCI7XG5jb25zdCBTUEVDSUFMX0NVU1RPTV9FVkVOVF9OQU1FID0gXCJAQF9fRU1JVFRFUl9CX19cIjtcbmNvbnN0IFNZTkNfRVZFTlRfVE9fQ09OVEVOVCA9IFwiQEBfX1NZTkNfTkFNRV9fXCI7XG5jb25zdCBUSU1FX0tFWSA9IFwiX190aW1lX19cIjtcbmNvbnN0IERBVEFfS0VZID0gXCJfX2RhdGFfX1wiO1xuY29uc3QgQUNUSVZFX1RBQl9LRVkgPSBcIkBAX19FTUlUVEVSX0FDVElWRV9LRVlfX1wiO1xuY29uc3QgUVVFUllfQ1VSUkVOVF9UQUIgPSBcIkBAX19FTUlUVEVSX1FVRVJZX0NVUlJFTlRfVEFCX19cIjtcbmNvbnN0IENVUlJFTlRfVEFCID0gXCJAQF9fRU1JVFRFUl9DVVJSRU5UX1RBQl9fXCI7XG5jb25zdCBGT1JNX0lOSkVDVEVEX1NVRkZJWCA9IFwiQEBfX0VNSVRURVJfRlJPTV9JTkpFQ1RFRF9fXCI7XG4vLyDlvZPliY3miYDlnKjohJrmnKznmoTllK/kuIAgaWRcbmNvbnN0IFVOSVFVRV9JRCA9IGBAQF9fRU1JVFRFUl8ke25ldyBEYXRlKCkudmFsdWVPZigpLnRvU3RyaW5nKCl9X19gO1xuY29uc3QgSEFORExFUl9NQVAgPSB7fTtcbmNvbnN0IE9QVElPTlNfTUFQID0ge307XG4vLyDkv53lrZggaW5qZWN0ZWQg5ZCM5q2l5YiwIGNvbnRlbnQg5Lit55qE5LqL5Lu2XG5jb25zdCBTWU5DRURfRVZFTlQgPSB7fTtcblxuY29uc3Qge1xuICBjaGVja0lzQXRJbmplY3RlZFNjcmlwdCxcbiAgY2hlY2tJc0F0Q29udGVudFNjcmlwdCxcbiAgY2hlY2tJc0F0QmFja2dyb3VuZFNjcmlwdCxcbn0gPSBjaGVja2VyO1xuY29uc3QgaXNBdEluamVjdGVkU2NyaXB0ID0gY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQoKTtcbmNvbnN0IGlzQXRDb250ZW50U2NyaXB0ID0gY2hlY2tJc0F0Q29udGVudFNjcmlwdCgpO1xuY29uc3QgaXNBdEJhY2tncm91bmRTY3JpcHQgPSBjaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0KCk7XG5cbmNvbnN0IHsgY2hyb21lIH0gPSB3aW5kb3c7XG5cbmxldCBIQVNfSU5JVCA9IGZhbHNlO1xubGV0IGN1cnJlbnRUYWIgPSBudWxsO1xubGV0IFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSID0gbnVsbDtcblxuLyoqXG4gKiDlupXlsYLnlKjmnaXlkJHlpJblub/mkq3kuovku7bnmoTmlrnms5VcbiAqIGludGVyZmFjZSBBY3Rpb24ge1xuICogICB0eXBlOiBzdHJpbmc7XG4gKiAgIHBheWxvYWQ6IEFycmF5PGFueT47XG4gKiB9XG4gKiBAcGFyYW0ge0FjdGlvbn0gYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAvLyBjb25zdCB7IGNiIH0gPSBhY3Rpb247XG4gIGlmIChpc0F0SW5qZWN0ZWRTY3JpcHQpIHtcbiAgICBsb2coXCJbZW1pdHRlcl0gZGlzcGF0Y2ggZXZlbnRcIiwgYWN0aW9uKTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudChTUEVDSUFMX0NVU1RPTV9FVkVOVF9OQU1FLCB7XG4gICAgICAgIGRldGFpbDogYWN0aW9uLFxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaXNBdENvbnRlbnRTY3JpcHQgJiYgYWN0aW9uLnR5cGUuaW5jbHVkZXMoRk9STV9JTkpFQ1RFRF9TVUZGSVgpKSB7XG4gICAgbG9nKFwiW2VtaXR0ZXJdIGRpc3BhdGNoIGV2ZW50XCIsIGFjdGlvbiwgU1lOQ0VEX0VWRU5UKTtcbiAgICAvLyDlj6/og73mmK/lkJEgaW5qZWN0ZWQg5bm/5pKt77yM5omA5Lul6ZyA6KaBIGRpc3BhdGNoRXZlbnRcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudChDVVNUT01fRVZFTlRfTkFNRSwge1xuICAgICAgICBkZXRhaWw6IGFjdGlvbixcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8g5L2/55SoIHN0b3JhZ2UubG9jYWwuc2V0IOadpeinpuWPkeaUueWPmO+8jOS7juiAjOmAmuefpeWIsOWFqOmDqOaciSBvbkNoYW5nZWQuYWRkTGlzdGVuZXIg55qE5Zyw5pa5XG4gIGNvbnN0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICBbVElNRV9LRVldOiBjdXJyZW50LFxuICAgIFtEQVRBX0tFWV06IHtcbiAgICAgIHZhbHVlOiBjdXJyZW50LFxuICAgICAgdHlwZTogYWN0aW9uLnR5cGUsXG4gICAgICBwYXlsb2FkOiBhY3Rpb24ucGF5bG9hZCxcbiAgICB9LFxuICB9KTtcbn1cbmxldCBJTkpFQ1RFRF9FVkVOVF9IQU5ETEVSID0gbnVsbDtcbmxldCBDT05URU5UX0VWRU5UX0hBTkRMRVIgPSBudWxsO1xuLyoqXG4gKiDlupXlsYLnlKjmnaXnm5HlkKzlhajlsYDnmoTmiYDmnInkuovku7bvvIzlj6/ku6XnkIbop6PkuLrkuIDkuKrjgIzlub/mkq3kuK3lv4PjgI1cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbmZ1bmN0aW9uIGFkZFN0b3JlTGlzdGVuZXIoY2IpIHtcbiAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCkge1xuICAgIC8vIGxvZygnW2luamVjdGVkXSBsaXN0ZW5lciBjdXN0b20gZXZlbnQnKTtcbiAgICBJTkpFQ1RFRF9FVkVOVF9IQU5ETEVSID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gcmVjZWl2ZSBldmVudFwiLCBldmVudC5kZXRhaWwpO1xuICAgICAgY2IoZXZlbnQuZGV0YWlsKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKENVU1RPTV9FVkVOVF9OQU1FLCBJTkpFQ1RFRF9FVkVOVF9IQU5ETEVSKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzQXRDb250ZW50U2NyaXB0KSB7XG4gICAgQ09OVEVOVF9FVkVOVF9IQU5ETEVSID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gcmVjZWl2ZSBldmVudFwiLCBldmVudC5kZXRhaWwpO1xuICAgICAgY2IoZXZlbnQuZGV0YWlsKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUsIENPTlRFTlRfRVZFTlRfSEFORExFUik7XG4gIH1cbiAgU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIgPSAoY2hhbmdlcykgPT4ge1xuICAgIGNvbnN0IF9fZGF0YV9fID0gY2hhbmdlc1tEQVRBX0tFWV07XG4gICAgLy8gY2xlYXIg5pe26LWw6L+Z6YeMXG4gICAgaWYgKF9fZGF0YV9fID09PSB1bmRlZmluZWQgfHwgX19kYXRhX18ubmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1RJTUVfS0VZLCBEQVRBX0tFWV0pO1xuICAgIGNvbnN0IGFjdGlvbiA9IF9fZGF0YV9fLm5ld1ZhbHVlO1xuICAgIGNiKGFjdGlvbik7XG4gIH07XG4gIGxvZyhcIltlbWl0dGVyXSBhZGQgc3RvcmFnZSBsaXN0ZW5lclwiKTtcbiAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSKTtcbn1cbi8qKlxuICog56e76Zmk5omA5pyJ55uR5ZCs5ZmoXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZVN0b3JlTGlzdGVuZXIoKSB7XG4gIGxvZyhcIltlbWl0dGVyXSByZW1vdmUgYWxsIGxpc3RlbmVyc1wiKTtcbiAgaWYgKElOSkVDVEVEX0VWRU5UX0hBTkRMRVIpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihDVVNUT01fRVZFTlRfTkFNRSwgSU5KRUNURURfRVZFTlRfSEFORExFUik7XG4gIH1cbiAgaWYgKENPTlRFTlRfRVZFTlRfSEFORExFUikge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSxcbiAgICAgIENPTlRFTlRfRVZFTlRfSEFORExFUlxuICAgICk7XG4gIH1cbiAgaWYgKGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5oYXNMaXN0ZW5lcnMoKSkge1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihTVE9SQUdFX0NIQU5HRURfSEFORExFUik7XG4gIH1cbn1cblxuY29uc3QgZW1pdHRlciA9IHtcbiAgLyoqXG4gICAqIOeUqOadpeWPkeWHuuS6i+S7tueahOaWueazlVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSAgey4uLmFueX0gcGFyYW1zXG4gICAqL1xuICBlbWl0KGV2ZW50TmFtZSwgLi4ucGFyYW1zKSB7XG4gICAgbGV0IG5hbWUgPSBldmVudE5hbWU7XG5cbiAgICBjb25zdCBpc0V2ZW50RnJvbUluamVjdGVkID1cbiAgICAgIGlzQXRJbmplY3RlZFNjcmlwdCAmJiBldmVudE5hbWUgIT09IFNZTkNfRVZFTlRfVE9fQ09OVEVOVDtcbiAgICBpZiAoaXNFdmVudEZyb21JbmplY3RlZCkge1xuICAgICAgbmFtZSA9IGV2ZW50TmFtZSArIEZPUk1fSU5KRUNURURfU1VGRklYO1xuICAgIH1cbiAgICBsb2coXG4gICAgICBcIltlbWl0dGVyXSBlbWl0IGV2ZW50XCIsXG4gICAgICBuYW1lLFxuICAgICAgXCJvcmlnaW5hbCBldmVudCBuYW1lIGlzXCIsXG4gICAgICBldmVudE5hbWUsXG4gICAgICBcImFuZCBwYXJhbXMgaXNcIixcbiAgICAgIHBhcmFtc1xuICAgICk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogbmFtZSxcbiAgICAgIHBheWxvYWQ6IHBhcmFtcyxcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOebkeWQrOS6i+S7tlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAgICogaW50ZXJmYWNlIE9wdGlvbnMge1xuICAgKiAgIC8vIOWPquacieW9k+ivpSB0YWIg5piv5b2T5YmN5bGV56S655qE77yM5omN6LCD55SoXG4gICAqICAgYWN0aXZlOiBib29sZWFuO1xuICAgKiB9XG4gICAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9uc1xuICAgKi9cbiAgb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgbGV0IG5hbWUgPSBldmVudE5hbWU7XG4gICAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCkge1xuICAgICAgLy8g5aaC5p6c5piv5ZyoIGluc2VydGVkIOS4reebkeWQrOS6i+S7tu+8jOmAmuefpSBjb250ZW50IOebkeWQrOivpeS6i+S7tu+8jGluamVjdGVkIOWGheebkeWQrOS4gOS4quS/ruaUuei/h+eahOS6i+S7tlxuICAgICAgbmFtZSA9IGV2ZW50TmFtZSArIEZPUk1fSU5KRUNURURfU1VGRklYO1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIHN5bmMgZXZlbnQgbGlzdGVuZXIgdG8gY29udGVudFwiLCBuYW1lKTtcbiAgICAgIGVtaXR0ZXIuZW1pdChTWU5DX0VWRU5UX1RPX0NPTlRFTlQsIGV2ZW50TmFtZSwgbmFtZSk7XG4gICAgfVxuICAgIEhBTkRMRVJfTUFQW25hbWVdID0gaGFuZGxlcjtcbiAgfSxcbiAgcmVtb3ZlKGV2ZW50TmFtZSkge1xuICAgIGRlbGV0ZSBIQU5ETEVSX01BUFtldmVudE5hbWVdO1xuICB9LFxuICBjb25maWcobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIEVNSVRURVJfQ09ORklHO1xuICAgIH1cbiAgICBFTUlUVEVSX0NPTkZJR1tuYW1lXSA9IHZhbHVlO1xuICAgIHJldHVybiBFTUlUVEVSX0NPTkZJRztcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGlmIChIQVNfSU5JVCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsb2coXCJbZW1pdHRlcl0gaW5pdCBldmVudCBsaXN0ZW5lcnNcIik7XG4gIGFkZFN0b3JlTGlzdGVuZXIoKGFjdGlvbikgPT4ge1xuICAgIGxvZyhcbiAgICAgIFwiW2VtaXR0ZXJdIGFkZFN0b3JlTGlzdGVuZXIgcmVjZWl2ZSBldmVudCBhbmQgYWN0aW9uIGlzXCIsXG4gICAgICBhY3Rpb24udHlwZSxcbiAgICAgIEhBTkRMRVJfTUFQLFxuICAgICAgU1lOQ0VEX0VWRU5UXG4gICAgKTtcbiAgICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcblxuICAgIC8vIOWmguaenOaYryBpbmplY3RlZCDor7fmsYIgY29udGVudCDlkIzmraXnm5HlkKzkuovku7bnmoTor7fmsYJcbiAgICBpZiAoaXNBdENvbnRlbnRTY3JpcHQgJiYgdHlwZSA9PT0gU1lOQ19FVkVOVF9UT19DT05URU5UKSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gc2F2ZSBzeW5jZWQgZXZlbnRcIiwgYWN0aW9uLnR5cGUpO1xuICAgICAgY29uc3QgW29yaWdpbmFsRXZlbnROYW1lLCBtb2RpZmllZEV2ZW50TmFtZV0gPSBwYXlsb2FkO1xuICAgICAgU1lOQ0VEX0VWRU5UW29yaWdpbmFsRXZlbnROYW1lXSA9IG1vZGlmaWVkRXZlbnROYW1lO1xuXG4gICAgICBIQU5ETEVSX01BUFtvcmlnaW5hbEV2ZW50TmFtZV0gPSAoLi4ucGFyYW1zKSA9PiB7XG4gICAgICAgIC8vIGxvZyhcIltlbWl0dGVyXSBldmVudCBmcm9tIGluamVjdGVkIHNvIGVtaXQgdG8gaW5qZWN0ZWRcIik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBtb2RpZmllZEV2ZW50TmFtZSxcbiAgICAgICAgICBwYXlsb2FkOiBwYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBdENvbnRlbnRTY3JpcHQgJiYgdHlwZS5pbmNsdWRlcyhGT1JNX0lOSkVDVEVEX1NVRkZJWCkpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSBjaGVjayBpcyBzeW5jZWQgZXZlbnRcIiwgYWN0aW9uLnR5cGUpO1xuICAgICAgLy8g5aaC5p6c5pivIGNvbnRlbnQg5bm25LiU5pS25Yiw55qE5LqL5Lu25piv55SxIGluamVjdGVkIOWPkeWHuueahO+8jOWFiOeci+eci+aYr+WQpuaYr+WPkee7meiHquW3seeahFxuICAgICAgY29uc3QgbmFtZSA9IHR5cGUucmVwbGFjZShGT1JNX0lOSkVDVEVEX1NVRkZJWCwgXCJcIik7XG4gICAgICBjb25zdCBoYW5kbGVyID0gSEFORExFUl9NQVBbbmFtZV07XG4gICAgICBpZiAoaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGhhbmRsZXIoLi4ucGF5bG9hZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIOS4jeaYr+WPkee7meiHquW3sSBjb250ZW5077yM6YKj5bCx5YaN5ZCR5aSW5bm/5pKt5LiA5qyhXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IG5hbWUsXG4gICAgICAgIHBheWxvYWQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDlpoLmnpzmmK8gY29udGVudCDlj5HpgIHliLAgaW5qZWN0ZWQg55qE5LqL5Lu2XG4gICAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCAmJiBIQU5ETEVSX01BUFt0eXBlICsgRk9STV9JTkpFQ1RFRF9TVUZGSVhdKSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gY2hlY2sgaXMgc3luY2VkIGV2ZW50XCIsIGFjdGlvbi50eXBlKTtcbiAgICAgIEhBTkRMRVJfTUFQW3R5cGUgKyBGT1JNX0lOSkVDVEVEX1NVRkZJWF0oLi4ucGF5bG9hZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlciA9IEhBTkRMRVJfTUFQW3R5cGVdO1xuXG4gICAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdXCIsIFwiYXRcIiwgdHlwZSwgXCJsaXN0ZW5lciBpcyBub3QgZXhpc3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlciguLi5wYXlsb2FkKTtcbiAgfSk7XG5cbiAgLy8g6L+Z5Lik5Liq55So5p2l5a6e546w5Y+q5ZCR5Y2V5LiqIHRhYiDlj5HpgIHmtojmga9cbiAgaWYgKGlzQXRDb250ZW50U2NyaXB0ICYmIGN1cnJlbnRUYWIgPT09IG51bGwpIHtcbiAgICBlbWl0dGVyLmVtaXQoUVVFUllfQ1VSUkVOVF9UQUIsIFVOSVFVRV9JRCk7XG4gICAgZW1pdHRlci5vbihVTklRVUVfSUQsICh0YWIpID0+IHtcbiAgICAgIGN1cnJlbnRUYWIgPSB0YWI7XG4gICAgICB3aW5kb3dbQ1VSUkVOVF9UQUJdID0gdGFiO1xuICAgIH0pO1xuICB9XG4gIGlmIChpc0F0QmFja2dyb3VuZFNjcmlwdCkge1xuICAgIHdpbmRvdy5SRUdJU1RFUkVEX1RBQlMgPSBbXTtcbiAgICBlbWl0dGVyLm9uKFFVRVJZX0NVUlJFTlRfVEFCLCAoZnJvbSkgPT4ge1xuICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpID0+IHtcbiAgICAgICAgd2luZG93W0FDVElWRV9UQUJfS0VZXSA9IHRhYnNbMF07XG4gICAgICAgIGVtaXR0ZXIuZW1pdChmcm9tLCB0YWJzWzBdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIEhBU19JTklUID0gdHJ1ZTtcbn1cblxuaW5pdCgpO1xuXG5mdW5jdGlvbiB0YWJDaGFuZ2VIYW5kbGVyKCkge1xuICBsb2coJ1tlbWl0dGVyXScsIEVNSVRURVJfQ09ORklHLnJlbW92ZUxpc3RlbmVyV2hlblRhYkhpZGRlbiwgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlKTtcbiAgaWYgKEVNSVRURVJfQ09ORklHLnJlbW92ZUxpc3RlbmVyV2hlblRhYkhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbG9nKFwiW2VtaXR0ZXJdIGRvY3VtZW50IHZpc2libGUgY2hhbmdlZFwiLCBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpO1xuICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSBcInZpc2libGVcIikge1xuICAgIGlmIChcbiAgICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5oYXNMaXN0ZW5lcnMoKSAmJlxuICAgICAgU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIgIT09IG51bGxcbiAgICApIHtcbiAgICAgIC8vIOWcqCB0YWIg5YiH5o2i5pe25rOo6ZSA5o6J55uR5ZCsXG4gICAgICByZW1vdmVTdG9yZUxpc3RlbmVyKCk7XG4gICAgICBIQVNfSU5JVCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgaW5pdCgpO1xufVxuaWYgKGlzQXRDb250ZW50U2NyaXB0KSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIHRhYkNoYW5nZUhhbmRsZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbWl0dGVyO1xuIiwiY29uc3QgY2hlY2tlciA9IHJlcXVpcmUoXCIuL2NoZWNrZXJcIik7XG5cbi8vIGNvbnN0IERFQlVHR0VSID0gZmFsc2U7XG5jb25zdCBERUJVR0dFUiA9IHRydWU7XG5cbmNvbnN0IHsgZ2V0Q3VycmVudFNjcmlwdE5hbWUgfSA9IGNoZWNrZXI7XG5cbmNvbnN0IGN1cnJlbnRTY3JpcHROYW1lID0gZ2V0Q3VycmVudFNjcmlwdE5hbWUoKSB8fCBcIlVOS05PV05cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nKC4uLnBhcmFtcykge1xuICBpZiAoREVCVUdHRVIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGluZm8gPSBbY3VycmVudFNjcmlwdE5hbWUsIC4uLnBhcmFtc107XG4gIGNvbnNvbGUubG9nKC4uLmluZm8pO1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZW50KG1zZykge1xuICBjb25zdCBjb250ZW50ID0gYCR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0gLSAke21zZ31gO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRKcyhzcmMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHNjcmlwdC5zcmMgPSBzcmM7XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpeGVkQ29udGFpbmVyKGlkLCBjb250ZW50LCBzdHlsZXMgPSAnJykge1xuICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgJGNvbnRhaW5lci5zdHlsZSA9XG4gICAgXCJ6LWluZGV4OiA5OTk7IHBvc2l0aW9uOiBmaXhlZDsgcmlnaHQ6IDIwcHg7IHRvcDogMjBweDsgcGFkZGluZzogNHB4IDEwcHg7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7XCIgKyBzdHlsZXM7XG4gICRjb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCIke2lkfVwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgdGV4dC1hbGlnbjogY2VudGVyOyBtaW4td2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDMwcHg7XCI+XG4gICR7Y29udGVudH1cbjwvZGl2PlxuYDtcbiAgcmV0dXJuICRjb250YWluZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=injected.js.map