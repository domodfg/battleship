import { player } from "./player";

const display = (() => {
  const mainContainer = document.querySelector(".container");
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("gameBoard");

  const render = (gameBoard) => {
    for (let i = 0; i < gameBoard.length; i++) {
      const square = document.createElement("div");
      square.setAttribute("id", i);
      square.classList.add("square");
      boardContainer.appendChild(square);
    }
    mainContainer.appendChild(boardContainer);
  };

  const renderPlayerShips = (gameBoard) => {
    for (let i = 0; i < gameBoard.gameBoard.length; i++) {
      const occupiedSpot = document.getElementById(i);
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

  const renderHit = (gameBoard) => {
    for (let i = 0; i < gameBoard.length; i++) {
      const targetSquare = document.getElementById(i);
      if (gameBoard[i].attacked === "yes") {
        targetSquare.classList.add("missed");
      } else if (gameBoard[i].status === "hit") {
        targetSquare.classList.add("hit");
      }
    }
  };

  return { render, renderPlayerShips, renderHit };
})();

export { display };
