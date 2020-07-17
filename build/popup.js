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

/***/ "./node_modules/chrome-emitter/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/chrome-emitter/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t={NONE:0,CONTENT:1,INJECTED:2,BACKGROUND:3,POPUP:4,OPTIONS:5},e={0:"NONE",1:"CONTENT",2:"INJECTED",3:"BACKGROUND",4:"POPUP",5:"OPTIONS"},i=window.chrome;function a(){if(void 0===i)return t.NONE;if(void 0===i.storage)return t.INJECTED;if(void 0===i.tabs)return t.CONTENT;var e=i.extension.getBackgroundPage();return window===e?t.BACKGROUND:0!==i.extension.getViews({type:"popup"}).length?t.POPUP:t.OPTIONS}var u=function(){return a()===t.BACKGROUND},l=function(){return a()===t.INJECTED},c=function(){return a()===t.CONTENT};a();var s={supportNotifyGlobally:!1},v="@@__EMITTER_A__",y="@@__EMITTER_B__",p="@@__SYNC_NAME__",m="__time__",E="__data__",w="@@__EMITTER_FROM_INJECTED__",_=("@@__EMITTER_".concat((new Date).valueOf().toString(),"__"),{}),b={},N=c,g=u,O=l(),h=N(),T=(g(),window.chrome),C=!1,A=null;function I(e){var t,n;O?window.dispatchEvent(new CustomEvent(y,{detail:e})):h&&(e.type.includes(w)||Object.keys(b).includes(e.type))?window.dispatchEvent(new CustomEvent(v,{detail:e})):(n=(new Date).valueOf(),T.storage.local.set((r(t={},m,n),r(t,E,{value:n,type:e.type,payload:e.payload}),t)))}var S=null,P=null;function D(){!0!==C&&(function(r){if(O)return S=function(e){e.detail,r(e.detail)},window.addEventListener(v,S);h&&(P=function(e){e.detail,r(e.detail)},window.addEventListener(y,P)),A=function(e){var t,n=e[E];void 0!==n&&void 0!==n.newValue&&(T.storage.local.remove([m,E]),t=n.newValue,r(t))},T.storage&&T.storage.onChanged.addListener(A)}(function(e){e.type;var t=e.type,n=e.payload;if(h&&t===p){e.type;var r=d(n,2),o=r[0],i=r[1];return b[o]=i,void(_[o]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];I({type:i,payload:t})})}if(h&&t.includes(w)){e.type;var a=t.replace(w,""),u=_[a];return void 0!==u?void u.apply(void 0,f(n)):void I({type:a,payload:n})}if(O&&_[t+w])return e.type,void _[t+w].apply(_,f(n));var l=_[t];void 0!==l&&l.apply(void 0,f(n))}),h&&document.addEventListener("visibilitychange",function(){!0!==s.supportNotifyGlobally&&("visible"===document.visibilityState?D():T.storage.onChanged.hasListeners()&&null!==A&&(S&&window.removeEventListener(v,S),P&&window.removeEventListener(y,P),T.storage.onChanged.hasListeners()&&T.storage.onChanged.removeListener(A),C=!1))}),C=!0)}var j={emit:function(e){var t=e;O&&e!==p&&(t=e+w);for(var n=arguments.length,r=new Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];I({type:t,payload:r})},on:function(e,t){var n=e;O&&(n=e+w,j.emit(p,e,n)),_[n]=t,!1===C&&D()},remove:function(e){delete _[e]},config:function(e,t){return void 0===t||(s[e]=t),s}};return j});


/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-emitter */ "./node_modules/chrome-emitter/dist/index.js");
/* harmony import */ var chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_emitter__WEBPACK_IMPORTED_MODULE_0__);


console.log("here is popup");

const toBackgroundBtn = document.getElementById('toBackground');
const toContentBtn = document.getElementById('toContent');
const toOptionsBtn = document.getElementById('toOptions');
const toInsertedBtn = document.getElementById('toInjected');

const screenshot = document.getElementById('screenshot');

const message = 'hello i am popup';
toBackgroundBtn.onclick = () => {
  console.log('[popup] send message to background');
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('popup-to-background', message);
};
toContentBtn.onclick = () => {
  console.log('[popup] send message to content');
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('popup-to-content', message);
};
toOptionsBtn.onclick = () => {
  console.log('[popup] send message to options');
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('popup-to-options', message);
};
toInsertedBtn.onclick = () => {
  console.log('[popup] send message to injected');
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('popup-to-injected', message);
};

screenshot.onclick = () => {
  chrome_emitter__WEBPACK_IMPORTED_MODULE_0___default.a.emit('startScreenshot');
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nocm9tZS1lbWl0dGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxlQUFlLEtBQW9ELG9CQUFvQixTQUF1RSxDQUFDLGlCQUFpQixhQUFhLGtCQUFrQix5Q0FBeUMsa0RBQWtELFdBQVcsZ0JBQWdCLG1CQUFtQiw2QkFBNkIsbUJBQW1CLHNFQUFzRSw0QkFBNEIsSUFBSSxpQ0FBaUMsMkRBQTJELE9BQU8sU0FBUyxTQUFTLFFBQVEsSUFBSSw4QkFBOEIsUUFBUSxjQUFjLFNBQVMsMEJBQTBCLGlLQUFpSyxHQUFHLGNBQWMsbUJBQW1CLGdDQUFnQyxpQkFBaUIsaUZBQWlGLHNCQUFzQiw0SkFBNEosR0FBRyxnQkFBZ0IsTUFBTSxvQ0FBb0Msb0RBQW9ELGdMQUFnTCxnQkFBZ0Isb0NBQW9DLDJCQUEyQixJQUFJLGNBQWMsU0FBUyxPQUFPLDJEQUEyRCxJQUFJLHVFQUF1RSxpQkFBaUIsYUFBYSw0QkFBNEIsd0NBQXdDLG9DQUFvQyxzQ0FBc0MseURBQXlELGFBQWEsMkJBQTJCLGlCQUFpQiwwQkFBMEIsY0FBYyx3QkFBd0IsY0FBYyx3QkFBd0IsSUFBSSxPQUFPLHlCQUF5Qix3TEFBd0wsTUFBTSx1REFBdUQsY0FBYyxRQUFRLDBDQUEwQyxTQUFTLG9HQUFvRyxTQUFTLHNEQUFzRCxhQUFhLHNDQUFzQyxPQUFPLGtCQUFrQixhQUFhLHFCQUFxQiwwQkFBMEIscUJBQXFCLDhCQUE4QixrQkFBa0IscUJBQXFCLDZDQUE2QyxhQUFhLG1GQUFtRiwrQ0FBK0MsYUFBYSxPQUFPLHlCQUF5QixhQUFhLE9BQU8sMkJBQTJCLG1DQUFtQyw4Q0FBOEMsSUFBSSxzQkFBc0IsR0FBRyxpQkFBaUIsRUFBRSxFQUFFLHFCQUFxQixPQUFPLDZCQUE2QixvREFBb0QsaUJBQWlCLEVBQUUscURBQXFELFdBQVcsaUNBQWlDLDZEQUE2RCw4UUFBOFEsUUFBUSxPQUFPLGlCQUFpQixRQUFRLGtCQUFrQixzREFBc0QsSUFBSSx3QkFBd0IsR0FBRyxpQkFBaUIsRUFBRSxrQkFBa0IsUUFBUSw0Q0FBNEMsb0JBQW9CLFlBQVksc0JBQXNCLGdDQUFnQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FDQWhsSTtBQUFBO0FBQUE7QUFBcUM7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQU87QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFPO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQU87QUFDVDs7QUFFQTtBQUNBLEVBQUUscURBQU87QUFDVCIsImZpbGUiOiJwb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BvcHVwLmpzXCIpO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9ZXx8c2VsZikuZW1pdHRlcj10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUsdCxuKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPW4sZX1mdW5jdGlvbiBkKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSkpcmV0dXJuO3ZhciBuPVtdLHI9ITAsbz0hMSxpPXZvaWQgMDt0cnl7Zm9yKHZhciBhLHU9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShyPShhPXUubmV4dCgpKS5kb25lKSYmKG4ucHVzaChhLnZhbHVlKSwhdHx8bi5sZW5ndGghPT10KTtyPSEwKTt9Y2F0Y2goZSl7bz0hMCxpPWV9ZmluYWxseXt0cnl7cnx8bnVsbD09dS5yZXR1cm58fHUucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IGl9fXJldHVybiBufShlLHQpfHxuKGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBmKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBvKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fG4oZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gbihlLHQpe2lmKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBvKGUsdCk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1uJiZlLmNvbnN0cnVjdG9yJiYobj1lLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bj9BcnJheS5mcm9tKGUpOlwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKT9vKGUsdCk6dm9pZCAwfX1mdW5jdGlvbiBvKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciBuPTAscj1uZXcgQXJyYXkodCk7bjx0O24rKylyW25dPWVbbl07cmV0dXJuIHJ9dmFyIHQ9e05PTkU6MCxDT05URU5UOjEsSU5KRUNURUQ6MixCQUNLR1JPVU5EOjMsUE9QVVA6NCxPUFRJT05TOjV9LGU9ezA6XCJOT05FXCIsMTpcIkNPTlRFTlRcIiwyOlwiSU5KRUNURURcIiwzOlwiQkFDS0dST1VORFwiLDQ6XCJQT1BVUFwiLDU6XCJPUFRJT05TXCJ9LGk9d2luZG93LmNocm9tZTtmdW5jdGlvbiBhKCl7aWYodm9pZCAwPT09aSlyZXR1cm4gdC5OT05FO2lmKHZvaWQgMD09PWkuc3RvcmFnZSlyZXR1cm4gdC5JTkpFQ1RFRDtpZih2b2lkIDA9PT1pLnRhYnMpcmV0dXJuIHQuQ09OVEVOVDt2YXIgZT1pLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZSgpO3JldHVybiB3aW5kb3c9PT1lP3QuQkFDS0dST1VORDowIT09aS5leHRlbnNpb24uZ2V0Vmlld3Moe3R5cGU6XCJwb3B1cFwifSkubGVuZ3RoP3QuUE9QVVA6dC5PUFRJT05TfXZhciB1PWZ1bmN0aW9uKCl7cmV0dXJuIGEoKT09PXQuQkFDS0dST1VORH0sbD1mdW5jdGlvbigpe3JldHVybiBhKCk9PT10LklOSkVDVEVEfSxjPWZ1bmN0aW9uKCl7cmV0dXJuIGEoKT09PXQuQ09OVEVOVH07YSgpO3ZhciBzPXtzdXBwb3J0Tm90aWZ5R2xvYmFsbHk6ITF9LHY9XCJAQF9fRU1JVFRFUl9BX19cIix5PVwiQEBfX0VNSVRURVJfQl9fXCIscD1cIkBAX19TWU5DX05BTUVfX1wiLG09XCJfX3RpbWVfX1wiLEU9XCJfX2RhdGFfX1wiLHc9XCJAQF9fRU1JVFRFUl9GUk9NX0lOSkVDVEVEX19cIixfPShcIkBAX19FTUlUVEVSX1wiLmNvbmNhdCgobmV3IERhdGUpLnZhbHVlT2YoKS50b1N0cmluZygpLFwiX19cIikse30pLGI9e30sTj1jLGc9dSxPPWwoKSxoPU4oKSxUPShnKCksd2luZG93LmNocm9tZSksQz0hMSxBPW51bGw7ZnVuY3Rpb24gSShlKXt2YXIgdCxuO08/d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHkse2RldGFpbDplfSkpOmgmJihlLnR5cGUuaW5jbHVkZXModyl8fE9iamVjdC5rZXlzKGIpLmluY2x1ZGVzKGUudHlwZSkpP3dpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh2LHtkZXRhaWw6ZX0pKToobj0obmV3IERhdGUpLnZhbHVlT2YoKSxULnN0b3JhZ2UubG9jYWwuc2V0KChyKHQ9e30sbSxuKSxyKHQsRSx7dmFsdWU6bix0eXBlOmUudHlwZSxwYXlsb2FkOmUucGF5bG9hZH0pLHQpKSl9dmFyIFM9bnVsbCxQPW51bGw7ZnVuY3Rpb24gRCgpeyEwIT09QyYmKGZ1bmN0aW9uKHIpe2lmKE8pcmV0dXJuIFM9ZnVuY3Rpb24oZSl7ZS5kZXRhaWwscihlLmRldGFpbCl9LHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHYsUyk7aCYmKFA9ZnVuY3Rpb24oZSl7ZS5kZXRhaWwscihlLmRldGFpbCl9LHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHksUCkpLEE9ZnVuY3Rpb24oZSl7dmFyIHQsbj1lW0VdO3ZvaWQgMCE9PW4mJnZvaWQgMCE9PW4ubmV3VmFsdWUmJihULnN0b3JhZ2UubG9jYWwucmVtb3ZlKFttLEVdKSx0PW4ubmV3VmFsdWUscih0KSl9LFQuc3RvcmFnZSYmVC5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihBKX0oZnVuY3Rpb24oZSl7ZS50eXBlO3ZhciB0PWUudHlwZSxuPWUucGF5bG9hZDtpZihoJiZ0PT09cCl7ZS50eXBlO3ZhciByPWQobiwyKSxvPXJbMF0saT1yWzFdO3JldHVybiBiW29dPWksdm9pZChfW29dPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsdD1uZXcgQXJyYXkoZSksbj0wO248ZTtuKyspdFtuXT1hcmd1bWVudHNbbl07SSh7dHlwZTppLHBheWxvYWQ6dH0pfSl9aWYoaCYmdC5pbmNsdWRlcyh3KSl7ZS50eXBlO3ZhciBhPXQucmVwbGFjZSh3LFwiXCIpLHU9X1thXTtyZXR1cm4gdm9pZCAwIT09dT92b2lkIHUuYXBwbHkodm9pZCAwLGYobikpOnZvaWQgSSh7dHlwZTphLHBheWxvYWQ6bn0pfWlmKE8mJl9bdCt3XSlyZXR1cm4gZS50eXBlLHZvaWQgX1t0K3ddLmFwcGx5KF8sZihuKSk7dmFyIGw9X1t0XTt2b2lkIDAhPT1sJiZsLmFwcGx5KHZvaWQgMCxmKG4pKX0pLGgmJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsZnVuY3Rpb24oKXshMCE9PXMuc3VwcG9ydE5vdGlmeUdsb2JhbGx5JiYoXCJ2aXNpYmxlXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGU/RCgpOlQuc3RvcmFnZS5vbkNoYW5nZWQuaGFzTGlzdGVuZXJzKCkmJm51bGwhPT1BJiYoUyYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodixTKSxQJiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih5LFApLFQuc3RvcmFnZS5vbkNoYW5nZWQuaGFzTGlzdGVuZXJzKCkmJlQuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIoQSksQz0hMSkpfSksQz0hMCl9dmFyIGo9e2VtaXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZTtPJiZlIT09cCYmKHQ9ZSt3KTtmb3IodmFyIG49YXJndW1lbnRzLmxlbmd0aCxyPW5ldyBBcnJheSgxPG4/bi0xOjApLG89MTtvPG47bysrKXJbby0xXT1hcmd1bWVudHNbb107SSh7dHlwZTp0LHBheWxvYWQ6cn0pfSxvbjpmdW5jdGlvbihlLHQpe3ZhciBuPWU7TyYmKG49ZSt3LGouZW1pdChwLGUsbikpLF9bbl09dCwhMT09PUMmJkQoKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe2RlbGV0ZSBfW2VdfSxjb25maWc6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dHx8KHNbZV09dCksc319O3JldHVybiBqfSk7XG4iLCJpbXBvcnQgZW1pdHRlciBmcm9tICdjaHJvbWUtZW1pdHRlcic7XG5cbmNvbnNvbGUubG9nKFwiaGVyZSBpcyBwb3B1cFwiKTtcblxuY29uc3QgdG9CYWNrZ3JvdW5kQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvQmFja2dyb3VuZCcpO1xuY29uc3QgdG9Db250ZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvQ29udGVudCcpO1xuY29uc3QgdG9PcHRpb25zQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvT3B0aW9ucycpO1xuY29uc3QgdG9JbnNlcnRlZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0luamVjdGVkJyk7XG5cbmNvbnN0IHNjcmVlbnNob3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuc2hvdCcpO1xuXG5jb25zdCBtZXNzYWdlID0gJ2hlbGxvIGkgYW0gcG9wdXAnO1xudG9CYWNrZ3JvdW5kQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdbcG9wdXBdIHNlbmQgbWVzc2FnZSB0byBiYWNrZ3JvdW5kJyk7XG4gIGVtaXR0ZXIuZW1pdCgncG9wdXAtdG8tYmFja2dyb3VuZCcsIG1lc3NhZ2UpO1xufTtcbnRvQ29udGVudEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnW3BvcHVwXSBzZW5kIG1lc3NhZ2UgdG8gY29udGVudCcpO1xuICBlbWl0dGVyLmVtaXQoJ3BvcHVwLXRvLWNvbnRlbnQnLCBtZXNzYWdlKTtcbn07XG50b09wdGlvbnNCdG4ub25jbGljayA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1twb3B1cF0gc2VuZCBtZXNzYWdlIHRvIG9wdGlvbnMnKTtcbiAgZW1pdHRlci5lbWl0KCdwb3B1cC10by1vcHRpb25zJywgbWVzc2FnZSk7XG59O1xudG9JbnNlcnRlZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnW3BvcHVwXSBzZW5kIG1lc3NhZ2UgdG8gaW5qZWN0ZWQnKTtcbiAgZW1pdHRlci5lbWl0KCdwb3B1cC10by1pbmplY3RlZCcsIG1lc3NhZ2UpO1xufTtcblxuc2NyZWVuc2hvdC5vbmNsaWNrID0gKCkgPT4ge1xuICBlbWl0dGVyLmVtaXQoJ3N0YXJ0U2NyZWVuc2hvdCcpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=popup.js.map