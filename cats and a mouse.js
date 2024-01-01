function catAndMouse(x, y, z) {
  const r = Math.abs(x - z) - Math.abs(y - z);

  if (r > 0) return "Cat B";
  else if (r < 0) return "Cat A";
  else return "Mouse C";
}

console.log(catAndMouse(1, 2, 3));
