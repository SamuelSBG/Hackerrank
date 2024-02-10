function libraryFine(d1, m1, y1, d2, m2, y2) {
  const isAfter = {
    year: y2 < y1,
    month: m2 < m1 && y1 === y2,
    day: d2 < d1 && m1 === m2 && y1 === y2,
  };

  if (isAfter.year) return 10000;
  else if (isAfter.month) return (m1 - m2) * 500;
  else if (isAfter.day) return (d1 - d2) * 15;

  return 0;
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
console.log(libraryFine(2, 7, 1014, 1, 1, 1015));
