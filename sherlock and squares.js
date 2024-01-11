function squares(a, b) {
  const lowerSquare = Math.ceil(Math.sqrt(a));
  const upperSquare = Math.floor(Math.sqrt(b));

  return upperSquare - lowerSquare + 1;
}

console.log(squares(3, 9));
console.log(squares(17, 24));
console.log(squares(4, 4));
