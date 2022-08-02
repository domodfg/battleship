import "./style.css";
import { shipFactory } from "./shipFactory.js";
import { gameBoardFactory } from "./gameBoardFactory.js";

const gameBoard= gameBoardFactory()
gameBoard.placeShip(gameBoard.battleship, 90)
gameBoard.placeShipVertical(gameBoard.submarine, 69)
gameBoard.receiveAttack(89)

console.log(gameBoard.gameBoard)



