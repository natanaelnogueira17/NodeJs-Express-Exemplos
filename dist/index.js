/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_user_userController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/user/userController */ \"./src/modules/user/userController.js\");\n/* harmony import */ var _modules_post_postController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/post/postController */ \"./src/modules/post/postController.js\");\n\r\n\r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0__()\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0__.json())\r\n;\r\n\r\n\r\napp.use('/user', _modules_user_userController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n\r\napp.use('/post', _modules_post_postController__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n\r\n\r\n\r\n\r\napp.listen(3000, ()=> console.log('online http://localhost:3000'))\n\n//# sourceURL=webpack://nodejs-express-exemplos/./src/index.js?");

/***/ }),

/***/ "./src/modules/post/postController.js":
/*!********************************************!*\
  !*** ./src/modules/post/postController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)()\r\n\r\nrouter.post('/',(req, res) => {\r\n  res.send ('CREATE POST/')\r\n})\r\n\r\nrouter.get('/:id?',(req, res) => {\r\n  //duas opções: listar todos ou apenas um\r\n  res.send ('GET POST/')\r\n})\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://nodejs-express-exemplos/./src/modules/post/postController.js?");

/***/ }),

/***/ "./src/modules/user/userController.js":
/*!********************************************!*\
  !*** ./src/modules/user/userController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userService */ \"./src/modules/user/userService.js\");\n\r\n\r\n\r\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)()\r\n\r\nrouter.post('/signup',(req, res) => {\r\n  const answer = (0,_userService__WEBPACK_IMPORTED_MODULE_1__.signup)(req.body)\r\n  res.send (answer)\r\n})\r\n\r\nrouter.post('/login',(req, res) => {\r\n  res.send ('LOGIN/')\r\n})\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://nodejs-express-exemplos/./src/modules/user/userController.js?");

/***/ }),

/***/ "./src/modules/user/userService.js":
/*!*****************************************!*\
  !*** ./src/modules/user/userService.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signup\": () => (/* binding */ signup)\n/* harmony export */ });\nlet users = []\r\n\r\n\r\n\r\nconst getUserbyEmail = (searchEmail)  => users.find((obj)=> obj.email === searchEmail)\r\n\r\nconst signup = (data) =>{\r\n  if(getUserbyEmail(data.email)){\r\n    console.log(\"existe esse email\")\r\n  }else{\r\n    users.push(data)\r\n  }\r\n  \r\n  return true \r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://nodejs-express-exemplos/./src/modules/user/userService.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;