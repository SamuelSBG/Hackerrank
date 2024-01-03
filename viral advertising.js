function viralAdvertising(n) {
  let sharedPeople = 5;
  let likedPeople = 0;
  let cumulativeLikes = 0;

  for (let i = 1; i <= n; i++) {
    likedPeople = Math.floor(sharedPeople / 2);
    sharedPeople = likedPeople * 3;
    cumulativeLikes += likedPeople;
  }

  return cumulativeLikes;
}

console.log(viralAdvertising(3));
console.log(viralAdvertising(5));
console.log(viralAdvertising(50));
