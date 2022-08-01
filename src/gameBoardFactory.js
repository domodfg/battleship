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

  const placeShip = (length, coordinate) => {
    const ship = shipFactory(length);
    gameBoard[coordinate].X = 'yes'
  };
  return { gameBoard };
};

export { gameBoardFactory };
