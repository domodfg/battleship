import { gameBoardFactory } from "./gameBoardFactory";

const player = (() => {
  let active = true;

  const gameBoard = gameBoardFactory();

  const checkExisting = (ship) => {
    if (
      gameBoard.gameBoard.filter((position) => position.occupied === ship)
        .length > 0
    ) {
      return true;
    } else return false;
  };

  const placeShip = (coordinate, direction) => {
    let XorY = direction;
    if (XorY === "horizontal") {
      if (checkExisting(gameBoard.carrier) !== true) {
        gameBoard.placeShip(gameBoard.carrier, coordinate);
      } else if (checkExisting(gameBoard.battleship) !== true) {
        gameBoard.placeShip(gameBoard.battleship, coordinate);
      } else if (checkExisting(gameBoard.destroyer) !== true) {
        gameBoard.placeShip(gameBoard.destroyer, coordinate);
      } else if (checkExisting(gameBoard.submarine) !== true) {
        gameBoard.placeShip(gameBoard.submarine, coordinate);
      } else if (checkExisting(gameBoard.patrolBoat) !== true) {
        gameBoard.placeShip(gameBoard.patrolBoat, coordinate);
      } else return;
    }
    if (XorY === "vertical") {
      if (checkExisting(gameBoard.carrier) !== true) {
        gameBoard.placeShipVertical(gameBoard.carrier, coordinate);
      } else if (checkExisting(gameBoard.battleship) !== true) {
        gameBoard.placeShipVertical(gameBoard.battleship, coordinate);
      } else if (checkExisting(gameBoard.destroyer) !== true) {
        gameBoard.placeShipVertical(gameBoard.destroyer, coordinate);
      } else if (checkExisting(gameBoard.submarine) !== true) {
        gameBoard.placeShipVertical(gameBoard.submarine, coordinate);
      } else if (checkExisting(gameBoard.patrolBoat) !== true) {
        gameBoard.placeShipVertical(gameBoard.patrolBoat, coordinate);
      } else return;
    }
  };

  return { active, gameBoard, placeShip };
})();

export { player };
