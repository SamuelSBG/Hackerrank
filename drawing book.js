function pageCount(n, p) {
  const isStartAtTheBeginning = n / 2 >= p;
  const pageNumber = Math.floor(n / 2);

  if (p === 1 || p === n) {
    return 0;
  }

  if (isStartAtTheBeginning) {
    for (let i = 1; i <= pageNumber; i += 2) {
      if (i + 1 === p || i + 2 === p) return Math.ceil(i / 2);
    }
  }

  const startPage = n % 2 === 0 ? n - 1 : n;

  for (let i = startPage; i >= pageNumber; i -= 2) {
    if (i === p || i - 1 === p) {
      return Math.ceil((n - i) / 2);
    }
  }
}

console.log(pageCount(37455, 29835)); // 3810
console.log(pageCount(5, 4));
console.log(pageCount(7, 4));
console.log(pageCount(95073, 17440));
console.log(pageCount(6, 2));
console.log(pageCount(5, 4));
console.log(pageCount(6, 5));
