 /* eslint-disable */
import { board,shipMaker } from "./main"
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

