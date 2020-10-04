function add(a, b) {
  return a + b;
}

function recursive(a, b) {
  //1. What is the base case?
  // when do we stop
  if (b === 0) { return a; }

  // recursive logic -- call ourselves over and over
  // But slightly different each time

  return recursiveAdd(a + 1, b - 1);
}
console.log(add(2, 5));

console.log(recursiveAdd(2, 5));
