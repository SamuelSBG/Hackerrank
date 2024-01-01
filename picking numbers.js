function pickingNumbers(a) {
  let longestSubarray = 0;

  for (let index = 0; index < a.length; index++) {
    let max = 0;

    a.forEach((number, i) => {
      const difference = a[index] - number;

      if (difference === 0 || difference === 1) {
        max++;
      }
    });

    if (longestSubarray < max) {
      longestSubarray = max;
    }
  }

  return longestSubarray;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(
  pickingNumbers([
    4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98,
    3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1,
    98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1,
    1, 9, 2, 4,
  ])
);
