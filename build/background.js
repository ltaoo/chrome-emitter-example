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

/***/ "./node_modules/chrome-emitter/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/chrome-emitter/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t={NONE:0,CONTENT:1,INJECTED:2,BACKGROUND:3,POPUP:4,OPTIONS:5},e={0:"NONE",1:"CONTENT",2:"INJECTED",3:"BACKGROUND",4:"POPUP",5:"OPTIONS"},i=window.chrome;function a(){if(void 0===i)return t.NONE;if(void 0===i.storage)return t.INJECTED;if(void 0===i.tabs)return t.CONTENT;var e=i.extension.getBackgroundPage();return window===e?t.BACKGROUND:0!==i.extension.getViews({type:"popup"}).length?t.POPUP:t.OPTIONS}var u=function(){return a()===t.BACKGROUND},l=function(){return a()===t.INJECTED},c=function(){return a()===t.CONTENT};a();var s={supportNotifyGlobally:!1},v="@@__EMITTER_A__",y="@@__EMITTER_B__",p="@@__SYNC_NAME__",m="__time__",E="__data__",w="@@__EMITTER_FROM_INJECTED__",_=("@@__EMITTER_".concat((new Date).valueOf().toString(),"__"),{}),b={},N=c,g=u,O=l(),h=N(),T=(g(),window.chrome),C=!1,A=null;function I(e){var t,n;O?window.dispatchEvent(new CustomEvent(y,{detail:e})):h&&(e.type.includes(w)||Object.keys(b).includes(e.type))?window.dispatchEvent(new CustomEvent(v,{detail:e})):(n=(new Date).valueOf(),T.storage.local.set((r(t={},m,n),r(t,E,{value:n,type:e.type,payload:e.payload}),t)))}var S=null,P=null;function D(){!0!==C&&(function(r){if(O)return S=function(e){e.detail,r(e.detail)},window.addEventListener(v,S);h&&(P=function(e){e.detail,r(e.detail)},window.addEventListener(y,P)),A=function(e){var t,n=e[E];void 0!==n&&void 0!==n.newValue&&(T.storage.local.remove([m,E]),t=n.newValue,r(t))},T.storage&&T.storage.onChanged.addListener(A)}(function(e){e.type;var t=e.type,n=e.payload;if(h&&t===p){e.type;var r=d(n,2),o=r[0],i=r[1];return b[o]=i,void(_[o]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];I({type:i,payload:t})})}if(h&&t.includes(w)){e.type;var a=t.replace(w,""),u=_[a];return void 0!==u?void u.apply(void 0,f(n)):void I({type:a,payload:n})}if(O&&_[t+w])return e.type,void _[t+w].apply(_,f(n));var l=_[t];void 0!==l&&l.apply(void 0,f(n))}),h&&document.addEventListener("visibilitychange",function(){!0!==s.supportNotifyGlobally&&("visible"===document.visibilityState?D():T.storage.onChanged.hasListeners()&&null!==A&&(S&&window.removeEventListener(v,S),P&&window.removeEventListener(y,P),T.storage.onChanged.hasListeners()&&T.storage.onChanged.removeListener(A),C=!1))}),C=!0)}var j={emit:function(e){var t=e;O&&e!==p&&(t=e+w);for(var n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];I({type:t,payload:r})},on:function(e,t){var n=e;O&&(n=e+w,j.emit(p,e,n)),_[n]=t,!1===C&&D()},remove:function(e){delete _[e]},config:function(e,t){return void 0===t||(s[e]=t),s}};return j});


/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-emitter */ "./node_modules/chrome-emitter/dist/index.js");
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_emitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");




console.log("here is background");
window.emitter = chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a;

chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('popup-to-background', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[background] from popup', content);
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('options-to-background', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[background] from options', content);
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('content-to-background', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[background] from content', content);
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('injected-to-background', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[background] from inserted', content);
});

chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on("screenshot", () => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      const tab = tabs[0];
      chrome.tabs.captureVisibleTab(null, { format: 'png' }, (url) => {
        // console.log('dispatch screenshot complete');
        chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit("screenshotSingleScreenComplete", url);
      });
    }
  );
});

chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on("openNewTab", (url) => {
  chrome.tabs.create({
    url,
    active: true,
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nocm9tZS1lbWl0dGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxlQUFlLEtBQW9ELG9CQUFvQixTQUF1RSxDQUFDLGlCQUFpQixhQUFhLGtCQUFrQix5Q0FBeUMsa0RBQWtELFdBQVcsZ0JBQWdCLG1CQUFtQiw2QkFBNkIsbUJBQW1CLHNFQUFzRSw0QkFBNEIsSUFBSSxpQ0FBaUMsMkRBQTJELE9BQU8sU0FBUyxTQUFTLFFBQVEsSUFBSSw4QkFBOEIsUUFBUSxjQUFjLFNBQVMsMEJBQTBCLGlLQUFpSyxHQUFHLGNBQWMsbUJBQW1CLGdDQUFnQyxpQkFBaUIsaUZBQWlGLHNCQUFzQiw0SkFBNEosR0FBRyxnQkFBZ0IsTUFBTSxvQ0FBb0Msb0RBQW9ELGdMQUFnTCxnQkFBZ0Isb0NBQW9DLDJCQUEyQixJQUFJLGNBQWMsU0FBUyxPQUFPLDJEQUEyRCxJQUFJLHVFQUF1RSxpQkFBaUIsYUFBYSw0QkFBNEIsd0NBQXdDLG9DQUFvQyxzQ0FBc0MseURBQXlELGFBQWEsMkJBQTJCLGlCQUFpQiwwQkFBMEIsY0FBYyx3QkFBd0IsY0FBYyx3QkFBd0IsSUFBSSxPQUFPLHlCQUF5Qix3TEFBd0wsTUFBTSx1REFBdUQsY0FBYyxRQUFRLDBDQUEwQyxTQUFTLG9HQUFvRyxTQUFTLHNEQUFzRCxhQUFhLHNDQUFzQyxPQUFPLGtCQUFrQixhQUFhLHFCQUFxQiwwQkFBMEIscUJBQXFCLDhCQUE4QixrQkFBa0IscUJBQXFCLDZDQUE2QyxhQUFhLG1GQUFtRiwrQ0FBK0MsYUFBYSxPQUFPLHlCQUF5QixhQUFhLE9BQU8sMkJBQTJCLG1DQUFtQyw4Q0FBOEMsSUFBSSxzQkFBc0IsR0FBRyxpQkFBaUIsRUFBRSxFQUFFLHFCQUFxQixPQUFPLDZCQUE2QixvREFBb0QsaUJBQWlCLEVBQUUscURBQXFELFdBQVcsaUNBQWlDLDZEQUE2RCw4UUFBOFEsUUFBUSxPQUFPLGlCQUFpQixRQUFRLGtCQUFrQixzREFBc0QsSUFBSSx3QkFBd0IsR0FBRyxpQkFBaUIsRUFBRSxrQkFBa0IsUUFBUSw0Q0FBNEMsb0JBQW9CLFlBQVksc0JBQXNCLGdDQUFnQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FDQWhsSTtBQUFBO0FBQUE7QUFBQTtBQUFxQzs7QUFFQTs7QUFFckM7QUFDQSxpQkFBaUIscURBQU87O0FBRXhCLHFEQUFPO0FBQ1Asa0JBQWtCLHlEQUFVO0FBQzVCO0FBQ0EsQ0FBQztBQUNELHFEQUFPO0FBQ1Asa0JBQWtCLHlEQUFVO0FBQzVCO0FBQ0EsQ0FBQztBQUNELHFEQUFPO0FBQ1Asa0JBQWtCLHlEQUFVO0FBQzVCO0FBQ0EsQ0FBQztBQUNELHFEQUFPO0FBQ1Asa0JBQWtCLHlEQUFVO0FBQzVCO0FBQ0EsQ0FBQzs7QUFFRCxxREFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0EsUUFBUSxxREFBTztBQUNmLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxREFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDN0NEO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUCxxQkFBcUIsZ0NBQWdDLEtBQUssSUFBSTtBQUM5RDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQixhQUFhLFdBQVcsbUJBQW1CLHdCQUF3QjtBQUN0RyxxQ0FBcUMsR0FBRyx1QkFBdUIscUJBQXFCLG9CQUFvQixrQkFBa0IsY0FBYztBQUN4SSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2JhY2tncm91bmQuanNcIik7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmKS5lbWl0dGVyPXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0LG4pe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09bixlfWZ1bmN0aW9uIGQoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8IShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKSlyZXR1cm47dmFyIG49W10scj0hMCxvPSExLGk9dm9pZCAwO3RyeXtmb3IodmFyIGEsdT1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKHI9KGE9dS5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKGEudmFsdWUpLCF0fHxuLmxlbmd0aCE9PXQpO3I9ITApO31jYXRjaChlKXtvPSEwLGk9ZX1maW5hbGx5e3RyeXtyfHxudWxsPT11LnJldHVybnx8dS5yZXR1cm4oKX1maW5hbGx5e2lmKG8pdGhyb3cgaX19cmV0dXJuIG59KGUsdCl8fG4oZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGYoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIG8oZSl9KGUpfHxmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKXJldHVybiBBcnJheS5mcm9tKGUpfShlKXx8bihlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBuKGUsdCl7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIG8oZSx0KTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PW4mJmUuY29uc3RydWN0b3ImJihuPWUuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uP0FycmF5LmZyb20oZSk6XCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pP28oZSx0KTp2b2lkIDB9fWZ1bmN0aW9uIG8oZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIG49MCxyPW5ldyBBcnJheSh0KTtuPHQ7bisrKXJbbl09ZVtuXTtyZXR1cm4gcn12YXIgdD17Tk9ORTowLENPTlRFTlQ6MSxJTkpFQ1RFRDoyLEJBQ0tHUk9VTkQ6MyxQT1BVUDo0LE9QVElPTlM6NX0sZT17MDpcIk5PTkVcIiwxOlwiQ09OVEVOVFwiLDI6XCJJTkpFQ1RFRFwiLDM6XCJCQUNLR1JPVU5EXCIsNDpcIlBPUFVQXCIsNTpcIk9QVElPTlNcIn0saT13aW5kb3cuY2hyb21lO2Z1bmN0aW9uIGEoKXtpZih2b2lkIDA9PT1pKXJldHVybiB0Lk5PTkU7aWYodm9pZCAwPT09aS5zdG9yYWdlKXJldHVybiB0LklOSkVDVEVEO2lmKHZvaWQgMD09PWkudGFicylyZXR1cm4gdC5DT05URU5UO3ZhciBlPWkuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKCk7cmV0dXJuIHdpbmRvdz09PWU/dC5CQUNLR1JPVU5EOjAhPT1pLmV4dGVuc2lvbi5nZXRWaWV3cyh7dHlwZTpcInBvcHVwXCJ9KS5sZW5ndGg/dC5QT1BVUDp0Lk9QVElPTlN9dmFyIHU9ZnVuY3Rpb24oKXtyZXR1cm4gYSgpPT09dC5CQUNLR1JPVU5EfSxsPWZ1bmN0aW9uKCl7cmV0dXJuIGEoKT09PXQuSU5KRUNURUR9LGM9ZnVuY3Rpb24oKXtyZXR1cm4gYSgpPT09dC5DT05URU5UfTthKCk7dmFyIHM9e3N1cHBvcnROb3RpZnlHbG9iYWxseTohMX0sdj1cIkBAX19FTUlUVEVSX0FfX1wiLHk9XCJAQF9fRU1JVFRFUl9CX19cIixwPVwiQEBfX1NZTkNfTkFNRV9fXCIsbT1cIl9fdGltZV9fXCIsRT1cIl9fZGF0YV9fXCIsdz1cIkBAX19FTUlUVEVSX0ZST01fSU5KRUNURURfX1wiLF89KFwiQEBfX0VNSVRURVJfXCIuY29uY2F0KChuZXcgRGF0ZSkudmFsdWVPZigpLnRvU3RyaW5nKCksXCJfX1wiKSx7fSksYj17fSxOPWMsZz11LE89bCgpLGg9TigpLFQ9KGcoKSx3aW5kb3cuY2hyb21lKSxDPSExLEE9bnVsbDtmdW5jdGlvbiBJKGUpe3ZhciB0LG47Tz93aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoeSx7ZGV0YWlsOmV9KSk6aCYmKGUudHlwZS5pbmNsdWRlcyh3KXx8T2JqZWN0LmtleXMoYikuaW5jbHVkZXMoZS50eXBlKSk/d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHYse2RldGFpbDplfSkpOihuPShuZXcgRGF0ZSkudmFsdWVPZigpLFQuc3RvcmFnZS5sb2NhbC5zZXQoKHIodD17fSxtLG4pLHIodCxFLHt2YWx1ZTpuLHR5cGU6ZS50eXBlLHBheWxvYWQ6ZS5wYXlsb2FkfSksdCkpKX12YXIgUz1udWxsLFA9bnVsbDtmdW5jdGlvbiBEKCl7ITAhPT1DJiYoZnVuY3Rpb24ocil7aWYoTylyZXR1cm4gUz1mdW5jdGlvbihlKXtlLmRldGFpbCxyKGUuZGV0YWlsKX0sd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodixTKTtoJiYoUD1mdW5jdGlvbihlKXtlLmRldGFpbCxyKGUuZGV0YWlsKX0sd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoeSxQKSksQT1mdW5jdGlvbihlKXt2YXIgdCxuPWVbRV07dm9pZCAwIT09biYmdm9pZCAwIT09bi5uZXdWYWx1ZSYmKFQuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW20sRV0pLHQ9bi5uZXdWYWx1ZSxyKHQpKX0sVC5zdG9yYWdlJiZULnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKEEpfShmdW5jdGlvbihlKXtlLnR5cGU7dmFyIHQ9ZS50eXBlLG49ZS5wYXlsb2FkO2lmKGgmJnQ9PT1wKXtlLnR5cGU7dmFyIHI9ZChuLDIpLG89clswXSxpPXJbMV07cmV0dXJuIGJbb109aSx2b2lkKF9bb109ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PW5ldyBBcnJheShlKSxuPTA7bjxlO24rKyl0W25dPWFyZ3VtZW50c1tuXTtJKHt0eXBlOmkscGF5bG9hZDp0fSl9KX1pZihoJiZ0LmluY2x1ZGVzKHcpKXtlLnR5cGU7dmFyIGE9dC5yZXBsYWNlKHcsXCJcIiksdT1fW2FdO3JldHVybiB2b2lkIDAhPT11P3ZvaWQgdS5hcHBseSh2b2lkIDAsZihuKSk6dm9pZCBJKHt0eXBlOmEscGF5bG9hZDpufSl9aWYoTyYmX1t0K3ddKXJldHVybiBlLnR5cGUsdm9pZCBfW3Qrd10uYXBwbHkoXyxmKG4pKTt2YXIgbD1fW3RdO3ZvaWQgMCE9PWwmJmwuYXBwbHkodm9pZCAwLGYobikpfSksaCYmZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixmdW5jdGlvbigpeyEwIT09cy5zdXBwb3J0Tm90aWZ5R2xvYmFsbHkmJihcInZpc2libGVcIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZT9EKCk6VC5zdG9yYWdlLm9uQ2hhbmdlZC5oYXNMaXN0ZW5lcnMoKSYmbnVsbCE9PUEmJihTJiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih2LFMpLFAmJndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHksUCksVC5zdG9yYWdlLm9uQ2hhbmdlZC5oYXNMaXN0ZW5lcnMoKSYmVC5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihBKSxDPSExKSl9KSxDPSEwKX12YXIgaj17ZW1pdDpmdW5jdGlvbihlKXt2YXIgdD1lO08mJmUhPT1wJiYodD1lK3cpO2Zvcih2YXIgbj1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KDE8bj9uLTE6MCksbz0xO288bjtvKyspcltvLTFdPWFyZ3VtZW50c1tvXTtJKHt0eXBlOnQscGF5bG9hZDpyfSl9LG9uOmZ1bmN0aW9uKGUsdCl7dmFyIG49ZTtPJiYobj1lK3csai5lbWl0KHAsZSxuKSksX1tuXT10LCExPT09QyYmRCgpfSxyZW1vdmU6ZnVuY3Rpb24oZSl7ZGVsZXRlIF9bZV19LGNvbmZpZzpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10fHwoc1tlXT10KSxzfX07cmV0dXJuIGp9KTtcbiIsImltcG9ydCBlbWl0dGVyIGZyb20gJ2Nocm9tZS1lbWl0dGVyJztcblxuaW1wb3J0IHsgZ2V0Q29udGVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zb2xlLmxvZyhcImhlcmUgaXMgYmFja2dyb3VuZFwiKTtcbndpbmRvdy5lbWl0dGVyID0gZW1pdHRlcjtcblxuZW1pdHRlci5vbigncG9wdXAtdG8tYmFja2dyb3VuZCcsIChtc2cpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgY29uc29sZS5sb2coJ1tiYWNrZ3JvdW5kXSBmcm9tIHBvcHVwJywgY29udGVudCk7XG59KTtcbmVtaXR0ZXIub24oJ29wdGlvbnMtdG8tYmFja2dyb3VuZCcsIChtc2cpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgY29uc29sZS5sb2coJ1tiYWNrZ3JvdW5kXSBmcm9tIG9wdGlvbnMnLCBjb250ZW50KTtcbn0pO1xuZW1pdHRlci5vbignY29udGVudC10by1iYWNrZ3JvdW5kJywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICBjb25zb2xlLmxvZygnW2JhY2tncm91bmRdIGZyb20gY29udGVudCcsIGNvbnRlbnQpO1xufSk7XG5lbWl0dGVyLm9uKCdpbmplY3RlZC10by1iYWNrZ3JvdW5kJywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICBjb25zb2xlLmxvZygnW2JhY2tncm91bmRdIGZyb20gaW5zZXJ0ZWQnLCBjb250ZW50KTtcbn0pO1xuXG5lbWl0dGVyLm9uKFwic2NyZWVuc2hvdFwiLCAoKSA9PiB7XG4gIGNocm9tZS50YWJzLnF1ZXJ5KFxuICAgIHtcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIGN1cnJlbnRXaW5kb3c6IHRydWUsXG4gICAgfSxcbiAgICAodGFicykgPT4ge1xuICAgICAgY29uc3QgdGFiID0gdGFic1swXTtcbiAgICAgIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKG51bGwsIHsgZm9ybWF0OiAncG5nJyB9LCAodXJsKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkaXNwYXRjaCBzY3JlZW5zaG90IGNvbXBsZXRlJyk7XG4gICAgICAgIGVtaXR0ZXIuZW1pdChcInNjcmVlbnNob3RTaW5nbGVTY3JlZW5Db21wbGV0ZVwiLCB1cmwpO1xuICAgICAgfSk7XG4gICAgfVxuICApO1xufSk7XG5cbmVtaXR0ZXIub24oXCJvcGVuTmV3VGFiXCIsICh1cmwpID0+IHtcbiAgY2hyb21lLnRhYnMuY3JlYXRlKHtcbiAgICB1cmwsXG4gICAgYWN0aXZlOiB0cnVlLFxuICB9KTtcbn0pO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRlbnQobXNnKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSAtICR7bXNnfWA7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEpzKHNyYykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgc2NyaXB0LnNyYyA9IHNyYztcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRml4ZWRDb250YWluZXIoaWQsIGNvbnRlbnQsIHN0eWxlcyA9ICcnKSB7XG4gIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAkY29udGFpbmVyLnN0eWxlID1cbiAgICBcInotaW5kZXg6IDk5OTsgcG9zaXRpb246IGZpeGVkOyByaWdodDogMjBweDsgdG9wOiAyMHB4OyBwYWRkaW5nOiA0cHggMTBweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcIiArIHN0eWxlcztcbiAgJGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIiR7aWR9XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1pbi13aWR0aDogMTgwcHg7IGhlaWdodDogMzBweDtcIj5cbiAgJHtjb250ZW50fVxuPC9kaXY+XG5gO1xuICByZXR1cm4gJGNvbnRhaW5lcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=background.js.map