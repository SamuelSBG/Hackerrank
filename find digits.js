function findDigits(n) {
  const numberArr = n.toString().split("");

  const divisors = numberArr.reduce((acumulator, value) => {
    const number = Number(value);

    if (number !== 0 && n % number === 0) {
      return (acumulator += 1);
    }

    return acumulator;
  }, 0);

  return divisors;
}

console.log(findDigits(1012));
