import "./style.css";
import { shipFactory } from "./shipFactory.js";
import { gameBoardFactory } from "./gameBoardFactory.js";

const gameBoard= gameBoardFactory()
gameBoard.placeShip(gameBoard.battleship, 85)

console.log(gameBoard.gameBoard)



