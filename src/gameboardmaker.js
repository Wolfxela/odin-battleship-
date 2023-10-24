import { boardMaker } from "./boardmaker";
import { gameData } from "./gamedata";
const gameBoardMaker = function(inputName)
{
    const name = inputName
    let shipsleft = 6;
    let atackedSpots = []
    let ships = [4,3,3,2,2,1]
    let gameBoard = boardMaker.makeBoard()

    const reset = function()
    {
        shipsleft = 6;
        atackedSpots = []
        ships = [4,3,3,2,2,1]
        gameBoard = boardMaker.makeBoard()
    }
    const randomiseShips = function()
    {
        gameData.randomisePlacement(ships,gameBoard)
    }
    const getGameBoard = function()
    {
        return gameBoard
    }
    const getShipsLength = function()
    {
        return ships.length
    }
    const getShipsLeft = function()
    {
        return shipsleft
    }
    const place = function(coords,num)
    {
        const boardDiv = document.querySelector('.playerBoard')
        if(ships.length !== 0)
        {
            if(boardMaker.placeShip(gameBoard,coords,ships[0]) === true)
            {
                const list = boardDiv.querySelectorAll('.spot')
                if(num !== undefined)
                {
                    for (let n = 0; n < ships[0]; n++) 
                    {
                        list[num + n].classList.add('hasShip')
                        
                    }
                }
                ships.shift()
            }
        }
    }
    const atack = function(spot)
    {
        for (let i = 0; i < atackedSpots.length; i++) {

            if(spot === atackedSpots[i])
            {
                return false
            }
        }
        if(gameBoard[spot][1] == null)
        {
            atackedSpots.push(spot)
            return true
        }

        atackedSpots.push(spot)
        if(gameBoard[spot][1].hit() === "hit")
        {
            return "hit"
        }
        else
        {
            shipsleft -= 1
            return "hit"
        }
    }
    return{shipsleft,name,atackedSpots,ships,gameBoard,atack,place,reset,getShipsLength,getShipsLeft,getGameBoard,randomiseShips}
}

export{gameBoardMaker}