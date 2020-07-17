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

/***/ "./node_modules/chrome-emitter/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/chrome-emitter/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t={NONE:0,CONTENT:1,INJECTED:2,BACKGROUND:3,POPUP:4,OPTIONS:5},e={0:"NONE",1:"CONTENT",2:"INJECTED",3:"BACKGROUND",4:"POPUP",5:"OPTIONS"},i=window.chrome;function a(){if(void 0===i)return t.NONE;if(void 0===i.storage)return t.INJECTED;if(void 0===i.tabs)return t.CONTENT;var e=i.extension.getBackgroundPage();return window===e?t.BACKGROUND:0!==i.extension.getViews({type:"popup"}).length?t.POPUP:t.OPTIONS}var u=function(){return a()===t.BACKGROUND},l=function(){return a()===t.INJECTED},c=function(){return a()===t.CONTENT};a();var s={supportNotifyGlobally:!1},v="@@__EMITTER_A__",y="@@__EMITTER_B__",p="@@__SYNC_NAME__",m="__time__",E="__data__",w="@@__EMITTER_FROM_INJECTED__",_=("@@__EMITTER_".concat((new Date).valueOf().toString(),"__"),{}),b={},N=c,g=u,O=l(),h=N(),T=(g(),window.chrome),C=!1,A=null;function I(e){var t,n;O?window.dispatchEvent(new CustomEvent(y,{detail:e})):h&&(e.type.includes(w)||Object.keys(b).includes(e.type))?window.dispatchEvent(new CustomEvent(v,{detail:e})):(n=(new Date).valueOf(),T.storage.local.set((r(t={},m,n),r(t,E,{value:n,type:e.type,payload:e.payload}),t)))}var S=null,P=null;function D(){!0!==C&&(function(r){if(O)return S=function(e){e.detail,r(e.detail)},window.addEventListener(v,S);h&&(P=function(e){e.detail,r(e.detail)},window.addEventListener(y,P)),A=function(e){var t,n=e[E];void 0!==n&&void 0!==n.newValue&&(T.storage.local.remove([m,E]),t=n.newValue,r(t))},T.storage&&T.storage.onChanged.addListener(A)}(function(e){e.type;var t=e.type,n=e.payload;if(h&&t===p){e.type;var r=d(n,2),o=r[0],i=r[1];return b[o]=i,void(_[o]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];I({type:i,payload:t})})}if(h&&t.includes(w)){e.type;var a=t.replace(w,""),u=_[a];return void 0!==u?void u.apply(void 0,f(n)):void I({type:a,payload:n})}if(O&&_[t+w])return e.type,void _[t+w].apply(_,f(n));var l=_[t];void 0!==l&&l.apply(void 0,f(n))}),h&&document.addEventListener("visibilitychange",function(){!0!==s.supportNotifyGlobally&&("visible"===document.visibilityState?D():T.storage.onChanged.hasListeners()&&null!==A&&(S&&window.removeEventListener(v,S),P&&window.removeEventListener(y,P),T.storage.onChanged.hasListeners()&&T.storage.onChanged.removeListener(A),C=!1))}),C=!0)}var j={emit:function(e){var t=e;O&&e!==p&&(t=e+w);for(var n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];I({type:t,payload:r})},on:function(e,t){var n=e;O&&(n=e+w,j.emit(p,e,n)),_[n]=t,!1===C&&D()},remove:function(e){delete _[e]},config:function(e,t){return void 0===t||(s[e]=t),s}};return j});


/***/ }),

/***/ "./src/injected.js":
/*!*************************!*\
  !*** ./src/injected.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-emitter */ "./node_modules/chrome-emitter/dist/index.js");
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_emitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");



console.log("here is inserted");

const CONTAINER_ID = "__emitter_injected_id__";

const $container = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createFixedContainer"])(
  CONTAINER_ID,
  "由 injected 插入页面",
  "top: 80px;"
);
$container.onclick = () => {
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('injected-to-content', 'hello i am injected');
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('injected-to-options', 'hello i am injected');
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('injected-to-background', 'hello i am injected');
}

document.body.onload = () => {
  document.body.appendChild($container);
};

function updateContainer(content) {
  const $container = document.querySelector(`#${CONTAINER_ID}`);
  $container.innerText = content;
}

chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('popup-to-injected', (msg, str, num) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[injected] from popup', content, str, num);
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('options-to-injected', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[injected] from options', content);
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('background-to-injected', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[injected] from background', content);
});
chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.on('content-to-injected', (msg) => {
  const content = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getContent"])(msg);
  updateContainer(content);
  console.log('[injected] from content', content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nocm9tZS1lbWl0dGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsZUFBZSxLQUFvRCxvQkFBb0IsU0FBdUUsQ0FBQyxpQkFBaUIsYUFBYSxrQkFBa0IseUNBQXlDLGtEQUFrRCxXQUFXLGdCQUFnQixtQkFBbUIsNkJBQTZCLG1CQUFtQixzRUFBc0UsNEJBQTRCLElBQUksaUNBQWlDLDJEQUEyRCxPQUFPLFNBQVMsU0FBUyxRQUFRLElBQUksOEJBQThCLFFBQVEsY0FBYyxTQUFTLDBCQUEwQixpS0FBaUssR0FBRyxjQUFjLG1CQUFtQixnQ0FBZ0MsaUJBQWlCLGlGQUFpRixzQkFBc0IsNEpBQTRKLEdBQUcsZ0JBQWdCLE1BQU0sb0NBQW9DLG9EQUFvRCxnTEFBZ0wsZ0JBQWdCLG9DQUFvQywyQkFBMkIsSUFBSSxjQUFjLFNBQVMsT0FBTywyREFBMkQsSUFBSSx1RUFBdUUsaUJBQWlCLGFBQWEsNEJBQTRCLHdDQUF3QyxvQ0FBb0Msc0NBQXNDLHlEQUF5RCxhQUFhLDJCQUEyQixpQkFBaUIsMEJBQTBCLGNBQWMsd0JBQXdCLGNBQWMsd0JBQXdCLElBQUksT0FBTyx5QkFBeUIsd0xBQXdMLE1BQU0sdURBQXVELGNBQWMsUUFBUSwwQ0FBMEMsU0FBUyxvR0FBb0csU0FBUyxzREFBc0QsYUFBYSxzQ0FBc0MsT0FBTyxrQkFBa0IsYUFBYSxxQkFBcUIsMEJBQTBCLHFCQUFxQiw4QkFBOEIsa0JBQWtCLHFCQUFxQiw2Q0FBNkMsYUFBYSxtRkFBbUYsK0NBQStDLGFBQWEsT0FBTyx5QkFBeUIsYUFBYSxPQUFPLDJCQUEyQixtQ0FBbUMsOENBQThDLElBQUksc0JBQXNCLEdBQUcsaUJBQWlCLEVBQUUsRUFBRSxxQkFBcUIsT0FBTyw2QkFBNkIsb0RBQW9ELGlCQUFpQixFQUFFLHFEQUFxRCxXQUFXLGlDQUFpQyw2REFBNkQsOFFBQThRLFFBQVEsT0FBTyxpQkFBaUIsUUFBUSxrQkFBa0Isc0RBQXNELElBQUksd0JBQXdCLEdBQUcsaUJBQWlCLEVBQUUsa0JBQWtCLFFBQVEsNENBQTRDLG9CQUFvQixZQUFZLHNCQUFzQixnQ0FBZ0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQ0FobEk7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDc0I7O0FBRTNEOztBQUVBOztBQUVBLG1CQUFtQixtRUFBb0I7QUFDdkM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsRUFBRSxxREFBTztBQUNULEVBQUUscURBQU87QUFDVCxFQUFFLHFEQUFPO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELGFBQWE7QUFDN0Q7QUFDQTs7QUFFQSxxREFBTztBQUNQLGtCQUFrQix5REFBVTtBQUM1QjtBQUNBO0FBQ0EsQ0FBQztBQUNELHFEQUFPO0FBQ1Asa0JBQWtCLHlEQUFVO0FBQzVCO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscURBQU87QUFDUCxrQkFBa0IseURBQVU7QUFDNUI7QUFDQTtBQUNBLENBQUM7QUFDRCxxREFBTztBQUNQLGtCQUFrQix5REFBVTtBQUM1QjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlDRDtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1AscUJBQXFCLGdDQUFnQyxLQUFLLElBQUk7QUFDOUQ7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUIsYUFBYSxXQUFXLG1CQUFtQix3QkFBd0I7QUFDdEcscUNBQXFDLEdBQUcsdUJBQXVCLHFCQUFxQixvQkFBb0Isa0JBQWtCLGNBQWM7QUFDeEksSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluamVjdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5qZWN0ZWQuanNcIik7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmKS5lbWl0dGVyPXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0LG4pe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09bixlfWZ1bmN0aW9uIGQoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8IShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKSlyZXR1cm47dmFyIG49W10scj0hMCxvPSExLGk9dm9pZCAwO3RyeXtmb3IodmFyIGEsdT1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKHI9KGE9dS5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKGEudmFsdWUpLCF0fHxuLmxlbmd0aCE9PXQpO3I9ITApO31jYXRjaChlKXtvPSEwLGk9ZX1maW5hbGx5e3RyeXtyfHxudWxsPT11LnJldHVybnx8dS5yZXR1cm4oKX1maW5hbGx5e2lmKG8pdGhyb3cgaX19cmV0dXJuIG59KGUsdCl8fG4oZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGYoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIG8oZSl9KGUpfHxmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKXJldHVybiBBcnJheS5mcm9tKGUpfShlKXx8bihlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBuKGUsdCl7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIG8oZSx0KTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PW4mJmUuY29uc3RydWN0b3ImJihuPWUuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uP0FycmF5LmZyb20oZSk6XCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pP28oZSx0KTp2b2lkIDB9fWZ1bmN0aW9uIG8oZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIG49MCxyPW5ldyBBcnJheSh0KTtuPHQ7bisrKXJbbl09ZVtuXTtyZXR1cm4gcn12YXIgdD17Tk9ORTowLENPTlRFTlQ6MSxJTkpFQ1RFRDoyLEJBQ0tHUk9VTkQ6MyxQT1BVUDo0LE9QVElPTlM6NX0sZT17MDpcIk5PTkVcIiwxOlwiQ09OVEVOVFwiLDI6XCJJTkpFQ1RFRFwiLDM6XCJCQUNLR1JPVU5EXCIsNDpcIlBPUFVQXCIsNTpcIk9QVElPTlNcIn0saT13aW5kb3cuY2hyb21lO2Z1bmN0aW9uIGEoKXtpZih2b2lkIDA9PT1pKXJldHVybiB0Lk5PTkU7aWYodm9pZCAwPT09aS5zdG9yYWdlKXJldHVybiB0LklOSkVDVEVEO2lmKHZvaWQgMD09PWkudGFicylyZXR1cm4gdC5DT05URU5UO3ZhciBlPWkuZXh0ZW5zaW9uLmdldEJhY2tncm91bmRQYWdlKCk7cmV0dXJuIHdpbmRvdz09PWU/dC5CQUNLR1JPVU5EOjAhPT1pLmV4dGVuc2lvbi5nZXRWaWV3cyh7dHlwZTpcInBvcHVwXCJ9KS5sZW5ndGg/dC5QT1BVUDp0Lk9QVElPTlN9dmFyIHU9ZnVuY3Rpb24oKXtyZXR1cm4gYSgpPT09dC5CQUNLR1JPVU5EfSxsPWZ1bmN0aW9uKCl7cmV0dXJuIGEoKT09PXQuSU5KRUNURUR9LGM9ZnVuY3Rpb24oKXtyZXR1cm4gYSgpPT09dC5DT05URU5UfTthKCk7dmFyIHM9e3N1cHBvcnROb3RpZnlHbG9iYWxseTohMX0sdj1cIkBAX19FTUlUVEVSX0FfX1wiLHk9XCJAQF9fRU1JVFRFUl9CX19cIixwPVwiQEBfX1NZTkNfTkFNRV9fXCIsbT1cIl9fdGltZV9fXCIsRT1cIl9fZGF0YV9fXCIsdz1cIkBAX19FTUlUVEVSX0ZST01fSU5KRUNURURfX1wiLF89KFwiQEBfX0VNSVRURVJfXCIuY29uY2F0KChuZXcgRGF0ZSkudmFsdWVPZigpLnRvU3RyaW5nKCksXCJfX1wiKSx7fSksYj17fSxOPWMsZz11LE89bCgpLGg9TigpLFQ9KGcoKSx3aW5kb3cuY2hyb21lKSxDPSExLEE9bnVsbDtmdW5jdGlvbiBJKGUpe3ZhciB0LG47Tz93aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoeSx7ZGV0YWlsOmV9KSk6aCYmKGUudHlwZS5pbmNsdWRlcyh3KXx8T2JqZWN0LmtleXMoYikuaW5jbHVkZXMoZS50eXBlKSk/d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHYse2RldGFpbDplfSkpOihuPShuZXcgRGF0ZSkudmFsdWVPZigpLFQuc3RvcmFnZS5sb2NhbC5zZXQoKHIodD17fSxtLG4pLHIodCxFLHt2YWx1ZTpuLHR5cGU6ZS50eXBlLHBheWxvYWQ6ZS5wYXlsb2FkfSksdCkpKX12YXIgUz1udWxsLFA9bnVsbDtmdW5jdGlvbiBEKCl7ITAhPT1DJiYoZnVuY3Rpb24ocil7aWYoTylyZXR1cm4gUz1mdW5jdGlvbihlKXtlLmRldGFpbCxyKGUuZGV0YWlsKX0sd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodixTKTtoJiYoUD1mdW5jdGlvbihlKXtlLmRldGFpbCxyKGUuZGV0YWlsKX0sd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoeSxQKSksQT1mdW5jdGlvbihlKXt2YXIgdCxuPWVbRV07dm9pZCAwIT09biYmdm9pZCAwIT09bi5uZXdWYWx1ZSYmKFQuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW20sRV0pLHQ9bi5uZXdWYWx1ZSxyKHQpKX0sVC5zdG9yYWdlJiZULnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKEEpfShmdW5jdGlvbihlKXtlLnR5cGU7dmFyIHQ9ZS50eXBlLG49ZS5wYXlsb2FkO2lmKGgmJnQ9PT1wKXtlLnR5cGU7dmFyIHI9ZChuLDIpLG89clswXSxpPXJbMV07cmV0dXJuIGJbb109aSx2b2lkKF9bb109ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PW5ldyBBcnJheShlKSxuPTA7bjxlO24rKyl0W25dPWFyZ3VtZW50c1tuXTtJKHt0eXBlOmkscGF5bG9hZDp0fSl9KX1pZihoJiZ0LmluY2x1ZGVzKHcpKXtlLnR5cGU7dmFyIGE9dC5yZXBsYWNlKHcsXCJcIiksdT1fW2FdO3JldHVybiB2b2lkIDAhPT11P3ZvaWQgdS5hcHBseSh2b2lkIDAsZihuKSk6dm9pZCBJKHt0eXBlOmEscGF5bG9hZDpufSl9aWYoTyYmX1t0K3ddKXJldHVybiBlLnR5cGUsdm9pZCBfW3Qrd10uYXBwbHkoXyxmKG4pKTt2YXIgbD1fW3RdO3ZvaWQgMCE9PWwmJmwuYXBwbHkodm9pZCAwLGYobikpfSksaCYmZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixmdW5jdGlvbigpeyEwIT09cy5zdXBwb3J0Tm90aWZ5R2xvYmFsbHkmJihcInZpc2libGVcIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZT9EKCk6VC5zdG9yYWdlLm9uQ2hhbmdlZC5oYXNMaXN0ZW5lcnMoKSYmbnVsbCE9PUEmJihTJiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih2LFMpLFAmJndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHksUCksVC5zdG9yYWdlLm9uQ2hhbmdlZC5oYXNMaXN0ZW5lcnMoKSYmVC5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihBKSxDPSExKSl9KSxDPSEwKX12YXIgaj17ZW1pdDpmdW5jdGlvbihlKXt2YXIgdD1lO08mJmUhPT1wJiYodD1lK3cpO2Zvcih2YXIgbj1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KDE8bj9uLTE6MCksbz0xO288bjtvKyspcltvLTFdPWFyZ3VtZW50c1tvXTtJKHt0eXBlOnQscGF5bG9hZDpyfSl9LG9uOmZ1bmN0aW9uKGUsdCl7dmFyIG49ZTtPJiYobj1lK3csai5lbWl0KHAsZSxuKSksX1tuXT10LCExPT09QyYmRCgpfSxyZW1vdmU6ZnVuY3Rpb24oZSl7ZGVsZXRlIF9bZV19LGNvbmZpZzpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10fHwoc1tlXT10KSxzfX07cmV0dXJuIGp9KTtcbiIsImltcG9ydCBlbWl0dGVyIGZyb20gXCJjaHJvbWUtZW1pdHRlclwiO1xuaW1wb3J0IHsgZ2V0Q29udGVudCwgY3JlYXRlRml4ZWRDb250YWluZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zb2xlLmxvZyhcImhlcmUgaXMgaW5zZXJ0ZWRcIik7XG5cbmNvbnN0IENPTlRBSU5FUl9JRCA9IFwiX19lbWl0dGVyX2luamVjdGVkX2lkX19cIjtcblxuY29uc3QgJGNvbnRhaW5lciA9IGNyZWF0ZUZpeGVkQ29udGFpbmVyKFxuICBDT05UQUlORVJfSUQsXG4gIFwi55SxIGluamVjdGVkIOaPkuWFpemhtemdolwiLFxuICBcInRvcDogODBweDtcIlxuKTtcbiRjb250YWluZXIub25jbGljayA9ICgpID0+IHtcbiAgZW1pdHRlci5lbWl0KCdpbmplY3RlZC10by1jb250ZW50JywgJ2hlbGxvIGkgYW0gaW5qZWN0ZWQnKTtcbiAgZW1pdHRlci5lbWl0KCdpbmplY3RlZC10by1vcHRpb25zJywgJ2hlbGxvIGkgYW0gaW5qZWN0ZWQnKTtcbiAgZW1pdHRlci5lbWl0KCdpbmplY3RlZC10by1iYWNrZ3JvdW5kJywgJ2hlbGxvIGkgYW0gaW5qZWN0ZWQnKTtcbn1cblxuZG9jdW1lbnQuYm9keS5vbmxvYWQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcik7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVDb250YWluZXIoY29udGVudCkge1xuICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Q09OVEFJTkVSX0lEfWApO1xuICAkY29udGFpbmVyLmlubmVyVGV4dCA9IGNvbnRlbnQ7XG59XG5cbmVtaXR0ZXIub24oJ3BvcHVwLXRvLWluamVjdGVkJywgKG1zZywgc3RyLCBudW0pID0+IHtcbiAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQobXNnKTtcbiAgdXBkYXRlQ29udGFpbmVyKGNvbnRlbnQpO1xuICBjb25zb2xlLmxvZygnW2luamVjdGVkXSBmcm9tIHBvcHVwJywgY29udGVudCwgc3RyLCBudW0pO1xufSk7XG5lbWl0dGVyLm9uKCdvcHRpb25zLXRvLWluamVjdGVkJywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICB1cGRhdGVDb250YWluZXIoY29udGVudCk7XG4gIGNvbnNvbGUubG9nKCdbaW5qZWN0ZWRdIGZyb20gb3B0aW9ucycsIGNvbnRlbnQpO1xufSk7XG5lbWl0dGVyLm9uKCdiYWNrZ3JvdW5kLXRvLWluamVjdGVkJywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICB1cGRhdGVDb250YWluZXIoY29udGVudCk7XG4gIGNvbnNvbGUubG9nKCdbaW5qZWN0ZWRdIGZyb20gYmFja2dyb3VuZCcsIGNvbnRlbnQpO1xufSk7XG5lbWl0dGVyLm9uKCdjb250ZW50LXRvLWluamVjdGVkJywgKG1zZykgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudChtc2cpO1xuICB1cGRhdGVDb250YWluZXIoY29udGVudCk7XG4gIGNvbnNvbGUubG9nKCdbaW5qZWN0ZWRdIGZyb20gY29udGVudCcsIGNvbnRlbnQpO1xufSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q29udGVudChtc2cpIHtcbiAgY29uc3QgY29udGVudCA9IGAke25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9IC0gJHttc2d9YDtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSnMoc3JjKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaXhlZENvbnRhaW5lcihpZCwgY29udGVudCwgc3R5bGVzID0gJycpIHtcbiAgY29uc3QgJGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICRjb250YWluZXIuc3R5bGUgPVxuICAgIFwiei1pbmRleDogOTk5OyBwb3NpdGlvbjogZml4ZWQ7IHJpZ2h0OiAyMHB4OyB0b3A6IDIwcHg7IHBhZGRpbmc6IDRweCAxMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1wiICsgc3R5bGVzO1xuICAkY29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiJHtpZH1cIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHRleHQtYWxpZ246IGNlbnRlcjsgbWluLXdpZHRoOiAxODBweDsgaGVpZ2h0OiAzMHB4O1wiPlxuICAke2NvbnRlbnR9XG48L2Rpdj5cbmA7XG4gIHJldHVybiAkY29udGFpbmVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=injected.js.map