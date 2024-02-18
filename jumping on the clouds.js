function jumpingOnClouds(c) {
  let i = 0;
  let jumps = 0;

  while (i < c.length - 1) {
    jumps += 1;

    if (c[i + 2] === 0) {
      i += 2;
      continue;
    }

    i += 1;
  }

  return jumps;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
