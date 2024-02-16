function nonDivisibleSubset(k, s) {
  let mods = Array.from({ length: k }, () => 0);

  for (let index = 0; index < s.length; index++) {
    mods[s[index] % k] += 1;
  }

  let count = Math.min(mods[0], 1);

  if (k % 2 === 0) {
    count += Math.min(mods[Math.floor(k / 2)], 1);
  }

  for (let index = 1; index < Math.floor(k / 2) + 1; index++) {
    if (index !== k - index) {
      count += Math.max(mods[index], mods[k - index]);
    }
  }

  return count;
}

//console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
console.log(
  nonDivisibleSubset(
    7,
    [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]
  )
);
console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
