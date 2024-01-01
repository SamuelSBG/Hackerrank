function formingMagicSquare(s) {
  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let r = Number.MAX_VALUE;

  for (let index = 0; index < magicSquares.length; index++) {
    let minTotalCost = 0;

    for (let column = 0; column < s.length; column++) {
      for (let line = 0; line < s.length; line++) {
        minTotalCost += Math.abs(
          magicSquares[index][column][line] - s[column][line]
        );
      }
    }

    r = Math.min(r, minTotalCost);
  }

  return r;
}

console.log(
  formingMagicSquare([
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 5],
  ])
);
