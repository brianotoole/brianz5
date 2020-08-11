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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles_app_scss__ = __webpack_require__(/*! styles/app.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styles_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styles_app_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_js__ = __webpack_require__(/*! ./main.js */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tweens_js__ = __webpack_require__(/*! ./tweens.js */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tweens_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tweens_js__);
// Styles
 // Scripts




/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// MAIN
// when hover over work-item, take it's data-src attr and set it as imgSrc's img attr
var workItem = $('.recent-work-list--is-home > li a');
var breakpoint = 800;
workItem.on({
  mouseenter: function mouseenter() {
    var imgContainer = $('.work-item-image img');
    var currentSrc = $(this).data('src');

    if ($(window).width() >= breakpoint) {
      imgContainer.attr('src', currentSrc);
      $(this).addClass('active');
      imgContainer.addClass('active');
    }
  }
});

/***/ }),
/* 3 */
/*!**************************!*\
  !*** ./src/js/tweens.js ***!
  \**************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

//TimelineMax & ScrollMagic
//import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';   
//import { TweenMax, Power0 } from 'gsap';
// TweenMax
//tl.method(element, duration, vars), delay
var tl = new TimelineMax({});
var navItems = $('.nav-primary li');
var pageContent = $('.site-wrapper');
var workItems = $('.work-anim');
tl; // nav items

navItems.each(function () {
  tl.add(TweenMax.from($(this), 0.25, {
    autoAlpha: 0,
    x: 30,
    ease: Power1.easeOut
  }));
}); // page content

pageContent.each(function () {
  tl.add(TweenMax.from($(this), 0.25, {
    autoAlpha: 0,
    y: 5,
    ease: Power1.easeOut
  }));
}); // work items

workItems.each(function () {
  tl.add(TweenMax.staggerFrom($(this), 0.1, {
    autoAlpha: 0,
    y: 5,
    ease: Power0.easeOut
  }));
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODM4OTM2ODE0YTc5OTUyYjJlZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90d2VlbnMuanMiXSwibmFtZXMiOlsid29ya0l0ZW0iLCIkIiwiYnJlYWtwb2ludCIsIm9uIiwibW91c2VlbnRlciIsImltZ0NvbnRhaW5lciIsImN1cnJlbnRTcmMiLCJkYXRhIiwid2luZG93Iiwid2lkdGgiLCJhdHRyIiwiYWRkQ2xhc3MiLCJ0bCIsIlRpbWVsaW5lTWF4IiwibmF2SXRlbXMiLCJwYWdlQ29udGVudCIsIndvcmtJdGVtcyIsImVhY2giLCJhZGQiLCJUd2Vlbk1heCIsImZyb20iLCJhdXRvQWxwaGEiLCJ4IiwiZWFzZSIsIlBvd2VyMSIsImVhc2VPdXQiLCJ5Iiwic3RhZ2dlckZyb20iLCJQb3dlcjAiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0E7Ozs7Ozs7Ozs7O0FDSkEseUM7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQ0EsSUFBSUEsUUFBUSxHQUFHQyxDQUFDLENBQUMsbUNBQUQsQ0FBaEI7QUFDQSxJQUFJQyxVQUFVLEdBQUcsR0FBakI7QUFDQUYsUUFBUSxDQUFDRyxFQUFULENBQVk7QUFDWEMsWUFBVSxFQUFFLHNCQUFZO0FBRXZCLFFBQUlDLFlBQVksR0FBR0osQ0FBQyxDQUFDLHNCQUFELENBQXBCO0FBQ0EsUUFBSUssVUFBVSxHQUFHTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxLQUFiLENBQWpCOztBQUNBLFFBQUlOLENBQUMsQ0FBQ08sTUFBRCxDQUFELENBQVVDLEtBQVYsTUFBcUJQLFVBQXpCLEVBQXFDO0FBQ3BDRyxrQkFBWSxDQUFDSyxJQUFiLENBQWtCLEtBQWxCLEVBQXlCSixVQUF6QjtBQUNBTCxPQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLFFBQVIsQ0FBaUIsUUFBakI7QUFDQU4sa0JBQVksQ0FBQ00sUUFBYixDQUFzQixRQUF0QjtBQUNBO0FBQ0Q7QUFWVSxDQUFaLEU7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUMsRUFBRSxHQUFHLElBQUlDLFdBQUosQ0FBZ0IsRUFBaEIsQ0FBVDtBQUNBLElBQUlDLFFBQVEsR0FBR2IsQ0FBQyxDQUFDLGlCQUFELENBQWhCO0FBQ0EsSUFBSWMsV0FBVyxHQUFHZCxDQUFDLENBQUMsZUFBRCxDQUFuQjtBQUNBLElBQUllLFNBQVMsR0FBR2YsQ0FBQyxDQUFDLFlBQUQsQ0FBakI7QUFDQVcsRUFBRSxDLENBQ0Q7O0FBQ0FFLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLFlBQVc7QUFDdEJMLElBQUUsQ0FBQ00sR0FBSCxDQUNFQyxRQUFRLENBQUNDLElBQVQsQ0FBY25CLENBQUMsQ0FBQyxJQUFELENBQWYsRUFBdUIsSUFBdkIsRUFBNkI7QUFDM0JvQixhQUFTLEVBQUUsQ0FEZ0I7QUFFM0JDLEtBQUMsRUFBRSxFQUZ3QjtBQUczQkMsUUFBSSxFQUFFQyxNQUFNLENBQUNDO0FBSGMsR0FBN0IsQ0FERjtBQU9ELENBUkYsRSxDQVVDOztBQUNBVixXQUFXLENBQUNFLElBQVosQ0FBaUIsWUFBVztBQUMxQkwsSUFBRSxDQUFDTSxHQUFILENBQ0VDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjbkIsQ0FBQyxDQUFDLElBQUQsQ0FBZixFQUF1QixJQUF2QixFQUE2QjtBQUMzQm9CLGFBQVMsRUFBRSxDQURnQjtBQUUzQkssS0FBQyxFQUFFLENBRndCO0FBRzNCSCxRQUFJLEVBQUVDLE1BQU0sQ0FBQ0M7QUFIYyxHQUE3QixDQURGO0FBT0QsQ0FSRCxFLENBVUQ7O0FBQ0FULFNBQVMsQ0FBQ0MsSUFBVixDQUFlLFlBQVc7QUFDdkJMLElBQUUsQ0FBQ00sR0FBSCxDQUNFQyxRQUFRLENBQUNRLFdBQVQsQ0FBcUIxQixDQUFDLENBQUMsSUFBRCxDQUF0QixFQUE4QixHQUE5QixFQUFtQztBQUNqQ29CLGFBQVMsRUFBRSxDQURzQjtBQUVqQ0ssS0FBQyxFQUFFLENBRjhCO0FBR2pDSCxRQUFJLEVBQUVLLE1BQU0sQ0FBQ0g7QUFIb0IsR0FBbkMsQ0FERjtBQU9GLENBUkQsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4Mzg5MzY4MTRhNzk5NTJiMmVlMCIsIi8vIFN0eWxlc1xuaW1wb3J0ICdzdHlsZXMvYXBwLnNjc3MnOyBcblxuLy8gU2NyaXB0c1xuaW1wb3J0ICcuL21haW4uanMnO1xuaW1wb3J0ICcuL3R3ZWVucy5qcyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIE1BSU5cblxuLy8gd2hlbiBob3ZlciBvdmVyIHdvcmstaXRlbSwgdGFrZSBpdCdzIGRhdGEtc3JjIGF0dHIgYW5kIHNldCBpdCBhcyBpbWdTcmMncyBpbWcgYXR0clxudmFyIHdvcmtJdGVtID0gJCgnLnJlY2VudC13b3JrLWxpc3QtLWlzLWhvbWUgPiBsaSBhJyk7XG52YXIgYnJlYWtwb2ludCA9IDgwMDtcbndvcmtJdGVtLm9uKHtcblx0bW91c2VlbnRlcjogZnVuY3Rpb24gKCkge1xuXG5cdFx0dmFyIGltZ0NvbnRhaW5lciA9ICQoJy53b3JrLWl0ZW0taW1hZ2UgaW1nJylcblx0XHR2YXIgY3VycmVudFNyYyA9ICQodGhpcykuZGF0YSgnc3JjJyk7XG5cdFx0aWYgKCQod2luZG93KS53aWR0aCgpID49IGJyZWFrcG9pbnQpIHtcblx0XHRcdGltZ0NvbnRhaW5lci5hdHRyKCdzcmMnLCBjdXJyZW50U3JjKTtcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0aW1nQ29udGFpbmVyLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHR9XG5cdH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tYWluLmpzIiwiLy9UaW1lbGluZU1heCAmIFNjcm9sbE1hZ2ljXG4vL2ltcG9ydCBTY3JvbGxNYWdpYyBmcm9tICdzY3JvbGxtYWdpYy9zY3JvbGxtYWdpYy91bmNvbXByZXNzZWQvU2Nyb2xsTWFnaWMnOyAgIFxuLy9pbXBvcnQgeyBUd2Vlbk1heCwgUG93ZXIwIH0gZnJvbSAnZ3NhcCc7XG4vLyBUd2Vlbk1heFxuLy90bC5tZXRob2QoZWxlbWVudCwgZHVyYXRpb24sIHZhcnMpLCBkZWxheVxuXG52YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoe30pO1xudmFyIG5hdkl0ZW1zID0gJCgnLm5hdi1wcmltYXJ5IGxpJyk7XG52YXIgcGFnZUNvbnRlbnQgPSAkKCcuc2l0ZS13cmFwcGVyJyk7XG52YXIgd29ya0l0ZW1zID0gJCgnLndvcmstYW5pbScpO1xudGxcblx0Ly8gbmF2IGl0ZW1zXG5cdG5hdkl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdGwuYWRkKFxuICAgICAgVHdlZW5NYXguZnJvbSgkKHRoaXMpLCAwLjI1LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgeDogMzAsXG4gICAgICAgIGVhc2U6IFBvd2VyMS5lYXNlT3V0XG4gICAgICB9KVxuICAgICk7XG4gIH0pXG4gIFxuICAvLyBwYWdlIGNvbnRlbnRcbiAgcGFnZUNvbnRlbnQuZWFjaChmdW5jdGlvbigpIHtcbiAgICB0bC5hZGQoXG4gICAgICBUd2Vlbk1heC5mcm9tKCQodGhpcyksIDAuMjUsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB5OiA1LFxuICAgICAgICBlYXNlOiBQb3dlcjEuZWFzZU91dFxuICAgICAgfSlcbiAgICApO1xuICB9KVxuICBcblx0Ly8gd29yayBpdGVtc1xuXHR3b3JrSXRlbXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICB0bC5hZGQoXG4gICAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbSgkKHRoaXMpLCAwLjEsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB5OiA1LFxuICAgICAgICBlYXNlOiBQb3dlcjAuZWFzZU91dFxuICAgICAgfSlcbiAgICApO1xuXHR9KVxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3R3ZWVucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=