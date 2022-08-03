import { gameBoardFactory } from "./gameBoardFactory";

const computer = (() => {
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

  const randomNumber = (max) => {
    const number = Math.floor(Math.random() * max);
    return number;
  };

  const placeShip = (coordinate, direction) => {
    let XorY = direction;
    if (XorY === 0) {
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
      } else return false;
    }
    if (XorY === 1) {
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
      } else return false;
    }
  };

  const randomPlaceShip = () => {
    while (checkExisting(gameBoard.patrolBoat) === false) {
      placeShip(randomNumber(100), randomNumber(2));
    }
  };

  const attack = (gameBoard, coordinate) => {
    gameBoard.receiveAttack(coordinate);
  };

  const randomAttack = (gameBoard) => {
   gameBoard.receiveAttack(randomNumber(100)); 
  };

  return {
    active,
    gameBoard,
    randomNumber,
    randomPlaceShip,
    randomAttack,
    attack,
  };
})();

export { computer };
