import { gameData } from "./gamedata";
import { gameBoardMaker } from "./gameboardmaker";
import generalFuncModule from "general-functions-wolfxela";
import { boardMaker } from "./boardmaker";

function getCoordsFrom(number)
{
    const board = boardMaker.makeBoard()
    return[board[number][0],board[number][2]]
 
}
const domHandler = (function(){

    const content = document.querySelector('.content')
    const playerBoard = content.querySelector('.playerBoard')
    const enemyBoard = content.querySelector('.enemyBoard')

    const makeBoards = function()
    {
        for (let i = 0; i < 64; i++) {
            makeSpot(playerBoard,true,)
            makeSpot(enemyBoard,false)
        }
    }

    const makeSpot = function(board,isPlayer)
    {
        const spot = generalFuncModule.insertElement('div','spot','',board)
        
        if(isPlayer !== true)
        {
            spot.addEventListener('click',function(){
                const index = Array.from(spot.parentNode.children).indexOf(spot)
                const result = gameManager.fireAt(index)

                if(result === "hit")
                {
                    spot.classList.add('destroyed')
                    
                }
                else if(result !== "already placed here")
                {
                    spot.classList.add('atacked')
                }
                if(result !== 'win' && result !== "already placed here" && gameManager.player.ships.length <= 0 )
                {
                    while(true)
                    {
                        const isValid =  gameManager.getFiredAt(Math.floor(Math.random() * 63))
                        if(isValid=== 'hit'|| isValid === true) 
                        {
                            break
                        }
                    }

                }
                

            })
        }
        else
        {
            spot.addEventListener('click',function(){
                const number = Array.from(spot.parentNode.children).indexOf(spot)
                const index = getCoordsFrom(number)
                gameManager.player.place(index,number)
            })
        }

    }
    const clearBoards = function()
    {
        generalFuncModule.clearDom(playerBoard,'.spot')
        generalFuncModule.clearDom(enemyBoard,'.spot')
    }
    return {makeBoards,clearBoards}
})();


const gameManager = (function(){
    const captainLog = document.querySelector('.captainLog')
    const player = gameBoardMaker("player")
    const enemy = gameBoardMaker("enemy")
    gameData.randomisePlacement(enemy.ships,enemy.gameBoard)

    const fireAt = function(number)
    {
        if(player.ships.length <= 0)
        {
            const output = enemy.atack(number)
            if(enemy.hasLost() === true)
            {
                console.log(enemy.shipsleft)
                const log = generalFuncModule.insertElement('div','log','we won captain!',captainLog)
                log.classList.add('logActivated')
                return 'win'
            }
            else if(output === false)
            {
                return "already placed here"
            }
            else if(output === "hit")
            {
                const log = generalFuncModule.insertElement('div','log','we got a hit!',captainLog)
                log.classList.add('logActivated')
                return "hit"
            }
        }
        else
        {
            return false
        }
    }
    const getFiredAt = function(number)
    {
        const boardDiv = document.querySelector('.playerBoard')
        const list = boardDiv.querySelectorAll('.spot')

        if(player.ships.length <= 0)
        {
            
            const output = player.atack(number)
            if(player.hasLost() === true)
            {
                list[number].classList.add('destroyed')
                const log = generalFuncModule.insertElement('div','log','we lost captain!',captainLog)
                log.classList.add('logActivated')
                return 'hit'
            }
            if(output ===  true)
            {
                list[number].classList.add('atacked')
                return true
            }
            else if(output === "hit")
            {
                list[number].classList.add('destroyed')
                return "hit"
            }
        }
        else
        {
            return false
        }
    }
    const restart = function()
    {
        
        this.player =gameBoardMaker("player")
        this.enemy = gameBoardMaker("enemy")
        this.enemy.ships = [4,3,3,2,2,1]
        this.player.ships = [4,3,3,2,2,1]
        this.player.atackedSpots = []
        this.enemy.atackedSpots = []
        this.player.shipsleft = 6
        this.enemy.shipsleft = 6
        gameData.randomisePlacement(enemy.ships,enemy.gameBoard)
        generalFuncModule.clearDom(captainLog,'.log')
        domHandler.clearBoards()
        domHandler.makeBoards()
    }
    return{restart,getFiredAt,fireAt,player,enemy}
})();

function startGame()
{
    domHandler.makeBoards()
    const captainLog = document.querySelector('.captainLog')
    const restartBtn = document.querySelector('.reset')
    const againBtn = document.querySelector('.begin')

    captainLog.addEventListener('click',function(){
    const list = captainLog.querySelectorAll('.log')
    captainLog.classList.add("consoleActivated")
    captainLog.classList.remove("deactivated")
    list.forEach(element => {
        element.classList.add('logActivated')
    });

    })

    restartBtn.addEventListener('click',function(){gameManager.restart()})
    againBtn.addEventListener('click',function(){gameManager.restart()})

}

startGame()

