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
  console.log('start screenshot');
  Object(_utils_screenshot__WEBPACK_IMPORTED_MODULE_2__["default"])((canvas, canvasData) => {
    console.log(canvasData.size, canvasData.table, canvasData.screenshots);
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

    console.log("findTopFixedElements", top, bottom, windowHeight);
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
  console.log("setStyle", element, element.style.cssText, styles);
  MAP.set(element, element.style.cssText);
  Object.keys(styles).forEach((attr) => {
    element.style[attr] = styles[attr];
  });
}
function resetStyle(element) {
  const originalCssText = MAP.get(element);
  console.log("resetStyle", element, originalCssText);
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
  console.log("1111 showFixedElements", "reset style", fixedElements);
  for (let i = 0; i < fixedElements.length; i += 1) {
    const element = fixedElements[i].source;
    console.log("222 showFixedElements", "reset style");
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
  console.log("start screenshot", times, rows);

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
      console.log("hide bottom fixed elements", bottomFixedElements);
      _fixedElement__WEBPACK_IMPORTED_MODULE_1__["hideFixedElements"](bottomFixedElements);
    }
    if (rows > 1 && times === 1) {
      console.log("hide top fixed elements", topFixedElements);
      _fixedElement__WEBPACK_IMPORTED_MODULE_1__["hideFixedElements"](topFixedElements);
    }
    if (times === rows - 1) {
      console.log("show bottom fixed elements", bottomFixedElements);
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
    console.log("start draw", index);
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
      console.log("y position", y);
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
  console.log("fixed elements", fixedElements);
  const topFixedElements = _fixedElement__WEBPACK_IMPORTED_MODULE_1__["findTopFixedElements"](
    fixedElements,
    visibleHeight
  );
  console.log("top fixed elements", topFixedElements);
  const bottomFixedElements = _fixedElement__WEBPACK_IMPORTED_MODULE_1__["findBottomFixedElements"](
    fixedElements,
    visibleHeight
  );
  console.log("bottom fixed elements", bottomFixedElements);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nocm9tZS1lbWl0dGVyL2NoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nocm9tZS1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaHJvbWUtZW1pdHRlci9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zY3JlZW5zaG90L2ZpeGVkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NyZWVuc2hvdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FB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QkFBOEIscUVBQXlDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVksK0JBQStCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHVEQUFPO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSCxFQUFFLHNEQUEwQixpQkFBaUIscUJBQXFCOztBQUVsRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvbnRlbnQuanNcIik7XG4iLCIvKipcbiAqIEBmaWxlIGNvbnRlbnQg6ISa5pysXG4gKi9cbmltcG9ydCBlbWl0dGVyIGZyb20gJy4vdXRpbHMvY2hyb21lLWVtaXR0ZXInO1xuXG5pbXBvcnQgeyBnZXRDb250ZW50LCBsb2FkSnMsIGNyZWF0ZUZpeGVkQ29udGFpbmVyIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgc2NyZWVuc2hvdCBmcm9tICcuL3V0aWxzL3NjcmVlbnNob3QnO1xuXG5lbWl0dGVyLmNvbmZpZygncmVtb3ZlTGlzdGVuZXJXaGVuVGFiSGlkZGVuJywgZmFsc2UpO1xuXG5jb25zdCBDT05UQUlORVJfSUQgPSAnX19lbWl0dGVyX2NvbnRlbnRfaWRfXyc7XG5cbmNvbnN0ICRjb250YWluZXIgPSBjcmVhdGVGaXhlZENvbnRhaW5lcihDT05UQUlORVJfSUQsICfnlLEgY29udGVudCDmj5LlhaXpobXpnaInKTtcbiRjb250YWluZXIub25jbGljayA9ICgpID0+IHtcbiAgZW1pdHRlci5lbWl0KCdjb250ZW50LXRvLWluamVjdGVkJywgJ2hlbGxvIGkgYW0gY29udGVudCcpO1xuICBlbWl0dGVyLmVtaXQoJ2NvbnRlbnQtdG8tb3B0aW9ucycsICdoZWxsbyBpIGFtIGNvbnRlbnQnKTtcbiAgZW1pdHRlci5lbWl0KCdjb250ZW50LXRvLWJhY2tncm91bmQnLCAnaGVsbG8gaSBhbSBjb250ZW50Jyk7XG59XG5cbmRvY3VtZW50LmJvZHkub25sb2FkID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCRjb250YWluZXIpO1xufVxuXG5sb2FkSnMoY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoXCIvaW5qZWN0ZWQuanNcIikpXG4gIC50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW2NvbnRlbnRdJywgJ2luc2VydGVkIGxvYWRlZCcpO1xuICB9KTtcblxuZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyKGNvbnRlbnQpIHtcbiAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0NPTlRBSU5FUl9JRH1gKTtcbiAgJGNvbnRhaW5lci5pbm5lclRleHQgPSBjb250ZW50O1xufVxuXG5lbWl0dGVyLm9uKCdwb3B1cC10by1jb250ZW50JywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICB1cGRhdGVDb250YWluZXIoY29udGVudCk7XG4gIGNvbnNvbGUubG9nKCdbY29udGVudF0gZnJvbSBwb3B1cCcsIGNvbnRlbnQpO1xufSk7XG5lbWl0dGVyLm9uKCdvcHRpb25zLXRvLWNvbnRlbnQnLCAobXNnKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4gIHVwZGF0ZUNvbnRhaW5lcihjb250ZW50KTtcbiAgY29uc29sZS5sb2coJ1tjb250ZW50XSBmcm9tIG9wdGlvbnMnLCBjb250ZW50KTtcbn0pO1xuZW1pdHRlci5vbignYmFja2dyb3VuZC10by1jb250ZW50JywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICB1cGRhdGVDb250YWluZXIoY29udGVudCk7XG4gIGNvbnNvbGUubG9nKCdbY29udGVudF0gZnJvbSBiYWNrZ3JvdW5kJywgY29udGVudCk7XG59KTtcbmVtaXR0ZXIub24oJ2luamVjdGVkLXRvLWNvbnRlbnQnLCAobXNnKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4gIHVwZGF0ZUNvbnRhaW5lcihjb250ZW50KTtcbiAgY29uc29sZS5sb2coJ1tjb250ZW50XSBmcm9tIGluc2VydGVkJywgY29udGVudCk7XG59KTtcblxuZW1pdHRlci5vbignc3RhcnRTY3JlZW5zaG90JywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnc3RhcnQgc2NyZWVuc2hvdCcpO1xuICBzY3JlZW5zaG90KChjYW52YXMsIGNhbnZhc0RhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjYW52YXNEYXRhLnNpemUsIGNhbnZhc0RhdGEudGFibGUsIGNhbnZhc0RhdGEuc2NyZWVuc2hvdHMpO1xuICAgIGNvbnN0IHVybCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgIGVtaXR0ZXIuZW1pdCgnb3Blbk5ld1RhYicsIHVybCk7XG4gIH0pO1xufSk7XG4iLCJjb25zdCBTQ1JJUFRTID0ge1xuICBOT05FOiAwLFxuICBDT05URU5UOiAxLFxuICBJTkpFQ1RFRDogMixcbiAgQkFDS0dST1VORDogMyxcbiAgUE9QVVA6IDQsXG4gIE9QVElPTlM6IDUsXG59O1xuY29uc3QgU0NSSVBUX05BTUVTID0ge1xuICAwOiBcIk5PTkVcIixcbiAgMTogXCJDT05URU5UXCIsXG4gIDI6IFwiSU5KRUNURURcIixcbiAgMzogXCJCQUNLR1JPVU5EXCIsXG4gIDQ6IFwiUE9QVVBcIixcbiAgNTogXCJPUFRJT05TXCIsXG59O1xuY29uc3QgeyBjaHJvbWUgfSA9IHdpbmRvdztcbmZ1bmN0aW9uIGNoZWNrU2NyaXB0KCkge1xuICBpZiAoY2hyb21lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gU0NSSVBUUy5OT05FO1xuICB9XG4gIGlmIChjaHJvbWUuc3RvcmFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFNDUklQVFMuSU5KRUNURUQ7XG4gIH1cbiAgaWYgKGNocm9tZS50YWJzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gU0NSSVBUUy5DT05URU5UO1xuICB9XG4gIGNvbnN0IGJnV2luZG93ID0gY2hyb21lLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO1xuICBpZiAod2luZG93ID09PSBiZ1dpbmRvdykge1xuICAgIHJldHVybiBTQ1JJUFRTLkJBQ0tHUk9VTkQ7XG4gIH1cbiAgY29uc3Qgdmlld3MgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFZpZXdzKHsgdHlwZTogXCJwb3B1cFwiIH0pO1xuICBpZiAodmlld3MubGVuZ3RoICE9PSAwKSB7XG4gICAgcmV0dXJuIFNDUklQVFMuUE9QVVA7XG4gIH1cbiAgcmV0dXJuIFNDUklQVFMuT1BUSU9OUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNBdENvbnRlbnRTY3JpcHQoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLkNPTlRFTlQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLklOSkVDVEVEO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNBdEJhY2tncm91bmRTY3JpcHQoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLkJBQ0tHUk9VTkQ7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0F0UG9wdXAoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLlBPUFVQO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNBdE9wdGlvbnMoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLk9QVElPTlM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0TmFtZSgpIHtcbiAgcmV0dXJuIFNDUklQVF9OQU1FU1tjaGVja1NjcmlwdCgpXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRDdXJyZW50U2NyaXB0TmFtZSxcbiAgY2hlY2tJc0F0QmFja2dyb3VuZFNjcmlwdCxcbiAgY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQsXG4gIGNoZWNrSXNBdENvbnRlbnRTY3JpcHQsXG59O1xuIiwiaW1wb3J0IGNoZWNrZXIgZnJvbSBcIi4vY2hlY2tlclwiO1xuaW1wb3J0IGxvZyBmcm9tIFwiLi9sb2dcIjtcblxuY29uc3QgRU1JVFRFUl9DT05GSUcgPSB7XG4gIHJlbW92ZUxpc3RlbmVyV2hlblRhYkhpZGRlbjogdHJ1ZSxcbn07XG5cbmNvbnN0IENVU1RPTV9FVkVOVF9OQU1FID0gXCJAQF9fRU1JVFRFUl9BX19cIjtcbmNvbnN0IFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUgPSBcIkBAX19FTUlUVEVSX0JfX1wiO1xuY29uc3QgU1lOQ19FVkVOVF9UT19DT05URU5UID0gXCJAQF9fU1lOQ19OQU1FX19cIjtcbmNvbnN0IFRJTUVfS0VZID0gXCJfX3RpbWVfX1wiO1xuY29uc3QgREFUQV9LRVkgPSBcIl9fZGF0YV9fXCI7XG5jb25zdCBBQ1RJVkVfVEFCX0tFWSA9IFwiQEBfX0VNSVRURVJfQUNUSVZFX0tFWV9fXCI7XG5jb25zdCBRVUVSWV9DVVJSRU5UX1RBQiA9IFwiQEBfX0VNSVRURVJfUVVFUllfQ1VSUkVOVF9UQUJfX1wiO1xuY29uc3QgQ1VSUkVOVF9UQUIgPSBcIkBAX19FTUlUVEVSX0NVUlJFTlRfVEFCX19cIjtcbmNvbnN0IEZPUk1fSU5KRUNURURfU1VGRklYID0gXCJAQF9fRU1JVFRFUl9GUk9NX0lOSkVDVEVEX19cIjtcbi8vIOW9k+WJjeaJgOWcqOiEmuacrOeahOWUr+S4gCBpZFxuY29uc3QgVU5JUVVFX0lEID0gYEBAX19FTUlUVEVSXyR7bmV3IERhdGUoKS52YWx1ZU9mKCkudG9TdHJpbmcoKX1fX2A7XG5jb25zdCBIQU5ETEVSX01BUCA9IHt9O1xuY29uc3QgT1BUSU9OU19NQVAgPSB7fTtcbi8vIOS/neWtmCBpbmplY3RlZCDlkIzmraXliLAgY29udGVudCDkuK3nmoTkuovku7ZcbmNvbnN0IFNZTkNFRF9FVkVOVCA9IHt9O1xuXG5jb25zdCB7XG4gIGNoZWNrSXNBdEluamVjdGVkU2NyaXB0LFxuICBjaGVja0lzQXRDb250ZW50U2NyaXB0LFxuICBjaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0LFxufSA9IGNoZWNrZXI7XG5jb25zdCBpc0F0SW5qZWN0ZWRTY3JpcHQgPSBjaGVja0lzQXRJbmplY3RlZFNjcmlwdCgpO1xuY29uc3QgaXNBdENvbnRlbnRTY3JpcHQgPSBjaGVja0lzQXRDb250ZW50U2NyaXB0KCk7XG5jb25zdCBpc0F0QmFja2dyb3VuZFNjcmlwdCA9IGNoZWNrSXNBdEJhY2tncm91bmRTY3JpcHQoKTtcblxuY29uc3QgeyBjaHJvbWUgfSA9IHdpbmRvdztcblxubGV0IEhBU19JTklUID0gZmFsc2U7XG5sZXQgY3VycmVudFRhYiA9IG51bGw7XG5sZXQgU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIgPSBudWxsO1xuXG4vKipcbiAqIOW6leWxgueUqOadpeWQkeWkluW5v+aSreS6i+S7tueahOaWueazlVxuICogaW50ZXJmYWNlIEFjdGlvbiB7XG4gKiAgIHR5cGU6IHN0cmluZztcbiAqICAgcGF5bG9hZDogQXJyYXk8YW55PjtcbiAqIH1cbiAqIEBwYXJhbSB7QWN0aW9ufSBhY3Rpb25cbiAqL1xuZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gIC8vIGNvbnN0IHsgY2IgfSA9IGFjdGlvbjtcbiAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCkge1xuICAgIGxvZyhcIltlbWl0dGVyXSBkaXNwYXRjaCBldmVudFwiLCBhY3Rpb24pO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUsIHtcbiAgICAgICAgZGV0YWlsOiBhY3Rpb24sXG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiBhY3Rpb24udHlwZS5pbmNsdWRlcyhGT1JNX0lOSkVDVEVEX1NVRkZJWCkpIHtcbiAgICBsb2coXCJbZW1pdHRlcl0gZGlzcGF0Y2ggZXZlbnRcIiwgYWN0aW9uLCBTWU5DRURfRVZFTlQpO1xuICAgIC8vIOWPr+iDveaYr+WQkSBpbmplY3RlZCDlub/mkq3vvIzmiYDku6XpnIDopoEgZGlzcGF0Y2hFdmVudFxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KENVU1RPTV9FVkVOVF9OQU1FLCB7XG4gICAgICAgIGRldGFpbDogYWN0aW9uLFxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyDkvb/nlKggc3RvcmFnZS5sb2NhbC5zZXQg5p2l6Kem5Y+R5pS55Y+Y77yM5LuO6ICM6YCa55+l5Yiw5YWo6YOo5pyJIG9uQ2hhbmdlZC5hZGRMaXN0ZW5lciDnmoTlnLDmlrlcbiAgY29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgIFtUSU1FX0tFWV06IGN1cnJlbnQsXG4gICAgW0RBVEFfS0VZXToge1xuICAgICAgdmFsdWU6IGN1cnJlbnQsXG4gICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgIHBheWxvYWQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgIH0sXG4gIH0pO1xufVxubGV0IElOSkVDVEVEX0VWRU5UX0hBTkRMRVIgPSBudWxsO1xubGV0IENPTlRFTlRfRVZFTlRfSEFORExFUiA9IG51bGw7XG4vKipcbiAqIOW6leWxgueUqOadpeebkeWQrOWFqOWxgOeahOaJgOacieS6i+S7tu+8jOWPr+S7peeQhuino+S4uuS4gOS4quOAjOW5v+aSreS4reW/g+OAjVxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2JcbiAqL1xuZnVuY3Rpb24gYWRkU3RvcmVMaXN0ZW5lcihjYikge1xuICBpZiAoaXNBdEluamVjdGVkU2NyaXB0KSB7XG4gICAgLy8gbG9nKCdbaW5qZWN0ZWRdIGxpc3RlbmVyIGN1c3RvbSBldmVudCcpO1xuICAgIElOSkVDVEVEX0VWRU5UX0hBTkRMRVIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSByZWNlaXZlIGV2ZW50XCIsIGV2ZW50LmRldGFpbCk7XG4gICAgICBjYihldmVudC5kZXRhaWwpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoQ1VTVE9NX0VWRU5UX05BTUUsIElOSkVDVEVEX0VWRU5UX0hBTkRMRVIpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaXNBdENvbnRlbnRTY3JpcHQpIHtcbiAgICBDT05URU5UX0VWRU5UX0hBTkRMRVIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSByZWNlaXZlIGV2ZW50XCIsIGV2ZW50LmRldGFpbCk7XG4gICAgICBjYihldmVudC5kZXRhaWwpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSwgQ09OVEVOVF9FVkVOVF9IQU5ETEVSKTtcbiAgfVxuICBTVE9SQUdFX0NIQU5HRURfSEFORExFUiA9IChjaGFuZ2VzKSA9PiB7XG4gICAgY29uc3QgX19kYXRhX18gPSBjaGFuZ2VzW0RBVEFfS0VZXTtcbiAgICAvLyBjbGVhciDml7botbDov5nph4xcbiAgICBpZiAoX19kYXRhX18gPT09IHVuZGVmaW5lZCB8fCBfX2RhdGFfXy5uZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbVElNRV9LRVksIERBVEFfS0VZXSk7XG4gICAgY29uc3QgYWN0aW9uID0gX19kYXRhX18ubmV3VmFsdWU7XG4gICAgY2IoYWN0aW9uKTtcbiAgfTtcbiAgbG9nKFwiW2VtaXR0ZXJdIGFkZCBzdG9yYWdlIGxpc3RlbmVyXCIpO1xuICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoU1RPUkFHRV9DSEFOR0VEX0hBTkRMRVIpO1xufVxuLyoqXG4gKiDnp7vpmaTmiYDmnInnm5HlkKzlmahcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlU3RvcmVMaXN0ZW5lcigpIHtcbiAgbG9nKFwiW2VtaXR0ZXJdIHJlbW92ZSBhbGwgbGlzdGVuZXJzXCIpO1xuICBpZiAoSU5KRUNURURfRVZFTlRfSEFORExFUikge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKENVU1RPTV9FVkVOVF9OQU1FLCBJTkpFQ1RFRF9FVkVOVF9IQU5ETEVSKTtcbiAgfVxuICBpZiAoQ09OVEVOVF9FVkVOVF9IQU5ETEVSKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBTUEVDSUFMX0NVU1RPTV9FVkVOVF9OQU1FLFxuICAgICAgQ09OVEVOVF9FVkVOVF9IQU5ETEVSXG4gICAgKTtcbiAgfVxuICBpZiAoY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmhhc0xpc3RlbmVycygpKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSKTtcbiAgfVxufVxuXG5jb25zdCBlbWl0dGVyID0ge1xuICAvKipcbiAgICog55So5p2l5Y+R5Ye65LqL5Lu255qE5pa55rOVXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtICB7Li4uYW55fSBwYXJhbXNcbiAgICovXG4gIGVtaXQoZXZlbnROYW1lLCAuLi5wYXJhbXMpIHtcbiAgICBsZXQgbmFtZSA9IGV2ZW50TmFtZTtcblxuICAgIGNvbnN0IGlzRXZlbnRGcm9tSW5qZWN0ZWQgPVxuICAgICAgaXNBdEluamVjdGVkU2NyaXB0ICYmIGV2ZW50TmFtZSAhPT0gU1lOQ19FVkVOVF9UT19DT05URU5UO1xuICAgIGlmIChpc0V2ZW50RnJvbUluamVjdGVkKSB7XG4gICAgICBuYW1lID0gZXZlbnROYW1lICsgRk9STV9JTkpFQ1RFRF9TVUZGSVg7XG4gICAgfVxuICAgIGxvZyhcbiAgICAgIFwiW2VtaXR0ZXJdIGVtaXQgZXZlbnRcIixcbiAgICAgIG5hbWUsXG4gICAgICBcIm9yaWdpbmFsIGV2ZW50IG5hbWUgaXNcIixcbiAgICAgIGV2ZW50TmFtZSxcbiAgICAgIFwiYW5kIHBhcmFtcyBpc1wiLFxuICAgICAgcGFyYW1zXG4gICAgKTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBuYW1lLFxuICAgICAgcGF5bG9hZDogcGFyYW1zLFxuICAgIH0pO1xuICB9LFxuICAvKipcbiAgICog55uR5ZCs5LqL5Lu2XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlclxuICAgKiBpbnRlcmZhY2UgT3B0aW9ucyB7XG4gICAqICAgLy8g5Y+q5pyJ5b2T6K+lIHRhYiDmmK/lvZPliY3lsZXnpLrnmoTvvIzmiY3osIPnlKhcbiAgICogICBhY3RpdmU6IGJvb2xlYW47XG4gICAqIH1cbiAgICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zXG4gICAqL1xuICBvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICBsZXQgbmFtZSA9IGV2ZW50TmFtZTtcbiAgICBpZiAoaXNBdEluamVjdGVkU2NyaXB0KSB7XG4gICAgICAvLyDlpoLmnpzmmK/lnKggaW5zZXJ0ZWQg5Lit55uR5ZCs5LqL5Lu277yM6YCa55+lIGNvbnRlbnQg55uR5ZCs6K+l5LqL5Lu277yMaW5qZWN0ZWQg5YaF55uR5ZCs5LiA5Liq5L+u5pS56L+H55qE5LqL5Lu2XG4gICAgICBuYW1lID0gZXZlbnROYW1lICsgRk9STV9JTkpFQ1RFRF9TVUZGSVg7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gc3luYyBldmVudCBsaXN0ZW5lciB0byBjb250ZW50XCIsIG5hbWUpO1xuICAgICAgZW1pdHRlci5lbWl0KFNZTkNfRVZFTlRfVE9fQ09OVEVOVCwgZXZlbnROYW1lLCBuYW1lKTtcbiAgICB9XG4gICAgSEFORExFUl9NQVBbbmFtZV0gPSBoYW5kbGVyO1xuICB9LFxuICByZW1vdmUoZXZlbnROYW1lKSB7XG4gICAgZGVsZXRlIEhBTkRMRVJfTUFQW2V2ZW50TmFtZV07XG4gIH0sXG4gIGNvbmZpZyhuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gRU1JVFRFUl9DT05GSUc7XG4gICAgfVxuICAgIEVNSVRURVJfQ09ORklHW25hbWVdID0gdmFsdWU7XG4gICAgcmV0dXJuIEVNSVRURVJfQ09ORklHO1xuICB9LFxufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaWYgKEhBU19JTklUID09PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxvZyhcIltlbWl0dGVyXSBpbml0IGV2ZW50IGxpc3RlbmVyc1wiKTtcbiAgYWRkU3RvcmVMaXN0ZW5lcigoYWN0aW9uKSA9PiB7XG4gICAgbG9nKFxuICAgICAgXCJbZW1pdHRlcl0gYWRkU3RvcmVMaXN0ZW5lciByZWNlaXZlIGV2ZW50IGFuZCBhY3Rpb24gaXNcIixcbiAgICAgIGFjdGlvbi50eXBlLFxuICAgICAgSEFORExFUl9NQVAsXG4gICAgICBTWU5DRURfRVZFTlRcbiAgICApO1xuICAgIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuXG4gICAgLy8g5aaC5p6c5pivIGluamVjdGVkIOivt+axgiBjb250ZW50IOWQjOatpeebkeWQrOS6i+S7tueahOivt+axglxuICAgIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiB0eXBlID09PSBTWU5DX0VWRU5UX1RPX0NPTlRFTlQpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSBzYXZlIHN5bmNlZCBldmVudFwiLCBhY3Rpb24udHlwZSk7XG4gICAgICBjb25zdCBbb3JpZ2luYWxFdmVudE5hbWUsIG1vZGlmaWVkRXZlbnROYW1lXSA9IHBheWxvYWQ7XG4gICAgICBTWU5DRURfRVZFTlRbb3JpZ2luYWxFdmVudE5hbWVdID0gbW9kaWZpZWRFdmVudE5hbWU7XG5cbiAgICAgIEhBTkRMRVJfTUFQW29yaWdpbmFsRXZlbnROYW1lXSA9ICguLi5wYXJhbXMpID0+IHtcbiAgICAgICAgLy8gbG9nKFwiW2VtaXR0ZXJdIGV2ZW50IGZyb20gaW5qZWN0ZWQgc28gZW1pdCB0byBpbmplY3RlZFwiKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IG1vZGlmaWVkRXZlbnROYW1lLFxuICAgICAgICAgIHBheWxvYWQ6IHBhcmFtcyxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiB0eXBlLmluY2x1ZGVzKEZPUk1fSU5KRUNURURfU1VGRklYKSkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIGNoZWNrIGlzIHN5bmNlZCBldmVudFwiLCBhY3Rpb24udHlwZSk7XG4gICAgICAvLyDlpoLmnpzmmK8gY29udGVudCDlubbkuJTmlLbliLDnmoTkuovku7bmmK/nlLEgaW5qZWN0ZWQg5Y+R5Ye655qE77yM5YWI55yL55yL5piv5ZCm5piv5Y+R57uZ6Ieq5bex55qEXG4gICAgICBjb25zdCBuYW1lID0gdHlwZS5yZXBsYWNlKEZPUk1fSU5KRUNURURfU1VGRklYLCBcIlwiKTtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBIQU5ETEVSX01BUFtuYW1lXTtcbiAgICAgIGlmIChoYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaGFuZGxlciguLi5wYXlsb2FkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8g5LiN5piv5Y+R57uZ6Ieq5bexIGNvbnRlbnTvvIzpgqPlsLHlho3lkJHlpJblub/mkq3kuIDmrKFcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogbmFtZSxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOWmguaenOaYryBjb250ZW50IOWPkemAgeWIsCBpbmplY3RlZCDnmoTkuovku7ZcbiAgICBpZiAoaXNBdEluamVjdGVkU2NyaXB0ICYmIEhBTkRMRVJfTUFQW3R5cGUgKyBGT1JNX0lOSkVDVEVEX1NVRkZJWF0pIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSBjaGVjayBpcyBzeW5jZWQgZXZlbnRcIiwgYWN0aW9uLnR5cGUpO1xuICAgICAgSEFORExFUl9NQVBbdHlwZSArIEZPUk1fSU5KRUNURURfU1VGRklYXSguLi5wYXlsb2FkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVyID0gSEFORExFUl9NQVBbdHlwZV07XG5cbiAgICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl1cIiwgXCJhdFwiLCB0eXBlLCBcImxpc3RlbmVyIGlzIG5vdCBleGlzdFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVyKC4uLnBheWxvYWQpO1xuICB9KTtcblxuICAvLyDov5nkuKTkuKrnlKjmnaXlrp7njrDlj6rlkJHljZXkuKogdGFiIOWPkemAgea2iOaBr1xuICBpZiAoaXNBdENvbnRlbnRTY3JpcHQgJiYgY3VycmVudFRhYiA9PT0gbnVsbCkge1xuICAgIGVtaXR0ZXIuZW1pdChRVUVSWV9DVVJSRU5UX1RBQiwgVU5JUVVFX0lEKTtcbiAgICBlbWl0dGVyLm9uKFVOSVFVRV9JRCwgKHRhYikgPT4ge1xuICAgICAgY3VycmVudFRhYiA9IHRhYjtcbiAgICAgIHdpbmRvd1tDVVJSRU5UX1RBQl0gPSB0YWI7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGlzQXRCYWNrZ3JvdW5kU2NyaXB0KSB7XG4gICAgd2luZG93LlJFR0lTVEVSRURfVEFCUyA9IFtdO1xuICAgIGVtaXR0ZXIub24oUVVFUllfQ1VSUkVOVF9UQUIsIChmcm9tKSA9PiB7XG4gICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuICAgICAgICB3aW5kb3dbQUNUSVZFX1RBQl9LRVldID0gdGFic1swXTtcbiAgICAgICAgZW1pdHRlci5lbWl0KGZyb20sIHRhYnNbMF0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgSEFTX0lOSVQgPSB0cnVlO1xufVxuXG5pbml0KCk7XG5cbmZ1bmN0aW9uIHRhYkNoYW5nZUhhbmRsZXIoKSB7XG4gIGxvZygnW2VtaXR0ZXJdJywgRU1JVFRFUl9DT05GSUcucmVtb3ZlTGlzdGVuZXJXaGVuVGFiSGlkZGVuLCBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpO1xuICBpZiAoRU1JVFRFUl9DT05GSUcucmVtb3ZlTGlzdGVuZXJXaGVuVGFiSGlkZGVuID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsb2coXCJbZW1pdHRlcl0gZG9jdW1lbnQgdmlzaWJsZSBjaGFuZ2VkXCIsIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSk7XG4gIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09IFwidmlzaWJsZVwiKSB7XG4gICAgaWYgKFxuICAgICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmhhc0xpc3RlbmVycygpICYmXG4gICAgICBTVE9SQUdFX0NIQU5HRURfSEFORExFUiAhPT0gbnVsbFxuICAgICkge1xuICAgICAgLy8g5ZyoIHRhYiDliIfmjaLml7bms6jplIDmjonnm5HlkKxcbiAgICAgIHJlbW92ZVN0b3JlTGlzdGVuZXIoKTtcbiAgICAgIEhBU19JTklUID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpbml0KCk7XG59XG5pZiAoaXNBdENvbnRlbnRTY3JpcHQpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgdGFiQ2hhbmdlSGFuZGxlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVtaXR0ZXI7XG4iLCJjb25zdCBjaGVja2VyID0gcmVxdWlyZShcIi4vY2hlY2tlclwiKTtcblxuLy8gY29uc3QgREVCVUdHRVIgPSBmYWxzZTtcbmNvbnN0IERFQlVHR0VSID0gdHJ1ZTtcblxuY29uc3QgeyBnZXRDdXJyZW50U2NyaXB0TmFtZSB9ID0gY2hlY2tlcjtcblxuY29uc3QgY3VycmVudFNjcmlwdE5hbWUgPSBnZXRDdXJyZW50U2NyaXB0TmFtZSgpIHx8IFwiVU5LTk9XTlwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2coLi4ucGFyYW1zKSB7XG4gIGlmIChERUJVR0dFUiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgaW5mbyA9IFtjdXJyZW50U2NyaXB0TmFtZSwgLi4ucGFyYW1zXTtcbiAgY29uc29sZS5sb2coLi4uaW5mbyk7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRlbnQobXNnKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSAtICR7bXNnfWA7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEpzKHNyYykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgc2NyaXB0LnNyYyA9IHNyYztcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRml4ZWRDb250YWluZXIoaWQsIGNvbnRlbnQsIHN0eWxlcyA9ICcnKSB7XG4gIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAkY29udGFpbmVyLnN0eWxlID1cbiAgICBcInotaW5kZXg6IDk5OTsgcG9zaXRpb246IGZpeGVkOyByaWdodDogMjBweDsgdG9wOiAyMHB4OyBwYWRkaW5nOiA0cHggMTBweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcIiArIHN0eWxlcztcbiAgJGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIiR7aWR9XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1pbi13aWR0aDogMTgwcHg7IGhlaWdodDogMzBweDtcIj5cbiAgJHtjb250ZW50fVxuPC9kaXY+XG5gO1xuICByZXR1cm4gJGNvbnRhaW5lcjtcbn1cbiIsIi8qKlxuICogaW50ZXJmYWNlIEZpeGVkRWxlbWVudCB7XG4gKiAgIHBvc2l0aW9uOiB7IHRvcCwgYm90dG9tIH1cbiAqICAgc291cmNlOiBIVE1MRWxlbWVudFxuICogfVxuICogQHJldHVybiB7QXJyYXk8Rml4ZWRFbGVtZW50Pn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXhlZEVsZW1lbnRzKCkge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKTtcbiAgY29uc3QgZml4ZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZWxlbWVudHMpLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgcmV0dXJuIHN0eWxlcy5wb3NpdGlvbiA9PT0gXCJmaXhlZFwiICYmIHN0eWxlcy5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcbiAgfSk7XG4gIHJldHVybiBmaXhlZEVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgdG9wLCBib3R0b20gfSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHRvcCxcbiAgICAgICAgYm90dG9tLFxuICAgICAgfSxcbiAgICAgIHNvdXJjZTogZWxlbWVudCxcbiAgICB9O1xuICB9KTtcbn1cbmZ1bmN0aW9uIHB4VG9OdW0ocHhWYWx1ZSkge1xuICByZXR1cm4gTnVtYmVyKHB4VmFsdWUubWF0Y2goL1swLTldKy9nKVswXSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZFRvcEZpeGVkRWxlbWVudHMoZml4ZWRFbGVtZW50cywgd2luZG93SGVpZ2h0KSB7XG4gIHJldHVybiBmaXhlZEVsZW1lbnRzLmZpbHRlcigoZml4ZWRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyB0b3A6IHRvcFN0ciwgYm90dG9tOiBib3R0b21TdHIgfSA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgICBmaXhlZEVsZW1lbnQuc291cmNlXG4gICAgKTtcbiAgICBjb25zdCB0b3AgPSBweFRvTnVtKHRvcFN0cik7XG4gICAgY29uc3QgYm90dG9tID0gcHhUb051bShib3R0b21TdHIpO1xuXG4gICAgY29uc29sZS5sb2coXCJmaW5kVG9wRml4ZWRFbGVtZW50c1wiLCB0b3AsIGJvdHRvbSwgd2luZG93SGVpZ2h0KTtcbiAgICBpZiAodG9wIDwgd2luZG93SGVpZ2h0IC8gMiAmJiBib3R0b20gPiB3aW5kb3dIZWlnaHQgLyAyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQm90dG9tRml4ZWRFbGVtZW50cyhcbiAgZml4ZWRFbGVtZW50cyxcbiAgd2luZG93SGVpZ2h0XG4pIHtcbiAgcmV0dXJuIGZpeGVkRWxlbWVudHMuZmlsdGVyKChmaXhlZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHRvcDogdG9wU3RyLCBib3R0b206IGJvdHRvbVN0ciB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShcbiAgICAgIGZpeGVkRWxlbWVudC5zb3VyY2VcbiAgICApO1xuXG4gICAgY29uc3QgdG9wID0gcHhUb051bSh0b3BTdHIpO1xuICAgIGNvbnN0IGJvdHRvbSA9IHB4VG9OdW0oYm90dG9tU3RyKTtcbiAgICBpZiAodG9wID4gd2luZG93SGVpZ2h0IC8gMiAmJiBib3R0b20gPCB3aW5kb3dIZWlnaHQgLyAyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn07XG5jb25zdCBNQVAgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGVzID0ge30pIHtcbiAgY29uc29sZS5sb2coXCJzZXRTdHlsZVwiLCBlbGVtZW50LCBlbGVtZW50LnN0eWxlLmNzc1RleHQsIHN0eWxlcyk7XG4gIE1BUC5zZXQoZWxlbWVudCwgZWxlbWVudC5zdHlsZS5jc3NUZXh0KTtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgZWxlbWVudC5zdHlsZVthdHRyXSA9IHN0eWxlc1thdHRyXTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXRTdHlsZShlbGVtZW50KSB7XG4gIGNvbnN0IG9yaWdpbmFsQ3NzVGV4dCA9IE1BUC5nZXQoZWxlbWVudCk7XG4gIGNvbnNvbGUubG9nKFwicmVzZXRTdHlsZVwiLCBlbGVtZW50LCBvcmlnaW5hbENzc1RleHQpO1xuICBpZiAob3JpZ2luYWxDc3NUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5zdHlsZSA9IG9yaWdpbmFsQ3NzVGV4dCB8fCBcIlwiO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0FycmF5PEZpeGVkRWxlbWVudD59IGZpeGVkRWxlbWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVGaXhlZEVsZW1lbnRzKGZpeGVkRWxlbWVudHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaXhlZEVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGZpeGVkRWxlbWVudHNbaV0uc291cmNlO1xuICAgIHNldFN0eWxlKGVsZW1lbnQsIHsgZGlzcGxheTogXCJub25lXCIgfSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93Rml4ZWRFbGVtZW50cyhmaXhlZEVsZW1lbnRzKSB7XG4gIGNvbnNvbGUubG9nKFwiMTExMSBzaG93Rml4ZWRFbGVtZW50c1wiLCBcInJlc2V0IHN0eWxlXCIsIGZpeGVkRWxlbWVudHMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpeGVkRWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZml4ZWRFbGVtZW50c1tpXS5zb3VyY2U7XG4gICAgY29uc29sZS5sb2coXCIyMjIgc2hvd0ZpeGVkRWxlbWVudHNcIiwgXCJyZXNldCBzdHlsZVwiKTtcbiAgICByZXNldFN0eWxlKGVsZW1lbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgZW1pdHRlciBmcm9tIFwiLi4vY2hyb21lLWVtaXR0ZXJcIjtcbmltcG9ydCAqIGFzIGZpeGVkRWxlbWVudFV0aWxzIGZyb20gXCIuL2ZpeGVkRWxlbWVudFwiO1xuLyoqXG4gKiDlr7npobXpnaLmiKrlm75cbiAqIEBwYXJhbSB7Kn0gdGltZXNcbiAqL1xuZnVuY3Rpb24gc2NyZWVuc2hvdChjYW52YXNEYXRhLCBjYiwgdGltZXMgPSAwLCBvcmlnaW5hbFNjcm9sbFRvcCkge1xuICBjb25zdCB7XG4gICAgc2l6ZTogeyBwYWdlSGVpZ2h0IH0sXG4gICAgdGFibGU6IHsgcm93cyB9LFxuICAgIHRvcEZpeGVkRWxlbWVudHMsXG4gICAgYm90dG9tRml4ZWRFbGVtZW50cyxcbiAgfSA9IGNhbnZhc0RhdGE7XG4gIGNvbnNvbGUubG9nKFwic3RhcnQgc2NyZWVuc2hvdFwiLCB0aW1lcywgcm93cyk7XG5cbiAgaWYgKHRpbWVzID09PSByb3dzKSB7XG4gICAgZml4ZWRFbGVtZW50VXRpbHMuc2hvd0ZpeGVkRWxlbWVudHModG9wRml4ZWRFbGVtZW50cyk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIG9yaWdpbmFsU2Nyb2xsVG9wKTtcbiAgICBmaXhlZEVsZW1lbnRVdGlscy5yZXNldFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgIGVtaXR0ZXIucmVtb3ZlKFwic2NyZWVuc2hvdFNpbmdsZVNjcmVlbkNvbXBsZXRlXCIpO1xuICAgIG1lcmdlSW1hZ2VzKGNhbnZhc0RhdGEsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHJvd3MgIT09IDEpIHtcbiAgICBpZiAodGltZXMgPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGlkZSBib3R0b20gZml4ZWQgZWxlbWVudHNcIiwgYm90dG9tRml4ZWRFbGVtZW50cyk7XG4gICAgICBmaXhlZEVsZW1lbnRVdGlscy5oaWRlRml4ZWRFbGVtZW50cyhib3R0b21GaXhlZEVsZW1lbnRzKTtcbiAgICB9XG4gICAgaWYgKHJvd3MgPiAxICYmIHRpbWVzID09PSAxKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImhpZGUgdG9wIGZpeGVkIGVsZW1lbnRzXCIsIHRvcEZpeGVkRWxlbWVudHMpO1xuICAgICAgZml4ZWRFbGVtZW50VXRpbHMuaGlkZUZpeGVkRWxlbWVudHModG9wRml4ZWRFbGVtZW50cyk7XG4gICAgfVxuICAgIGlmICh0aW1lcyA9PT0gcm93cyAtIDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBib3R0b20gZml4ZWQgZWxlbWVudHNcIiwgYm90dG9tRml4ZWRFbGVtZW50cyk7XG4gICAgICBmaXhlZEVsZW1lbnRVdGlscy5zaG93Rml4ZWRFbGVtZW50cyhib3R0b21GaXhlZEVsZW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBlbWl0dGVyLmVtaXQoXCJzY3JlZW5zaG90XCIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZUltYWdlcyhjYW52YXNEYXRhLCBjYikge1xuICBjb25zdCB7XG4gICAgc2NyZWVuc2hvdHMsXG4gICAgc2l6ZTogeyBwYWdlV2lkdGgsIHBhZ2VIZWlnaHQsIGZ1bGxXaWR0aCwgZnVsbEhlaWdodCB9LFxuICB9ID0gY2FudmFzRGF0YTtcblxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSBmdWxsV2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBmdWxsSGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIC8vIOS7juS4i+W+gOS4iue7mOWItlxuICBsZXQgaW5kZXggPSBzY3JlZW5zaG90cy5sZW5ndGggLSAxO1xuICBmdW5jdGlvbiBkcmF3KHNjcmVlbnNob3QpIHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0IGRyYXdcIiwgaW5kZXgpO1xuICAgIGNvbnN0IHRlbXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNjcmVlbnNob3QuZGF0YV91cmwpO1xuICAgIHRlbXBJbWFnZS5zcmMgPSBzY3JlZW5zaG90LnVybDtcbiAgICB0ZW1wSW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgbGV0IHkgPSBpbmRleCAqIHBhZ2VIZWlnaHQ7XG4gICAgICAvLyDlpoLmnpzmmK/mnIDlkI7kuIDlvKBcbiAgICAgIGlmIChpbmRleCA9PT0gc2NyZWVuc2hvdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCByZWFsSGVpZ2h0T2ZMYXN0U2NyZWVuc2hvdCA9IGZ1bGxIZWlnaHQgJSBwYWdlSGVpZ2h0O1xuICAgICAgICAvLyB5ID0gcGFnZUhlaWdodCAtIHJlYWxIZWlnaHRPZkxhc3RTY3JlZW5zaG90O1xuICAgICAgICB5ID0gZnVsbEhlaWdodCAtIHBhZ2VIZWlnaHQ7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcInkgcG9zaXRpb25cIiwgeSk7XG4gICAgICBjb25zdCBoID0gKHBhZ2VXaWR0aCAqIHRlbXBJbWFnZS5oZWlnaHQpIC8gdGVtcEltYWdlLndpZHRoO1xuICAgICAgY3R4LmRyYXdJbWFnZSh0ZW1wSW1hZ2UsIDAsIHksIHBhZ2VXaWR0aCwgaCk7XG4gICAgICBpbmRleCAtPSAxO1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICBjYihjYW52YXMsIGNhbnZhc0RhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyYXcoc2NyZWVuc2hvdHNbaW5kZXhdKTtcbiAgICB9O1xuICB9XG5cbiAgZHJhdyhzY3JlZW5zaG90c1tpbmRleF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKGNiKSB7XG4gIGNvbnN0IHNjcm9sbFdpZHRoID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aDtcbiAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XG4gIGNvbnN0IHZpc2libGVXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgY29uc3QgdmlzaWJsZUhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgLy8g5qC55o2u5Y+v6KeG5Yy65Z+f6K6h566X5pW05Liq572R6aG15Y+v5Lul5ouG5YiG5oiQ5aSa5bCR6KGM5aSa5bCR5YiXXG4gIGNvbnN0IGNvbHVtbnMgPSBNYXRoLmNlaWwoKHNjcm9sbFdpZHRoICogMS4wKSAvIHZpc2libGVXaWR0aCk7XG4gIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwoKHNjcm9sbEhlaWdodCAqIDEuMCkgLyB2aXNpYmxlSGVpZ2h0KTtcblxuICBjb25zdCBmaXhlZEVsZW1lbnRzID0gZml4ZWRFbGVtZW50VXRpbHMuZmluZEZpeGVkRWxlbWVudHMoKTtcbiAgY29uc29sZS5sb2coXCJmaXhlZCBlbGVtZW50c1wiLCBmaXhlZEVsZW1lbnRzKTtcbiAgY29uc3QgdG9wRml4ZWRFbGVtZW50cyA9IGZpeGVkRWxlbWVudFV0aWxzLmZpbmRUb3BGaXhlZEVsZW1lbnRzKFxuICAgIGZpeGVkRWxlbWVudHMsXG4gICAgdmlzaWJsZUhlaWdodFxuICApO1xuICBjb25zb2xlLmxvZyhcInRvcCBmaXhlZCBlbGVtZW50c1wiLCB0b3BGaXhlZEVsZW1lbnRzKTtcbiAgY29uc3QgYm90dG9tRml4ZWRFbGVtZW50cyA9IGZpeGVkRWxlbWVudFV0aWxzLmZpbmRCb3R0b21GaXhlZEVsZW1lbnRzKFxuICAgIGZpeGVkRWxlbWVudHMsXG4gICAgdmlzaWJsZUhlaWdodFxuICApO1xuICBjb25zb2xlLmxvZyhcImJvdHRvbSBmaXhlZCBlbGVtZW50c1wiLCBib3R0b21GaXhlZEVsZW1lbnRzKTtcbiAgY29uc3QgY2FudmFzRGF0YSA9IHtcbiAgICBzaXplOiB7XG4gICAgICBmdWxsV2lkdGg6IHNjcm9sbFdpZHRoLFxuICAgICAgZnVsbEhlaWdodDogc2Nyb2xsSGVpZ2h0LFxuICAgICAgcGFnZVdpZHRoOiB2aXNpYmxlV2lkdGgsXG4gICAgICBwYWdlSGVpZ2h0OiB2aXNpYmxlSGVpZ2h0LFxuICAgIH0sXG4gICAgdGFibGU6IHsgcm93czogcm93cywgY29sdW1uczogY29sdW1ucyB9LFxuICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICB0b3BGaXhlZEVsZW1lbnRzLFxuICAgIGJvdHRvbUZpeGVkRWxlbWVudHMsXG4gIH07XG5cbiAgbGV0IHRpbWVzID0gMDtcbiAgY29uc3Qgb3JpZ2luYWxTY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gIC8vIOWujOaIkOS4gOWxj+aIquWbvlxuICBlbWl0dGVyLm9uKFwic2NyZWVuc2hvdFNpbmdsZVNjcmVlbkNvbXBsZXRlXCIsICh1cmwpID0+IHtcbiAgICBjYW52YXNEYXRhLnNjcmVlbnNob3RzLnB1c2goe1xuICAgICAgcm93OiB0aW1lcyxcbiAgICAgIGNvbHVtbjogMCxcbiAgICAgIHVybCxcbiAgICB9KTtcbiAgICB0aW1lcyArPSAxO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0aW1lcyAqIHZpc2libGVIZWlnaHQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2NyZWVuc2hvdChjYW52YXNEYXRhLCBjYiwgdGltZXMsIG9yaWdpbmFsU2Nyb2xsVG9wKTtcbiAgICB9LCAxMjAwKTtcbiAgfSk7XG5cbiAgZml4ZWRFbGVtZW50VXRpbHMuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9KTtcblxuICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGltZXMgKiB2aXNpYmxlSGVpZ2h0KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2NyZWVuc2hvdChjYW52YXNEYXRhLCBjYiwgdGltZXMsIG9yaWdpbmFsU2Nyb2xsVG9wKTtcbiAgfSwgMTIwMCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=content.js.map