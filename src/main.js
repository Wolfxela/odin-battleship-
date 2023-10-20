
const board = (function(){

    const makeBoard = function()
    {
        const array = []
        const letters = ["a","b","c","d","e","f","g","h"]
        letters.forEach(element => {
            for(let i = 0;i<8;i++){
                array.push([element,null])
            }
        });
        return array

    }

    const findSpot = function(coords,board)
    {
        for(let i = 0;i<board.length;)
        {
            if(board[i][0] === coords[0])
            {
                return i+coords[1]
            }
            i+= 8
        }
    }

    const placeShip = function(gameboard,coords,shipLength)
    {
        if(coords[1] +shipLength > 8 || coords[1] +shipLength < 0)
        {
            return false
        }
        const spot = findSpot(coords,gameboard)
        const ship = shipMaker(shipLength)
        for(let i = 0; i < shipLength;i++)
        {
            gameboard[spot+i][1] = ship
        }
        return true
    }
    return{makeBoard,placeShip}

})();

const shipMaker = function(inputLength)
{
    const length = inputLength
    const hits = 0
    const hasBeenSunk = false

    const hit = function()
    {
        this.hits += 1
        if(this.hits >= length)
        {
            this.hasBeenSunk = true
        }
    }

    return{length,hits,hit,hasBeenSunk}
}
export{board,shipMaker}