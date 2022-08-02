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
  const submarine = shipFactory("submarine", 3);
  const patrolBoat = shipFactory("patrolBoat", 2);

  const placeShip = (ship, coordinate) => {
    const placedPosition = gameBoard.slice(
      coordinate,
      coordinate + ship.length
    );

    const horizontalCheck = () => {
      const result = placedPosition.every((position) => {
        if (position.Y === placedPosition[0].Y) return true;
      });
      return result;
    };

    const boardLimitCheck = () => {
      if (placedPosition.length === ship.length) return true;
    };

    const overlapCheck = () => {
      const result = placedPosition.every((position) => {
        if (position.occupied === "no") return true;
      });
      return result;
    };

    if (
      horizontalCheck() === true &&
      boardLimitCheck() === true &&
      overlapCheck() === true
    ) {
      ship.shipHealth.forEach((position) => (position.occupied = ship));
      gameBoard.splice(coordinate, ship.length, ...ship.shipHealth);
    } else {
      console.log("invalid position");
    }
  };

  const placeShipVertical = (ship, coordinate) => {
    const array = Array(ship.length);
    let index = coordinate;
    for (let i = 0; i < array.length; i++) {
      array[i] = gameBoard[index];
      index += 10;
    }
    const placedPosition = array;

    const boardLimitCheck = () => {
      const result = placedPosition.every((position) => {
        if (position === undefined) return false;
        else return true;
      });
      return result;
    };

    const overlapCheck = () => {
      const result = placedPosition.every((position) => {
        if (position.occupied === "no") return true;
      });
      return result;
    };

    if (boardLimitCheck() === true && overlapCheck() === true) {
      ship.shipHealth.forEach((position) => (position.occupied = ship));
      for (let i = 0; i < ship.shipHealth.length; i++) {
        if (coordinate <= 99) {
          gameBoard[coordinate] = ship.shipHealth[i];
          coordinate += 10;
        }
      }
    } else {
      console.log("invalid position");
    }
  };

  const receiveAttack = (coordinate) => {
    if (gameBoard[coordinate].occupied !== "no") {
      const shipDamagedPosition = gameBoard[coordinate].position;
      const shipDamaged = gameBoard[coordinate].occupied;
      shipDamaged.hit(shipDamagedPosition);
    }
    if (gameBoard[coordinate].occupied === "no") {
      gameBoard[coordinate].attacked = "yes";
    }
  };

  const gameOverCheck = () => {
    if (
      carrier.isSunk() === true &&
      battleship.isSunk() === true &&
      destroyer.isSunk() === true &&
      submarine.isSunk() === true &&
      patrolBoat.isSunk() === true
    )
      return true;
      else return false
  };

  return {
    gameBoard,
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolBoat,
    placeShip,
    placeShipVertical,
    receiveAttack,
    gameOverCheck
  };
};

export { gameBoardFactory };
