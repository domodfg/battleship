import "./style.css";
import { shipFactory } from "./shipFactory.js";
import { gameBoardFactory } from "./gameBoardFactory.js";
import { player } from "./player.js";

player.placeShip(10, "horizontal");
player.placeShip(20, "horizontal");
player.placeShip(31, "vertical");
player.placeShip(42, "vertical");
player.placeShip(55, "horizontal");

console.log(player.gameBoard.gameBoard);
