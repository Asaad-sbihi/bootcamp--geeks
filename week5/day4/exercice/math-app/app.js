
const _ = require('lodash'); 
const { add, multiply } = require('./math');

const numbers = [2, 4, 6];
const sum = _.sum(numbers);
console.log("Somme avec lodash:", sum);
console.log("Addition (2 + 3):", add(2, 3));
console.log("Multiplication (4 * 5):", multiply(4, 5));
