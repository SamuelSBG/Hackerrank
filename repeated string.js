function repeatedString(s, n) {
  let count = 0;

  if (s.length === 1 && s[0] === "a") {
    return s.length * n;
  }

  if (s.length > n) {
    for (let index = 0; index < n; index++) {
      const element = s[index];
      if (element === "a") count += 1;
    }

    return count;
  }

  count = s.split("").filter((value) => value === "a").length;

  const repeatTimes = Math.floor(n / s.length);

  count *= repeatTimes;

  if (repeatTimes !== 0) {
    const repeatAt = n - s.length * repeatTimes;

    for (let index = 0; index < repeatAt; index++) {
      const element = s[index];
      if (element === "a") count += 1;
    }
  }

  return count;
}

console.log(repeatedString("aba", 10));
console.log(repeatedString("aab", 882787)); // 588525
console.log(repeatedString("gfcaaaecbg", 547602)); // 164280
console.log(repeatedString("ababa", 3)); // 2
