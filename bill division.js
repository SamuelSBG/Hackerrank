function bonAppetit(bill, k, b) {
  bill.splice(k, 1);

  const priceBill = bill.reduce(
    (acumulator, value) => (acumulator += value),
    0
  );

  const refund = b - priceBill / 2;

  refund === 0 ? console.log("Bon Appetit") : console.log(refund);
}

bonAppetit([3, 10, 2, 9], 1, 12);
bonAppetit([3, 10, 2, 9], 1, 7);
