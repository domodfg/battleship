import { gameBoardFactory } from "./gameBoardFactory";

const player = (() => {
  const gameBoard = gameBoardFactory();

  const checkExisting = (ship) => {
    if (
      gameBoard.gameBoard.filter((position) => position.occupied === ship)
        .length > 0
    ) {
      return true;
    } else return false;
  };

  let vertical = false;

  let goVertical = () => {
    if (vertical === true) {
      vertical = false;
    } else vertical = true;
  };

  const placeShip = (coordinate) => {
    if (vertical === false) {
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
      }
    } else if (vertical === true) {
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

  const attack = (gameBoard, coordinate) => {
    if (gameBoard.receiveAttack(coordinate) === false) {
      return false;
    } else {
      return true;
    }
  };

  return { gameBoard, placeShip, attack, checkExisting, goVertical };
})();

export { player };
