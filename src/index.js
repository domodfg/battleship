import "./style.css";
import { shipFactory } from "./shipFactory.js";
import { gameBoardFactory } from "./gameBoardFactory.js";

const gameBoard= gameBoardFactory()
gameBoard.placeShip(gameBoard.battleship, 90)
gameBoard.placeShip(gameBoard.carrier, 14)
gameBoard.placeShipVertical(gameBoard.destroyer, 25)
gameBoard.placeShipVertical(gameBoard.submarine, 69)
gameBoard.placeShipVertical(gameBoard.patrolBoat, 31)
gameBoard.receiveAttack(21)


console.log(gameBoard.gameBoard)



