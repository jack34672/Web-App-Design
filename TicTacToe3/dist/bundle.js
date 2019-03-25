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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/banner.js":
/*!***************************!*\
  !*** ./scripts/banner.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return banner; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./scripts/global.js\");\n/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role */ \"./scripts/role.js\");\n/* harmony import */ var _turn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turn */ \"./scripts/turn.js\");\n\n\n\n\nfunction banner () {\n\tObject(_role__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\tObject(_turn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n//# sourceURL=webpack:///./scripts/banner.js?");

/***/ }),

/***/ "./scripts/cell.js":
/*!*************************!*\
  !*** ./scripts/cell.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cell; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./scripts/global.js\");\n\n\nfunction cell () {\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.addEventListener('click', () => {\n\t\tif(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver){\n\t\tif((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML!=\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML!=\"X\")){\n\t\tif(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn===0){\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML=\"O\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=1;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}else{\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML=\"X\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=0;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}\n\t\t}\n\t}\n\t});\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell12.addEventListener('click', () => {\n\t\tif(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver){\n\t\tif((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell12.innerHTML!=\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell12.innerHTML!=\"X\")){\n\t\tif(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn===0){\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell12.innerHTML=\"O\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=1;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}else{\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell12.innerHTML=\"X\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=0;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}\n\t\t}\n\t}\n\t});\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.addEventListener('click', () => {\n\t\tif(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver){\n\t\tif((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML!=\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML!=\"X\")){\n\t\tif(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn===0){\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML=\"O\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=1;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}else{\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML=\"X\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=0;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}\n\t\t}\n\t}\n\t});\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell21.addEventListener('click', () => {\n\t\tif(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver){\n\t\tif((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell21.innerHTML!=\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell21.innerHTML!=\"X\")){\n\t\tif(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn===0){\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell21.innerHTML=\"O\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=1;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}else{\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell21.innerHTML=\"X\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=0;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}\n\t\t}\n\t\t}\n\t});\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.addEventListener('click', () => {\n\t\tif(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver){\n\t\tif((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML!=\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML!=\"X\")){\n\t\tif(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn===0){\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML=\"O\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=1;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}else{\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML=\"X\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=0;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}\n\t}\n\t}\n\t});\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell23.addEventListener('click', () => {\n\t\tif(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver){\n\t\tif((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell23.innerHTML!=\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell23.innerHTML!=\"X\")){\n\t\tif(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn===0){\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell23.innerHTML=\"O\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=1;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}else{\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell23.innerHTML=\"X\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=0;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}\n\t\t}\n\t\t}\n\t});\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.addEventListener('click', () => {\n\t\tif(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver){\n\t\tif((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML!=\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML!=\"X\")){\n\t\tif(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn===0){\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML=\"O\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=1;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}else{\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML=\"X\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=0;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}}\n\t}\n\t});\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell32.addEventListener('click', () => {\n\t\tif(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver){\n\t\tif((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell32.innerHTML!=\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell32.innerHTML!=\"X\")){\n\t\tif(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn===0){\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell32.innerHTML=\"O\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=1;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}else{\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell32.innerHTML=\"X\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=0;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}}\n\t}\n\t});\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.addEventListener('click', () => {\n\t\tif(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver){\n\t\tif((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML!=\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML!=\"X\")){\n\t\tif(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn===0){\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML=\"O\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=1;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}else{\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML=\"X\";\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=0;\n\t\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t\t}}\n\t}\n\t});\n}\n\n\n\n//# sourceURL=webpack:///./scripts/cell.js?");

/***/ }),

/***/ "./scripts/global.js":
/*!***************************!*\
  !*** ./scripts/global.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass global {\n\tconstructor () {\n\t\tthis.turn=0;\n\t\tthis.gameOver = false;\n\t\tthis.body = document.querySelector('body');\n\t\tthis.cell = document.querySelectorAll('.cell');\n\t\tthis.messageDisplay = document.querySelector('#message');\n\t\tthis.board = document.querySelector('.board');\n\t\tthis.resetButton = document.querySelector('#reset');\n\t\tthis.resetDisplay = document.querySelector('#reset span');\n\t\tthis.container = document.querySelector('.container');\n\t\tthis.cirbut = document.querySelector('.circle');\n\t\tthis.crobut = document.querySelector('.cross');\n\t\tthis.cell11 = document.querySelector('.cell11');\n\t\tthis.cell12 = document.querySelector('.cell12');\n\t\tthis.cell13 = document.querySelector('.cell13');\n\t\tthis.cell21 = document.querySelector('.cell21');\n\t\tthis.cell22 = document.querySelector('.cell22');\n\t\tthis.cell23 = document.querySelector('.cell23');\n\t\tthis.cell31 = document.querySelector('.cell31');\n\t\tthis.cell32 = document.querySelector('.cell32');\n\t\tthis.cell33 = document.querySelector('.cell33');\n\t\tthis.cell=document.querySelector('.cell');\n\t\tthis.cirscoredisplay = document.querySelector('.circlescore');\n\t\tthis.croscoredisplay = document.querySelector('.crossscore');\n\t\tthis.cirscore = 0;\n\t\tthis.croscore = 0;\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new global);\n\n\n//# sourceURL=webpack:///./scripts/global.js?");

/***/ }),

/***/ "./scripts/grid.js":
/*!*************************!*\
  !*** ./scripts/grid.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return grid; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./scripts/global.js\");\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ \"./scripts/cell.js\");\n\n\n\nfunction grid () {\n\tObject(_cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell.addEventListener('click', () => {\n\t\tcheckwin();\n\t});\n}\n\nfunction checkwin (){\n\tif(((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell21.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML===\"O\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell12.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell32.innerHTML===\"O\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell23.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML===\"O\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell12.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML===\"O\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell21.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell23.innerHTML===\"O\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell32.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML===\"O\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML===\"O\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML===\"O\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML===\"O\"))){\n\t if(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver)_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cirscore++;\n\t _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver = true;\n\t _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].messageDisplay.innerHTML = \"winner is circle!!\";\n\t _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cirscoredisplay.innerHTML = \":\" + _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cirscore;\n\t console.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver);\n }else if(((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell21.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML===\"X\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell12.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell32.innerHTML===\"X\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell23.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML===\"X\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell12.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML===\"X\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell21.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell23.innerHTML===\"X\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell32.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML===\"X\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML===\"X\"))||\n\t((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML===\"X\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML===\"X\"))){\n\t if(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver)_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].croscore++;\n\t _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver = true;\n\t _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].messageDisplay.innerHTML = \"winner is cross!!\";\n\t if(!_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver)_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].croscore++;\n\t _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].croscoredisplay.innerHTML = \":\" + _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].croscore;\n\t console.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver);\n }else if((_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML!==\"_\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell12.innerHTML!==\"_\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML!==\"_\")&&\n \t(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell21.innerHTML!==\"_\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML!==\"_\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell23.innerHTML!==\"_\")&&\n \t(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML!==\"_\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell32.innerHTML!==\"_\")&&(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML!==\"_\")){\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver = true;\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].messageDisplay.innerHTML = \"draw!!\";\n\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver);\n\t}\n}\n\n//# sourceURL=webpack:///./scripts/grid.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./scripts/global.js\");\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset */ \"./scripts/reset.js\");\n/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner */ \"./scripts/banner.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid */ \"./scripts/grid.js\");\n\n\n\n\n\nwindow.onload = function () {\n\tinit();\n};\n\nfunction init () {\n\tObject(_reset__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\tObject(_banner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\tObject(_grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n}\n\n_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetButton.addEventListener('click', () => {\n\tObject(_reset__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\tObject(_banner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack:///./scripts/main.js?");

/***/ }),

/***/ "./scripts/reset.js":
/*!**************************!*\
  !*** ./scripts/reset.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return reset; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./scripts/global.js\");\n\n\nfunction reset () {\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver = false;\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=0;\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell11.innerHTML=\"_\";\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell13.innerHTML=\"_\";\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell21.innerHTML=\"_\";\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell22.innerHTML=\"_\";\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell23.innerHTML=\"_\";\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell31.innerHTML=\"_\";\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell12.innerHTML=\"_\";\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell32.innerHTML=\"_\";\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell33.innerHTML=\"_\";\n}\n\n\n//# sourceURL=webpack:///./scripts/reset.js?");

/***/ }),

/***/ "./scripts/role.js":
/*!*************************!*\
  !*** ./scripts/role.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return role; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./scripts/global.js\");\n/* harmony import */ var _turn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turn */ \"./scripts/turn.js\");\n\n\n\nfunction role () {\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cirbut.addEventListener('click', () => {\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=0;\n\t\tObject(_turn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t});\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].crobut.addEventListener('click', () => {\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn=1;\n\t\tObject(_turn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t\tconsole.log(_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn);\n\t});\n}\n\n//# sourceURL=webpack:///./scripts/role.js?");

/***/ }),

/***/ "./scripts/turn.js":
/*!*************************!*\
  !*** ./scripts/turn.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return turn; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./scripts/global.js\");\n\n\nfunction turn () {\n\tif (_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn === 0) {\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].messageDisplay.innerHTML = \"turn of circle\";\n\t}else{\n\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].messageDisplay.innerHTML = \"turn of cross\";\n\t}\n\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cell.addEventListener('click', () => {\n\t\tif (_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].turn === 0) {\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].messageDisplay.innerHTML = \"turn of circle\";\n\t\t}else{\n\t\t\t_global__WEBPACK_IMPORTED_MODULE_0__[\"default\"].messageDisplay.innerHTML = \"turn of cross\";\n\t\t}\n\t});\n}\n\n\n//# sourceURL=webpack:///./scripts/turn.js?");

/***/ })

/******/ });