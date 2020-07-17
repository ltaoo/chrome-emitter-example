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

/***/ "./node_modules/chrome-emitter/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/chrome-emitter/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t={NONE:0,CONTENT:1,INJECTED:2,BACKGROUND:3,POPUP:4,OPTIONS:5},e={0:"NONE",1:"CONTENT",2:"INJECTED",3:"BACKGROUND",4:"POPUP",5:"OPTIONS"},i=window.chrome;function a(){if(void 0===i)return t.NONE;if(void 0===i.storage)return t.INJECTED;if(void 0===i.tabs)return t.CONTENT;var e=i.extension.getBackgroundPage();return window===e?t.BACKGROUND:0!==i.extension.getViews({type:"popup"}).length?t.POPUP:t.OPTIONS}var u=function(){return a()===t.BACKGROUND},l=function(){return a()===t.INJECTED},c=function(){return a()===t.CONTENT};a();var s={supportNotifyGlobally:!1},v="@@__EMITTER_A__",y="@@__EMITTER_B__",p="@@__SYNC_NAME__",m="__time__",E="__data__",w="@@__EMITTER_FROM_INJECTED__",_=("@@__EMITTER_".concat((new Date).valueOf().toString(),"__"),{}),b={},N=c,g=u,O=l(),h=N(),T=(g(),window.chrome),C=!1,A=null;function I(e){var t,n;O?window.dispatchEvent(new CustomEvent(y,{detail:e})):h&&(e.type.includes(w)||Object.keys(b).includes(e.type))?window.dispatchEvent(new CustomEvent(v,{detail:e})):(n=(new Date).valueOf(),T.storage.local.set((r(t={},m,n),r(t,E,{value:n,type:e.type,payload:e.payload}),t)))}var S=null,P=null;function D(){!0!==C&&(function(r){if(O)return S=function(e){e.detail,r(e.detail)},window.addEventListener(v,S);h&&(P=function(e){e.detail,r(e.detail)},window.addEventListener(y,P)),A=function(e){var t,n=e[E];void 0!==n&&void 0!==n.newValue&&(T.storage.local.remove([m,E]),t=n.newValue,r(t))},T.storage&&T.storage.onChanged.addListener(A)}(function(e){e.type;var t=e.type,n=e.payload;if(h&&t===p){e.type;var r=d(n,2),o=r[0],i=r[1];return b[o]=i,void(_[o]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];I({type:i,payload:t})})}if(h&&t.includes(w)){e.type;var a=t.replace(w,""),u=_[a];return void 0!==u?void u.apply(void 0,f(n)):void I({type:a,payload:n})}if(O&&_[t+w])return e.type,void _[t+w].apply(_,f(n));var l=_[t];void 0!==l&&l.apply(void 0,f(n))}),h&&document.addEventListener("visibilitychange",function(){!0!==s.supportNotifyGlobally&&("visible"===document.visibilityState?D():T.storage.onChanged.hasListeners()&&null!==A&&(S&&window.removeEventListener(v,S),P&&window.removeEventListener(y,P),T.storage.onChanged.hasListeners()&&T.storage.onChanged.removeListener(A),C=!1))}),C=!0)}var j={emit:function(e){var t=e;O&&e!==p&&(t=e+w);for(var n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];I({type:t,payload:r})},on:function(e,t){var n=e;O&&(n=e+w,j.emit(p,e,n)),_[n]=t,!1===C&&D()},remove:function(e){delete _[e]},config:function(e,t){return void 0===t||(s[e]=t),s}};return j});


/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-emitter */ "./node_modules/chrome-emitter/dist/index.js");
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_emitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var _utils_screenshot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/screenshot */ "./src/utils/screenshot/index.js");
/**
 * @file content 脚本
 */





chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.config('supportNotifyGlobally', true);

const CONTAINER_ID = '__emitter_content_id__';

const $container = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createFixedContainer"])(CONTAINER_ID, '由 content 插入页面');
$container.onclick = () => {
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('content-to-injected', 'hello i am content');
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('content-to-options', 'hello i am content');
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('content-to-background', 'hello i am content');
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

chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('popup-to-content', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[content] from popup', content);
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('options-to-content', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[content] from options', content);
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('background-to-content', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[content] from background', content);
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('injected-to-content', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[content] from inserted', content);
});

chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('startScreenshot', () => {
  // console.log('start screenshot');
  Object(_utils_screenshot__WEBPACK_IMPORTED_MODULE_2__["default"])((canvas, canvasData) => {
    // console.log(canvasData.size, canvasData.table, canvasData.screenshots);
    const url = canvas.toDataURL('image/png');
    chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('openNewTab', url);
  });
});


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
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-emitter */ "./node_modules/chrome-emitter/dist/index.js");
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_emitter__WEBPACK_IMPORTED_MODULE_0__);
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
    chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.remove("screenshotSingleScreenComplete");
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

  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit("screenshot");
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
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on("screenshotSingleScreenComplete", (url) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nocm9tZS1lbWl0dGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zY3JlZW5zaG90L2ZpeGVkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NyZWVuc2hvdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsZUFBZSxLQUFvRCxvQkFBb0IsU0FBdUUsQ0FBQyxpQkFBaUIsYUFBYSxrQkFBa0IseUNBQXlDLGtEQUFrRCxXQUFXLGdCQUFnQixtQkFBbUIsNkJBQTZCLG1CQUFtQixzRUFBc0UsNEJBQTRC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QiwrREFBbUM7QUFDM0Q7QUFDQSwyQkFBMkIsa0VBQXNDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFFQUF5QztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZLCtCQUErQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxxREFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUgsRUFBRSxzREFBMEIsaUJBQWlCLHFCQUFxQjs7QUFFbEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb250ZW50LmpzXCIpO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9ZXx8c2VsZikuZW1pdHRlcj10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX1mdW5jdGlvbiBkKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSkpcmV0dXJuO3ZhciBuPVtdLHI9ITAsbz0hMSxpPXZvaWQgMDt0cnl7Zm9yKHZhciBhLHU9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShyPShhPXUubmV4dCgpKS5kb25lKSYmKG4ucHVzaChhLnZhbHVlKSwhdHx8bi5sZW5ndGghPT10KTtyPSEwKTt9Y2F0Y2goZSl7bz0hMCxpPWV9ZmluYWxseXt0cnl7cnx8bnVsbD09dS5yZXR1cm58fHUucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IGl9fXJldHVybiBufShlLHQpfHxuKGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBmKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBvKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fG4oZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gbihlLHQpe2lmKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBvKGUsdCk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1uJiZlLmNvbnN0cnVjdG9yJiYobj1lLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bj9BcnJheS5mcm9tKGUpOlwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKT9vKGUsdCk6dm9pZCAwfX1mdW5jdGlvbiBvKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciBuPTAscj1uZXcgQXJyYXkodCk7bjx0O24rKylyW25dPWVbbl07cmV0dXJuIHJ9dmFyIHQ9e05PTkU6MCxDT05URU5UOjEsSU5KRUNURUQ6MixCQUNLR1JPVU5EOjMsUE9QVVA6NCxPUFRJT05TOjV9LGU9ezA6XCJOT05FXCIsMTpcIkNPTlRFTlRcIiwyOlwiSU5KRUNURURcIiwzOlwiQkFDS0dST1VORFwiLDQ6XCJQT1BVUFwiLDU6XCJPUFRJT05TXCJ9LGk9d2luZG93LmNocm9tZTtmdW5jdGlvbiBhKCl7aWYodm9pZCAwPT09aSlyZXR1cm4gdC5OT05FO2lmKHZvaWQgMD09PWkuc3RvcmFnZSlyZXR1cm4gdC5JTkpFQ1RFRDtpZih2b2lkIDA9PT1pLnRhYnMpcmV0dXJuIHQuQ09OVEVOVDt2YXIgZT1pLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO3JldHVybiB3aW5kb3c9PT1lP3QuQkFDS0dST1VORDowIT09aS5leHRlbnNpb24uZ2V0Vmlld3Moe3R5cGU6XCJwb3B1cFwifSkubGVuZ3RoP3QuUE9QVVA6dC5PUFRJT05TfXZhciB1PWZ1bmN0aW9uKCl7cmV0dXJuIGEoKT09PXQuQkFDS0dST1VORH0sbD1mdW5jdGlvbigpe3JldHVybiBhKCk9PT10LklOSkVDVEVEfSxjPWZ1bmN0aW9uKCl7cmV0dXJuIGEoKT09PXQuQ09OVEVOVH07YSgpO3ZhciBzPXtzdXBwb3J0Tm90aWZ5R2xvYmFsbHk6ITF9LHY9XCJAQF9fRU1JVFRFUl9BX19cIix5PVwiQEBfX0VNSVRURVJfQl9fXCIscD1cIkBAX19TWU5DX05BTUVfX1wiLG09XCJfX3RpbWVfX1wiLEU9XCJfX2RhdGFfX1wiLHc9XCJAQF9fRU1JVFRFUl9GUk9NX0lOSkVDVEVEX19cIixfPShcIkBAX19FTUlUVEVSX1wiLmNvbmNhdCgobmV3IERhdGUpLnZhbHVlT2YoKS50b1N0cmluZygpLFwiX19cIikse30pLGI9e30sTj1jLGc9dSxPPWwoKSxoPU4oKSxUPShnKCksd2luZG93LmNocm9tZSksQz0hMSxBPW51bGw7ZnVuY3Rpb24gSShlKXt2YXIgdCxuO08/d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHkse2RldGFpbDplfSkpOmgmJihlLnR5cGUuaW5jbHVkZXModyl8fE9iamVjdC5rZXlzKGIpLmluY2x1ZGVzKGUudHlwZSkpP3dpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh2LHtkZXRhaWw6ZX0pKToobj0obmV3IERhdGUpLnZhbHVlT2YoKSxULnN0b3JhZ2UubG9jYWwuc2V0KChyKHQ9e30sbSxuKSxyKHQsRSx7dmFsdWU6bix0eXBlOmUudHlwZSxwYXlsb2FkOmUucGF5bG9hZH0pLHQpKSl9dmFyIFM9bnVsbCxQPW51bGw7ZnVuY3Rpb24gRCgpeyEwIT09QyYmKGZ1bmN0aW9uKHIpe2lmKE8pcmV0dXJuIFM9ZnVuY3Rpb24oZSl7ZS5kZXRhaWwscihlLmRldGFpbCl9LHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHYsUyk7aCYmKFA9ZnVuY3Rpb24oZSl7ZS5kZXRhaWwscihlLmRldGFpbCl9LHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHksUCkpLEE9ZnVuY3Rpb24oZSl7dmFyIHQsbj1lW0VdO3ZvaWQgMCE9PW4mJnZvaWQgMCE9PW4ubmV3VmFsdWUmJihULnN0b3JhZ2UubG9jYWwucmVtb3ZlKFttLEVdKSx0PW4ubmV3VmFsdWUscih0KSl9LFQuc3RvcmFnZSYmVC5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihBKX0oZnVuY3Rpb24oZSl7ZS50eXBlO3ZhciB0PWUudHlwZSxuPWUucGF5bG9hZDtpZihoJiZ0PT09cCl7ZS50eXBlO3ZhciByPWQobiwyKSxvPXJbMF0saT1yWzFdO3JldHVybiBiW29dPWksdm9pZChfW29dPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsdD1uZXcgQXJyYXkoZSksbj0wO248ZTtuKyspdFtuXT1hcmd1bWVudHNbbl07SSh7dHlwZTppLHBheWxvYWQ6dH0pfSl9aWYoaCYmdC5pbmNsdWRlcyh3KSl7ZS50eXBlO3ZhciBhPXQucmVwbGFjZSh3LFwiXCIpLHU9X1thXTtyZXR1cm4gdm9pZCAwIT09dT92b2lkIHUuYXBwbHkodm9pZCAwLGYobikpOnZvaWQgSSh7dHlwZTphLHBheWxvYWQ6bn0pfWlmKE8mJl9bdCt3XSlyZXR1cm4gZS50eXBlLHZvaWQgX1t0K3ddLmFwcGx5KF8sZihuKSk7dmFyIGw9X1t0XTt2b2lkIDAhPT1sJiZsLmFwcGx5KHZvaWQgMCxmKG4pKX0pLGgmJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsZnVuY3Rpb24oKXshMCE9PXMuc3VwcG9ydE5vdGlmeUdsb2JhbGx5JiYoXCJ2aXNpYmxlXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGU/RCgpOlQuc3RvcmFnZS5vbkNoYW5nZWQuaGFzTGlzdGVuZXJzKCkmJm51bGwhPT1BJiYoUyYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodixTKSxQJiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih5LFApLFQuc3RvcmFnZS5vbkNoYW5nZWQuaGFzTGlzdGVuZXJzKCkmJlQuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIoQSksQz0hMSkpfSksQz0hMCl9dmFyIGo9e2VtaXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZTtPJiZlIT09cCYmKHQ9ZSt3KTtmb3IodmFyIG49YXJndW1lbnRzLmxlbmd0aCxyPW5ldyBBcnJheSgxPG4/bi0xOjApLG89MTtvPG47bysrKXJbby0xXT1hcmd1bWVudHNbb107SSh7dHlwZTp0LHBheWxvYWQ6cn0pfSxvbjpmdW5jdGlvbihlLHQpe3ZhciBuPWU7TyYmKG49ZSt3LGouZW1pdChwLGUsbikpLF9bbl09dCwhMT09PUMmJkQoKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe2RlbGV0ZSBfW2VdfSxjb25maWc6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dHx8KHNbZV09dCksc319O3JldHVybiBqfSk7XG4iLCIvKipcbiAqIEBmaWxlIGNvbnRlbnQg6ISa5pysXG4gKi9cbmltcG9ydCBlbWl0dGVyIGZyb20gJ2Nocm9tZS1lbWl0dGVyJztcblxuaW1wb3J0IHsgZ2V0Q29udGVudCwgbG9hZEpzLCBjcmVhdGVGaXhlZENvbnRhaW5lciB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHNjcmVlbnNob3QgZnJvbSAnLi91dGlscy9zY3JlZW5zaG90JztcblxuZW1pdHRlci5jb25maWcoJ3N1cHBvcnROb3RpZnlHbG9iYWxseScsIHRydWUpO1xuXG5jb25zdCBDT05UQUlORVJfSUQgPSAnX19lbWl0dGVyX2NvbnRlbnRfaWRfXyc7XG5cbmNvbnN0ICRjb250YWluZXIgPSBjcmVhdGVGaXhlZENvbnRhaW5lcihDT05UQUlORVJfSUQsICfnlLEgY29udGVudCDmj5LlhaXpobXpnaInKTtcbiRjb250YWluZXIub25jbGljayA9ICgpID0+IHtcbiAgZW1pdHRlci5lbWl0KCdjb250ZW50LXRvLWluamVjdGVkJywgJ2hlbGxvIGkgYW0gY29udGVudCcpO1xuICBlbWl0dGVyLmVtaXQoJ2NvbnRlbnQtdG8tb3B0aW9ucycsICdoZWxsbyBpIGFtIGNvbnRlbnQnKTtcbiAgZW1pdHRlci5lbWl0KCdjb250ZW50LXRvLWJhY2tncm91bmQnLCAnaGVsbG8gaSBhbSBjb250ZW50Jyk7XG59XG5cbmRvY3VtZW50LmJvZHkub25sb2FkID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCRjb250YWluZXIpO1xufVxuXG5sb2FkSnMoY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoXCIvaW5qZWN0ZWQuanNcIikpXG4gIC50aGVuKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW2NvbnRlbnRdJywgJ2luc2VydGVkIGxvYWRlZCcpO1xuICB9KTtcblxuZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyKGNvbnRlbnQpIHtcbiAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0NPTlRBSU5FUl9JRH1gKTtcbiAgJGNvbnRhaW5lci5pbm5lclRleHQgPSBjb250ZW50O1xufVxuXG5lbWl0dGVyLm9uKCdwb3B1cC10by1jb250ZW50JywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICB1cGRhdGVDb250YWluZXIoY29udGVudCk7XG4gIGNvbnNvbGUubG9nKCdbY29udGVudF0gZnJvbSBwb3B1cCcsIGNvbnRlbnQpO1xufSk7XG5lbWl0dGVyLm9uKCdvcHRpb25zLXRvLWNvbnRlbnQnLCAobXNnKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4gIHVwZGF0ZUNvbnRhaW5lcihjb250ZW50KTtcbiAgY29uc29sZS5sb2coJ1tjb250ZW50XSBmcm9tIG9wdGlvbnMnLCBjb250ZW50KTtcbn0pO1xuZW1pdHRlci5vbignYmFja2dyb3VuZC10by1jb250ZW50JywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICB1cGRhdGVDb250YWluZXIoY29udGVudCk7XG4gIGNvbnNvbGUubG9nKCdbY29udGVudF0gZnJvbSBiYWNrZ3JvdW5kJywgY29udGVudCk7XG59KTtcbmVtaXR0ZXIub24oJ2luamVjdGVkLXRvLWNvbnRlbnQnLCAobXNnKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4gIHVwZGF0ZUNvbnRhaW5lcihjb250ZW50KTtcbiAgY29uc29sZS5sb2coJ1tjb250ZW50XSBmcm9tIGluc2VydGVkJywgY29udGVudCk7XG59KTtcblxuZW1pdHRlci5vbignc3RhcnRTY3JlZW5zaG90JywgKCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZygnc3RhcnQgc2NyZWVuc2hvdCcpO1xuICBzY3JlZW5zaG90KChjYW52YXMsIGNhbnZhc0RhdGEpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhjYW52YXNEYXRhLnNpemUsIGNhbnZhc0RhdGEudGFibGUsIGNhbnZhc0RhdGEuc2NyZWVuc2hvdHMpO1xuICAgIGNvbnN0IHVybCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgIGVtaXR0ZXIuZW1pdCgnb3Blbk5ld1RhYicsIHVybCk7XG4gIH0pO1xufSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q29udGVudChtc2cpIHtcbiAgY29uc3QgY29udGVudCA9IGAke25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9IC0gJHttc2d9YDtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSnMoc3JjKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaXhlZENvbnRhaW5lcihpZCwgY29udGVudCwgc3R5bGVzID0gJycpIHtcbiAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICRjb250YWluZXIuc3R5bGUgPVxuICAgIFwiei1pbmRleDogOTk5OyBwb3NpdGlvbjogZml4ZWQ7IHJpZ2h0OiAyMHB4OyB0b3A6IDIwcHg7IHBhZGRpbmc6IDRweCAxMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1wiICsgc3R5bGVzO1xuICAkY29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiJHtpZH1cIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHRleHQtYWxpZ246IGNlbnRlcjsgbWluLXdpZHRoOiAxODBweDsgaGVpZ2h0OiAzMHB4O1wiPlxuICAke2NvbnRlbnR9XG48L2Rpdj5cbmA7XG4gIHJldHVybiAkY29udGFpbmVyO1xufVxuIiwiLyoqXG4gKiBpbnRlcmZhY2UgRml4ZWRFbGVtZW50IHtcbiAqICAgcG9zaXRpb246IHsgdG9wLCBib3R0b20gfVxuICogICBzb3VyY2U6IEhUTUxFbGVtZW50XG4gKiB9XG4gKiBAcmV0dXJuIHtBcnJheTxGaXhlZEVsZW1lbnQ+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpeGVkRWxlbWVudHMoKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpO1xuICBjb25zdCBmaXhlZEVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50cykuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICByZXR1cm4gc3R5bGVzLnBvc2l0aW9uID09PSBcImZpeGVkXCIgJiYgc3R5bGVzLmRpc3BsYXkgIT09IFwibm9uZVwiO1xuICB9KTtcbiAgcmV0dXJuIGZpeGVkRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIGJvdHRvbSB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgdG9wLFxuICAgICAgICBib3R0b20sXG4gICAgICB9LFxuICAgICAgc291cmNlOiBlbGVtZW50LFxuICAgIH07XG4gIH0pO1xufVxuZnVuY3Rpb24gcHhUb051bShweFZhbHVlKSB7XG4gIHJldHVybiBOdW1iZXIocHhWYWx1ZS5tYXRjaCgvWzAtOV0rL2cpWzBdKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVG9wRml4ZWRFbGVtZW50cyhmaXhlZEVsZW1lbnRzLCB3aW5kb3dIZWlnaHQpIHtcbiAgcmV0dXJuIGZpeGVkRWxlbWVudHMuZmlsdGVyKChmaXhlZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHRvcDogdG9wU3RyLCBib3R0b206IGJvdHRvbVN0ciB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShcbiAgICAgIGZpeGVkRWxlbWVudC5zb3VyY2VcbiAgICApO1xuICAgIGNvbnN0IHRvcCA9IHB4VG9OdW0odG9wU3RyKTtcbiAgICBjb25zdCBib3R0b20gPSBweFRvTnVtKGJvdHRvbVN0cik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImZpbmRUb3BGaXhlZEVsZW1lbnRzXCIsIHRvcCwgYm90dG9tLCB3aW5kb3dIZWlnaHQpO1xuICAgIGlmICh0b3AgPCB3aW5kb3dIZWlnaHQgLyAyICYmIGJvdHRvbSA+IHdpbmRvd0hlaWdodCAvIDIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCb3R0b21GaXhlZEVsZW1lbnRzKFxuICBmaXhlZEVsZW1lbnRzLFxuICB3aW5kb3dIZWlnaHRcbikge1xuICByZXR1cm4gZml4ZWRFbGVtZW50cy5maWx0ZXIoKGZpeGVkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgdG9wOiB0b3BTdHIsIGJvdHRvbTogYm90dG9tU3RyIH0gPSBnZXRDb21wdXRlZFN0eWxlKFxuICAgICAgZml4ZWRFbGVtZW50LnNvdXJjZVxuICAgICk7XG5cbiAgICBjb25zdCB0b3AgPSBweFRvTnVtKHRvcFN0cik7XG4gICAgY29uc3QgYm90dG9tID0gcHhUb051bShib3R0b21TdHIpO1xuICAgIGlmICh0b3AgPiB3aW5kb3dIZWlnaHQgLyAyICYmIGJvdHRvbSA8IHdpbmRvd0hlaWdodCAvIDIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTtcbmNvbnN0IE1BUCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZXMgPSB7fSkge1xuICAvLyBjb25zb2xlLmxvZyhcInNldFN0eWxlXCIsIGVsZW1lbnQsIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCwgc3R5bGVzKTtcbiAgTUFQLnNldChlbGVtZW50LCBlbGVtZW50LnN0eWxlLmNzc1RleHQpO1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlW2F0dHJdID0gc3R5bGVzW2F0dHJdO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXNldFN0eWxlKGVsZW1lbnQpIHtcbiAgY29uc3Qgb3JpZ2luYWxDc3NUZXh0ID0gTUFQLmdldChlbGVtZW50KTtcbiAgLy8gY29uc29sZS5sb2coXCJyZXNldFN0eWxlXCIsIGVsZW1lbnQsIG9yaWdpbmFsQ3NzVGV4dCk7XG4gIGlmIChvcmlnaW5hbENzc1RleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LnN0eWxlID0gb3JpZ2luYWxDc3NUZXh0IHx8IFwiXCI7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8Rml4ZWRFbGVtZW50Pn0gZml4ZWRFbGVtZW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gaGlkZUZpeGVkRWxlbWVudHMoZml4ZWRFbGVtZW50cykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpeGVkRWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZml4ZWRFbGVtZW50c1tpXS5zb3VyY2U7XG4gICAgc2V0U3R5bGUoZWxlbWVudCwgeyBkaXNwbGF5OiBcIm5vbmVcIiB9KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dGaXhlZEVsZW1lbnRzKGZpeGVkRWxlbWVudHMpIHtcbiAgLy8gY29uc29sZS5sb2coXCIxMTExIHNob3dGaXhlZEVsZW1lbnRzXCIsIFwicmVzZXQgc3R5bGVcIiwgZml4ZWRFbGVtZW50cyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZml4ZWRFbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBmaXhlZEVsZW1lbnRzW2ldLnNvdXJjZTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIjIyMiBzaG93Rml4ZWRFbGVtZW50c1wiLCBcInJlc2V0IHN0eWxlXCIpO1xuICAgIHJlc2V0U3R5bGUoZWxlbWVudCk7XG4gIH1cbn1cbiIsImltcG9ydCBlbWl0dGVyIGZyb20gXCJjaHJvbWUtZW1pdHRlclwiO1xuaW1wb3J0ICogYXMgZml4ZWRFbGVtZW50VXRpbHMgZnJvbSBcIi4vZml4ZWRFbGVtZW50XCI7XG5cbi8qKlxuICog5a+56aG16Z2i5oiq5Zu+XG4gKiBAcGFyYW0geyp9IHRpbWVzXG4gKi9cbmZ1bmN0aW9uIHNjcmVlbnNob3QoY2FudmFzRGF0YSwgY2IsIHRpbWVzID0gMCwgb3JpZ2luYWxTY3JvbGxUb3ApIHtcbiAgY29uc3Qge1xuICAgIHNpemU6IHsgcGFnZUhlaWdodCB9LFxuICAgIHRhYmxlOiB7IHJvd3MgfSxcbiAgICB0b3BGaXhlZEVsZW1lbnRzLFxuICAgIGJvdHRvbUZpeGVkRWxlbWVudHMsXG4gIH0gPSBjYW52YXNEYXRhO1xuICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IHNjcmVlbnNob3RcIiwgdGltZXMsIHJvd3MpO1xuXG4gIGlmICh0aW1lcyA9PT0gcm93cykge1xuICAgIGZpeGVkRWxlbWVudFV0aWxzLnNob3dGaXhlZEVsZW1lbnRzKHRvcEZpeGVkRWxlbWVudHMpO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBvcmlnaW5hbFNjcm9sbFRvcCk7XG4gICAgZml4ZWRFbGVtZW50VXRpbHMucmVzZXRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICBlbWl0dGVyLnJlbW92ZShcInNjcmVlbnNob3RTaW5nbGVTY3JlZW5Db21wbGV0ZVwiKTtcbiAgICBtZXJnZUltYWdlcyhjYW52YXNEYXRhLCBjYik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChyb3dzICE9PSAxKSB7XG4gICAgaWYgKHRpbWVzID09PSAwKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImhpZGUgYm90dG9tIGZpeGVkIGVsZW1lbnRzXCIsIGJvdHRvbUZpeGVkRWxlbWVudHMpO1xuICAgICAgZml4ZWRFbGVtZW50VXRpbHMuaGlkZUZpeGVkRWxlbWVudHMoYm90dG9tRml4ZWRFbGVtZW50cyk7XG4gICAgfVxuICAgIGlmIChyb3dzID4gMSAmJiB0aW1lcyA9PT0gMSkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJoaWRlIHRvcCBmaXhlZCBlbGVtZW50c1wiLCB0b3BGaXhlZEVsZW1lbnRzKTtcbiAgICAgIGZpeGVkRWxlbWVudFV0aWxzLmhpZGVGaXhlZEVsZW1lbnRzKHRvcEZpeGVkRWxlbWVudHMpO1xuICAgIH1cbiAgICBpZiAodGltZXMgPT09IHJvd3MgLSAxKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNob3cgYm90dG9tIGZpeGVkIGVsZW1lbnRzXCIsIGJvdHRvbUZpeGVkRWxlbWVudHMpO1xuICAgICAgZml4ZWRFbGVtZW50VXRpbHMuc2hvd0ZpeGVkRWxlbWVudHMoYm90dG9tRml4ZWRFbGVtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZW1pdHRlci5lbWl0KFwic2NyZWVuc2hvdFwiKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VJbWFnZXMoY2FudmFzRGF0YSwgY2IpIHtcbiAgY29uc3Qge1xuICAgIHNjcmVlbnNob3RzLFxuICAgIHNpemU6IHsgcGFnZVdpZHRoLCBwYWdlSGVpZ2h0LCBmdWxsV2lkdGgsIGZ1bGxIZWlnaHQgfSxcbiAgfSA9IGNhbnZhc0RhdGE7XG5cbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLndpZHRoID0gZnVsbFdpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gZnVsbEhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAvLyDku47kuIvlvoDkuIrnu5jliLZcbiAgbGV0IGluZGV4ID0gc2NyZWVuc2hvdHMubGVuZ3RoIC0gMTtcbiAgZnVuY3Rpb24gZHJhdyhzY3JlZW5zaG90KSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBkcmF3XCIsIGluZGV4KTtcbiAgICBjb25zdCB0ZW1wSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzY3JlZW5zaG90LmRhdGFfdXJsKTtcbiAgICB0ZW1wSW1hZ2Uuc3JjID0gc2NyZWVuc2hvdC51cmw7XG4gICAgdGVtcEltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxldCB5ID0gaW5kZXggKiBwYWdlSGVpZ2h0O1xuICAgICAgLy8g5aaC5p6c5piv5pyA5ZCO5LiA5bygXG4gICAgICBpZiAoaW5kZXggPT09IHNjcmVlbnNob3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgcmVhbEhlaWdodE9mTGFzdFNjcmVlbnNob3QgPSBmdWxsSGVpZ2h0ICUgcGFnZUhlaWdodDtcbiAgICAgICAgLy8geSA9IHBhZ2VIZWlnaHQgLSByZWFsSGVpZ2h0T2ZMYXN0U2NyZWVuc2hvdDtcbiAgICAgICAgeSA9IGZ1bGxIZWlnaHQgLSBwYWdlSGVpZ2h0O1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coXCJ5IHBvc2l0aW9uXCIsIHkpO1xuICAgICAgY29uc3QgaCA9IChwYWdlV2lkdGggKiB0ZW1wSW1hZ2UuaGVpZ2h0KSAvIHRlbXBJbWFnZS53aWR0aDtcbiAgICAgIGN0eC5kcmF3SW1hZ2UodGVtcEltYWdlLCAwLCB5LCBwYWdlV2lkdGgsIGgpO1xuICAgICAgaW5kZXggLT0gMTtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgY2IoY2FudmFzLCBjYW52YXNEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkcmF3KHNjcmVlbnNob3RzW2luZGV4XSk7XG4gICAgfTtcbiAgfVxuXG4gIGRyYXcoc2NyZWVuc2hvdHNbaW5kZXhdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbihjYikge1xuICBjb25zdCBzY3JvbGxXaWR0aCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGg7XG4gIGNvbnN0IHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICBjb25zdCB2aXNpYmxlV2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIGNvbnN0IHZpc2libGVIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gIC8vIOagueaNruWPr+inhuWMuuWfn+iuoeeul+aVtOS4que9kemhteWPr+S7peaLhuWIhuaIkOWkmuWwkeihjOWkmuWwkeWIl1xuICBjb25zdCBjb2x1bW5zID0gTWF0aC5jZWlsKChzY3JvbGxXaWR0aCAqIDEuMCkgLyB2aXNpYmxlV2lkdGgpO1xuICBjb25zdCByb3dzID0gTWF0aC5jZWlsKChzY3JvbGxIZWlnaHQgKiAxLjApIC8gdmlzaWJsZUhlaWdodCk7XG5cbiAgY29uc3QgZml4ZWRFbGVtZW50cyA9IGZpeGVkRWxlbWVudFV0aWxzLmZpbmRGaXhlZEVsZW1lbnRzKCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiZml4ZWQgZWxlbWVudHNcIiwgZml4ZWRFbGVtZW50cyk7XG4gIGNvbnN0IHRvcEZpeGVkRWxlbWVudHMgPSBmaXhlZEVsZW1lbnRVdGlscy5maW5kVG9wRml4ZWRFbGVtZW50cyhcbiAgICBmaXhlZEVsZW1lbnRzLFxuICAgIHZpc2libGVIZWlnaHRcbiAgKTtcbiAgLy8gY29uc29sZS5sb2coXCJ0b3AgZml4ZWQgZWxlbWVudHNcIiwgdG9wRml4ZWRFbGVtZW50cyk7XG4gIGNvbnN0IGJvdHRvbUZpeGVkRWxlbWVudHMgPSBmaXhlZEVsZW1lbnRVdGlscy5maW5kQm90dG9tRml4ZWRFbGVtZW50cyhcbiAgICBmaXhlZEVsZW1lbnRzLFxuICAgIHZpc2libGVIZWlnaHRcbiAgKTtcbiAgLy8gY29uc29sZS5sb2coXCJib3R0b20gZml4ZWQgZWxlbWVudHNcIiwgYm90dG9tRml4ZWRFbGVtZW50cyk7XG4gIGNvbnN0IGNhbnZhc0RhdGEgPSB7XG4gICAgc2l6ZToge1xuICAgICAgZnVsbFdpZHRoOiBzY3JvbGxXaWR0aCxcbiAgICAgIGZ1bGxIZWlnaHQ6IHNjcm9sbEhlaWdodCxcbiAgICAgIHBhZ2VXaWR0aDogdmlzaWJsZVdpZHRoLFxuICAgICAgcGFnZUhlaWdodDogdmlzaWJsZUhlaWdodCxcbiAgICB9LFxuICAgIHRhYmxlOiB7IHJvd3M6IHJvd3MsIGNvbHVtbnM6IGNvbHVtbnMgfSxcbiAgICBzY3JlZW5zaG90czogW10sXG4gICAgdG9wRml4ZWRFbGVtZW50cyxcbiAgICBib3R0b21GaXhlZEVsZW1lbnRzLFxuICB9O1xuXG4gIGxldCB0aW1lcyA9IDA7XG4gIGNvbnN0IG9yaWdpbmFsU2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuICAvLyDlrozmiJDkuIDlsY/miKrlm75cbiAgZW1pdHRlci5vbihcInNjcmVlbnNob3RTaW5nbGVTY3JlZW5Db21wbGV0ZVwiLCAodXJsKSA9PiB7XG4gICAgY2FudmFzRGF0YS5zY3JlZW5zaG90cy5wdXNoKHtcbiAgICAgIHJvdzogdGltZXMsXG4gICAgICBjb2x1bW46IDAsXG4gICAgICB1cmwsXG4gICAgfSk7XG4gICAgdGltZXMgKz0gMTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGltZXMgKiB2aXNpYmxlSGVpZ2h0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNjcmVlbnNob3QoY2FudmFzRGF0YSwgY2IsIHRpbWVzLCBvcmlnaW5hbFNjcm9sbFRvcCk7XG4gICAgfSwgMTIwMCk7XG4gIH0pO1xuXG4gIGZpeGVkRWxlbWVudFV0aWxzLnNldFN0eWxlKGRvY3VtZW50LmJvZHksIHsgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfSk7XG5cbiAgd2luZG93LnNjcm9sbFRvKDAsIHRpbWVzICogdmlzaWJsZUhlaWdodCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNjcmVlbnNob3QoY2FudmFzRGF0YSwgY2IsIHRpbWVzLCBvcmlnaW5hbFNjcm9sbFRvcCk7XG4gIH0sIDEyMDApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=content.js.map