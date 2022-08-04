import "./style.css";
import { shipFactory } from "./shipFactory.js";
import { gameBoardFactory } from "./gameBoardFactory.js";
import { player } from "./player.js";
import { computer } from "./computer.js";
import { display } from "./display.js";

player.placeShip(10, "horizontal");
player.placeShip(20, "horizontal");
player.placeShip(31, "vertical");
player.placeShip(42, "vertical");
player.placeShip(55, "horizontal");

computer.randomPlaceShip();


player.gameBoard.receiveAttack(9);
    



computer.randomAttack(player.gameBoard);

display.render(player.gameBoard.gameBoard)
display.renderPlayerShips(player.gameBoard)
display.renderHit(player.gameBoard.gameBoard)



console.log(player.gameBoard.gameBoard)