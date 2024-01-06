function permutationEquation(p) {
  const newArr = [];

  for (let i = 1; i <= p.length; i++) {
    const firstPosition = p.indexOf(i) + 1;
    const secondPosition = p.indexOf(firstPosition) + 1;
    newArr.push(secondPosition);
  }

  return newArr;
}

console.log(permutationEquation([5, 2, 1, 3, 4]));
