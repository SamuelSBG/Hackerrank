function utopianTree(n) {
  let treeHeight = 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      treeHeight *= 2;
    } else {
      treeHeight++;
    }
  }

  return treeHeight;
}

console.log(utopianTree(4));
