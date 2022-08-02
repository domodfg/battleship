import "./style.css";
import { shipFactory } from "./shipFactory.js";
import { gameBoardFactory } from "./gameBoardFactory.js";

const gameBoard= gameBoardFactory()
gameBoard.placeShip(gameBoard.carrier, 5, 15)

console.log(gameBoard.gameBoard)



