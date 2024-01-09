function extraLongFactorials(n) {
  let factorial = BigInt(1);

  for (let i = BigInt(n); i >= 1; i--) {
    factorial *= i;
  }

  return factorial.toString();
}

console.log(extraLongFactorials(25));
