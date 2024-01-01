function sockMerchant(n, ar) {
  const myMap = new Map();
  let pairOfSocks = 0;

  ar.forEach((element) => {
    if (myMap.has(element)) {
      pairOfSocks++;
      myMap.delete(element);
    } else {
      myMap.set(element, 1);
    }
  });

  console.log(pairOfSocks);
  return pairOfSocks;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
