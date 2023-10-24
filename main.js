/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/general-functions-wolfxela/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/general-functions-wolfxela/index.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("const generalFuncModule = (function () {\n  const doc = document;\n  const insertElement = function (\n    elementType,\n    elementClass,\n    elementContent,\n    elementParrent,\n    elementImgSrc,\n  ) {\n    const element = doc.createElement(elementType);\n    element.className = elementClass;\n    element.textContent = elementContent;\n    if (elementType === \"img\") {\n      element.src = elementImgSrc;\n    }\n    elementParrent.appendChild(element);\n    return element;\n  };\n  const clearDom = function (parrent, inputClass) {\n    const elementArray = parrent.querySelectorAll(inputClass);\n    for (let i = 0; i < elementArray.length; i++) {\n      parrent.removeChild(elementArray[i]);\n    }\n  };\n\n  const addDropDownMenu = function (element, button, menuClass, menuItemClass) {\n    button.addEventListener(\"click\", function () {\n      showElements(element, menuClass, menuItemClass);\n    });\n  };\n  const showElements = function (menu, menuActiveClass, menuActiveItemClass) {\n    const menuList = menu.getElementsByTagName(\"ul\")[0];\n    const menuElements = menuList.getElementsByTagName(\"li\");\n\n    if (menuList.classList.contains(menuActiveClass) === false) {\n      menuList.classList.add(menuActiveClass);\n      for (let i = 0; i < menuElements.length; i++) {\n        menuElements[i].classList.add(menuActiveItemClass);\n      }\n    } else if (menuList.classList.contains(menuActiveClass) === true) {\n      menuList.classList.remove(menuActiveClass);\n      for (let i = 0; i < menuElements.length; i++) {\n        menuElements[i].classList.remove(menuActiveItemClass);\n      }\n    }\n  };\n\n  return { insertElement, clearDom, addDropDownMenu };\n})();\n\nmodule.exports = generalFuncModule;\n\n\n//# sourceURL=webpack://odin-battleship-/./node_modules/general-functions-wolfxela/index.js?");

/***/ }),

/***/ "./src/boardmaker.js":
/*!***************************!*\
  !*** ./src/boardmaker.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   boardMaker: () => (/* binding */ boardMaker)\n/* harmony export */ });\n/* harmony import */ var _shipmaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipmaker */ \"./src/shipmaker.js\");\n\nconst boardMaker = (function(){\n\n    const makeBoard = function()\n    {\n        const array = []\n        const letters = [\"a\",\"b\",\"c\",\"d\",\"e\",\"f\",\"g\",\"h\"]\n        letters.forEach(element => {\n            for(let i = 0;i<8;i++){\n                array.push([element,null,i])\n            }\n        });\n        return array\n\n    }\n\n    const findSpot = function(coords,board)\n    {\n        for(let i = 0;i<board.length;)\n        {\n            if(board[i][0] === coords[0])\n            {\n                return i+coords[1]\n            }\n            i+= 8\n        }\n    }\n\n    const placeShip = function(gameboard,coords,shipLength)\n    {\n        if(coords[1] +shipLength > 8 || coords[1] +shipLength < 0)\n        {\n            return false\n        }\n\n        const spot = findSpot(coords,gameboard)\n        const ship = (0,_shipmaker__WEBPACK_IMPORTED_MODULE_0__.shipMaker)(shipLength)\n\n        for(let i = 0; i < shipLength;i++)\n        {\n            if(gameboard[spot+i][1] !== null)\n            {\n                return false\n            }\n        }\n\n        for(let i = 0; i < shipLength;i++)\n        {\n            gameboard[spot+i][1] = ship\n        }\n        return true\n    }\n    return{makeBoard,placeShip}\n\n})();\n\n\n\n//# sourceURL=webpack://odin-battleship-/./src/boardmaker.js?");

/***/ }),

/***/ "./src/gameboardmaker.js":
/*!*******************************!*\
  !*** ./src/gameboardmaker.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoardMaker: () => (/* binding */ gameBoardMaker)\n/* harmony export */ });\n/* harmony import */ var _boardmaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardmaker */ \"./src/boardmaker.js\");\n/* harmony import */ var _gamedata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamedata */ \"./src/gamedata.js\");\n\n\nconst gameBoardMaker = function(inputName)\n{\n    const name = inputName\n    let shipsleft = 6;\n    let atackedSpots = []\n    let ships = [4,3,3,2,2,1]\n    let gameBoard = _boardmaker__WEBPACK_IMPORTED_MODULE_0__.boardMaker.makeBoard()\n\n    const reset = function()\n    {\n        shipsleft = 6;\n        atackedSpots = []\n        ships = [4,3,3,2,2,1]\n        gameBoard = _boardmaker__WEBPACK_IMPORTED_MODULE_0__.boardMaker.makeBoard()\n    }\n    const randomiseShips = function()\n    {\n        _gamedata__WEBPACK_IMPORTED_MODULE_1__.gameData.randomisePlacement(ships,gameBoard)\n    }\n    const getGameBoard = function()\n    {\n        return gameBoard\n    }\n    const getShipsLength = function()\n    {\n        return ships.length\n    }\n    const getShipsLeft = function()\n    {\n        return shipsleft\n    }\n    const place = function(coords,num)\n    {\n        const boardDiv = document.querySelector('.playerBoard')\n        if(ships.length !== 0)\n        {\n            if(_boardmaker__WEBPACK_IMPORTED_MODULE_0__.boardMaker.placeShip(gameBoard,coords,ships[0]) === true)\n            {\n                const list = boardDiv.querySelectorAll('.spot')\n                if(num !== undefined)\n                {\n                    for (let n = 0; n < ships[0]; n++) \n                    {\n                        list[num + n].classList.add('hasShip')\n                        \n                    }\n                }\n                ships.shift()\n            }\n        }\n    }\n    const atack = function(spot)\n    {\n        for (let i = 0; i < atackedSpots.length; i++) {\n\n            if(spot === atackedSpots[i])\n            {\n                return false\n            }\n        }\n        if(gameBoard[spot][1] == null)\n        {\n            atackedSpots.push(spot)\n            return true\n        }\n\n        atackedSpots.push(spot)\n        if(gameBoard[spot][1].hit() === \"hit\")\n        {\n            return \"hit\"\n        }\n        else\n        {\n            shipsleft -= 1\n            return \"hit\"\n        }\n    }\n    return{shipsleft,name,atackedSpots,ships,gameBoard,atack,place,reset,getShipsLength,getShipsLeft,getGameBoard,randomiseShips}\n}\n\n\n\n//# sourceURL=webpack://odin-battleship-/./src/gameboardmaker.js?");

/***/ }),

/***/ "./src/gamedata.js":
/*!*************************!*\
  !*** ./src/gamedata.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameData: () => (/* binding */ gameData)\n/* harmony export */ });\n/* harmony import */ var _boardmaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardmaker */ \"./src/boardmaker.js\");\n\nconst gameData = (function()\n{\n    const letters = [\"a\",\"b\",\"c\",\"d\",\"e\",\"f\",\"g\",\"h\"]\n    const randomisePlacement = function(array,inputBoard)\n    {\n        while(array[0] !== undefined)\n        {\n            const randomLetterNum = letters[Math.floor(Math.random() * 8)];\n            const randomSpaceNum = Math.floor(Math.random() * 9);\n            if(_boardmaker__WEBPACK_IMPORTED_MODULE_0__.boardMaker.placeShip(inputBoard,[randomLetterNum,randomSpaceNum],array[0]) === true)\n            {\n                array.shift() \n            }\n\n        }\n    }\n    return{randomisePlacement}\n\n\n})();\n\n\n\n//# sourceURL=webpack://odin-battleship-/./src/gamedata.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gamedata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamedata */ \"./src/gamedata.js\");\n/* harmony import */ var _gameboardmaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardmaker */ \"./src/gameboardmaker.js\");\n/* harmony import */ var general_functions_wolfxela__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! general-functions-wolfxela */ \"./node_modules/general-functions-wolfxela/index.js\");\n/* harmony import */ var general_functions_wolfxela__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(general_functions_wolfxela__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _boardmaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boardmaker */ \"./src/boardmaker.js\");\n\n\n\n\n\nfunction getCoordsFrom(number)\n{\n    const board = _boardmaker__WEBPACK_IMPORTED_MODULE_3__.boardMaker.makeBoard()\n    return[board[number][0],board[number][2]]\n \n}\nconst domHandler = (function(){\n\n    const content = document.querySelector('.content')\n    const playerBoard = content.querySelector('.playerBoard')\n    const enemyBoard = content.querySelector('.enemyBoard')\n\n    const makeBoards = function()\n    {\n        for (let i = 0; i < 64; i++) {\n            makeSpot(playerBoard,true,)\n            makeSpot(enemyBoard,false)\n        }\n    }\n\n    const makeSpot = function(board,isPlayer)\n    {\n        const spot = general_functions_wolfxela__WEBPACK_IMPORTED_MODULE_2___default().insertElement('div','spot','',board)\n        \n        if(isPlayer !== true)\n        {\n                spot.addEventListener('click',function(){\n                const index = Array.from(spot.parentNode.children).indexOf(spot)\n                const result = gameManager.fireAt(index)\n                console.log(gameManager.isReady())\n                if(gameManager.isReady() === false) return\n                if(result === \"hit\")\n                {\n                    spot.classList.add('destroyed')\n                    \n                }\n                else if(result !== \"already placed here\" && result !== false)\n                {\n                    spot.classList.add('atacked')\n                }\n                if(result !== 'win' && result !== \"already placed here\")\n                {\n                    while(true)\n                    {\n\n                        const isValid =  gameManager.getFiredAt(Math.floor(Math.random() * 63))\n                        if(isValid=== 'hit'|| isValid === true) \n                        {\n\n                            break\n                        }\n                    }\n\n                }\n                \n\n            })\n        }\n        else\n        {\n            spot.addEventListener('click',function(){\n                const number = Array.from(spot.parentNode.children).indexOf(spot)\n                const index = getCoordsFrom(number)\n                gameManager.player.place(index,number)\n            })\n        }\n\n    }\n    const clearBoards = function()\n    {\n        general_functions_wolfxela__WEBPACK_IMPORTED_MODULE_2___default().clearDom(playerBoard,'.spot')\n        general_functions_wolfxela__WEBPACK_IMPORTED_MODULE_2___default().clearDom(enemyBoard,'.spot')\n    }\n    return {makeBoards,clearBoards}\n})();\n\n\nconst gameManager = (function(){\n    const boardDiv = document.querySelector('.playerBoard')\n    const captainLog = document.querySelector('.captainLog')\n    const player = (0,_gameboardmaker__WEBPACK_IMPORTED_MODULE_1__.gameBoardMaker)(\"player\")\n    const enemy = (0,_gameboardmaker__WEBPACK_IMPORTED_MODULE_1__.gameBoardMaker)(\"enemy\")\n    _gamedata__WEBPACK_IMPORTED_MODULE_0__.gameData.randomisePlacement(enemy.ships,enemy.gameBoard)\n\n    const fireAt = function(number)\n    {\n        if(player.getShipsLength() <= 0)\n        {\n            const output = enemy.atack(number)\n            if(hasLost(enemy) === true)\n            {\n                restart()\n                const log = general_functions_wolfxela__WEBPACK_IMPORTED_MODULE_2___default().insertElement('div','log','we won captain,but another enemy is coming!',captainLog)\n                log.classList.add('logActivated')\n            }\n            else if(output === false)\n            {\n                return \"already placed here\"\n            }\n            else if(output === \"hit\")\n            {\n                const log = general_functions_wolfxela__WEBPACK_IMPORTED_MODULE_2___default().insertElement('div','log','we got a hit!',captainLog)\n                log.classList.add('logActivated')\n                return \"hit\"\n            }\n        }\n        else\n        {\n            return false\n        }\n    }\n    const getFiredAt = function(number)\n    {\n\n        const list = boardDiv.querySelectorAll('.spot')\n        if(player.ships.length <= 0)\n        {\n            \n            const output = player.atack(number)\n            if(hasLost(player) === true)\n            {\n                restart()\n                list[number].classList.add('destroyed')\n                const log = general_functions_wolfxela__WEBPACK_IMPORTED_MODULE_2___default().insertElement('div','log','we lost captain, trya gain!',captainLog)\n                log.classList.add('logActivated')\n            }\n            if(output ===  true)\n            {\n                list[number].classList.add('atacked')\n                return true\n            }\n            else if(output === \"hit\")\n            {\n                list[number].classList.add('destroyed')\n                return \"hit\"\n            }\n        }\n        else\n        {\n            return false\n        }\n    }\n    const hasLost = function(board)\n    {\n        if(board.getShipsLeft() <=0)\n        {\n        return true\n        }\n        return false\n    }\n    const isReady = function()\n    {\n        if(player.getShipsLength() <= 0) return true\n        if(player.getShipsLength() > 0) return false\n    }\n    const restart = function()\n    {\n        \n        player.reset()\n        enemy.reset()\n        enemy.randomiseShips()\n        general_functions_wolfxela__WEBPACK_IMPORTED_MODULE_2___default().clearDom(captainLog,'.log')\n        domHandler.clearBoards()\n        domHandler.makeBoards()\n    }\n    \n    return{restart,isReady,getFiredAt,fireAt,player,enemy}\n})();\n\nfunction startGame()\n{\n    const restartBtn = document.querySelector('.reset')\n    const againBtn = document.querySelector('.begin')\n    restartBtn.addEventListener('click',function(){gameManager.restart()})\n    againBtn.addEventListener('click',function(){gameManager.restart()})\n    domHandler.makeBoards()\n    const captainLog = document.querySelector('.captainLog')\n\n    captainLog.addEventListener('click',function(){\n    const list = captainLog.querySelectorAll('.log')\n    captainLog.classList.add(\"consoleActivated\")\n    captainLog.classList.remove(\"deactivated\")\n    list.forEach(element => {\n        element.classList.add('logActivated')\n    });\n\n    })\n\n}\n\nstartGame()\n\n\n\n//# sourceURL=webpack://odin-battleship-/./src/main.js?");

/***/ }),

/***/ "./src/shipmaker.js":
/*!**************************!*\
  !*** ./src/shipmaker.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;