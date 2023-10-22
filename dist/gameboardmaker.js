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

/***/ "./src/boardmaker.js":
/*!***************************!*\
  !*** ./src/boardmaker.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   boardMaker: () => (/* binding */ boardMaker)\n/* harmony export */ });\n/* harmony import */ var _shipmaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipmaker */ \"./src/shipmaker.js\");\n\nconst boardMaker = (function(){\n\n    const makeBoard = function()\n    {\n        const array = []\n        const letters = [\"a\",\"b\",\"c\",\"d\",\"e\",\"f\",\"g\",\"h\"]\n        letters.forEach(element => {\n            for(let i = 0;i<8;i++){\n                array.push([element,null,i])\n            }\n        });\n        return array\n\n    }\n\n    const findSpot = function(coords,board)\n    {\n        for(let i = 0;i<board.length;)\n        {\n            if(board[i][0] === coords[0])\n            {\n                return i+coords[1]\n            }\n            i+= 8\n        }\n    }\n\n    const placeShip = function(gameboard,coords,shipLength)\n    {\n        if(coords[1] +shipLength > 8 || coords[1] +shipLength < 0)\n        {\n            return false\n        }\n\n        const spot = findSpot(coords,gameboard)\n        const ship = (0,_shipmaker__WEBPACK_IMPORTED_MODULE_0__.shipMaker)(shipLength)\n\n        for(let i = 0; i < shipLength;i++)\n        {\n            if(gameboard[spot+i][1] !== null)\n            {\n                return false\n            }\n        }\n\n        for(let i = 0; i < shipLength;i++)\n        {\n            gameboard[spot+i][1] = ship\n        }\n        return true\n    }\n    return{makeBoard,placeShip}\n\n})();\n\n\n\n//# sourceURL=webpack://odin-battleship-/./src/boardmaker.js?");

/***/ }),

/***/ "./src/gameboardmaker.js":
/*!*******************************!*\
  !*** ./src/gameboardmaker.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoardMaker: () => (/* binding */ gameBoardMaker)\n/* harmony export */ });\n/* harmony import */ var _boardmaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardmaker */ \"./src/boardmaker.js\");\n\nconst gameBoardMaker = function(inputName)\n{\n    const name = inputName\n    let shipsleft = 6;\n    const atackedSpots = []\n    const ships = [4,3,3,2,2,1]\n    const gameBoard = _boardmaker__WEBPACK_IMPORTED_MODULE_0__.boardMaker.makeBoard()\n\n    const place = function(coords,num)\n    {\n        const boardDiv = document.querySelector('.playerBoard')\n        if(ships.length !== 0)\n        {\n            if(_boardmaker__WEBPACK_IMPORTED_MODULE_0__.boardMaker.placeShip(this.gameBoard,coords,ships[0]) === true)\n            {\n                const list = boardDiv.querySelectorAll('.spot')\n                if(num !== undefined)\n                {\n                    for (let n = 0; n < ships[0]; n++) \n                    {\n                        list[num + n].classList.add('hasShip')\n                        \n                    }\n                    console.log(list[num])\n                }\n                ships.shift()\n            }\n        }\n    }\n\n    const atack = function(spot)\n    {\n        for (let i = 0; i < atackedSpots.length; i++) {\n\n            if(spot === atackedSpots[i])\n            {\n                return false\n            }\n        }\n        if(gameBoard[spot][1] == null)\n        {\n            atackedSpots.push(spot)\n            return true\n        }\n\n        atackedSpots.push(spot)\n        if(gameBoard[spot][1].hit() === \"hit\")\n        {\n            return \"hit\"\n        }\n        else\n        {\n            shipsleft -= 1\n            return \"hit\"\n        }\n    }\n    const hasLost = function()\n    {\n        if(shipsleft <=0)\n        {\n            return true\n        }\n        return false\n    }\n    return{name,atackedSpots,ships,gameBoard,atack,hasLost,place}\n}\n\n\n\n//# sourceURL=webpack://odin-battleship-/./src/gameboardmaker.js?");

/***/ }),

/***/ "./src/shipmaker.js":
/*!**************************!*\
  !*** ./src/shipmaker.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shipMaker: () => (/* binding */ shipMaker)\n/* harmony export */ });\n\nconst shipMaker = function(inputLength)\n{\n    const length = inputLength\n    const hits = 0\n    const hasBeenSunk = false\n\n    const hit = function()\n    {\n        this.hits += 1\n        if(this.hits >= length)\n        {\n            this.hasBeenSunk = true\n            return \"sunk\"\n        }\n        return \"hit\"\n    }\n\n    return{length,hits,hit,hasBeenSunk}\n}\n\n\n\n//# sourceURL=webpack://odin-battleship-/./src/shipmaker.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameboardmaker.js");
/******/ 	
/******/ })()
;