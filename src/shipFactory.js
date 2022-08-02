const shipFactory = (title, length) => {
  const array = Array(length);
  for (let index = 0; index < array.length; index++) {
    array[index] = { position: index, status: "good" };
  }
  const shipHealth = array;

  const hit = (attackedPosition) => {
    shipHealth[attackedPosition].status = "hit";
  };

  const isSunk = () => {
    const sunkCheck = shipHealth.every((position) => {
      if (position.status == "hit") {
        return true;
      }
    });
    return sunkCheck;
  };
  return { title, shipHealth, hit, isSunk };
};

export { shipFactory };
