 /* eslint-disable */


 // for future self: when you come back to this see how much you understand from tests and try to add rotation to the website!
import { gameBoardMaker } from "./gameboardmaker";
import { boardMaker as board } from "./boardmaker";
import { shipMaker } from "./shipmaker";
test('make 2 game boards of size 8x8',()=>{

    const playerGameboard = board.makeBoard();
    const enemyGameBoard = board.makeBoard()
    expect(playerGameboard).toHaveLength(64)
    expect(enemyGameBoard).toHaveLength(64)

})
test('test if ship can take a hit',()=>{

    const ship = shipMaker(4)
    ship.hit()
    expect(ship.hits).toBe(1)

})
test('test if ship can be sunk',()=>{
    const ship = shipMaker(3)
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.hasBeenSunk).toBe(true)
})
test('test if ship can be sunk when another ship is made with another length',()=>{
    const ship = shipMaker(3)
    const ship2 = shipMaker(30)
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.hasBeenSunk).toBe(true)
})
test('test if ship is placed',()=>{
    const ship = shipMaker(3)
    const playerGameboard = board.makeBoard();
    board.placeShip(playerGameboard,["a",1],3)

    expect(JSON.stringify(playerGameboard[1][1])).toEqual(JSON.stringify(ship))
    expect(JSON.stringify(playerGameboard[2][1])).toEqual(JSON.stringify(ship))
    expect(JSON.stringify(playerGameboard[3][1])).toEqual(JSON.stringify(ship))
})
test('test if ship is denied placement in a bad location',()=>{
    const ship = shipMaker(3)
    const playerGameboard = board.makeBoard();
    expect(board.placeShip(playerGameboard,["a",-6],3)).toBe(false)


})

test('test if ship is accepted placement in a good location',()=>{
    const ship = shipMaker(3)
    const playerGameboard = board.makeBoard();
    expect(board.placeShip(playerGameboard,["a",3],3)).toBe(true)


})
test('test if 2 ships cant be placed together in the same spot',()=>{
    const ship = shipMaker(3)
    const playerGameboard = board.makeBoard();
    expect(board.placeShip(playerGameboard,["a",3],3)).toBe(true)
    expect(board.placeShip(playerGameboard,["a",3],3)).toBe(false)


})
test('test if we can hit a empty spot',()=>{
    const enemyBoard = gameBoardMaker();
    expect(enemyBoard.atack(10)).toBe(true)
})
test('test if we can hit a empty spot twice',()=>{
    const enemyBoard = gameBoardMaker();
    expect(enemyBoard.atack(10)).toBe(true)
    expect(enemyBoard.atack(10)).toBe(false)
})
test('test if we can hit a ship',()=>{
    const enemyBoard = gameBoardMaker();
    enemyBoard.place(["a",1])
    expect(enemyBoard.atack(1)).toBe("hit")
})
test('test if we can hit a ship twice',()=>{
    const enemyBoard = gameBoardMaker();
    enemyBoard.place(["a",1])
    expect(enemyBoard.atack(1)).toBe("hit")
    expect(enemyBoard.atack(1)).toBe(false)
})
test('test if we can sink a ship',()=>{
    const enemyBoard = gameBoardMaker();
    enemyBoard.place(["a",1])
    //first ship is the battleship which has a size of 4
    enemyBoard.atack(1)
    enemyBoard.atack(2)
    enemyBoard.atack(3)
    expect(enemyBoard.atack(4)).toBe("sunk")
} )
// test.only('test if we can sink all ships if 1 ship exists',()=>{
//     const enemyBoard = gameBoardMaker();
//     enemyBoard.place(["a",1])
//     enemyBoard.atack(1)
//     enemyBoard.atack(2)
//     enemyBoard.atack(3)
//     enemyBoard.atack(4)
//     //only works if board ship counter is set to 1
//     expect(enemyBoard.hasLost()).toBe(true)
// })
// test('test if we can sink all ships if 2 ships exists',()=>{
//     const enemyBoard = gameBoardMaker();
//     enemyBoard.place(["a",1])
//     enemyBoard.place(["b",1])
//     enemyBoard.atack(1)
//     enemyBoard.atack(2)
//     enemyBoard.atack(3)
//     enemyBoard.atack(4)
//     enemyBoard.atack(9)
//     enemyBoard.atack(10)
//     enemyBoard.atack(11)
//     enemyBoard.atack(12)
//      //only works if board ship counter is set to 2
//     expect(enemyBoard.hasLost()).toBe(true)
// })


