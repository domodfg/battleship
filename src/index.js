import "./style.css";
import { shipFactory } from "./shipFactory.js";
import { gameBoardFactory } from "./gameBoardFactory.js";
import { player } from "./player.js";
import { computer } from "./computer.js";

player.placeShip(10, "horizontal");
player.placeShip(20, "horizontal");
player.placeShip(31, "vertical");
player.placeShip(42, "vertical");
player.placeShip(55, "horizontal");

computer.randomPlaceShip()
console.log(computer.gameBoard.gameBoard)
