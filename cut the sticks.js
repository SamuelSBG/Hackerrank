function cutTheSticks(arr) {
  let iteration = [];

  const getStickNumber = () => {
    return arr.reduce(
      (acumulator, value) => (value !== 0 ? (acumulator += 1) : acumulator),
      0
    );
  };

  while (getStickNumber() > 0) {
    const minValue = arr.reduce((acumulator, value) => {
      if (value < acumulator && value !== 0) return (acumulator = value);
      return acumulator;
    }, Math.max(...arr));

    iteration.push(getStickNumber());

    arr = arr.map((value) => {
      if (value >= minValue) {
        return value - minValue;
      }
      return value;
    });
  }

  return iteration;
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
