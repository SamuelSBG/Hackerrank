function saveThePrisoner(n, m, s) {
  let chairNumber = (m % n) + s - 1;

  if (chairNumber > n) {
    chairNumber = Math.abs(chairNumber - n);
  } else if (chairNumber === 0) {
    return n;
  }

  return chairNumber;
}

console.log(saveThePrisoner(5, 2, 1)); // 2
console.log(saveThePrisoner(5, 2, 2)); // 3
console.log(saveThePrisoner(7, 19, 2)); // 6
console.log(saveThePrisoner(3, 7, 3)); // 3
console.log(saveThePrisoner(352926151, 380324688, 94730870)); // 122129406
