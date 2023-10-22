import { boardMaker } from "./boardmaker";
const gameBoardMaker = function(inputName)
{
    const name = inputName
    let shipsleft = 6;
    const atackedSpots = []
    const ships = [4,3,3,2,2,1]
    const gameBoard = boardMaker.makeBoard()

    const place = function(coords,num)
    {
        const boardDiv = document.querySelector('.playerBoard')
        if(ships.length !== 0)
        {
            if(boardMaker.placeShip(this.gameBoard,coords,ships[0]) === true)
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
    const setShipsLeft = function(input)
    {
        this.shipsleft = input
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
    const hasLost = function()
    {
        if(shipsleft <=0)
        {
            return true
        }
        return false
    }
    return{setShipsLeft,name,atackedSpots,ships,gameBoard,atack,hasLost,place}
}

export{gameBoardMaker}