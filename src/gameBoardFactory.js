import { shipFactory } from "./shipFactory.js";

const gameBoardFactory = () => {
  const array = Array(100);
  for (let i = 0; i < array.length; i++) {
    let Xcoordinate = i;
    let Ycoordinate = i;
    const round = Math.floor(i / 10);
    if (i > 9) {
      Xcoordinate = i - 10 * round;
    }
    if (i > 0) {
      Ycoordinate = round;
    }

    array[i] = {
      occupied: "no",
      attacked: "no",
      X: Xcoordinate,
      Y: Ycoordinate,
    };
  }
  const gameBoard = array;

  const carrier = shipFactory("carrier", 5);
  const battleship = shipFactory("battleship", 4);
  const destroyer = shipFactory("destroyer", 3);
  const submarine = shipFactory("sybmarine", 3);
  const patrolBoat = shipFactory("patrolBoat", 2);

  const placeShip = (title, length, coordinate) => {
    title.shipHealth.forEach((position) => (position.occupied = title));
    gameBoard.splice(coordinate, length, ...title.shipHealth);
  };

  const receiveAttack = (coordinate) => {
    const shipDamagedPosition = gameBoard[coordinate].position;
    const shipDamaged = gameBoard[coordinate].occupied;
    shipDamaged.hit(shipDamagedPosition);
  };

  return {
    gameBoard,
    placeShip,
    receiveAttack,
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolBoat,
  };
};

export { gameBoardFactory };
