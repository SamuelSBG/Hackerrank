function jumpingOnClouds(c, k) {
  let energy = 100;
  let position = 0;

  while (true) {
    const cloudType = c[(position + k) % c.length];

    if (cloudType === 1) {
      energy -= 3;
    } else {
      energy--;
    }

    position = (position + k) % c.length;

    if (position === 0) {
      break;
    }
  }

  return energy;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));
