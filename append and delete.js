function appendAndDelete(s, t, k) {
  const firstWord = s.split("");
  const secondWord = t.split("");

  const size = s.length > t.length ? t.length : s.length;
  let equalsLetters = 0;

  for (let i = 0; i < size; i++) {
    if (firstWord[i] !== secondWord[i]) {
      break;
    }
    equalsLetters++;
  }

  firstWord.splice(0, equalsLetters);
  secondWord.splice(0, equalsLetters);

  if (
    s.length < t.length &&
    s.length + t.length > k &&
    (k - (firstWord.length + secondWord.length)) % 2 !== 0
  ) {
    return "No";
  }

  return firstWord.length + secondWord.length <= k ? "Yes" : "No";
}

console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
console.log(appendAndDelete("ashley", "ash", 2));
