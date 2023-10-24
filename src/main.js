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
                console.log(gameManager.isReady())
                if(gameManager.isReady() === false) return
                if(result === "hit")
                {
                    spot.classList.add('destroyed')
                    
                }
                else if(result !== "already placed here" && result !== false)
                {
                    spot.classList.add('atacked')
                }
                if(result !== 'win' && result !== "already placed here")
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
    const boardDiv = document.querySelector('.playerBoard')
    const captainLog = document.querySelector('.captainLog')
    const player = gameBoardMaker("player")
    const enemy = gameBoardMaker("enemy")
    gameData.randomisePlacement(enemy.ships,enemy.gameBoard)

    const fireAt = function(number)
    {
        if(player.getShipsLength() <= 0)
        {
            const output = enemy.atack(number)
            if(hasLost(enemy) === true)
            {
                restart()
                const log = generalFuncModule.insertElement('div','log','we won captain,but another enemy is coming!',captainLog)
                log.classList.add('logActivated')
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

        const list = boardDiv.querySelectorAll('.spot')
        if(player.ships.length <= 0)
        {
            
            const output = player.atack(number)
            if(hasLost(player) === true)
            {
                restart()
                list[number].classList.add('destroyed')
                const log = generalFuncModule.insertElement('div','log','we lost captain, trya gain!',captainLog)
                log.classList.add('logActivated')
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
    const hasLost = function(board)
    {
        if(board.getShipsLeft() <=0)
        {
        return true
        }
        return false
    }
    const isReady = function()
    {
        if(player.getShipsLength() <= 0) return true
        if(player.getShipsLength() > 0) return false
    }
    const restart = function()
    {
        
        player.reset()
        enemy.reset()
        enemy.randomiseShips()
        generalFuncModule.clearDom(captainLog,'.log')
        domHandler.clearBoards()
        domHandler.makeBoards()
    }
    
    return{restart,isReady,getFiredAt,fireAt,player,enemy}
})();

function startGame()
{
    const restartBtn = document.querySelector('.reset')
    const againBtn = document.querySelector('.begin')
    restartBtn.addEventListener('click',function(){gameManager.restart()})
    againBtn.addEventListener('click',function(){gameManager.restart()})
    domHandler.makeBoards()
    const captainLog = document.querySelector('.captainLog')

    captainLog.addEventListener('click',function(){
    const list = captainLog.querySelectorAll('.log')
    captainLog.classList.add("consoleActivated")
    captainLog.classList.remove("deactivated")
    list.forEach(element => {
        element.classList.add('logActivated')
    });

    })

}

startGame()

