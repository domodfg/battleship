const shipFactory = (length) => {
  const array = Array(length);
  for (let index = 0; index < array.length; index++) {
    array[index] = { status: "good" };
  }
  const ship = array;

  const hit = (attackedPosition) => {
    ship[attackedPosition].status = "hit";
  };

  const isSunk = () => {
    const sunkCheck = ship.every((position) => {
      if (position.status == "hit") {
        return true;
      }
    });
    return sunkCheck;
  };
  return { ship, hit, isSunk };
};

export { shipFactory };
