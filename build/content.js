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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/chrome-emitter */ "./src/utils/chrome-emitter/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var _utils_screenshot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/screenshot */ "./src/utils/screenshot/index.js");
/**
 * @file content 脚本
 */





_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].config('removeListenerWhenTabHidden', false);

const CONTAINER_ID = '__emitter_content_id__';

const $container = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createFixedContainer"])(CONTAINER_ID, '由 content 插入页面');
$container.onclick = () => {
  _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('content-to-injected', 'hello i am content');
  _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('content-to-options', 'hello i am content');
  _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('content-to-background', 'hello i am content');
}

document.body.onload = () => {
  document.body.appendChild($container);
}

Object(_utils__WEBPACK_IMPORTED_MODULE_1__["loadJs"])(chrome.extension.getURL("/injected.js"))
  .then(() => {
    console.log('[content]', 'inserted loaded');
  });

function updateContainer(content) {
  const $container = document.querySelector(`#${CONTAINER_ID}`);
  $container.innerText = content;
}

_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on('popup-to-content', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[content] from popup', content);
});
_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on('options-to-content', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[content] from options', content);
});
_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on('background-to-content', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[content] from background', content);
});
_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on('injected-to-content', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[content] from inserted', content);
});

_utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on('startScreenshot', () => {
  // console.log('start screenshot');
  Object(_utils_screenshot__WEBPACK_IMPORTED_MODULE_2__["default"])((canvas, canvasData) => {
    // console.log(canvasData.size, canvasData.table, canvasData.screenshots);
    const url = canvas.toDataURL('image/png');
    _utils_chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit('openNewTab', url);
  });
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


/***/ }),

/***/ "./src/utils/screenshot/fixedElement.js":
/*!**********************************************!*\
  !*** ./src/utils/screenshot/fixedElement.js ***!
  \**********************************************/
/*! exports provided: findFixedElements, findTopFixedElements, findBottomFixedElements, setStyle, resetStyle, hideFixedElements, showFixedElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFixedElements", function() { return findFixedElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findTopFixedElements", function() { return findTopFixedElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBottomFixedElements", function() { return findBottomFixedElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetStyle", function() { return resetStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideFixedElements", function() { return hideFixedElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFixedElements", function() { return showFixedElements; });
/**
 * interface FixedElement {
 *   position: { top, bottom }
 *   source: HTMLElement
 * }
 * @return {Array<FixedElement>}
 */
function findFixedElements() {
  const elements = document.getElementsByTagName("*");
  const fixedElements = Array.from(elements).filter((element) => {
    const styles = getComputedStyle(element);
    return styles.position === "fixed" && styles.display !== "none";
  });
  return fixedElements.map((element) => {
    const { top, bottom } = getComputedStyle(element);
    return {
      position: {
        top,
        bottom,
      },
      source: element,
    };
  });
}
function pxToNum(pxValue) {
  return Number(pxValue.match(/[0-9]+/g)[0]);
}
function findTopFixedElements(fixedElements, windowHeight) {
  return fixedElements.filter((fixedElement) => {
    const { top: topStr, bottom: bottomStr } = getComputedStyle(
      fixedElement.source
    );
    const top = pxToNum(topStr);
    const bottom = pxToNum(bottomStr);

    // console.log("findTopFixedElements", top, bottom, windowHeight);
    if (top < windowHeight / 2 && bottom > windowHeight / 2) {
      return true;
    }
    return false;
  });
}
function findBottomFixedElements(
  fixedElements,
  windowHeight
) {
  return fixedElements.filter((fixedElement) => {
    const { top: topStr, bottom: bottomStr } = getComputedStyle(
      fixedElement.source
    );

    const top = pxToNum(topStr);
    const bottom = pxToNum(bottomStr);
    if (top > windowHeight / 2 && bottom < windowHeight / 2) {
      return true;
    }
    return false;
  });
};
const MAP = new Map();
function setStyle(element, styles = {}) {
  // console.log("setStyle", element, element.style.cssText, styles);
  MAP.set(element, element.style.cssText);
  Object.keys(styles).forEach((attr) => {
    element.style[attr] = styles[attr];
  });
}
function resetStyle(element) {
  const originalCssText = MAP.get(element);
  // console.log("resetStyle", element, originalCssText);
  if (originalCssText === undefined) {
    return;
  }
  element.style = originalCssText || "";
}

/**
 *
 * @param {Array<FixedElement>} fixedElements
 */
function hideFixedElements(fixedElements) {
  for (let i = 0; i < fixedElements.length; i += 1) {
    const element = fixedElements[i].source;
    setStyle(element, { display: "none" });
  }
}
function showFixedElements(fixedElements) {
  // console.log("1111 showFixedElements", "reset style", fixedElements);
  for (let i = 0; i < fixedElements.length; i += 1) {
    const element = fixedElements[i].source;
    // console.log("222 showFixedElements", "reset style");
    resetStyle(element);
  }
}


/***/ }),

/***/ "./src/utils/screenshot/index.js":
/*!***************************************!*\
  !*** ./src/utils/screenshot/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return main; });
/* harmony import */ var _chrome_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chrome-emitter */ "./src/utils/chrome-emitter/index.js");
/* harmony import */ var _fixedElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixedElement */ "./src/utils/screenshot/fixedElement.js");



/**
 * 对页面截图
 * @param {*} times
 */
function screenshot(canvasData, cb, times = 0, originalScrollTop) {
  const {
    size: { pageHeight },
    table: { rows },
    topFixedElements,
    bottomFixedElements,
  } = canvasData;
  // console.log("start screenshot", times, rows);

  if (times === rows) {
    _fixedElement__WEBPACK_IMPORTED_MODULE_1__["showFixedElements"](topFixedElements);
    window.scrollTo(0, originalScrollTop);
    _fixedElement__WEBPACK_IMPORTED_MODULE_1__["resetStyle"](document.body);
    _chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].remove("screenshotSingleScreenComplete");
    mergeImages(canvasData, cb);
    return;
  }
  if (rows !== 1) {
    if (times === 0) {
      // console.log("hide bottom fixed elements", bottomFixedElements);
      _fixedElement__WEBPACK_IMPORTED_MODULE_1__["hideFixedElements"](bottomFixedElements);
    }
    if (rows > 1 && times === 1) {
      // console.log("hide top fixed elements", topFixedElements);
      _fixedElement__WEBPACK_IMPORTED_MODULE_1__["hideFixedElements"](topFixedElements);
    }
    if (times === rows - 1) {
      // console.log("show bottom fixed elements", bottomFixedElements);
      _fixedElement__WEBPACK_IMPORTED_MODULE_1__["showFixedElements"](bottomFixedElements);
    }
  }

  _chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit("screenshot");
}

function mergeImages(canvasData, cb) {
  const {
    screenshots,
    size: { pageWidth, pageHeight, fullWidth, fullHeight },
  } = canvasData;

  const canvas = document.createElement("canvas");
  canvas.width = fullWidth;
  canvas.height = fullHeight;
  const ctx = canvas.getContext("2d");

  // 从下往上绘制
  let index = screenshots.length - 1;
  function draw(screenshot) {
    // console.log("start draw", index);
    const tempImage = new Image();
    // console.log(screenshot.data_url);
    tempImage.src = screenshot.url;
    tempImage.onload = () => {
      let y = index * pageHeight;
      // 如果是最后一张
      if (index === screenshots.length - 1) {
        const realHeightOfLastScreenshot = fullHeight % pageHeight;
        // y = pageHeight - realHeightOfLastScreenshot;
        y = fullHeight - pageHeight;
      }
      // console.log("y position", y);
      const h = (pageWidth * tempImage.height) / tempImage.width;
      ctx.drawImage(tempImage, 0, y, pageWidth, h);
      index -= 1;
      if (index === -1) {
        if (cb) {
          cb(canvas, canvasData);
        }
        return;
      }
      draw(screenshots[index]);
    };
  }

  draw(screenshots[index]);
}

function main(cb) {
  const scrollWidth = document.body.scrollWidth;
  const scrollHeight = document.body.scrollHeight;
  const visibleWidth = document.documentElement.clientWidth;
  const visibleHeight = document.documentElement.clientHeight;

  // 根据可视区域计算整个网页可以拆分成多少行多少列
  const columns = Math.ceil((scrollWidth * 1.0) / visibleWidth);
  const rows = Math.ceil((scrollHeight * 1.0) / visibleHeight);

  const fixedElements = _fixedElement__WEBPACK_IMPORTED_MODULE_1__["findFixedElements"]();
  // console.log("fixed elements", fixedElements);
  const topFixedElements = _fixedElement__WEBPACK_IMPORTED_MODULE_1__["findTopFixedElements"](
    fixedElements,
    visibleHeight
  );
  // console.log("top fixed elements", topFixedElements);
  const bottomFixedElements = _fixedElement__WEBPACK_IMPORTED_MODULE_1__["findBottomFixedElements"](
    fixedElements,
    visibleHeight
  );
  // console.log("bottom fixed elements", bottomFixedElements);
  const canvasData = {
    size: {
      fullWidth: scrollWidth,
      fullHeight: scrollHeight,
      pageWidth: visibleWidth,
      pageHeight: visibleHeight,
    },
    table: { rows: rows, columns: columns },
    screenshots: [],
    topFixedElements,
    bottomFixedElements,
  };

  let times = 0;
  const originalScrollTop = document.documentElement.scrollTop;

  // 完成一屏截图
  _chrome_emitter__WEBPACK_IMPORTED_MODULE_0__["default"].on("screenshotSingleScreenComplete", (url) => {
    canvasData.screenshots.push({
      row: times,
      column: 0,
      url,
    });
    times += 1;
    window.scrollTo(0, times * visibleHeight);
    setTimeout(() => {
      screenshot(canvasData, cb, times, originalScrollTop);
    }, 1200);
  });

  _fixedElement__WEBPACK_IMPORTED_MODULE_1__["setStyle"](document.body, { overflow: "hidden" });

  window.scrollTo(0, times * visibleHeight);
  setTimeout(() => {
    screenshot(canvasData, cb, times, originalScrollTop);
  }, 1200);
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nocm9tZS1lbWl0dGVyL2NoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nocm9tZS1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaHJvbWUtZW1pdHRlci9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zY3JlZW5zaG90L2ZpeGVkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NyZWVuc2hvdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FB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OEJBQThCLHFFQUF5QztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZLCtCQUErQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx1REFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUgsRUFBRSxzREFBMEIsaUJBQWlCLHFCQUFxQjs7QUFFbEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb250ZW50LmpzXCIpO1xuIiwiLyoqXG4gKiBAZmlsZSBjb250ZW50IOiEmuacrFxuICovXG5pbXBvcnQgZW1pdHRlciBmcm9tICcuL3V0aWxzL2Nocm9tZS1lbWl0dGVyJztcblxuaW1wb3J0IHsgZ2V0Q29udGVudCwgbG9hZEpzLCBjcmVhdGVGaXhlZENvbnRhaW5lciB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHNjcmVlbnNob3QgZnJvbSAnLi91dGlscy9zY3JlZW5zaG90JztcblxuZW1pdHRlci5jb25maWcoJ3JlbW92ZUxpc3RlbmVyV2hlblRhYkhpZGRlbicsIGZhbHNlKTtcblxuY29uc3QgQ09OVEFJTkVSX0lEID0gJ19fZW1pdHRlcl9jb250ZW50X2lkX18nO1xuXG5jb25zdCAkY29udGFpbmVyID0gY3JlYXRlRml4ZWRDb250YWluZXIoQ09OVEFJTkVSX0lELCAn55SxIGNvbnRlbnQg5o+S5YWl6aG16Z2iJyk7XG4kY29udGFpbmVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGVtaXR0ZXIuZW1pdCgnY29udGVudC10by1pbmplY3RlZCcsICdoZWxsbyBpIGFtIGNvbnRlbnQnKTtcbiAgZW1pdHRlci5lbWl0KCdjb250ZW50LXRvLW9wdGlvbnMnLCAnaGVsbG8gaSBhbSBjb250ZW50Jyk7XG4gIGVtaXR0ZXIuZW1pdCgnY29udGVudC10by1iYWNrZ3JvdW5kJywgJ2hlbGxvIGkgYW0gY29udGVudCcpO1xufVxuXG5kb2N1bWVudC5ib2R5Lm9ubG9hZCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkY29udGFpbmVyKTtcbn1cblxubG9hZEpzKGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKFwiL2luamVjdGVkLmpzXCIpKVxuICAudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1tjb250ZW50XScsICdpbnNlcnRlZCBsb2FkZWQnKTtcbiAgfSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRhaW5lcihjb250ZW50KSB7XG4gIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtDT05UQUlORVJfSUR9YCk7XG4gICRjb250YWluZXIuaW5uZXJUZXh0ID0gY29udGVudDtcbn1cblxuZW1pdHRlci5vbigncG9wdXAtdG8tY29udGVudCcsIChtc2cpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgdXBkYXRlQ29udGFpbmVyKGNvbnRlbnQpO1xuICBjb25zb2xlLmxvZygnW2NvbnRlbnRdIGZyb20gcG9wdXAnLCBjb250ZW50KTtcbn0pO1xuZW1pdHRlci5vbignb3B0aW9ucy10by1jb250ZW50JywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICB1cGRhdGVDb250YWluZXIoY29udGVudCk7XG4gIGNvbnNvbGUubG9nKCdbY29udGVudF0gZnJvbSBvcHRpb25zJywgY29udGVudCk7XG59KTtcbmVtaXR0ZXIub24oJ2JhY2tncm91bmQtdG8tY29udGVudCcsIChtc2cpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgdXBkYXRlQ29udGFpbmVyKGNvbnRlbnQpO1xuICBjb25zb2xlLmxvZygnW2NvbnRlbnRdIGZyb20gYmFja2dyb3VuZCcsIGNvbnRlbnQpO1xufSk7XG5lbWl0dGVyLm9uKCdpbmplY3RlZC10by1jb250ZW50JywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICB1cGRhdGVDb250YWluZXIoY29udGVudCk7XG4gIGNvbnNvbGUubG9nKCdbY29udGVudF0gZnJvbSBpbnNlcnRlZCcsIGNvbnRlbnQpO1xufSk7XG5cbmVtaXR0ZXIub24oJ3N0YXJ0U2NyZWVuc2hvdCcsICgpID0+IHtcbiAgLy8gY29uc29sZS5sb2coJ3N0YXJ0IHNjcmVlbnNob3QnKTtcbiAgc2NyZWVuc2hvdCgoY2FudmFzLCBjYW52YXNEYXRhKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coY2FudmFzRGF0YS5zaXplLCBjYW52YXNEYXRhLnRhYmxlLCBjYW52YXNEYXRhLnNjcmVlbnNob3RzKTtcbiAgICBjb25zdCB1cmwgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICBlbWl0dGVyLmVtaXQoJ29wZW5OZXdUYWInLCB1cmwpO1xuICB9KTtcbn0pO1xuIiwiY29uc3QgU0NSSVBUUyA9IHtcbiAgTk9ORTogMCxcbiAgQ09OVEVOVDogMSxcbiAgSU5KRUNURUQ6IDIsXG4gIEJBQ0tHUk9VTkQ6IDMsXG4gIFBPUFVQOiA0LFxuICBPUFRJT05TOiA1LFxufTtcbmNvbnN0IFNDUklQVF9OQU1FUyA9IHtcbiAgMDogXCJOT05FXCIsXG4gIDE6IFwiQ09OVEVOVFwiLFxuICAyOiBcIklOSkVDVEVEXCIsXG4gIDM6IFwiQkFDS0dST1VORFwiLFxuICA0OiBcIlBPUFVQXCIsXG4gIDU6IFwiT1BUSU9OU1wiLFxufTtcbmNvbnN0IHsgY2hyb21lIH0gPSB3aW5kb3c7XG5mdW5jdGlvbiBjaGVja1NjcmlwdCgpIHtcbiAgaWYgKGNocm9tZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFNDUklQVFMuTk9ORTtcbiAgfVxuICBpZiAoY2hyb21lLnN0b3JhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBTQ1JJUFRTLklOSkVDVEVEO1xuICB9XG4gIGlmIChjaHJvbWUudGFicyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFNDUklQVFMuQ09OVEVOVDtcbiAgfVxuICBjb25zdCBiZ1dpbmRvdyA9IGNocm9tZS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKTtcbiAgaWYgKHdpbmRvdyA9PT0gYmdXaW5kb3cpIHtcbiAgICByZXR1cm4gU0NSSVBUUy5CQUNLR1JPVU5EO1xuICB9XG4gIGNvbnN0IHZpZXdzID0gY2hyb21lLmV4dGVuc2lvbi5nZXRWaWV3cyh7IHR5cGU6IFwicG9wdXBcIiB9KTtcbiAgaWYgKHZpZXdzLmxlbmd0aCAhPT0gMCkge1xuICAgIHJldHVybiBTQ1JJUFRTLlBPUFVQO1xuICB9XG4gIHJldHVybiBTQ1JJUFRTLk9QVElPTlM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzQXRDb250ZW50U2NyaXB0KCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5DT05URU5UO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNBdEluamVjdGVkU2NyaXB0KCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5JTkpFQ1RFRDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0KCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5CQUNLR1JPVU5EO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNBdFBvcHVwKCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5QT1BVUDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzQXRPcHRpb25zKCkge1xuICByZXR1cm4gY2hlY2tTY3JpcHQoKSA9PT0gU0NSSVBUUy5PUFRJT05TO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdE5hbWUoKSB7XG4gIHJldHVybiBTQ1JJUFRfTkFNRVNbY2hlY2tTY3JpcHQoKV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0Q3VycmVudFNjcmlwdE5hbWUsXG4gIGNoZWNrSXNBdEJhY2tncm91bmRTY3JpcHQsXG4gIGNoZWNrSXNBdEluamVjdGVkU2NyaXB0LFxuICBjaGVja0lzQXRDb250ZW50U2NyaXB0LFxufTtcbiIsImltcG9ydCBjaGVja2VyIGZyb20gXCIuL2NoZWNrZXJcIjtcbmltcG9ydCBsb2cgZnJvbSBcIi4vbG9nXCI7XG5cbmNvbnN0IEVNSVRURVJfQ09ORklHID0ge1xuICByZW1vdmVMaXN0ZW5lcldoZW5UYWJIaWRkZW46IHRydWUsXG59O1xuXG5jb25zdCBDVVNUT01fRVZFTlRfTkFNRSA9IFwiQEBfX0VNSVRURVJfQV9fXCI7XG5jb25zdCBTUEVDSUFMX0NVU1RPTV9FVkVOVF9OQU1FID0gXCJAQF9fRU1JVFRFUl9CX19cIjtcbmNvbnN0IFNZTkNfRVZFTlRfVE9fQ09OVEVOVCA9IFwiQEBfX1NZTkNfTkFNRV9fXCI7XG5jb25zdCBUSU1FX0tFWSA9IFwiX190aW1lX19cIjtcbmNvbnN0IERBVEFfS0VZID0gXCJfX2RhdGFfX1wiO1xuY29uc3QgQUNUSVZFX1RBQl9LRVkgPSBcIkBAX19FTUlUVEVSX0FDVElWRV9LRVlfX1wiO1xuY29uc3QgUVVFUllfQ1VSUkVOVF9UQUIgPSBcIkBAX19FTUlUVEVSX1FVRVJZX0NVUlJFTlRfVEFCX19cIjtcbmNvbnN0IENVUlJFTlRfVEFCID0gXCJAQF9fRU1JVFRFUl9DVVJSRU5UX1RBQl9fXCI7XG5jb25zdCBGT1JNX0lOSkVDVEVEX1NVRkZJWCA9IFwiQEBfX0VNSVRURVJfRlJPTV9JTkpFQ1RFRF9fXCI7XG4vLyDlvZPliY3miYDlnKjohJrmnKznmoTllK/kuIAgaWRcbmNvbnN0IFVOSVFVRV9JRCA9IGBAQF9fRU1JVFRFUl8ke25ldyBEYXRlKCkudmFsdWVPZigpLnRvU3RyaW5nKCl9X19gO1xuY29uc3QgSEFORExFUl9NQVAgPSB7fTtcbmNvbnN0IE9QVElPTlNfTUFQID0ge307XG4vLyDkv53lrZggaW5qZWN0ZWQg5ZCM5q2l5YiwIGNvbnRlbnQg5Lit55qE5LqL5Lu2XG5jb25zdCBTWU5DRURfRVZFTlQgPSB7fTtcblxuY29uc3Qge1xuICBjaGVja0lzQXRJbmplY3RlZFNjcmlwdCxcbiAgY2hlY2tJc0F0Q29udGVudFNjcmlwdCxcbiAgY2hlY2tJc0F0QmFja2dyb3VuZFNjcmlwdCxcbn0gPSBjaGVja2VyO1xuY29uc3QgaXNBdEluamVjdGVkU2NyaXB0ID0gY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQoKTtcbmNvbnN0IGlzQXRDb250ZW50U2NyaXB0ID0gY2hlY2tJc0F0Q29udGVudFNjcmlwdCgpO1xuY29uc3QgaXNBdEJhY2tncm91bmRTY3JpcHQgPSBjaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0KCk7XG5cbmNvbnN0IHsgY2hyb21lIH0gPSB3aW5kb3c7XG5cbmxldCBIQVNfSU5JVCA9IGZhbHNlO1xubGV0IGN1cnJlbnRUYWIgPSBudWxsO1xubGV0IFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSID0gbnVsbDtcblxuLyoqXG4gKiDlupXlsYLnlKjmnaXlkJHlpJblub/mkq3kuovku7bnmoTmlrnms5VcbiAqIGludGVyZmFjZSBBY3Rpb24ge1xuICogICB0eXBlOiBzdHJpbmc7XG4gKiAgIHBheWxvYWQ6IEFycmF5PGFueT47XG4gKiB9XG4gKiBAcGFyYW0ge0FjdGlvbn0gYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAvLyBjb25zdCB7IGNiIH0gPSBhY3Rpb247XG4gIGlmIChpc0F0SW5qZWN0ZWRTY3JpcHQpIHtcbiAgICBsb2coXCJbZW1pdHRlcl0gZGlzcGF0Y2ggZXZlbnRcIiwgYWN0aW9uKTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudChTUEVDSUFMX0NVU1RPTV9FVkVOVF9OQU1FLCB7XG4gICAgICAgIGRldGFpbDogYWN0aW9uLFxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaXNBdENvbnRlbnRTY3JpcHQgJiYgYWN0aW9uLnR5cGUuaW5jbHVkZXMoRk9STV9JTkpFQ1RFRF9TVUZGSVgpKSB7XG4gICAgbG9nKFwiW2VtaXR0ZXJdIGRpc3BhdGNoIGV2ZW50XCIsIGFjdGlvbiwgU1lOQ0VEX0VWRU5UKTtcbiAgICAvLyDlj6/og73mmK/lkJEgaW5qZWN0ZWQg5bm/5pKt77yM5omA5Lul6ZyA6KaBIGRpc3BhdGNoRXZlbnRcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudChDVVNUT01fRVZFTlRfTkFNRSwge1xuICAgICAgICBkZXRhaWw6IGFjdGlvbixcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8g5L2/55SoIHN0b3JhZ2UubG9jYWwuc2V0IOadpeinpuWPkeaUueWPmO+8jOS7juiAjOmAmuefpeWIsOWFqOmDqOaciSBvbkNoYW5nZWQuYWRkTGlzdGVuZXIg55qE5Zyw5pa5XG4gIGNvbnN0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICBbVElNRV9LRVldOiBjdXJyZW50LFxuICAgIFtEQVRBX0tFWV06IHtcbiAgICAgIHZhbHVlOiBjdXJyZW50LFxuICAgICAgdHlwZTogYWN0aW9uLnR5cGUsXG4gICAgICBwYXlsb2FkOiBhY3Rpb24ucGF5bG9hZCxcbiAgICB9LFxuICB9KTtcbn1cbmxldCBJTkpFQ1RFRF9FVkVOVF9IQU5ETEVSID0gbnVsbDtcbmxldCBDT05URU5UX0VWRU5UX0hBTkRMRVIgPSBudWxsO1xuLyoqXG4gKiDlupXlsYLnlKjmnaXnm5HlkKzlhajlsYDnmoTmiYDmnInkuovku7bvvIzlj6/ku6XnkIbop6PkuLrkuIDkuKrjgIzlub/mkq3kuK3lv4PjgI1cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbmZ1bmN0aW9uIGFkZFN0b3JlTGlzdGVuZXIoY2IpIHtcbiAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCkge1xuICAgIC8vIGxvZygnW2luamVjdGVkXSBsaXN0ZW5lciBjdXN0b20gZXZlbnQnKTtcbiAgICBJTkpFQ1RFRF9FVkVOVF9IQU5ETEVSID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gcmVjZWl2ZSBldmVudFwiLCBldmVudC5kZXRhaWwpO1xuICAgICAgY2IoZXZlbnQuZGV0YWlsKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKENVU1RPTV9FVkVOVF9OQU1FLCBJTkpFQ1RFRF9FVkVOVF9IQU5ETEVSKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzQXRDb250ZW50U2NyaXB0KSB7XG4gICAgQ09OVEVOVF9FVkVOVF9IQU5ETEVSID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gcmVjZWl2ZSBldmVudFwiLCBldmVudC5kZXRhaWwpO1xuICAgICAgY2IoZXZlbnQuZGV0YWlsKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUsIENPTlRFTlRfRVZFTlRfSEFORExFUik7XG4gIH1cbiAgU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIgPSAoY2hhbmdlcykgPT4ge1xuICAgIGNvbnN0IF9fZGF0YV9fID0gY2hhbmdlc1tEQVRBX0tFWV07XG4gICAgLy8gY2xlYXIg5pe26LWw6L+Z6YeMXG4gICAgaWYgKF9fZGF0YV9fID09PSB1bmRlZmluZWQgfHwgX19kYXRhX18ubmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1RJTUVfS0VZLCBEQVRBX0tFWV0pO1xuICAgIGNvbnN0IGFjdGlvbiA9IF9fZGF0YV9fLm5ld1ZhbHVlO1xuICAgIGNiKGFjdGlvbik7XG4gIH07XG4gIGxvZyhcIltlbWl0dGVyXSBhZGQgc3RvcmFnZSBsaXN0ZW5lclwiKTtcbiAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSKTtcbn1cbi8qKlxuICog56e76Zmk5omA5pyJ55uR5ZCs5ZmoXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZVN0b3JlTGlzdGVuZXIoKSB7XG4gIGxvZyhcIltlbWl0dGVyXSByZW1vdmUgYWxsIGxpc3RlbmVyc1wiKTtcbiAgaWYgKElOSkVDVEVEX0VWRU5UX0hBTkRMRVIpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihDVVNUT01fRVZFTlRfTkFNRSwgSU5KRUNURURfRVZFTlRfSEFORExFUik7XG4gIH1cbiAgaWYgKENPTlRFTlRfRVZFTlRfSEFORExFUikge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSxcbiAgICAgIENPTlRFTlRfRVZFTlRfSEFORExFUlxuICAgICk7XG4gIH1cbiAgaWYgKGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5oYXNMaXN0ZW5lcnMoKSkge1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihTVE9SQUdFX0NIQU5HRURfSEFORExFUik7XG4gIH1cbn1cblxuY29uc3QgZW1pdHRlciA9IHtcbiAgLyoqXG4gICAqIOeUqOadpeWPkeWHuuS6i+S7tueahOaWueazlVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSAgey4uLmFueX0gcGFyYW1zXG4gICAqL1xuICBlbWl0KGV2ZW50TmFtZSwgLi4ucGFyYW1zKSB7XG4gICAgbGV0IG5hbWUgPSBldmVudE5hbWU7XG5cbiAgICBjb25zdCBpc0V2ZW50RnJvbUluamVjdGVkID1cbiAgICAgIGlzQXRJbmplY3RlZFNjcmlwdCAmJiBldmVudE5hbWUgIT09IFNZTkNfRVZFTlRfVE9fQ09OVEVOVDtcbiAgICBpZiAoaXNFdmVudEZyb21JbmplY3RlZCkge1xuICAgICAgbmFtZSA9IGV2ZW50TmFtZSArIEZPUk1fSU5KRUNURURfU1VGRklYO1xuICAgIH1cbiAgICBsb2coXG4gICAgICBcIltlbWl0dGVyXSBlbWl0IGV2ZW50XCIsXG4gICAgICBuYW1lLFxuICAgICAgXCJvcmlnaW5hbCBldmVudCBuYW1lIGlzXCIsXG4gICAgICBldmVudE5hbWUsXG4gICAgICBcImFuZCBwYXJhbXMgaXNcIixcbiAgICAgIHBhcmFtc1xuICAgICk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogbmFtZSxcbiAgICAgIHBheWxvYWQ6IHBhcmFtcyxcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOebkeWQrOS6i+S7tlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAgICogaW50ZXJmYWNlIE9wdGlvbnMge1xuICAgKiAgIC8vIOWPquacieW9k+ivpSB0YWIg5piv5b2T5YmN5bGV56S655qE77yM5omN6LCD55SoXG4gICAqICAgYWN0aXZlOiBib29sZWFuO1xuICAgKiB9XG4gICAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9uc1xuICAgKi9cbiAgb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgbGV0IG5hbWUgPSBldmVudE5hbWU7XG4gICAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCkge1xuICAgICAgLy8g5aaC5p6c5piv5ZyoIGluc2VydGVkIOS4reebkeWQrOS6i+S7tu+8jOmAmuefpSBjb250ZW50IOebkeWQrOivpeS6i+S7tu+8jGluamVjdGVkIOWGheebkeWQrOS4gOS4quS/ruaUuei/h+eahOS6i+S7tlxuICAgICAgbmFtZSA9IGV2ZW50TmFtZSArIEZPUk1fSU5KRUNURURfU1VGRklYO1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIHN5bmMgZXZlbnQgbGlzdGVuZXIgdG8gY29udGVudFwiLCBuYW1lKTtcbiAgICAgIGVtaXR0ZXIuZW1pdChTWU5DX0VWRU5UX1RPX0NPTlRFTlQsIGV2ZW50TmFtZSwgbmFtZSk7XG4gICAgfVxuICAgIEhBTkRMRVJfTUFQW25hbWVdID0gaGFuZGxlcjtcbiAgfSxcbiAgcmVtb3ZlKGV2ZW50TmFtZSkge1xuICAgIGRlbGV0ZSBIQU5ETEVSX01BUFtldmVudE5hbWVdO1xuICB9LFxuICBjb25maWcobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIEVNSVRURVJfQ09ORklHO1xuICAgIH1cbiAgICBFTUlUVEVSX0NPTkZJR1tuYW1lXSA9IHZhbHVlO1xuICAgIHJldHVybiBFTUlUVEVSX0NPTkZJRztcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGlmIChIQVNfSU5JVCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsb2coXCJbZW1pdHRlcl0gaW5pdCBldmVudCBsaXN0ZW5lcnNcIik7XG4gIGFkZFN0b3JlTGlzdGVuZXIoKGFjdGlvbikgPT4ge1xuICAgIGxvZyhcbiAgICAgIFwiW2VtaXR0ZXJdIGFkZFN0b3JlTGlzdGVuZXIgcmVjZWl2ZSBldmVudCBhbmQgYWN0aW9uIGlzXCIsXG4gICAgICBhY3Rpb24udHlwZSxcbiAgICAgIEhBTkRMRVJfTUFQLFxuICAgICAgU1lOQ0VEX0VWRU5UXG4gICAgKTtcbiAgICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcblxuICAgIC8vIOWmguaenOaYryBpbmplY3RlZCDor7fmsYIgY29udGVudCDlkIzmraXnm5HlkKzkuovku7bnmoTor7fmsYJcbiAgICBpZiAoaXNBdENvbnRlbnRTY3JpcHQgJiYgdHlwZSA9PT0gU1lOQ19FVkVOVF9UT19DT05URU5UKSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gc2F2ZSBzeW5jZWQgZXZlbnRcIiwgYWN0aW9uLnR5cGUpO1xuICAgICAgY29uc3QgW29yaWdpbmFsRXZlbnROYW1lLCBtb2RpZmllZEV2ZW50TmFtZV0gPSBwYXlsb2FkO1xuICAgICAgU1lOQ0VEX0VWRU5UW29yaWdpbmFsRXZlbnROYW1lXSA9IG1vZGlmaWVkRXZlbnROYW1lO1xuXG4gICAgICBIQU5ETEVSX01BUFtvcmlnaW5hbEV2ZW50TmFtZV0gPSAoLi4ucGFyYW1zKSA9PiB7XG4gICAgICAgIC8vIGxvZyhcIltlbWl0dGVyXSBldmVudCBmcm9tIGluamVjdGVkIHNvIGVtaXQgdG8gaW5qZWN0ZWRcIik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBtb2RpZmllZEV2ZW50TmFtZSxcbiAgICAgICAgICBwYXlsb2FkOiBwYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBdENvbnRlbnRTY3JpcHQgJiYgdHlwZS5pbmNsdWRlcyhGT1JNX0lOSkVDVEVEX1NVRkZJWCkpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSBjaGVjayBpcyBzeW5jZWQgZXZlbnRcIiwgYWN0aW9uLnR5cGUpO1xuICAgICAgLy8g5aaC5p6c5pivIGNvbnRlbnQg5bm25LiU5pS25Yiw55qE5LqL5Lu25piv55SxIGluamVjdGVkIOWPkeWHuueahO+8jOWFiOeci+eci+aYr+WQpuaYr+WPkee7meiHquW3seeahFxuICAgICAgY29uc3QgbmFtZSA9IHR5cGUucmVwbGFjZShGT1JNX0lOSkVDVEVEX1NVRkZJWCwgXCJcIik7XG4gICAgICBjb25zdCBoYW5kbGVyID0gSEFORExFUl9NQVBbbmFtZV07XG4gICAgICBpZiAoaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGhhbmRsZXIoLi4ucGF5bG9hZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIOS4jeaYr+WPkee7meiHquW3sSBjb250ZW5077yM6YKj5bCx5YaN5ZCR5aSW5bm/5pKt5LiA5qyhXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IG5hbWUsXG4gICAgICAgIHBheWxvYWQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDlpoLmnpzmmK8gY29udGVudCDlj5HpgIHliLAgaW5qZWN0ZWQg55qE5LqL5Lu2XG4gICAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCAmJiBIQU5ETEVSX01BUFt0eXBlICsgRk9STV9JTkpFQ1RFRF9TVUZGSVhdKSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gY2hlY2sgaXMgc3luY2VkIGV2ZW50XCIsIGFjdGlvbi50eXBlKTtcbiAgICAgIEhBTkRMRVJfTUFQW3R5cGUgKyBGT1JNX0lOSkVDVEVEX1NVRkZJWF0oLi4ucGF5bG9hZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlciA9IEhBTkRMRVJfTUFQW3R5cGVdO1xuXG4gICAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdXCIsIFwiYXRcIiwgdHlwZSwgXCJsaXN0ZW5lciBpcyBub3QgZXhpc3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlciguLi5wYXlsb2FkKTtcbiAgfSk7XG5cbiAgLy8g6L+Z5Lik5Liq55So5p2l5a6e546w5Y+q5ZCR5Y2V5LiqIHRhYiDlj5HpgIHmtojmga9cbiAgaWYgKGlzQXRDb250ZW50U2NyaXB0ICYmIGN1cnJlbnRUYWIgPT09IG51bGwpIHtcbiAgICBlbWl0dGVyLmVtaXQoUVVFUllfQ1VSUkVOVF9UQUIsIFVOSVFVRV9JRCk7XG4gICAgZW1pdHRlci5vbihVTklRVUVfSUQsICh0YWIpID0+IHtcbiAgICAgIGN1cnJlbnRUYWIgPSB0YWI7XG4gICAgICB3aW5kb3dbQ1VSUkVOVF9UQUJdID0gdGFiO1xuICAgIH0pO1xuICB9XG4gIGlmIChpc0F0QmFja2dyb3VuZFNjcmlwdCkge1xuICAgIHdpbmRvdy5SRUdJU1RFUkVEX1RBQlMgPSBbXTtcbiAgICBlbWl0dGVyLm9uKFFVRVJZX0NVUlJFTlRfVEFCLCAoZnJvbSkgPT4ge1xuICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpID0+IHtcbiAgICAgICAgd2luZG93W0FDVElWRV9UQUJfS0VZXSA9IHRhYnNbMF07XG4gICAgICAgIGVtaXR0ZXIuZW1pdChmcm9tLCB0YWJzWzBdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIEhBU19JTklUID0gdHJ1ZTtcbn1cblxuaW5pdCgpO1xuXG5mdW5jdGlvbiB0YWJDaGFuZ2VIYW5kbGVyKCkge1xuICBsb2coJ1tlbWl0dGVyXScsIEVNSVRURVJfQ09ORklHLnJlbW92ZUxpc3RlbmVyV2hlblRhYkhpZGRlbiwgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlKTtcbiAgaWYgKEVNSVRURVJfQ09ORklHLnJlbW92ZUxpc3RlbmVyV2hlblRhYkhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbG9nKFwiW2VtaXR0ZXJdIGRvY3VtZW50IHZpc2libGUgY2hhbmdlZFwiLCBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpO1xuICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSBcInZpc2libGVcIikge1xuICAgIGlmIChcbiAgICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5oYXNMaXN0ZW5lcnMoKSAmJlxuICAgICAgU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIgIT09IG51bGxcbiAgICApIHtcbiAgICAgIC8vIOWcqCB0YWIg5YiH5o2i5pe25rOo6ZSA5o6J55uR5ZCsXG4gICAgICByZW1vdmVTdG9yZUxpc3RlbmVyKCk7XG4gICAgICBIQVNfSU5JVCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgaW5pdCgpO1xufVxuaWYgKGlzQXRDb250ZW50U2NyaXB0KSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIHRhYkNoYW5nZUhhbmRsZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbWl0dGVyO1xuIiwiY29uc3QgY2hlY2tlciA9IHJlcXVpcmUoXCIuL2NoZWNrZXJcIik7XG5cbmNvbnN0IERFQlVHR0VSID0gZmFsc2U7XG4vLyBjb25zdCBERUJVR0dFUiA9IHRydWU7XG5cbmNvbnN0IHsgZ2V0Q3VycmVudFNjcmlwdE5hbWUgfSA9IGNoZWNrZXI7XG5cbmNvbnN0IGN1cnJlbnRTY3JpcHROYW1lID0gZ2V0Q3VycmVudFNjcmlwdE5hbWUoKSB8fCBcIlVOS05PV05cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nKC4uLnBhcmFtcykge1xuICBpZiAoREVCVUdHRVIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGluZm8gPSBbY3VycmVudFNjcmlwdE5hbWUsIC4uLnBhcmFtc107XG4gIGNvbnNvbGUubG9nKC4uLmluZm8pO1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZW50KG1zZykge1xuICBjb25zdCBjb250ZW50ID0gYCR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0gLSAke21zZ31gO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRKcyhzcmMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHNjcmlwdC5zcmMgPSBzcmM7XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpeGVkQ29udGFpbmVyKGlkLCBjb250ZW50LCBzdHlsZXMgPSAnJykge1xuICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgJGNvbnRhaW5lci5zdHlsZSA9XG4gICAgXCJ6LWluZGV4OiA5OTk7IHBvc2l0aW9uOiBmaXhlZDsgcmlnaHQ6IDIwcHg7IHRvcDogMjBweDsgcGFkZGluZzogNHB4IDEwcHg7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7XCIgKyBzdHlsZXM7XG4gICRjb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCIke2lkfVwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgdGV4dC1hbGlnbjogY2VudGVyOyBtaW4td2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDMwcHg7XCI+XG4gICR7Y29udGVudH1cbjwvZGl2PlxuYDtcbiAgcmV0dXJuICRjb250YWluZXI7XG59XG4iLCIvKipcbiAqIGludGVyZmFjZSBGaXhlZEVsZW1lbnQge1xuICogICBwb3NpdGlvbjogeyB0b3AsIGJvdHRvbSB9XG4gKiAgIHNvdXJjZTogSFRNTEVsZW1lbnRcbiAqIH1cbiAqIEByZXR1cm4ge0FycmF5PEZpeGVkRWxlbWVudD59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRml4ZWRFbGVtZW50cygpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIik7XG4gIGNvbnN0IGZpeGVkRWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIHJldHVybiBzdHlsZXMucG9zaXRpb24gPT09IFwiZml4ZWRcIiAmJiBzdHlsZXMuZGlzcGxheSAhPT0gXCJub25lXCI7XG4gIH0pO1xuICByZXR1cm4gZml4ZWRFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHRvcCwgYm90dG9tIH0gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3AsXG4gICAgICAgIGJvdHRvbSxcbiAgICAgIH0sXG4gICAgICBzb3VyY2U6IGVsZW1lbnQsXG4gICAgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBweFRvTnVtKHB4VmFsdWUpIHtcbiAgcmV0dXJuIE51bWJlcihweFZhbHVlLm1hdGNoKC9bMC05XSsvZylbMF0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUb3BGaXhlZEVsZW1lbnRzKGZpeGVkRWxlbWVudHMsIHdpbmRvd0hlaWdodCkge1xuICByZXR1cm4gZml4ZWRFbGVtZW50cy5maWx0ZXIoKGZpeGVkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgdG9wOiB0b3BTdHIsIGJvdHRvbTogYm90dG9tU3RyIH0gPSBnZXRDb21wdXRlZFN0eWxlKFxuICAgICAgZml4ZWRFbGVtZW50LnNvdXJjZVxuICAgICk7XG4gICAgY29uc3QgdG9wID0gcHhUb051bSh0b3BTdHIpO1xuICAgIGNvbnN0IGJvdHRvbSA9IHB4VG9OdW0oYm90dG9tU3RyKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiZmluZFRvcEZpeGVkRWxlbWVudHNcIiwgdG9wLCBib3R0b20sIHdpbmRvd0hlaWdodCk7XG4gICAgaWYgKHRvcCA8IHdpbmRvd0hlaWdodCAvIDIgJiYgYm90dG9tID4gd2luZG93SGVpZ2h0IC8gMikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZEJvdHRvbUZpeGVkRWxlbWVudHMoXG4gIGZpeGVkRWxlbWVudHMsXG4gIHdpbmRvd0hlaWdodFxuKSB7XG4gIHJldHVybiBmaXhlZEVsZW1lbnRzLmZpbHRlcigoZml4ZWRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyB0b3A6IHRvcFN0ciwgYm90dG9tOiBib3R0b21TdHIgfSA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgICBmaXhlZEVsZW1lbnQuc291cmNlXG4gICAgKTtcblxuICAgIGNvbnN0IHRvcCA9IHB4VG9OdW0odG9wU3RyKTtcbiAgICBjb25zdCBib3R0b20gPSBweFRvTnVtKGJvdHRvbVN0cik7XG4gICAgaWYgKHRvcCA+IHdpbmRvd0hlaWdodCAvIDIgJiYgYm90dG9tIDwgd2luZG93SGVpZ2h0IC8gMikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuY29uc3QgTUFQID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlcyA9IHt9KSB7XG4gIC8vIGNvbnNvbGUubG9nKFwic2V0U3R5bGVcIiwgZWxlbWVudCwgZWxlbWVudC5zdHlsZS5jc3NUZXh0LCBzdHlsZXMpO1xuICBNQVAuc2V0KGVsZW1lbnQsIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCk7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGVsZW1lbnQuc3R5bGVbYXR0cl0gPSBzdHlsZXNbYXR0cl07XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U3R5bGUoZWxlbWVudCkge1xuICBjb25zdCBvcmlnaW5hbENzc1RleHQgPSBNQVAuZ2V0KGVsZW1lbnQpO1xuICAvLyBjb25zb2xlLmxvZyhcInJlc2V0U3R5bGVcIiwgZWxlbWVudCwgb3JpZ2luYWxDc3NUZXh0KTtcbiAgaWYgKG9yaWdpbmFsQ3NzVGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuc3R5bGUgPSBvcmlnaW5hbENzc1RleHQgfHwgXCJcIjtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtBcnJheTxGaXhlZEVsZW1lbnQ+fSBmaXhlZEVsZW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRml4ZWRFbGVtZW50cyhmaXhlZEVsZW1lbnRzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZml4ZWRFbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBmaXhlZEVsZW1lbnRzW2ldLnNvdXJjZTtcbiAgICBzZXRTdHlsZShlbGVtZW50LCB7IGRpc3BsYXk6IFwibm9uZVwiIH0pO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd0ZpeGVkRWxlbWVudHMoZml4ZWRFbGVtZW50cykge1xuICAvLyBjb25zb2xlLmxvZyhcIjExMTEgc2hvd0ZpeGVkRWxlbWVudHNcIiwgXCJyZXNldCBzdHlsZVwiLCBmaXhlZEVsZW1lbnRzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaXhlZEVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGZpeGVkRWxlbWVudHNbaV0uc291cmNlO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiMjIyIHNob3dGaXhlZEVsZW1lbnRzXCIsIFwicmVzZXQgc3R5bGVcIik7XG4gICAgcmVzZXRTdHlsZShlbGVtZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IGVtaXR0ZXIgZnJvbSBcIi4uL2Nocm9tZS1lbWl0dGVyXCI7XG5pbXBvcnQgKiBhcyBmaXhlZEVsZW1lbnRVdGlscyBmcm9tIFwiLi9maXhlZEVsZW1lbnRcIjtcblxuLyoqXG4gKiDlr7npobXpnaLmiKrlm75cbiAqIEBwYXJhbSB7Kn0gdGltZXNcbiAqL1xuZnVuY3Rpb24gc2NyZWVuc2hvdChjYW52YXNEYXRhLCBjYiwgdGltZXMgPSAwLCBvcmlnaW5hbFNjcm9sbFRvcCkge1xuICBjb25zdCB7XG4gICAgc2l6ZTogeyBwYWdlSGVpZ2h0IH0sXG4gICAgdGFibGU6IHsgcm93cyB9LFxuICAgIHRvcEZpeGVkRWxlbWVudHMsXG4gICAgYm90dG9tRml4ZWRFbGVtZW50cyxcbiAgfSA9IGNhbnZhc0RhdGE7XG4gIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgc2NyZWVuc2hvdFwiLCB0aW1lcywgcm93cyk7XG5cbiAgaWYgKHRpbWVzID09PSByb3dzKSB7XG4gICAgZml4ZWRFbGVtZW50VXRpbHMuc2hvd0ZpeGVkRWxlbWVudHModG9wRml4ZWRFbGVtZW50cyk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIG9yaWdpbmFsU2Nyb2xsVG9wKTtcbiAgICBmaXhlZEVsZW1lbnRVdGlscy5yZXNldFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgIGVtaXR0ZXIucmVtb3ZlKFwic2NyZWVuc2hvdFNpbmdsZVNjcmVlbkNvbXBsZXRlXCIpO1xuICAgIG1lcmdlSW1hZ2VzKGNhbnZhc0RhdGEsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHJvd3MgIT09IDEpIHtcbiAgICBpZiAodGltZXMgPT09IDApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGlkZSBib3R0b20gZml4ZWQgZWxlbWVudHNcIiwgYm90dG9tRml4ZWRFbGVtZW50cyk7XG4gICAgICBmaXhlZEVsZW1lbnRVdGlscy5oaWRlRml4ZWRFbGVtZW50cyhib3R0b21GaXhlZEVsZW1lbnRzKTtcbiAgICB9XG4gICAgaWYgKHJvd3MgPiAxICYmIHRpbWVzID09PSAxKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImhpZGUgdG9wIGZpeGVkIGVsZW1lbnRzXCIsIHRvcEZpeGVkRWxlbWVudHMpO1xuICAgICAgZml4ZWRFbGVtZW50VXRpbHMuaGlkZUZpeGVkRWxlbWVudHModG9wRml4ZWRFbGVtZW50cyk7XG4gICAgfVxuICAgIGlmICh0aW1lcyA9PT0gcm93cyAtIDEpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hvdyBib3R0b20gZml4ZWQgZWxlbWVudHNcIiwgYm90dG9tRml4ZWRFbGVtZW50cyk7XG4gICAgICBmaXhlZEVsZW1lbnRVdGlscy5zaG93Rml4ZWRFbGVtZW50cyhib3R0b21GaXhlZEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBlbWl0dGVyLmVtaXQoXCJzY3JlZW5zaG90XCIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZUltYWdlcyhjYW52YXNEYXRhLCBjYikge1xuICBjb25zdCB7XG4gICAgc2NyZWVuc2hvdHMsXG4gICAgc2l6ZTogeyBwYWdlV2lkdGgsIHBhZ2VIZWlnaHQsIGZ1bGxXaWR0aCwgZnVsbEhlaWdodCB9LFxuICB9ID0gY2FudmFzRGF0YTtcblxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSBmdWxsV2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBmdWxsSGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIC8vIOS7juS4i+W+gOS4iue7mOWItlxuICBsZXQgaW5kZXggPSBzY3JlZW5zaG90cy5sZW5ndGggLSAxO1xuICBmdW5jdGlvbiBkcmF3KHNjcmVlbnNob3QpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IGRyYXdcIiwgaW5kZXgpO1xuICAgIGNvbnN0IHRlbXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNjcmVlbnNob3QuZGF0YV91cmwpO1xuICAgIHRlbXBJbWFnZS5zcmMgPSBzY3JlZW5zaG90LnVybDtcbiAgICB0ZW1wSW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgbGV0IHkgPSBpbmRleCAqIHBhZ2VIZWlnaHQ7XG4gICAgICAvLyDlpoLmnpzmmK/mnIDlkI7kuIDlvKBcbiAgICAgIGlmIChpbmRleCA9PT0gc2NyZWVuc2hvdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCByZWFsSGVpZ2h0T2ZMYXN0U2NyZWVuc2hvdCA9IGZ1bGxIZWlnaHQgJSBwYWdlSGVpZ2h0O1xuICAgICAgICAvLyB5ID0gcGFnZUhlaWdodCAtIHJlYWxIZWlnaHRPZkxhc3RTY3JlZW5zaG90O1xuICAgICAgICB5ID0gZnVsbEhlaWdodCAtIHBhZ2VIZWlnaHQ7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInkgcG9zaXRpb25cIiwgeSk7XG4gICAgICBjb25zdCBoID0gKHBhZ2VXaWR0aCAqIHRlbXBJbWFnZS5oZWlnaHQpIC8gdGVtcEltYWdlLndpZHRoO1xuICAgICAgY3R4LmRyYXdJbWFnZSh0ZW1wSW1hZ2UsIDAsIHksIHBhZ2VXaWR0aCwgaCk7XG4gICAgICBpbmRleCAtPSAxO1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICBjYihjYW52YXMsIGNhbnZhc0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyYXcoc2NyZWVuc2hvdHNbaW5kZXhdKTtcbiAgICB9O1xuICB9XG5cbiAgZHJhdyhzY3JlZW5zaG90c1tpbmRleF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKGNiKSB7XG4gIGNvbnN0IHNjcm9sbFdpZHRoID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aDtcbiAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XG4gIGNvbnN0IHZpc2libGVXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgY29uc3QgdmlzaWJsZUhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgLy8g5qC55o2u5Y+v6KeG5Yy65Z+f6K6h566X5pW05Liq572R6aG15Y+v5Lul5ouG5YiG5oiQ5aSa5bCR6KGM5aSa5bCR5YiXXG4gIGNvbnN0IGNvbHVtbnMgPSBNYXRoLmNlaWwoKHNjcm9sbFdpZHRoICogMS4wKSAvIHZpc2libGVXaWR0aCk7XG4gIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwoKHNjcm9sbEhlaWdodCAqIDEuMCkgLyB2aXNpYmxlSGVpZ2h0KTtcblxuICBjb25zdCBmaXhlZEVsZW1lbnRzID0gZml4ZWRFbGVtZW50VXRpbHMuZmluZEZpeGVkRWxlbWVudHMoKTtcbiAgLy8gY29uc29sZS5sb2coXCJmaXhlZCBlbGVtZW50c1wiLCBmaXhlZEVsZW1lbnRzKTtcbiAgY29uc3QgdG9wRml4ZWRFbGVtZW50cyA9IGZpeGVkRWxlbWVudFV0aWxzLmZpbmRUb3BGaXhlZEVsZW1lbnRzKFxuICAgIGZpeGVkRWxlbWVudHMsXG4gICAgdmlzaWJsZUhlaWdodFxuICApO1xuICAvLyBjb25zb2xlLmxvZyhcInRvcCBmaXhlZCBlbGVtZW50c1wiLCB0b3BGaXhlZEVsZW1lbnRzKTtcbiAgY29uc3QgYm90dG9tRml4ZWRFbGVtZW50cyA9IGZpeGVkRWxlbWVudFV0aWxzLmZpbmRCb3R0b21GaXhlZEVsZW1lbnRzKFxuICAgIGZpeGVkRWxlbWVudHMsXG4gICAgdmlzaWJsZUhlaWdodFxuICApO1xuICAvLyBjb25zb2xlLmxvZyhcImJvdHRvbSBmaXhlZCBlbGVtZW50c1wiLCBib3R0b21GaXhlZEVsZW1lbnRzKTtcbiAgY29uc3QgY2FudmFzRGF0YSA9IHtcbiAgICBzaXplOiB7XG4gICAgICBmdWxsV2lkdGg6IHNjcm9sbFdpZHRoLFxuICAgICAgZnVsbEhlaWdodDogc2Nyb2xsSGVpZ2h0LFxuICAgICAgcGFnZVdpZHRoOiB2aXNpYmxlV2lkdGgsXG4gICAgICBwYWdlSGVpZ2h0OiB2aXNpYmxlSGVpZ2h0LFxuICAgIH0sXG4gICAgdGFibGU6IHsgcm93czogcm93cywgY29sdW1uczogY29sdW1ucyB9LFxuICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICB0b3BGaXhlZEVsZW1lbnRzLFxuICAgIGJvdHRvbUZpeGVkRWxlbWVudHMsXG4gIH07XG5cbiAgbGV0IHRpbWVzID0gMDtcbiAgY29uc3Qgb3JpZ2luYWxTY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gIC8vIOWujOaIkOS4gOWxj+aIquWbvlxuICBlbWl0dGVyLm9uKFwic2NyZWVuc2hvdFNpbmdsZVNjcmVlbkNvbXBsZXRlXCIsICh1cmwpID0+IHtcbiAgICBjYW52YXNEYXRhLnNjcmVlbnNob3RzLnB1c2goe1xuICAgICAgcm93OiB0aW1lcyxcbiAgICAgIGNvbHVtbjogMCxcbiAgICAgIHVybCxcbiAgICB9KTtcbiAgICB0aW1lcyArPSAxO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0aW1lcyAqIHZpc2libGVIZWlnaHQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2NyZWVuc2hvdChjYW52YXNEYXRhLCBjYiwgdGltZXMsIG9yaWdpbmFsU2Nyb2xsVG9wKTtcbiAgICB9LCAxMjAwKTtcbiAgfSk7XG5cbiAgZml4ZWRFbGVtZW50VXRpbHMuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9KTtcblxuICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGltZXMgKiB2aXNpYmxlSGVpZ2h0KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2NyZWVuc2hvdChjYW52YXNEYXRhLCBjYiwgdGltZXMsIG9yaWdpbmFsU2Nyb2xsVG9wKTtcbiAgfSwgMTIwMCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=content.js.map