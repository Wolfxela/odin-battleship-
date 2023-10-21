import { boardMaker } from "./boardmaker";
import { gameBoardMaker } from "./gameboardmaker";

const gameData = (function()
{
    const letters = ["a","b","c","d","e","f","g","h"]
    const randomisePlacement = function(array,inputBoard)
    {
        while(array[0] !== undefined)
        {
            const randomLetterNum = letters[Math.floor(Math.random() * 8)];
            const randomSpaceNum = Math.floor(Math.random() * 9);
            if(boardMaker.placeShip(inputBoard,[randomLetterNum,randomSpaceNum],array[0]) === true)
            {
                array.shift() 
            }

        }
    }
    return{randomisePlacement}


})();


const gameManager = (function(){
    const player = gameBoardMaker()
    const enemy = gameBoardMaker()
    gameData.randomisePlacement(enemy.ships,enemy.gameBoard)

    let turn = null;

    const start = function()
    {
        turn = enemy
    }

    const fireAt = function(number)
    {
        const output = turn.atack(number)
        if(output === false)
        {
            return "already placed here"
        }
        else if(output === "hit")
        {
            if(turn.hasLost() === true)
            {
                return turn.name
            }
            if(turn === enemy)
            {
                const randomNumber = Math.floor(Math.random() * 63);
                turn = player
                fireAt(randomNumber)
            }
            else if(turn === player)
            {
                turn = enemy

            }
            return "hit!"
            
        }
        else
        {
            if(turn === enemy)
            {
                const randomNumber = Math.floor(Math.random() * 63);
                turn = player
                fireAt(randomNumber)
            }
            else if(turn === player)
            {
                turn = enemy
            }
        }
        
    }
    return{start,fireAt,player}
})();

// for testing

// gameManager.player.place(["a",1])
// gameManager.player.place(["b",1])
// gameManager.player.place(["c",1])
// gameManager.player.place(["d",1])
// gameManager.player.place(["e",1])
// gameManager.player.place(["f",1])
// gameManager.start()
// console.log("player")
// gameManager.place(1)
// console.log("player")
// gameManager.place(2)
// console.log("player")
// gameManager.place(3)
// console.log("player")
// gameManager.place(4)
// console.log("player")
// gameManager.place(5)
// console.log(gameManager.player.atackedSpots)
// console.log(gameManager.player.gameBoard)

