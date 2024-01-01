function getTotalX(a, b) {
  const upperNumberA = Math.max(...a);
  const lowerNumberB = Math.min(...b);
  const factors = [];

  let x = 1;
  let number = a.reduce((acumulator, value) => (acumulator += value), 0);
  while (number <= lowerNumberB) {
    if (
      a.every((factor) => number % factor === 0) &&
      b.every((factor) => factor % number === 0) &&
      !factors.includes(number)
    )
      factors.push(number);
    number = upperNumberA * x;
    x++;
  }

  console.log(factors);

  return factors.length;
}

// console.log(getTotalX([2, 4], [16, 32, 96]));
// console.log(getTotalX([3, 4], [24, 48]));
console.log(getTotalX([2], [20, 30, 12]));
