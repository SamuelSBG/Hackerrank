function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
    const lastElement = a.pop();
    a.unshift(lastElement);
  }

  const newArr = [];
  for (let i = 0; i < queries.length; i++) {
    newArr.push(a[queries[i]]);
  }

  return newArr;
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));
