import "./style.css";
import { player } from "./player.js";
import { computer } from "./computer.js";
import { display } from "./display.js";


computer.randomPlaceShip();

display.render(player.gameBoard, display.player1);
display.prepForBattle()


display.render(computer.gameBoard, display.player2);

display.startGame()  


