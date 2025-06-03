//  Function that checks if all values are truthy
function allTruthy(...values) {
  return values.every(value => Boolean(value));
}

//  Test cases
console.log(allTruthy(true, true, true));       // true
console.log(allTruthy(true, false, true));      // false
console.log(allTruthy(5, 4, 3, 2, 1, 0));        // false
console.log(allTruthy("hello", 1, [], {}));     // true
console.log(allTruthy("", 1));                  // false
