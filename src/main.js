
const board = (function(){

    const makeBoard = function(size)
    {
        const spot = "Spot"
        const array = []
        for(let i = 0;i<size*size;i++)
        {
            array.push(spot)
        }
        return array

    }

    return{makeBoard}

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