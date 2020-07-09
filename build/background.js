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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const emitter = require('chrome-emitter');
const emitter = __webpack_require__(/*! ./utils/chrome-emitter */ "./src/utils/chrome-emitter.js");
const { getContent } = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
const screenshot = __webpack_require__(/*! ./utils/screenshot */ "./src/utils/screenshot.js");

console.log("here is background");

// emitter.response('checkCurrentTabIsActive', () => {
//   return 'value';
// });

// emitter.on('popup-to-background', (msg) => {
//   const content = getContent(msg);
//   console.log('[background] from popup', content);
// });
// emitter.on('options-to-background', (msg) => {
//   const content = getContent(msg);
//   console.log('[background] from options', content);
// });
// emitter.on('content-to-background', (msg) => {
//   const content = getContent(msg);
//   console.log('[background] from content', content);
// });
// emitter.on('injected-to-background', (msg) => {
//   const content = getContent(msg);
//   console.log('[background] from inserted', content);
// });

emitter.on("screenshot", () => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      const tab = tabs[0];
      chrome.tabs.captureVisibleTab(null, {}, (url) => {
        // console.log('dispatch screenshot complete');
        emitter.emit("screenshotComplete", url);
      });
    }
  );
});

function screenshotHandler() {}

// emitter.on("startScreenshot", () => {
//   screenshot((canvas, canvasData) => {
//     console.log(canvasData.size, canvasData.table, canvasData.screenshots);
//     const url = canvas.toDataURL();
//     chrome.tabs.create({
//       url,
//       active: true,
//     });
//     // emitter.emit('openNewTab', url);
//     // const { screenshots } = canvasData;
//     // screenshots.map((screenshot) => {
//     //   console.log(screenshot.url);
//     // });
//   });
// });

emitter.on("openNewTab", (url) => {
  chrome.tabs.create({
    url,
    active: true,
  });
});

// setTimeout(() => {
//   console.log('emit event');
//   emitter.emit('background-to-content');
// }, 5000);


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

/***/ "./src/utils/fixedElement.js":
/*!***********************************!*\
  !*** ./src/utils/fixedElement.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * interface FixedElement {
 *   position: { top, bottom }
 *   source: HTMLElement
 * }
 * @return {Array<FixedElement>}
 */
module.exports.findFixedElements = function findFixedElements() {
  const elements = document.getElementsByTagName('*');
  const fixedElements = Array.from(elements).filter((element) => {
    const styles = getComputedStyle(element);
    return styles.position === 'fixed' && styles.display !== 'none';
  });
  return fixedElements.map((element) => {
    const{ top, bottom } = getComputedStyle(element);
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
module.exports.findTopFixedElements = function findTopFixedElements(fixedElements, windowHeight) {
  return fixedElements.filter((fixedElement) => {
    const { top: topStr, bottom: bottomStr } = getComputedStyle(fixedElement.source);
    const top = pxToNum(topStr);
    const bottom = pxToNum(bottomStr);
    
    console.log('findTopFixedElements', top, bottom, windowHeight);
    if (top < windowHeight / 2 && bottom > windowHeight / 2) {
      return true;
    }
    return false;
  });
}
module.exports.findBottomFixedElements = function findBottomFixedElements(fixedElements, windowHeight) {
  return fixedElements.filter((fixedElement) => {
    const { top: topStr, bottom: bottomStr } = getComputedStyle(fixedElement.source);

    const top = pxToNum(topStr);
    const bottom = pxToNum(bottomStr);
    if (top > windowHeight / 2 && bottom < windowHeight/ 2) {
      return true;
    }
    return false;
  });
}
const MAP = new Map();
function setStyle(element, styles = {}) {
    console.log('setStyle', element, element.style.cssText, styles);
    MAP.set(element, element.style.cssText);
    Object.keys(styles).forEach((attr) => {
        element.style[attr] = styles[attr];
    });
}
function resetStyle(element) {
    const originalCssText = MAP.get(element);
    console.log('resetStyle', element, originalCssText);
    element.style = originalCssText || '';
}

module.exports.setStyle = setStyle;
module.exports.resetStyle = resetStyle;
/**
 * 
 * @param {Array<FixedElement>} fixedElements 
 */
module.exports.hideFixedElements = function hideFixedElements(fixedElements) {
  for (let i = 0; i < fixedElements.length; i += 1) {
    const element = fixedElements[i].source;
    setStyle(element, { display: 'none' });
  }
}
module.exports.showFixedElements = function showFixedElements(fixedElements) {
console.log('1111 showFixedElements', 'reset style', fixedElements);
  for (let i = 0; i < fixedElements.length; i += 1) {
    const element = fixedElements[i].source;
    console.log('222 showFixedElements', 'reset style');
    resetStyle(element);
  }
}



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


/***/ }),

/***/ "./src/utils/screenshot.js":
/*!*********************************!*\
  !*** ./src/utils/screenshot.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const emitter = __webpack_require__(/*! ./chrome-emitter */ "./src/utils/chrome-emitter.js");
const fixedElementUtils = __webpack_require__(/*! ./fixedElement */ "./src/utils/fixedElement.js");

const { chrome } = window;
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
    fixedElementUtils.showFixedElements(topFixedElements);
    window.scrollTo(0, originalScrollTop);
    fixedElementUtils.resetStyle(document.body);
    emitter.remove("screenshotComplete");
    mergeImages(canvasData, cb);
    return;
  }
  if (rows !== 1) {
    if (times === 0) {
      console.log("hide bottom fixed elements", bottomFixedElements);
      fixedElementUtils.hideFixedElements(bottomFixedElements);
    }
    if (rows > 1 && times === 1) {
      console.log("hide top fixed elements", topFixedElements);
      fixedElementUtils.hideFixedElements(topFixedElements);
    }
    if (times === rows - 1) {
      console.log("show bottom fixed elements", bottomFixedElements);
      fixedElementUtils.showFixedElements(bottomFixedElements);
    }
  }

  window.scrollTo(0, times * pageHeight);
  emitter.emit("screenshot");
}

function mergeImages(canvasData, cb) {
  const {
    screenshots,
    size: { pageHeight, fullWidth, fullHeight },
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
      ctx.drawImage(tempImage, 0, y);
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

module.exports = function main(cb) {
  const scrollWidth = document.body.scrollWidth;
  const scrollHeight = document.body.scrollHeight;
  const visibleWidth = document.documentElement.clientWidth;
  const visibleHeight = document.documentElement.clientHeight;

  // 根据可视区域计算整个网页可以拆分成多少行多少列
  const columns = Math.ceil((scrollWidth * 1.0) / visibleWidth);
  const rows = Math.ceil((scrollHeight * 1.0) / visibleHeight);

  const fixedElements = fixedElementUtils.findFixedElements();
  console.log("fixed elements", fixedElements);
  const topFixedElements = fixedElementUtils.findTopFixedElements(
    fixedElements,
    visibleHeight
  );
  console.log("top fixed elements", topFixedElements);
  const bottomFixedElements = fixedElementUtils.findBottomFixedElements(
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
  emitter.on("screenshotComplete", (url) => {
    console.log("complete screenshot");
    canvasData.screenshots.push({
      row: times,
      column: 0,
      url,
    });
    times += 1;
    setTimeout(() => {
      screenshot(canvasData, cb, times, originalScrollTop);
    }, 1000);
  });
  
  fixedElementUtils.setStyle(document.body, { overflow: 'hidden' });
  screenshot(canvasData, cb, times, originalScrollTop);
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nocm9tZS1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2ZpeGVkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NyZWVuc2hvdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyw2REFBd0I7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQ0FBb0M7QUFDL0MsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWSwrQkFBK0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSCw2Q0FBNkMscUJBQXFCO0FBQ2xFO0FBQ0EiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2JhY2tncm91bmQuanNcIik7XG4iLCIvLyBjb25zdCBlbWl0dGVyID0gcmVxdWlyZSgnY2hyb21lLWVtaXR0ZXInKTtcbmNvbnN0IGVtaXR0ZXIgPSByZXF1aXJlKFwiLi91dGlscy9jaHJvbWUtZW1pdHRlclwiKTtcbmNvbnN0IHsgZ2V0Q29udGVudCB9ID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jb25zdCBzY3JlZW5zaG90ID0gcmVxdWlyZShcIi4vdXRpbHMvc2NyZWVuc2hvdFwiKTtcblxuY29uc29sZS5sb2coXCJoZXJlIGlzIGJhY2tncm91bmRcIik7XG5cbi8vIGVtaXR0ZXIucmVzcG9uc2UoJ2NoZWNrQ3VycmVudFRhYklzQWN0aXZlJywgKCkgPT4ge1xuLy8gICByZXR1cm4gJ3ZhbHVlJztcbi8vIH0pO1xuXG4vLyBlbWl0dGVyLm9uKCdwb3B1cC10by1iYWNrZ3JvdW5kJywgKG1zZykgPT4ge1xuLy8gICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuLy8gICBjb25zb2xlLmxvZygnW2JhY2tncm91bmRdIGZyb20gcG9wdXAnLCBjb250ZW50KTtcbi8vIH0pO1xuLy8gZW1pdHRlci5vbignb3B0aW9ucy10by1iYWNrZ3JvdW5kJywgKG1zZykgPT4ge1xuLy8gICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuLy8gICBjb25zb2xlLmxvZygnW2JhY2tncm91bmRdIGZyb20gb3B0aW9ucycsIGNvbnRlbnQpO1xuLy8gfSk7XG4vLyBlbWl0dGVyLm9uKCdjb250ZW50LXRvLWJhY2tncm91bmQnLCAobXNnKSA9PiB7XG4vLyAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4vLyAgIGNvbnNvbGUubG9nKCdbYmFja2dyb3VuZF0gZnJvbSBjb250ZW50JywgY29udGVudCk7XG4vLyB9KTtcbi8vIGVtaXR0ZXIub24oJ2luamVjdGVkLXRvLWJhY2tncm91bmQnLCAobXNnKSA9PiB7XG4vLyAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4vLyAgIGNvbnNvbGUubG9nKCdbYmFja2dyb3VuZF0gZnJvbSBpbnNlcnRlZCcsIGNvbnRlbnQpO1xuLy8gfSk7XG5cbmVtaXR0ZXIub24oXCJzY3JlZW5zaG90XCIsICgpID0+IHtcbiAgY2hyb21lLnRhYnMucXVlcnkoXG4gICAge1xuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZSxcbiAgICB9LFxuICAgICh0YWJzKSA9PiB7XG4gICAgICBjb25zdCB0YWIgPSB0YWJzWzBdO1xuICAgICAgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIobnVsbCwge30sICh1cmwpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Rpc3BhdGNoIHNjcmVlbnNob3QgY29tcGxldGUnKTtcbiAgICAgICAgZW1pdHRlci5lbWl0KFwic2NyZWVuc2hvdENvbXBsZXRlXCIsIHVybCk7XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG59KTtcblxuZnVuY3Rpb24gc2NyZWVuc2hvdEhhbmRsZXIoKSB7fVxuXG4vLyBlbWl0dGVyLm9uKFwic3RhcnRTY3JlZW5zaG90XCIsICgpID0+IHtcbi8vICAgc2NyZWVuc2hvdCgoY2FudmFzLCBjYW52YXNEYXRhKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coY2FudmFzRGF0YS5zaXplLCBjYW52YXNEYXRhLnRhYmxlLCBjYW52YXNEYXRhLnNjcmVlbnNob3RzKTtcbi8vICAgICBjb25zdCB1cmwgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4vLyAgICAgY2hyb21lLnRhYnMuY3JlYXRlKHtcbi8vICAgICAgIHVybCxcbi8vICAgICAgIGFjdGl2ZTogdHJ1ZSxcbi8vICAgICB9KTtcbi8vICAgICAvLyBlbWl0dGVyLmVtaXQoJ29wZW5OZXdUYWInLCB1cmwpO1xuLy8gICAgIC8vIGNvbnN0IHsgc2NyZWVuc2hvdHMgfSA9IGNhbnZhc0RhdGE7XG4vLyAgICAgLy8gc2NyZWVuc2hvdHMubWFwKChzY3JlZW5zaG90KSA9PiB7XG4vLyAgICAgLy8gICBjb25zb2xlLmxvZyhzY3JlZW5zaG90LnVybCk7XG4vLyAgICAgLy8gfSk7XG4vLyAgIH0pO1xuLy8gfSk7XG5cbmVtaXR0ZXIub24oXCJvcGVuTmV3VGFiXCIsICh1cmwpID0+IHtcbiAgY2hyb21lLnRhYnMuY3JlYXRlKHtcbiAgICB1cmwsXG4gICAgYWN0aXZlOiB0cnVlLFxuICB9KTtcbn0pO1xuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgY29uc29sZS5sb2coJ2VtaXQgZXZlbnQnKTtcbi8vICAgZW1pdHRlci5lbWl0KCdiYWNrZ3JvdW5kLXRvLWNvbnRlbnQnKTtcbi8vIH0sIDUwMDApO1xuIiwiY29uc3QgU0NSSVBUUyA9IHtcbiAgTk9ORTogMCxcbiAgQ09OVEVOVDogMSxcbiAgSU5KRUNURUQ6IDIsXG4gIEJBQ0tHUk9VTkQ6IDMsXG59O1xuY29uc3QgU0NSSVBUX05BTUVTID0ge1xuICAwOiBcIk5PTkVcIixcbiAgMTogXCJDT05URU5UXCIsXG4gIDI6IFwiSU5KRUNURURcIixcbiAgMzogXCJCQUNLR1JPVU5EXCIsXG4gIDQ6IFwiUE9QVVBcIixcbiAgNTogXCJPUFRJT05TXCIsXG59O1xuZnVuY3Rpb24gY2hlY2tTY3JpcHQoKSB7XG4gIGlmIChjaHJvbWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBTQ1JJUFRTLk5PTkU7XG4gIH1cbiAgaWYgKGNocm9tZS5zdG9yYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gU0NSSVBUUy5JTkpFQ1RFRDtcbiAgfVxuICBpZiAoY2hyb21lLnRhYnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBTQ1JJUFRTLkNPTlRFTlQ7XG4gIH1cbiAgY29uc3QgYmdXaW5kb3cgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKCk7XG4gIGlmICh3aW5kb3cgPT09IGJnV2luZG93KSB7XG4gICAgcmV0dXJuIFNDUklQVFMuQkFDS0dST1VORDtcbiAgfVxuICByZXR1cm4gU0NSSVBUUy5OT05FO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5jaGVja0lzQXRDb250ZW50U2NyaXB0ID0gZnVuY3Rpb24gY2hlY2tJc0F0Q29udGVudFNjcmlwdCgpIHtcbiAgcmV0dXJuIGNoZWNrU2NyaXB0KCkgPT09IFNDUklQVFMuQ09OVEVOVDtcbn1cbm1vZHVsZS5leHBvcnRzLmNoZWNrSXNBdEluamVjdGVkU2NyaXB0ID0gZnVuY3Rpb24gY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLklOSkVDVEVEO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5jaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0ID0gZnVuY3Rpb24gY2hlY2tJc0F0SW5qZWN0ZWRTY3JpcHQoKSB7XG4gIHJldHVybiBjaGVja1NjcmlwdCgpID09PSBTQ1JJUFRTLkJBQ0tHUk9VTkQ7XG59XG5cbm1vZHVsZS5leHBvcnRzLmdldEN1cnJlbnRTY3JpcHROYW1lID0gZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdE5hbWUoKSB7XG4gIHJldHVybiBTQ1JJUFRfTkFNRVNbY2hlY2tTY3JpcHQoKV07XG59XG4iLCJjb25zdCBjaGVja2VyID0gcmVxdWlyZShcIi4vY2hlY2tlclwiKTtcbmNvbnN0IGxvZyA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcbmNvbnN0IHtcbiAgQ1VTVE9NX0VWRU5UX05BTUUsXG4gIFNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUsXG4gIFNZTkNfRVZFTlRfTkFNRSxcbiAgU1lOQ19TVUZGSVgsXG4gIERBVEFfS0VZLFxuICBUSU1FX0tFWSxcbn0gPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5cbmNvbnN0IEFDVElWRV9UQUJfS0VZID0gXCJfX0VNSVRURVJfQUNUSVZFX0tFWV9fXCI7XG5jb25zdCBRVUVSWV9DVVJSRU5UX1RBQiA9IFwiX19FTUlUVEVSX1FVRVJZX0NVUlJFTlRfVEFCX19cIjtcbmNvbnN0IENVUlJFTlRfVEFCID0gXCJfX0VNSVRURVJfQ1VSUkVOVF9UQUJfX1wiO1xubGV0IEhBU19JTklUID0gZmFsc2U7XG5cbmNvbnN0IHtcbiAgZ2V0Q3VycmVudFNjcmlwdE5hbWUsXG4gIGNoZWNrSXNBdEluamVjdGVkU2NyaXB0LFxuICBjaGVja0lzQXRDb250ZW50U2NyaXB0LFxuICBjaGVja0lzQXRCYWNrZ3JvdW5kU2NyaXB0LFxufSA9IGNoZWNrZXI7XG5jb25zdCB7IGNocm9tZSB9ID0gd2luZG93O1xuY29uc3QgZnJvbSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuY29uc3QgY3VycmVudFNjcmlwdE5hbWUgPSBnZXRDdXJyZW50U2NyaXB0TmFtZSgpO1xuXG5jb25zdCBpc0F0SW5qZWN0ZWRTY3JpcHQgPSBjaGVja0lzQXRJbmplY3RlZFNjcmlwdCgpO1xuY29uc3QgaXNBdENvbnRlbnRTY3JpcHQgPSBjaGVja0lzQXRDb250ZW50U2NyaXB0KCk7XG5jb25zdCBpc0F0QmFja2dyb3VuZFNjcmlwdCA9IGNoZWNrSXNBdEJhY2tncm91bmRTY3JpcHQoKTtcblxuLy8g5b2T5YmN5omA5Zyo6ISa5pys55qE5ZSv5LiAIGlkXG5jb25zdCBVTklRVUVfSUQgPSBgQEBfX0VNSVRURVJfJHtuZXcgRGF0ZSgpLnZhbHVlT2YoKS50b1N0cmluZygpfV9fYDtcbmxldCBjdXJyZW50VGFiID0gbnVsbDtcbmxldCBTVE9SQUdFX0NIQU5HRURfSEFORExFUiA9IG51bGw7XG5cbmNvbnN0IEhBTkRMRVJfTUFQID0ge307XG5jb25zdCBPUFRJT05TX01BUCA9IHt9O1xuY29uc3QgU1lOQ0VEX0VWRU5UID0ge307XG5cbi8qKlxuICog5bqV5bGC55So5p2l5ZCR5aSW5bm/5pKt5LqL5Lu255qE5pa55rOVXG4gKiBpbnRlcmZhY2UgQWN0aW9uIHtcbiAqICAgdHlwZTogc3RyaW5nO1xuICogICBwYXlsb2FkOiBBcnJheTxhbnk+O1xuICogfVxuICogQHBhcmFtIHtBY3Rpb259IGFjdGlvblxuICovXG5mdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgLy8gY29uc3QgeyBjYiB9ID0gYWN0aW9uO1xuICBpZiAoaXNBdEluamVjdGVkU2NyaXB0KSB7XG4gICAgbG9nKFwiW2VtaXR0ZXJdIGRpc3BhdGNoIGV2ZW50XCIsIGFjdGlvbik7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSwge1xuICAgICAgICBkZXRhaWw6IGFjdGlvbixcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbG9nKFwiW2VtaXR0ZXJdIGRpc3BhdGNoIGV2ZW50XCIsIGFjdGlvbiwgU1lOQ0VEX0VWRU5UKTtcbiAgaWYgKGlzQXRDb250ZW50U2NyaXB0ICYmIFNZTkNFRF9FVkVOVFthY3Rpb24udHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIOWPr+iDveaYr+WQkSBpbmplY3RlZCDlub/mkq3vvIzmiYDku6XpnIDopoEgZGlzcGF0Y2hFdmVudFxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KENVU1RPTV9FVkVOVF9OQU1FLCB7XG4gICAgICAgIGRldGFpbDogYWN0aW9uLFxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyDkvb/nlKggc3RvcmFnZS5sb2NhbC5zZXQg5p2l6Kem5Y+R5pS55Y+Y77yM5LuO6ICM6YCa55+l5Yiw5YWo6YOo5pyJIG9uQ2hhbmdlZC5hZGRMaXN0ZW5lciDnmoTlnLDmlrlcbiAgY29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgIFtUSU1FX0tFWV06IGN1cnJlbnQsXG4gICAgW0RBVEFfS0VZXToge1xuICAgICAgdmFsdWU6IGN1cnJlbnQsXG4gICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgIHBheWxvYWQ6IGFjdGlvbi5wYXlsb2FkLFxuICAgIH0sXG4gIH0pO1xufVxuLyoqXG4gKiDlupXlsYLnlKjmnaXnm5HlkKzlhajlsYDnmoTmiYDmnInkuovku7bvvIzlj6/ku6XnkIbop6PkuLrkuIDkuKrjgIzlub/mkq3kuK3lv4PjgI1cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiXG4gKi9cbmZ1bmN0aW9uIGFkZFN0b3JlTGlzdGVuZXIoY2IpIHtcbiAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCkge1xuICAgIC8vIGxvZygnW2luamVjdGVkXSBsaXN0ZW5lciBjdXN0b20gZXZlbnQnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihDVVNUT01fRVZFTlRfTkFNRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gcmVjZWl2ZSBldmVudFwiLCBldmVudC5kZXRhaWwpO1xuICAgICAgY2IoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzQXRDb250ZW50U2NyaXB0KSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gcmVjZWl2ZSBldmVudFwiLCBldmVudC5kZXRhaWwpO1xuICAgICAgY2IoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgfVxuICBTVE9SQUdFX0NIQU5HRURfSEFORExFUiA9IChjaGFuZ2VzKSA9PiB7XG4gICAgY29uc3QgeyBfX2RhdGFfXyB9ID0gY2hhbmdlcztcbiAgICAvLyBjbGVhciDml7botbDov5nph4xcbiAgICBpZiAoX19kYXRhX18gPT09IHVuZGVmaW5lZCB8fCBfX2RhdGFfXy5uZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbVElNRV9LRVksIERBVEFfS0VZXSk7XG4gICAgY29uc3QgYWN0aW9uID0gX19kYXRhX18ubmV3VmFsdWU7XG4gICAgY2IoYWN0aW9uKTtcbiAgfTtcbiAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSKTtcbn1cblxuY29uc3QgZW1pdHRlciA9IHtcbiAgLyoqXG4gICAqIOeUqOadpeWPkeWHuuS6i+S7tueahOaWueazlVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSAgey4uLmFueX0gcGFyYW1zXG4gICAqL1xuICBlbWl0KGV2ZW50TmFtZSwgLi4ucGFyYW1zKSB7XG4gICAgbGV0IG5hbWUgPSBldmVudE5hbWU7XG4gICAgaWYgKGlzQXRJbmplY3RlZFNjcmlwdCAmJiBldmVudE5hbWUgIT09IFNZTkNfRVZFTlRfTkFNRSkge1xuICAgICAgbG9nKFwiW2VtaXR0ZXJdIGVtaXQgZXZlbnRcIiwgZXZlbnROYW1lKTtcbiAgICAgIC8vIOWmguaenOaYr+WcqCBpbmplY3RlZCDlj5Hlh7rkuovku7bvvIzlrp7pmYXmmK/lj5HliLDkuoYgY29udGVudFxuICAgICAgLy8g55Sx5LqO5Y+v6IO96ZyA6KaB6L2s5Y+R77yM5omA5Lul5a6e6ZmF5Y+R5Ye655qE5LqL5Lu25ZCN5YGa5LqG5aSE55CG77yM5re75YqgIFNZTkNfU1VGRklYXG4gICAgICBuYW1lID0gZXZlbnROYW1lICsgU1lOQ19TVUZGSVg7XG4gICAgfVxuICAgIGxvZyhcbiAgICAgIFwiW2VtaXR0ZXJdIGVtaXQgZXZlbnRcIixcbiAgICAgIG5hbWUsXG4gICAgICBcIm9yaWdpbmFsIGV2ZW50IG5hbWUgaXNcIixcbiAgICAgIGV2ZW50TmFtZSxcbiAgICAgIFwiYW5kIHBhcmFtcyBpc1wiLFxuICAgICAgcGFyYW1zXG4gICAgKTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBuYW1lLFxuICAgICAgcGF5bG9hZDogcGFyYW1zLFxuICAgIH0pO1xuICB9LFxuICAvKipcbiAgICog55uR5ZCs5LqL5Lu2XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlclxuICAgKiBpbnRlcmZhY2UgT3B0aW9ucyB7XG4gICAqICAgLy8g5Y+q5pyJ5b2T6K+lIHRhYiDmmK/lvZPliY3lsZXnpLrnmoTvvIzmiY3osIPnlKhcbiAgICogICBhY3RpdmU6IGJvb2xlYW47XG4gICAqIH1cbiAgICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zXG4gICAqL1xuICBvbihldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBsZXQgbmFtZSA9IGV2ZW50TmFtZTtcbiAgICBpZiAoaXNBdEluamVjdGVkU2NyaXB0KSB7XG4gICAgICAvLyDlpoLmnpzmmK/lnKggaW5zZXJ0ZWQg5Lit55uR5ZCs5LqL5Lu277yM6YCa55+lIGNvbnRlbnQg5Lmf6KaB55uR5ZCs5LiA5Lu977yM5ZCM5pe26ZyA6KaB5pS55YaZ6K+l5LqL5Lu25ZCNXG4gICAgICBuYW1lID0gZXZlbnROYW1lICsgU1lOQ19TVUZGSVg7XG4gICAgICBsb2coXCJbZW1pdHRlcl0gc3luYyBldmVudCBsaXN0ZW4gdG8gY29udGVudFwiLCBuYW1lKTtcbiAgICAgIGVtaXR0ZXIuZW1pdChTWU5DX0VWRU5UX05BTUUsIG5hbWUpO1xuICAgIH1cbiAgICBIQU5ETEVSX01BUFtuYW1lXSA9IGhhbmRsZXI7XG4gICAgY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xuICAgICAgLy8g5piv5ZCm5omA5ZyoIHRhYiDkuLrmv4DmtLvnirbmgIHmiY3osIPnlKhcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIC8vIOWPquWcqOWTquS6m+iEmuacrOS4rSBvbiDnlJ/mlYhcbiAgICAgIGF0OiBbXSxcbiAgICB9O1xuICAgIE9QVElPTlNfTUFQW25hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKTtcbiAgfSxcbiAgcmVtb3ZlKGV2ZW50TmFtZSkge1xuICAgIGRlbGV0ZSBIQU5ETEVSX01BUFtldmVudE5hbWVdO1xuICB9LFxufTtcblxuLy8gZnVuY3Rpb24gcmVxdWVzdChldmVudE5hbWUsIC4uLnBhcmFtcykge1xuLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbi8vICAgICBlbWl0dGVyLm9uKGV2ZW50TmFtZSArIFwiUkVDRUlWRVwiLCAoLi4ucmVzdWx0KSA9PiB7XG4vLyAgICAgICBlbWl0dGVyLnJlbW92ZShldmVudE5hbWUgKyBcIlJFQ0VJVkVcIik7XG4vLyAgICAgICByZXNvbHZlKC4uLnJlc3VsdCk7XG4vLyAgICAgfSk7XG4vLyAgICAgZW1pdHRlci5lbWl0KGV2ZW50TmFtZSwgLi4ucGFyYW1zKTtcbi8vICAgfSk7XG4vLyB9XG4vLyBmdW5jdGlvbiByZXNwb25zZShldmVudE5hbWUsIGhhbmRsZXIpIHtcbi8vICAgZW1pdHRlci5vbihldmVudE5hbWUsICgpID0+IHtcbi8vICAgICBjb25zdCB2YWx1ZSA9IGhhbmRsZXIoKTtcbi8vICAgICBlbWl0dGVyLmVtaXQoZXZlbnROYW1lICsgXCJSRUNFSVZFXCIsIHZhbHVlKTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIGVtaXR0ZXIucmVxdWVzdCA9IHJlcXVlc3Q7XG4vLyBlbWl0dGVyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5mdW5jdGlvbiBpbml0KCkge1xuICBpZiAoSEFTX0lOSVQgPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8g5Yid5aeL5YyW55uR5ZCs77yM5Li76KaB55So5LqO5ZCM5q2lIGluamVjdGVkIOebkeWQrOeahOS6i+S7tlxuICBhZGRTdG9yZUxpc3RlbmVyKChhY3Rpb24pID0+IHtcbiAgICBsb2coXG4gICAgICBcIltlbWl0dGVyXSBhZGRTdG9yZUxpc3RlbmVyIHJlY2VpdmUgZXZlbnQgYW5kIGFjdGlvbiBpc1wiLFxuICAgICAgYWN0aW9uLFxuICAgICAgXCJjdXJyZW50IHNjcmlwdCBuYW1lIGlzXCIsXG4gICAgICBjdXJyZW50U2NyaXB0TmFtZSxcbiAgICAgIEhBTkRMRVJfTUFQLFxuICAgICAgd2luZG93W0NVUlJFTlRfVEFCXSAmJiB3aW5kb3dbQ1VSUkVOVF9UQUJdLmFjdGl2ZVxuICAgICk7XG4gICAgY29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XG4gICAgLy8g5aaC5p6c5pivIGluamVjdGVkIOivt+axgiBjb250ZW50IOWQjOatpeebkeWQrOS6i+S7tueahOivt+axglxuICAgIGlmIChpc0F0Q29udGVudFNjcmlwdCAmJiB0eXBlID09PSBTWU5DX0VWRU5UX05BTUUpIHtcbiAgICAgIGxvZyhcIltlbWl0dGVyXSBzYXZlIHN5bmNlZCBldmVudFwiLCBhY3Rpb24pO1xuICAgICAgY29uc3QgZXZlbnROYW1lID0gcGF5bG9hZFswXTtcbiAgICAgIGNvbnN0IG5hbWUgPSBldmVudE5hbWUucmVwbGFjZShTWU5DX1NVRkZJWCwgXCJcIik7XG4gICAgICBTWU5DRURfRVZFTlRbbmFtZV0gPSBldmVudE5hbWU7XG5cbiAgICAgIEhBTkRMRVJfTUFQW25hbWVdID0gKC4uLnBhcmFtcykgPT4ge1xuICAgICAgICBsb2coXCJbZW1pdHRlcl0gZXZlbnQgZnJvbSBpbmplY3RlZCBzbyBlbWl0IHRvIGluamVjdGVkXCIpO1xuICAgICAgICBlbWl0dGVyLmVtaXQoZXZlbnROYW1lLCAuLi5wYXJhbXMpO1xuICAgICAgfTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzQXRDb250ZW50U2NyaXB0ICYmIHR5cGUuaW5jbHVkZXMoU1lOQ19TVUZGSVgpKSB7XG4gICAgICAvLyDlpoLmnpzmmK8gY29udGVudCDlubbkuJTmlLbliLDnmoTkuovku7bmmK/nlLEgaW5qZWN0ZWQg5Y+R5Ye655qE77yM5bCx5YaN5ZCR5aSW5bm/5pKt5LiA5qyhXG4gICAgICBjb25zdCBuYW1lID0gdHlwZS5yZXBsYWNlKFNZTkNfU1VGRklYLCBcIlwiKTtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlciA9IEhBTkRMRVJfTUFQW3R5cGVdO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPUFRJT05TX01BUFt0eXBlXTtcblxuICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChIQU5ETEVSX01BUFt0eXBlICsgU1lOQ19TVUZGSVhdKSB7XG4gICAgICAgIEhBTkRMRVJfTUFQW3R5cGUgKyBTWU5DX1NVRkZJWF0oLi4ucGF5bG9hZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxvZyhcIltlbWl0dGVyXVwiLCBcImF0XCIsIHR5cGUsIFwibGlzdGVuZXIgaXMgbm90IGV4aXN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxvZyhcbiAgICAgIFwiW2VtaXR0ZXJdIGNoZWNrIGlzIGF0IGNvbnRlbnQgc2NyaXB0IGFuZCBoYXMgb3B0aW9uc1wiLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGFjdGlvblxuICAgICk7XG4gICAgaGFuZGxlciguLi5wYXlsb2FkKTtcbiAgfSk7XG5cbiAgLy8g6L+Z5Lik5Liq55So5p2l5a6e546w5Y+q5ZCR5Y2V5LiqIHRhYiDlj5HpgIHmtojmga9cbiAgaWYgKGlzQXRDb250ZW50U2NyaXB0ICYmIGN1cnJlbnRUYWIgPT09IG51bGwpIHtcbiAgICBlbWl0dGVyLmVtaXQoUVVFUllfQ1VSUkVOVF9UQUIsIFVOSVFVRV9JRCk7XG4gICAgZW1pdHRlci5vbihVTklRVUVfSUQsICh0YWIpID0+IHtcbiAgICAgIGN1cnJlbnRUYWIgPSB0YWI7XG4gICAgICB3aW5kb3dbQ1VSUkVOVF9UQUJdID0gdGFiO1xuICAgIH0pO1xuICB9XG4gIGlmIChpc0F0QmFja2dyb3VuZFNjcmlwdCkge1xuICAgIHdpbmRvdy5SRUdJU1RFUkVEX1RBQlMgPSBbXTtcbiAgICBlbWl0dGVyLm9uKFFVRVJZX0NVUlJFTlRfVEFCLCAoZnJvbSkgPT4ge1xuICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpID0+IHtcbiAgICAgICAgd2luZG93W0FDVElWRV9UQUJfS0VZXSA9IHRhYnNbMF07XG4gICAgICAgIGVtaXR0ZXIuZW1pdChmcm9tLCB0YWJzWzBdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIEhBU19JTklUID0gdHJ1ZTtcbn1cblxuaW5pdCgpO1xuXG5pZiAoaXNBdENvbnRlbnRTY3JpcHQpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09IFwidmlzaWJsZVwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5oYXNMaXN0ZW5lcnMoKSAmJlxuICAgICAgICBTVE9SQUdFX0NIQU5HRURfSEFORExFUiAhPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIC8vIOWcqCB0YWIg5YiH5o2i5pe25rOo6ZSA5o6J55uR5ZCsXG4gICAgICAgIGxvZyhcIltlbWl0dGVyXSByZW1vdmUgc3RvcmFnZSBsaXN0ZW5lclwiKTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKFNUT1JBR0VfQ0hBTkdFRF9IQU5ETEVSKTtcbiAgICAgICAgSEFTX0lOSVQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW5pdCgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMuZGlzcGF0Y2ggPSBkaXNwYXRjaDtcbm1vZHVsZS5leHBvcnRzLmFkZFN0b3JlTGlzdGVuZXIgPSBhZGRTdG9yZUxpc3RlbmVyO1xuLy8gZXhwb3J0IGRlZmF1bHQgZW1pdHRlcjtcbiIsImNvbnN0IENVU1RPTV9FVkVOVF9OQU1FID0gXCJfX0NIUk9NRV9FTUlUVEVSX0FfX1wiO1xuY29uc3QgU1BFQ0lBTF9DVVNUT01fRVZFTlRfTkFNRSA9IFwiX19DSFJPTUVfRU1JVFRFUl9CX19cIjtcbmNvbnN0IFNZTkNfRVZFTlRfTkFNRSA9IFwiX19DSFJPTUVfU1lOQ19OQU1FX19cIjtcbmNvbnN0IFNZTkNfU1VGRklYID0gXCJAX19DSFJPTUVfU1VGRklYX19cIjtcbmNvbnN0IFRJTUVfS0VZID0gXCJfX3RpbWVfX1wiO1xuY29uc3QgREFUQV9LRVkgPSBcIl9fZGF0YV9fXCI7XG5jb25zdCBIQVNfTElTVEVOID0gXCJfX0NIUk9NRV9IQVNfTElTVEVOX19cIjtcblxubW9kdWxlLmV4cG9ydHMuQ1VTVE9NX0VWRU5UX05BTUUgPSBDVVNUT01fRVZFTlRfTkFNRTtcbm1vZHVsZS5leHBvcnRzLlNQRUNJQUxfQ1VTVE9NX0VWRU5UX05BTUUgPSBTUEVDSUFMX0NVU1RPTV9FVkVOVF9OQU1FO1xubW9kdWxlLmV4cG9ydHMuU1lOQ19FVkVOVF9OQU1FID0gU1lOQ19FVkVOVF9OQU1FO1xubW9kdWxlLmV4cG9ydHMuU1lOQ19TVUZGSVggPSBTWU5DX1NVRkZJWDtcbm1vZHVsZS5leHBvcnRzLlRJTUVfS0VZID0gVElNRV9LRVk7XG5tb2R1bGUuZXhwb3J0cy5EQVRBX0tFWSA9IERBVEFfS0VZO1xubW9kdWxlLmV4cG9ydHMuSEFTX0xJU1RFTiA9IEhBU19MSVNURU47XG4iLCIvKipcbiAqIGludGVyZmFjZSBGaXhlZEVsZW1lbnQge1xuICogICBwb3NpdGlvbjogeyB0b3AsIGJvdHRvbSB9XG4gKiAgIHNvdXJjZTogSFRNTEVsZW1lbnRcbiAqIH1cbiAqIEByZXR1cm4ge0FycmF5PEZpeGVkRWxlbWVudD59XG4gKi9cbm1vZHVsZS5leHBvcnRzLmZpbmRGaXhlZEVsZW1lbnRzID0gZnVuY3Rpb24gZmluZEZpeGVkRWxlbWVudHMoKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcbiAgY29uc3QgZml4ZWRFbGVtZW50cyA9IEFycmF5LmZyb20oZWxlbWVudHMpLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgcmV0dXJuIHN0eWxlcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyAmJiBzdHlsZXMuZGlzcGxheSAhPT0gJ25vbmUnO1xuICB9KTtcbiAgcmV0dXJuIGZpeGVkRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3R7IHRvcCwgYm90dG9tIH0gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3AsXG4gICAgICAgIGJvdHRvbSxcbiAgICAgIH0sXG4gICAgICBzb3VyY2U6IGVsZW1lbnQsXG4gICAgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBweFRvTnVtKHB4VmFsdWUpIHtcbiAgICByZXR1cm4gTnVtYmVyKHB4VmFsdWUubWF0Y2goL1swLTldKy9nKVswXSk7XG59XG5tb2R1bGUuZXhwb3J0cy5maW5kVG9wRml4ZWRFbGVtZW50cyA9IGZ1bmN0aW9uIGZpbmRUb3BGaXhlZEVsZW1lbnRzKGZpeGVkRWxlbWVudHMsIHdpbmRvd0hlaWdodCkge1xuICByZXR1cm4gZml4ZWRFbGVtZW50cy5maWx0ZXIoKGZpeGVkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgdG9wOiB0b3BTdHIsIGJvdHRvbTogYm90dG9tU3RyIH0gPSBnZXRDb21wdXRlZFN0eWxlKGZpeGVkRWxlbWVudC5zb3VyY2UpO1xuICAgIGNvbnN0IHRvcCA9IHB4VG9OdW0odG9wU3RyKTtcbiAgICBjb25zdCBib3R0b20gPSBweFRvTnVtKGJvdHRvbVN0cik7XG4gICAgXG4gICAgY29uc29sZS5sb2coJ2ZpbmRUb3BGaXhlZEVsZW1lbnRzJywgdG9wLCBib3R0b20sIHdpbmRvd0hlaWdodCk7XG4gICAgaWYgKHRvcCA8IHdpbmRvd0hlaWdodCAvIDIgJiYgYm90dG9tID4gd2luZG93SGVpZ2h0IC8gMikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cy5maW5kQm90dG9tRml4ZWRFbGVtZW50cyA9IGZ1bmN0aW9uIGZpbmRCb3R0b21GaXhlZEVsZW1lbnRzKGZpeGVkRWxlbWVudHMsIHdpbmRvd0hlaWdodCkge1xuICByZXR1cm4gZml4ZWRFbGVtZW50cy5maWx0ZXIoKGZpeGVkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgdG9wOiB0b3BTdHIsIGJvdHRvbTogYm90dG9tU3RyIH0gPSBnZXRDb21wdXRlZFN0eWxlKGZpeGVkRWxlbWVudC5zb3VyY2UpO1xuXG4gICAgY29uc3QgdG9wID0gcHhUb051bSh0b3BTdHIpO1xuICAgIGNvbnN0IGJvdHRvbSA9IHB4VG9OdW0oYm90dG9tU3RyKTtcbiAgICBpZiAodG9wID4gd2luZG93SGVpZ2h0IC8gMiAmJiBib3R0b20gPCB3aW5kb3dIZWlnaHQvIDIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuY29uc3QgTUFQID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGVzID0ge30pIHtcbiAgICBjb25zb2xlLmxvZygnc2V0U3R5bGUnLCBlbGVtZW50LCBlbGVtZW50LnN0eWxlLmNzc1RleHQsIHN0eWxlcyk7XG4gICAgTUFQLnNldChlbGVtZW50LCBlbGVtZW50LnN0eWxlLmNzc1RleHQpO1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlW2F0dHJdID0gc3R5bGVzW2F0dHJdO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVzZXRTdHlsZShlbGVtZW50KSB7XG4gICAgY29uc3Qgb3JpZ2luYWxDc3NUZXh0ID0gTUFQLmdldChlbGVtZW50KTtcbiAgICBjb25zb2xlLmxvZygncmVzZXRTdHlsZScsIGVsZW1lbnQsIG9yaWdpbmFsQ3NzVGV4dCk7XG4gICAgZWxlbWVudC5zdHlsZSA9IG9yaWdpbmFsQ3NzVGV4dCB8fCAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMuc2V0U3R5bGUgPSBzZXRTdHlsZTtcbm1vZHVsZS5leHBvcnRzLnJlc2V0U3R5bGUgPSByZXNldFN0eWxlO1xuLyoqXG4gKiBcbiAqIEBwYXJhbSB7QXJyYXk8Rml4ZWRFbGVtZW50Pn0gZml4ZWRFbGVtZW50cyBcbiAqL1xubW9kdWxlLmV4cG9ydHMuaGlkZUZpeGVkRWxlbWVudHMgPSBmdW5jdGlvbiBoaWRlRml4ZWRFbGVtZW50cyhmaXhlZEVsZW1lbnRzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZml4ZWRFbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBmaXhlZEVsZW1lbnRzW2ldLnNvdXJjZTtcbiAgICBzZXRTdHlsZShlbGVtZW50LCB7IGRpc3BsYXk6ICdub25lJyB9KTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMuc2hvd0ZpeGVkRWxlbWVudHMgPSBmdW5jdGlvbiBzaG93Rml4ZWRFbGVtZW50cyhmaXhlZEVsZW1lbnRzKSB7XG5jb25zb2xlLmxvZygnMTExMSBzaG93Rml4ZWRFbGVtZW50cycsICdyZXNldCBzdHlsZScsIGZpeGVkRWxlbWVudHMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpeGVkRWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZml4ZWRFbGVtZW50c1tpXS5zb3VyY2U7XG4gICAgY29uc29sZS5sb2coJzIyMiBzaG93Rml4ZWRFbGVtZW50cycsICdyZXNldCBzdHlsZScpO1xuICAgIHJlc2V0U3R5bGUoZWxlbWVudCk7XG4gIH1cbn1cblxuIiwibW9kdWxlLmV4cG9ydHMuZ2V0Q29udGVudCA9IGZ1bmN0aW9uIGdldENvbnRlbnQobXNnKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSAtICR7bXNnfWA7XG4gIHJldHVybiBjb250ZW50O1xufTtcblxubW9kdWxlLmV4cG9ydHMubG9hZEpzID0gZnVuY3Rpb24gbG9hZEpzKHNyYykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgc2NyaXB0LnNyYyA9IHNyYztcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gIH0pO1xufTtcbiIsImNvbnN0IGNoZWNrZXIgPSByZXF1aXJlKFwiLi9jaGVja2VyXCIpO1xuXG5jb25zdCBERUJVR0dFUiA9IHRydWU7XG5cbmNvbnN0IHsgZ2V0Q3VycmVudFNjcmlwdE5hbWUgfSA9IGNoZWNrZXI7XG5cbmNvbnN0IGN1cnJlbnRTY3JpcHROYW1lID0gZ2V0Q3VycmVudFNjcmlwdE5hbWUoKSB8fCBcIlVOS05PV05cIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb2coLi4ucGFyYW1zKSB7XG4gIGlmIChERUJVR0dFUiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgaW5mbyA9IFtjdXJyZW50U2NyaXB0TmFtZSwgLi4ucGFyYW1zXTtcbiAgY29uc29sZS5sb2coLi4uaW5mbyk7XG59O1xuIiwiY29uc3QgZW1pdHRlciA9IHJlcXVpcmUoXCIuL2Nocm9tZS1lbWl0dGVyXCIpO1xuY29uc3QgZml4ZWRFbGVtZW50VXRpbHMgPSByZXF1aXJlKFwiLi9maXhlZEVsZW1lbnRcIik7XG5cbmNvbnN0IHsgY2hyb21lIH0gPSB3aW5kb3c7XG4vKipcbiAqIOWvuemhtemdouaIquWbvlxuICogQHBhcmFtIHsqfSB0aW1lc1xuICovXG5mdW5jdGlvbiBzY3JlZW5zaG90KGNhbnZhc0RhdGEsIGNiLCB0aW1lcyA9IDAsIG9yaWdpbmFsU2Nyb2xsVG9wKSB7XG4gIGNvbnN0IHtcbiAgICBzaXplOiB7IHBhZ2VIZWlnaHQgfSxcbiAgICB0YWJsZTogeyByb3dzIH0sXG4gICAgdG9wRml4ZWRFbGVtZW50cyxcbiAgICBib3R0b21GaXhlZEVsZW1lbnRzLFxuICB9ID0gY2FudmFzRGF0YTtcbiAgY29uc29sZS5sb2coXCJzdGFydCBzY3JlZW5zaG90XCIsIHRpbWVzLCByb3dzKTtcblxuICBpZiAodGltZXMgPT09IHJvd3MpIHtcbiAgICBmaXhlZEVsZW1lbnRVdGlscy5zaG93Rml4ZWRFbGVtZW50cyh0b3BGaXhlZEVsZW1lbnRzKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgb3JpZ2luYWxTY3JvbGxUb3ApO1xuICAgIGZpeGVkRWxlbWVudFV0aWxzLnJlc2V0U3R5bGUoZG9jdW1lbnQuYm9keSk7XG4gICAgZW1pdHRlci5yZW1vdmUoXCJzY3JlZW5zaG90Q29tcGxldGVcIik7XG4gICAgbWVyZ2VJbWFnZXMoY2FudmFzRGF0YSwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocm93cyAhPT0gMSkge1xuICAgIGlmICh0aW1lcyA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJoaWRlIGJvdHRvbSBmaXhlZCBlbGVtZW50c1wiLCBib3R0b21GaXhlZEVsZW1lbnRzKTtcbiAgICAgIGZpeGVkRWxlbWVudFV0aWxzLmhpZGVGaXhlZEVsZW1lbnRzKGJvdHRvbUZpeGVkRWxlbWVudHMpO1xuICAgIH1cbiAgICBpZiAocm93cyA+IDEgJiYgdGltZXMgPT09IDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGlkZSB0b3AgZml4ZWQgZWxlbWVudHNcIiwgdG9wRml4ZWRFbGVtZW50cyk7XG4gICAgICBmaXhlZEVsZW1lbnRVdGlscy5oaWRlRml4ZWRFbGVtZW50cyh0b3BGaXhlZEVsZW1lbnRzKTtcbiAgICB9XG4gICAgaWYgKHRpbWVzID09PSByb3dzIC0gMSkge1xuICAgICAgY29uc29sZS5sb2coXCJzaG93IGJvdHRvbSBmaXhlZCBlbGVtZW50c1wiLCBib3R0b21GaXhlZEVsZW1lbnRzKTtcbiAgICAgIGZpeGVkRWxlbWVudFV0aWxzLnNob3dGaXhlZEVsZW1lbnRzKGJvdHRvbUZpeGVkRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHdpbmRvdy5zY3JvbGxUbygwLCB0aW1lcyAqIHBhZ2VIZWlnaHQpO1xuICBlbWl0dGVyLmVtaXQoXCJzY3JlZW5zaG90XCIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZUltYWdlcyhjYW52YXNEYXRhLCBjYikge1xuICBjb25zdCB7XG4gICAgc2NyZWVuc2hvdHMsXG4gICAgc2l6ZTogeyBwYWdlSGVpZ2h0LCBmdWxsV2lkdGgsIGZ1bGxIZWlnaHQgfSxcbiAgfSA9IGNhbnZhc0RhdGE7XG5cbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLndpZHRoID0gZnVsbFdpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gZnVsbEhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAvLyDku47kuIvlvoDkuIrnu5jliLZcbiAgbGV0IGluZGV4ID0gc2NyZWVuc2hvdHMubGVuZ3RoIC0gMTtcbiAgZnVuY3Rpb24gZHJhdyhzY3JlZW5zaG90KSB7XG4gICAgY29uc29sZS5sb2coXCJzdGFydCBkcmF3XCIsIGluZGV4KTtcbiAgICBjb25zdCB0ZW1wSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzY3JlZW5zaG90LmRhdGFfdXJsKTtcbiAgICB0ZW1wSW1hZ2Uuc3JjID0gc2NyZWVuc2hvdC51cmw7XG4gICAgdGVtcEltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxldCB5ID0gaW5kZXggKiBwYWdlSGVpZ2h0O1xuICAgICAgLy8g5aaC5p6c5piv5pyA5ZCO5LiA5bygXG4gICAgICBpZiAoaW5kZXggPT09IHNjcmVlbnNob3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgcmVhbEhlaWdodE9mTGFzdFNjcmVlbnNob3QgPSBmdWxsSGVpZ2h0ICUgcGFnZUhlaWdodDtcbiAgICAgICAgLy8geSA9IHBhZ2VIZWlnaHQgLSByZWFsSGVpZ2h0T2ZMYXN0U2NyZWVuc2hvdDtcbiAgICAgICAgeSA9IGZ1bGxIZWlnaHQgLSBwYWdlSGVpZ2h0O1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJ5IHBvc2l0aW9uXCIsIHkpO1xuICAgICAgY3R4LmRyYXdJbWFnZSh0ZW1wSW1hZ2UsIDAsIHkpO1xuICAgICAgaW5kZXggLT0gMTtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgY2IoY2FudmFzLCBjYW52YXNEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkcmF3KHNjcmVlbnNob3RzW2luZGV4XSk7XG4gICAgfTtcbiAgfVxuXG4gIGRyYXcoc2NyZWVuc2hvdHNbaW5kZXhdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYWluKGNiKSB7XG4gIGNvbnN0IHNjcm9sbFdpZHRoID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aDtcbiAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XG4gIGNvbnN0IHZpc2libGVXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgY29uc3QgdmlzaWJsZUhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgLy8g5qC55o2u5Y+v6KeG5Yy65Z+f6K6h566X5pW05Liq572R6aG15Y+v5Lul5ouG5YiG5oiQ5aSa5bCR6KGM5aSa5bCR5YiXXG4gIGNvbnN0IGNvbHVtbnMgPSBNYXRoLmNlaWwoKHNjcm9sbFdpZHRoICogMS4wKSAvIHZpc2libGVXaWR0aCk7XG4gIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwoKHNjcm9sbEhlaWdodCAqIDEuMCkgLyB2aXNpYmxlSGVpZ2h0KTtcblxuICBjb25zdCBmaXhlZEVsZW1lbnRzID0gZml4ZWRFbGVtZW50VXRpbHMuZmluZEZpeGVkRWxlbWVudHMoKTtcbiAgY29uc29sZS5sb2coXCJmaXhlZCBlbGVtZW50c1wiLCBmaXhlZEVsZW1lbnRzKTtcbiAgY29uc3QgdG9wRml4ZWRFbGVtZW50cyA9IGZpeGVkRWxlbWVudFV0aWxzLmZpbmRUb3BGaXhlZEVsZW1lbnRzKFxuICAgIGZpeGVkRWxlbWVudHMsXG4gICAgdmlzaWJsZUhlaWdodFxuICApO1xuICBjb25zb2xlLmxvZyhcInRvcCBmaXhlZCBlbGVtZW50c1wiLCB0b3BGaXhlZEVsZW1lbnRzKTtcbiAgY29uc3QgYm90dG9tRml4ZWRFbGVtZW50cyA9IGZpeGVkRWxlbWVudFV0aWxzLmZpbmRCb3R0b21GaXhlZEVsZW1lbnRzKFxuICAgIGZpeGVkRWxlbWVudHMsXG4gICAgdmlzaWJsZUhlaWdodFxuICApO1xuICBjb25zb2xlLmxvZyhcImJvdHRvbSBmaXhlZCBlbGVtZW50c1wiLCBib3R0b21GaXhlZEVsZW1lbnRzKTtcbiAgY29uc3QgY2FudmFzRGF0YSA9IHtcbiAgICBzaXplOiB7XG4gICAgICBmdWxsV2lkdGg6IHNjcm9sbFdpZHRoLFxuICAgICAgZnVsbEhlaWdodDogc2Nyb2xsSGVpZ2h0LFxuICAgICAgcGFnZVdpZHRoOiB2aXNpYmxlV2lkdGgsXG4gICAgICBwYWdlSGVpZ2h0OiB2aXNpYmxlSGVpZ2h0LFxuICAgIH0sXG4gICAgdGFibGU6IHsgcm93czogcm93cywgY29sdW1uczogY29sdW1ucyB9LFxuICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICB0b3BGaXhlZEVsZW1lbnRzLFxuICAgIGJvdHRvbUZpeGVkRWxlbWVudHMsXG4gIH07XG5cbiAgbGV0IHRpbWVzID0gMDtcbiAgY29uc3Qgb3JpZ2luYWxTY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICBlbWl0dGVyLm9uKFwic2NyZWVuc2hvdENvbXBsZXRlXCIsICh1cmwpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNvbXBsZXRlIHNjcmVlbnNob3RcIik7XG4gICAgY2FudmFzRGF0YS5zY3JlZW5zaG90cy5wdXNoKHtcbiAgICAgIHJvdzogdGltZXMsXG4gICAgICBjb2x1bW46IDAsXG4gICAgICB1cmwsXG4gICAgfSk7XG4gICAgdGltZXMgKz0gMTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNjcmVlbnNob3QoY2FudmFzRGF0YSwgY2IsIHRpbWVzLCBvcmlnaW5hbFNjcm9sbFRvcCk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xuICBcbiAgZml4ZWRFbGVtZW50VXRpbHMuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgeyBvdmVyZmxvdzogJ2hpZGRlbicgfSk7XG4gIHNjcmVlbnNob3QoY2FudmFzRGF0YSwgY2IsIHRpbWVzLCBvcmlnaW5hbFNjcm9sbFRvcCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=background.js.map