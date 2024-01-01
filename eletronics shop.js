function getMoneySpent(keyboards, drives, b) {
  let maxValue = 0;

  keyboards.forEach((keyboard) => {
    drives.forEach((drive) => {
      let price = keyboard + drive;

      if (price > maxValue && price <= b) maxValue = price;
    });
  });

  return maxValue !== 0 ? maxValue : -1;
}

console.log(getMoneySpent([3, 1], [5, 2, 6], 10));
