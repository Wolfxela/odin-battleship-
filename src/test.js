 /* eslint-disable */
import { board,shipMaker } from "./main"

test('make the game board of size 2x2',()=>{

    const gameboard = board.makeBoard(2);
    expect(gameboard).toHaveLength(4)

})
test('make 2 game boards of size 8x8',()=>{

    const playerGameboard = board.makeBoard(8);
    const enemyGameBoard = board.makeBoard(8)
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