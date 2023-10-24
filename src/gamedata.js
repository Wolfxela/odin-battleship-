import { boardMaker } from "./boardmaker";
const gameData = (function () {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const randomisePlacement = function (array, inputBoard) {
    while (array[0] !== undefined) {
      const randomLetterNum = letters[Math.floor(Math.random() * 8)];
      const randomSpaceNum = Math.floor(Math.random() * 9);
      if (
        boardMaker.placeShip(
          inputBoard,
          [randomLetterNum, randomSpaceNum],
          array[0],
        ) === true
      ) {
        array.shift();
      }
    }
  };
  return { randomisePlacement };
})();

export { gameData };
