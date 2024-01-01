function countingValleys(steps, path) {
  let seaLevel = 0;
  let valleys = 0;

  for (let i = 0; i < path.length; i++) {
    const element = path[i];
    element === "D" ? seaLevel-- : seaLevel++;

    if (seaLevel === 0 && element === "U") {
      valleys++;
    }
  }

  return valleys;
}

console.log(countingValleys(8, "UDDDUDUU"));
