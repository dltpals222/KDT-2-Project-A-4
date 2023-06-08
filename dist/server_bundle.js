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

/***/ "./develop/server/appServer.ts":
/*!*************************************!*\
  !*** ./develop/server/appServer.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar app = (0, express_1.default)();\n// 사용할 정적 파일 폴더 경로 설정. 현재 develop으로 설정되어 있는것으로 보임.\napp.use(express_1.default.static(path_1.default.join(__dirname, \"..\", \"..\", \"dist\"), {\n    // 각 파일 타입별 헤더 설정. js시 헤더 컨텐츠 타입을 JS로.\n    setHeaders: function (res, filePath) {\n        if (filePath.endsWith(\".js\")) {\n            res.setHeader(\"Content-Type\", \"application/javascript\");\n        }\n    },\n}));\n// 기본 도메인주소 요청 수신시 시작 Html 파일 전송.(HTML안에 번들 파일 연결 예정)\napp.get(\"/\", function (req, res) {\n    res.sendFile(path_1.default.join(__dirname, \"..\", \"..\", \"dist\", \"index.html\"));\n});\n// 서버 실행\napp.listen(3000, function () {\n    console.log(\"Server is running on port 3000\");\n});\n\n\n//# sourceURL=webpack://KDT-2-Project-A-4/./develop/server/appServer.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./develop/server/appServer.ts");
/******/ 	
/******/ })()
;