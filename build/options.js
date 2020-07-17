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

/***/ "./node_modules/chrome-emitter/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/chrome-emitter/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t={NONE:0,CONTENT:1,INJECTED:2,BACKGROUND:3,POPUP:4,OPTIONS:5},e={0:"NONE",1:"CONTENT",2:"INJECTED",3:"BACKGROUND",4:"POPUP",5:"OPTIONS"},i=window.chrome;function a(){if(void 0===i)return t.NONE;if(void 0===i.storage)return t.INJECTED;if(void 0===i.tabs)return t.CONTENT;var e=i.extension.getBackgroundPage();return window===e?t.BACKGROUND:0!==i.extension.getViews({type:"popup"}).length?t.POPUP:t.OPTIONS}var u=function(){return a()===t.BACKGROUND},l=function(){return a()===t.INJECTED},c=function(){return a()===t.CONTENT};a();var s={supportNotifyGlobally:!1},v="@@__EMITTER_A__",y="@@__EMITTER_B__",p="@@__SYNC_NAME__",m="__time__",E="__data__",w="@@__EMITTER_FROM_INJECTED__",_=("@@__EMITTER_".concat((new Date).valueOf().toString(),"__"),{}),b={},N=c,g=u,O=l(),h=N(),T=(g(),window.chrome),C=!1,A=null;function I(e){var t,n;O?window.dispatchEvent(new CustomEvent(y,{detail:e})):h&&(e.type.includes(w)||Object.keys(b).includes(e.type))?window.dispatchEvent(new CustomEvent(v,{detail:e})):(n=(new Date).valueOf(),T.storage.local.set((r(t={},m,n),r(t,E,{value:n,type:e.type,payload:e.payload}),t)))}var S=null,P=null;function D(){!0!==C&&(function(r){if(O)return S=function(e){e.detail,r(e.detail)},window.addEventListener(v,S);h&&(P=function(e){e.detail,r(e.detail)},window.addEventListener(y,P)),A=function(e){var t,n=e[E];void 0!==n&&void 0!==n.newValue&&(T.storage.local.remove([m,E]),t=n.newValue,r(t))},T.storage&&T.storage.onChanged.addListener(A)}(function(e){e.type;var t=e.type,n=e.payload;if(h&&t===p){e.type;var r=d(n,2),o=r[0],i=r[1];return b[o]=i,void(_[o]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];I({type:i,payload:t})})}if(h&&t.includes(w)){e.type;var a=t.replace(w,""),u=_[a];return void 0!==u?void u.apply(void 0,f(n)):void I({type:a,payload:n})}if(O&&_[t+w])return e.type,void _[t+w].apply(_,f(n));var l=_[t];void 0!==l&&l.apply(void 0,f(n))}),h&&document.addEventListener("visibilitychange",function(){!0!==s.supportNotifyGlobally&&("visible"===document.visibilityState?D():T.storage.onChanged.hasListeners()&&null!==A&&(S&&window.removeEventListener(v,S),P&&window.removeEventListener(y,P),T.storage.onChanged.hasListeners()&&T.storage.onChanged.removeListener(A),C=!1))}),C=!0)}var j={emit:function(e){var t=e;O&&e!==p&&(t=e+w);for(var n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];I({type:t,payload:r})},on:function(e,t){var n=e;O&&(n=e+w,j.emit(p,e,n)),_[n]=t,!1===C&&D()},remove:function(e){delete _[e]},config:function(e,t){return void 0===t||(s[e]=t),s}};return j});


/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-emitter */ "./node_modules/chrome-emitter/dist/index.js");
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_emitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");



console.log("here is options");

document.body.onload = () => {
  const toBackgroundBtn = document.getElementById("toBackground");
  const toContentBtn = document.getElementById("toContent");
  const toInsertedBtn = document.getElementById("toInjected");

  const message = "hello i am options";
  toBackgroundBtn.onclick = () => {
    chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit("options-to-background", message);
  };
  toContentBtn.onclick = () => {
    chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit("options-to-content", message);
  };
  toInsertedBtn.onclick = () => {
    chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit("options-to-injected", message);
  };
};

chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on("background-to-options", (msg) => {
  const fromPopupText = document.getElementById("fromPopup");
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[options] from popup', content);
  fromPopupText.innerText = content;
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on("background-to-options", (msg) => {
  const fromBackgroundText = document.getElementById("fromBackground");
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[options] from background', content);
  fromBackgroundText.innerText = content;
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on("content-to-options", (msg) => {
  const fromContentText = document.getElementById("fromContent");
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[options] from content', content);
  fromContentText.innerText = content;
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on("injected-to-options", (msg) => {
  const fromInjectedText = document.getElementById("fromInjected");
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  console.log('[options] from injected', content);
  fromInjectedText.innerText = content;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nocm9tZS1lbWl0dGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxlQUFlLEtBQW9ELG9CQUFvQixTQUF1RSxDQUFDLGlCQUFpQixhQUFhLGtCQUFrQix5Q0FBeUMsa0RBQWtELFdBQVcsZ0JBQWdCLG1CQUFtQiw2QkFBNkIsbUJBQW1CLHNFQUFzRSw0QkFBNEIsSUFBSSxpQ0FBaUMsMkRBQTJELE9BQU8sU0FBUyxTQUFTLFFBQVEsSUFBSSw4QkFBOEIsUUFBUSxjQUFjLFNBQVMsMEJBQTBCLGlLQUFpSyxHQUFHLGNBQWMsbUJBQW1CLGdDQUFnQyxpQkFBaUIsaUZBQWlGLHNCQUFzQiw0SkFBNEosR0FBRyxnQkFBZ0IsTUFBTSxvQ0FBb0Msb0RBQW9ELGdMQUFnTCxnQkFBZ0Isb0NBQW9DLDJCQUEyQixJQUFJLGNBQWMsU0FBUyxPQUFPLDJEQUEyRCxJQUFJLHVFQUF1RSxpQkFBaUIsYUFBYSw0QkFBNEIsd0NBQXdDLG9DQUFvQyxzQ0FBc0MseURBQXlELGFBQWEsMkJBQTJCLGlCQUFpQiwwQkFBMEIsY0FBYyx3QkFBd0IsY0FBYyx3QkFBd0IsSUFBSSxPQUFPLHlCQUF5Qix3TEFBd0wsTUFBTSx1REFBdUQsY0FBYyxRQUFRLDBDQUEwQyxTQUFTLG9HQUFvRyxTQUFTLHNEQUFzRCxhQUFhLHNDQUFzQyxPQUFPLGtCQUFrQixhQUFhLHFCQUFxQiwwQkFBMEIscUJBQXFCLDhCQUE4QixrQkFBa0IscUJBQXFCLDZDQUE2QyxhQUFhLG1GQUFtRiwrQ0FBK0MsYUFBYSxPQUFPLHlCQUF5QixhQUFhLE9BQU8sMkJBQTJCLG1DQUFtQyw4Q0FBOEMsSUFBSSxzQkFBc0IsR0FBRyxpQkFBaUIsRUFBRSxFQUFFLHFCQUFxQixPQUFPLDZCQUE2QixvREFBb0QsaUJBQWlCLEVBQUUscURBQXFELFdBQVcsaUNBQWlDLDZEQUE2RCw4UUFBOFEsUUFBUSxPQUFPLGlCQUFpQixRQUFRLGtCQUFrQixzREFBc0QsSUFBSSx3QkFBd0IsR0FBRyxpQkFBaUIsRUFBRSxrQkFBa0IsUUFBUSw0Q0FBNEMsb0JBQW9CLFlBQVksc0JBQXNCLGdDQUFnQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FDQWhsSTtBQUFBO0FBQUE7QUFBQTtBQUFxQztBQUNBOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBTztBQUNYO0FBQ0E7QUFDQSxJQUFJLHFEQUFPO0FBQ1g7QUFDQTtBQUNBLElBQUkscURBQU87QUFDWDtBQUNBOztBQUVBLHFEQUFPO0FBQ1A7QUFDQSxrQkFBa0IseURBQVU7QUFDNUI7QUFDQTtBQUNBLENBQUM7QUFDRCxxREFBTztBQUNQO0FBQ0Esa0JBQWtCLHlEQUFVO0FBQzVCO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscURBQU87QUFDUDtBQUNBLGtCQUFrQix5REFBVTtBQUM1QjtBQUNBO0FBQ0EsQ0FBQztBQUNELHFEQUFPO0FBQ1A7QUFDQSxrQkFBa0IseURBQVU7QUFDNUI7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQLHFCQUFxQixnQ0FBZ0MsS0FBSyxJQUFJO0FBQzlEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCLGFBQWEsV0FBVyxtQkFBbUIsd0JBQXdCO0FBQ3RHLHFDQUFxQyxHQUFHLHVCQUF1QixxQkFBcUIsb0JBQW9CLGtCQUFrQixjQUFjO0FBQ3hJLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJvcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvb3B0aW9ucy5qc1wiKTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlPWV8fHNlbGYpLmVtaXR0ZXI9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlLHQsbil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpuLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1uLGV9ZnVuY3Rpb24gZChlLHQpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlfShlKXx8ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgU3ltYm9sfHwhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoZSkpKXJldHVybjt2YXIgbj1bXSxyPSEwLG89ITEsaT12b2lkIDA7dHJ5e2Zvcih2YXIgYSx1PWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEocj0oYT11Lm5leHQoKSkuZG9uZSkmJihuLnB1c2goYS52YWx1ZSksIXR8fG4ubGVuZ3RoIT09dCk7cj0hMCk7fWNhdGNoKGUpe289ITAsaT1lfWZpbmFsbHl7dHJ5e3J8fG51bGw9PXUucmV0dXJufHx1LnJldHVybigpfWZpbmFsbHl7aWYobyl0aHJvdyBpfX1yZXR1cm4gbn0oZSx0KXx8bihlLHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gZihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gbyhlKX0oZSl8fGZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoZSkpcmV0dXJuIEFycmF5LmZyb20oZSl9KGUpfHxuKGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIG4oZSx0KXtpZihlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gbyhlLHQpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtyZXR1cm5cIk9iamVjdFwiPT09biYmZS5jb25zdHJ1Y3RvciYmKG49ZS5jb25zdHJ1Y3Rvci5uYW1lKSxcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4/QXJyYXkuZnJvbShlKTpcIkFyZ3VtZW50c1wiPT09bnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3Qobik/byhlLHQpOnZvaWQgMH19ZnVuY3Rpb24gbyhlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgbj0wLHI9bmV3IEFycmF5KHQpO248dDtuKyspcltuXT1lW25dO3JldHVybiByfXZhciB0PXtOT05FOjAsQ09OVEVOVDoxLElOSkVDVEVEOjIsQkFDS0dST1VORDozLFBPUFVQOjQsT1BUSU9OUzo1fSxlPXswOlwiTk9ORVwiLDE6XCJDT05URU5UXCIsMjpcIklOSkVDVEVEXCIsMzpcIkJBQ0tHUk9VTkRcIiw0OlwiUE9QVVBcIiw1OlwiT1BUSU9OU1wifSxpPXdpbmRvdy5jaHJvbWU7ZnVuY3Rpb24gYSgpe2lmKHZvaWQgMD09PWkpcmV0dXJuIHQuTk9ORTtpZih2b2lkIDA9PT1pLnN0b3JhZ2UpcmV0dXJuIHQuSU5KRUNURUQ7aWYodm9pZCAwPT09aS50YWJzKXJldHVybiB0LkNPTlRFTlQ7dmFyIGU9aS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKTtyZXR1cm4gd2luZG93PT09ZT90LkJBQ0tHUk9VTkQ6MCE9PWkuZXh0ZW5zaW9uLmdldFZpZXdzKHt0eXBlOlwicG9wdXBcIn0pLmxlbmd0aD90LlBPUFVQOnQuT1BUSU9OU312YXIgdT1mdW5jdGlvbigpe3JldHVybiBhKCk9PT10LkJBQ0tHUk9VTkR9LGw9ZnVuY3Rpb24oKXtyZXR1cm4gYSgpPT09dC5JTkpFQ1RFRH0sYz1mdW5jdGlvbigpe3JldHVybiBhKCk9PT10LkNPTlRFTlR9O2EoKTt2YXIgcz17c3VwcG9ydE5vdGlmeUdsb2JhbGx5OiExfSx2PVwiQEBfX0VNSVRURVJfQV9fXCIseT1cIkBAX19FTUlUVEVSX0JfX1wiLHA9XCJAQF9fU1lOQ19OQU1FX19cIixtPVwiX190aW1lX19cIixFPVwiX19kYXRhX19cIix3PVwiQEBfX0VNSVRURVJfRlJPTV9JTkpFQ1RFRF9fXCIsXz0oXCJAQF9fRU1JVFRFUl9cIi5jb25jYXQoKG5ldyBEYXRlKS52YWx1ZU9mKCkudG9TdHJpbmcoKSxcIl9fXCIpLHt9KSxiPXt9LE49YyxnPXUsTz1sKCksaD1OKCksVD0oZygpLHdpbmRvdy5jaHJvbWUpLEM9ITEsQT1udWxsO2Z1bmN0aW9uIEkoZSl7dmFyIHQsbjtPP3dpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh5LHtkZXRhaWw6ZX0pKTpoJiYoZS50eXBlLmluY2x1ZGVzKHcpfHxPYmplY3Qua2V5cyhiKS5pbmNsdWRlcyhlLnR5cGUpKT93aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodix7ZGV0YWlsOmV9KSk6KG49KG5ldyBEYXRlKS52YWx1ZU9mKCksVC5zdG9yYWdlLmxvY2FsLnNldCgocih0PXt9LG0sbikscih0LEUse3ZhbHVlOm4sdHlwZTplLnR5cGUscGF5bG9hZDplLnBheWxvYWR9KSx0KSkpfXZhciBTPW51bGwsUD1udWxsO2Z1bmN0aW9uIEQoKXshMCE9PUMmJihmdW5jdGlvbihyKXtpZihPKXJldHVybiBTPWZ1bmN0aW9uKGUpe2UuZGV0YWlsLHIoZS5kZXRhaWwpfSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih2LFMpO2gmJihQPWZ1bmN0aW9uKGUpe2UuZGV0YWlsLHIoZS5kZXRhaWwpfSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih5LFApKSxBPWZ1bmN0aW9uKGUpe3ZhciB0LG49ZVtFXTt2b2lkIDAhPT1uJiZ2b2lkIDAhPT1uLm5ld1ZhbHVlJiYoVC5zdG9yYWdlLmxvY2FsLnJlbW92ZShbbSxFXSksdD1uLm5ld1ZhbHVlLHIodCkpfSxULnN0b3JhZ2UmJlQuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoQSl9KGZ1bmN0aW9uKGUpe2UudHlwZTt2YXIgdD1lLnR5cGUsbj1lLnBheWxvYWQ7aWYoaCYmdD09PXApe2UudHlwZTt2YXIgcj1kKG4sMiksbz1yWzBdLGk9clsxXTtyZXR1cm4gYltvXT1pLHZvaWQoX1tvXT1mdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHQ9bmV3IEFycmF5KGUpLG49MDtuPGU7bisrKXRbbl09YXJndW1lbnRzW25dO0koe3R5cGU6aSxwYXlsb2FkOnR9KX0pfWlmKGgmJnQuaW5jbHVkZXModykpe2UudHlwZTt2YXIgYT10LnJlcGxhY2UodyxcIlwiKSx1PV9bYV07cmV0dXJuIHZvaWQgMCE9PXU/dm9pZCB1LmFwcGx5KHZvaWQgMCxmKG4pKTp2b2lkIEkoe3R5cGU6YSxwYXlsb2FkOm59KX1pZihPJiZfW3Qrd10pcmV0dXJuIGUudHlwZSx2b2lkIF9bdCt3XS5hcHBseShfLGYobikpO3ZhciBsPV9bdF07dm9pZCAwIT09bCYmbC5hcHBseSh2b2lkIDAsZihuKSl9KSxoJiZkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7ITAhPT1zLnN1cHBvcnROb3RpZnlHbG9iYWxseSYmKFwidmlzaWJsZVwiPT09ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlP0QoKTpULnN0b3JhZ2Uub25DaGFuZ2VkLmhhc0xpc3RlbmVycygpJiZudWxsIT09QSYmKFMmJndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHYsUyksUCYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoeSxQKSxULnN0b3JhZ2Uub25DaGFuZ2VkLmhhc0xpc3RlbmVycygpJiZULnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKEEpLEM9ITEpKX0pLEM9ITApfXZhciBqPXtlbWl0OmZ1bmN0aW9uKGUpe3ZhciB0PWU7TyYmZSE9PXAmJih0PWUrdyk7Zm9yKHZhciBuPWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkoMTxuP24tMTowKSxvPTE7bzxuO28rKylyW28tMV09YXJndW1lbnRzW29dO0koe3R5cGU6dCxwYXlsb2FkOnJ9KX0sb246ZnVuY3Rpb24oZSx0KXt2YXIgbj1lO08mJihuPWUrdyxqLmVtaXQocCxlLG4pKSxfW25dPXQsITE9PT1DJiZEKCl9LHJlbW92ZTpmdW5jdGlvbihlKXtkZWxldGUgX1tlXX0sY29uZmlnOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXR8fChzW2VdPXQpLHN9fTtyZXR1cm4gan0pO1xuIiwiaW1wb3J0IGVtaXR0ZXIgZnJvbSBcImNocm9tZS1lbWl0dGVyXCI7XG5pbXBvcnQgeyBnZXRDb250ZW50IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc29sZS5sb2coXCJoZXJlIGlzIG9wdGlvbnNcIik7XG5cbmRvY3VtZW50LmJvZHkub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCB0b0JhY2tncm91bmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvQmFja2dyb3VuZFwiKTtcbiAgY29uc3QgdG9Db250ZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b0NvbnRlbnRcIik7XG4gIGNvbnN0IHRvSW5zZXJ0ZWRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvSW5qZWN0ZWRcIik7XG5cbiAgY29uc3QgbWVzc2FnZSA9IFwiaGVsbG8gaSBhbSBvcHRpb25zXCI7XG4gIHRvQmFja2dyb3VuZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGVtaXR0ZXIuZW1pdChcIm9wdGlvbnMtdG8tYmFja2dyb3VuZFwiLCBtZXNzYWdlKTtcbiAgfTtcbiAgdG9Db250ZW50QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZW1pdHRlci5lbWl0KFwib3B0aW9ucy10by1jb250ZW50XCIsIG1lc3NhZ2UpO1xuICB9O1xuICB0b0luc2VydGVkQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZW1pdHRlci5lbWl0KFwib3B0aW9ucy10by1pbmplY3RlZFwiLCBtZXNzYWdlKTtcbiAgfTtcbn07XG5cbmVtaXR0ZXIub24oXCJiYWNrZ3JvdW5kLXRvLW9wdGlvbnNcIiwgKG1zZykgPT4ge1xuICBjb25zdCBmcm9tUG9wdXBUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9tUG9wdXBcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4gIGNvbnNvbGUubG9nKCdbb3B0aW9uc10gZnJvbSBwb3B1cCcsIGNvbnRlbnQpO1xuICBmcm9tUG9wdXBUZXh0LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG59KTtcbmVtaXR0ZXIub24oXCJiYWNrZ3JvdW5kLXRvLW9wdGlvbnNcIiwgKG1zZykgPT4ge1xuICBjb25zdCBmcm9tQmFja2dyb3VuZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb21CYWNrZ3JvdW5kXCIpO1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICBjb25zb2xlLmxvZygnW29wdGlvbnNdIGZyb20gYmFja2dyb3VuZCcsIGNvbnRlbnQpO1xuICBmcm9tQmFja2dyb3VuZFRleHQuaW5uZXJUZXh0ID0gY29udGVudDtcbn0pO1xuZW1pdHRlci5vbihcImNvbnRlbnQtdG8tb3B0aW9uc1wiLCAobXNnKSA9PiB7XG4gIGNvbnN0IGZyb21Db250ZW50VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbUNvbnRlbnRcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50KG1zZyk7XG4gIGNvbnNvbGUubG9nKCdbb3B0aW9uc10gZnJvbSBjb250ZW50JywgY29udGVudCk7XG4gIGZyb21Db250ZW50VGV4dC5pbm5lclRleHQgPSBjb250ZW50O1xufSk7XG5lbWl0dGVyLm9uKFwiaW5qZWN0ZWQtdG8tb3B0aW9uc1wiLCAobXNnKSA9PiB7XG4gIGNvbnN0IGZyb21JbmplY3RlZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb21JbmplY3RlZFwiKTtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgY29uc29sZS5sb2coJ1tvcHRpb25zXSBmcm9tIGluamVjdGVkJywgY29udGVudCk7XG4gIGZyb21JbmplY3RlZFRleHQuaW5uZXJUZXh0ID0gY29udGVudDtcbn0pO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRlbnQobXNnKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSAtICR7bXNnfWA7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEpzKHNyYykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgc2NyaXB0LnNyYyA9IHNyYztcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRml4ZWRDb250YWluZXIoaWQsIGNvbnRlbnQsIHN0eWxlcyA9ICcnKSB7XG4gIGNvbnN0ICRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAkY29udGFpbmVyLnN0eWxlID1cbiAgICBcInotaW5kZXg6IDk5OTsgcG9zaXRpb246IGZpeGVkOyByaWdodDogMjBweDsgdG9wOiAyMHB4OyBwYWRkaW5nOiA0cHggMTBweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcIiArIHN0eWxlcztcbiAgJGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIiR7aWR9XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1pbi13aWR0aDogMTgwcHg7IGhlaWdodDogMzBweDtcIj5cbiAgJHtjb250ZW50fVxuPC9kaXY+XG5gO1xuICByZXR1cm4gJGNvbnRhaW5lcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=options.js.map