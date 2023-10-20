
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

export{shipMaker}