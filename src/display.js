import { player } from "./player";
import { computer } from "./computer";

const display = (() => {
  const mainContainer = document.querySelector(".container");

  const player1 = document.createElement("div");
  player1.classList.add("gameBoard");

  const player2 = document.createElement("div");
  player2.classList.add("gameBoard2");

  const render = (gameBoard, target) => {
    for (let i = 0; i < gameBoard.gameBoard.length; i++) {
      const square = document.createElement("div");
      square.setAttribute("data", i);
      square.classList.add("square");
      target.appendChild(square);
    }
    mainContainer.appendChild(target);
  };

  const renderPlayerShips = (gameBoard, target) => {
    for (let i = 0; i < gameBoard.gameBoard.length; i++) {
      const occupiedSpot = target.querySelector(`[data="${i}"]`);
      if (gameBoard.gameBoard[i].occupied === gameBoard.carrier) {
        occupiedSpot.classList.add("carrier");
      }
      if (gameBoard.gameBoard[i].occupied === gameBoard.battleship) {
        occupiedSpot.classList.add("battleship");
      }
      if (gameBoard.gameBoard[i].occupied === gameBoard.destroyer) {
        occupiedSpot.classList.add("destroyer");
      }
      if (gameBoard.gameBoard[i].occupied === gameBoard.submarine) {
        occupiedSpot.classList.add("submarine");
      }
      if (gameBoard.gameBoard[i].occupied === gameBoard.patrolBoat) {
        occupiedSpot.classList.add("patrolBoat");
      }
    }
  };

  const renderHit = (gameBoard, target) => {
    for (let i = 0; i < gameBoard.gameBoard.length; i++) {
      const targetSquare = target.querySelector(`[data="${i}"]`);
      if (gameBoard.gameBoard[i].attacked === "yes") {
        targetSquare.classList.add("missed");
      } else if (gameBoard.gameBoard[i].status === "hit") {
        targetSquare.classList.add("hit");
      }
    }
  };

  const startGame = () => {
    const square = player2.querySelectorAll(".square");
    square.forEach((spot) => {
      const index = parseInt(spot.getAttribute("data"));
      spot.addEventListener("click", () => {
        if (
          player.gameBoard.gameOverCheck() !== true &&
          computer.gameBoard.gameOverCheck() !== true
        ) {
          if (player.attack(computer.gameBoard, index) !== false) {
            renderHit(computer.gameBoard, player2);
            computer.randomAttack(player.gameBoard);
            renderHit(player.gameBoard, player1);
            if (
              player.gameBoard.gameOverCheck() === true &&
              computer.gameBoard.gameOverCheck() !== true
            ) {
              console.log("Draw");
            }
            if (player.gameBoard.gameOverCheck() === true) {
              console.log("you lose");
            } else if (computer.gameBoard.gameOverCheck() === true) {
              console.log("you win");
            }
          }
        }
      });
    });
  };

  const prepForBattle = () => {
    const square = player1.querySelectorAll(".square");

    const rotate = document.querySelector(".rotate");
    let vertical = false;
    rotate.addEventListener("click", () => {
      player.goVertical();
      if (vertical === false) {
        vertical = true;
      } else vertical = false;
      console.log(vertical);
    });

    square.forEach((spot) => {
      const index = parseInt(spot.getAttribute("data"));
      spot.addEventListener("click", () => {
        player.placeShip(index);
        renderPlayerShips(player.gameBoard, player1);
      });

      spot.addEventListener("mouseenter", () => {
        if (vertical === false) {
          if (player.checkExisting(player.gameBoard.carrier) !== true) {
            spot.classList.add("previewCarrier");
          } else if (
            player.checkExisting(player.gameBoard.battleship) !== true
          ) {
            spot.classList.add("previewBattleship");
          } else if (
            player.checkExisting(player.gameBoard.destroyer) !== true
          ) {
            spot.classList.add("previewDestroyer");
          } else if (
            player.checkExisting(player.gameBoard.submarine) !== true
          ) {
            spot.classList.add("previewSubmarine");
          } else if (
            player.checkExisting(player.gameBoard.patrolBoat) !== true
          ) {
            spot.classList.add("previewpatrolBoat");
          }
        } else if (vertical === true) {
          if (player.checkExisting(player.gameBoard.carrier) !== true) {
            spot.classList.add("previewCarrierV");
          } else if (
            player.checkExisting(player.gameBoard.battleship) !== true
          ) {
            spot.classList.add("previewBattleshipV");
          } else if (
            player.checkExisting(player.gameBoard.destroyer) !== true
          ) {
            spot.classList.add("previewDestroyerV");
          } else if (
            player.checkExisting(player.gameBoard.submarine) !== true
          ) {
            spot.classList.add("previewSubmarineV");
          } else if (
            player.checkExisting(player.gameBoard.patrolBoat) !== true
          ) {
            spot.classList.add("previewpatrolBoatV");
          }
        }
      });
      spot.addEventListener("mouseleave", () => {
        spot.classList.remove("previewCarrier");
        spot.classList.remove("previewBattleship");
        spot.classList.remove("previewDestroyer");
        spot.classList.remove("previewSubmarine");
        spot.classList.remove("previewpatrolBoat");
        spot.classList.remove("previewCarrierV");
        spot.classList.remove("previewBattleshipV");
        spot.classList.remove("previewDestroyerV");
        spot.classList.remove("previewSubmarineV");
        spot.classList.remove("previewpatrolBoatV");
      });
    });
  };

  return {
    render,
    renderPlayerShips,
    renderHit,
    player1,
    player2,
    startGame,
    prepForBattle,
  };
})();

export { display };
