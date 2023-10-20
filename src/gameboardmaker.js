import { boardMaker } from "./boardmaker";
const gameBoardMaker = function()
{
    let shipsleft = 6;
    const atackedSpots = []
    const ships = [4,3,3,2,2,1]
    const gameBoard = boardMaker.makeBoard()

    const place = function(coords)
    {
        if(ships.length !== 0)
        {
            if(boardMaker.placeShip(this.gameBoard,coords,ships[0]) === true)
            {
                // test to see if it works without this bottom line
                boardMaker.placeShip(gameBoard,coords,ships[0])
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
            return "sunk"
        }
    }
    const hasLost = function()
    {
        if(shipsleft <=0)
        {
            return true
        }
        return false
    }
    return{atackedSpots,ships,gameBoard,atack,hasLost,place}
}

export{gameBoardMaker}