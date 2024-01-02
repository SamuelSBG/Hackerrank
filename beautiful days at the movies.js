function beautifulDays(i, j, k) {
  let beautifulDaysCount = 0;

  for (i; i <= j; i++) {
    const reverseNumber = Number(i.toString().split("").reverse().join(""));

    if (Math.abs(i - reverseNumber) % k === 0) {
      beautifulDaysCount++;
    }
  }

  return beautifulDaysCount;
}

console.log(beautifulDays(20, 23, 6));
