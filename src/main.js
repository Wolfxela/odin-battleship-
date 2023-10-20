
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
            if(gameboard[spot+i][1] !== null)
            {
                return false
            }
        }

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
            return "sunk"
        }
        return "hit"
    }

    return{length,hits,hit,hasBeenSunk}
}
const gameBoardMaker = function()
{
    let shipsleft = 1;
    const atackedSpots = []
    const ships = [4,3,3,2,2,1]
    const gameBoard = board.makeBoard()
    board.placeShip(gameBoard,["a",1],ships[0])

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
    return{gameBoard,atack,hasLost}
}
const gameData = (function()
{
    const letters = ["a","b","c","d","e","f","g","h"]
    const randomisePlacement = function(array,inputBoard)
    {
        while(array[0] !== undefined)
        {
            const randomLetterNum = letters[Math.floor(Math.random() * 8)];
            const randomSpaceNum = Math.floor(Math.random() * 9);
            console.log(randomSpaceNum)
            if(board.placeShip(inputBoard,[randomLetterNum,randomSpaceNum],array[0]) === true)
            {
                board.placeShip(inputBoard,[randomLetterNum,randomSpaceNum],array[0])
                array.shift() 
            }

        }
    }
    return{randomisePlacement}


})();

export{board,shipMaker,gameBoardMaker}