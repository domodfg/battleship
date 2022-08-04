import { display } from "./display";
import { player } from "./player";
import { computer } from "./computer";
import { gameBoardFactory } from "./gameBoardFactory";

const gameLoop = (() => {
  const render = () => {
    display.render(player.gameBoard, display.player1);
    display.render(computer.gameBoard, display.player2);
  };

  const reset = document.querySelector(".reset");

  const play = () => {
    render();
    display.prepForBattle();
    computer.randomPlaceShip();
    display.startGame();
    reset.addEventListener("click", () => {
        display.message.textContent = 'Place your ships on the left board'
      computer.gameBoard.reset();
      player.gameBoard.reset();
      display.setReady();

      display.removeClass(computer.gameBoard, display.player2);
      display.removeClass(player.gameBoard, display.player1);

      computer.randomPlaceShip();
    });
  };

  return { play };
})();

export { gameLoop };
