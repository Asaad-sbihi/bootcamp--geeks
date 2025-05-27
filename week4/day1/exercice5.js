// 1. Function Declaration
function convertKgToGrams(weightInKg) {
    return weightInKg * 1000;
}
console.log(convertKgToGrams(5)); // ➤ 5000

// 2. Function Expression
const convertToGrams = function(weightInKg) {
    return weightInKg * 1000;
};
console.log(convertToGrams(3.5)); // ➤ 3500

// Difference: Function declarations are hoisted (can be called before they're defined),
// while function expressions are not hoisted.

//  3. One-line Arrow Function                                                              
const toGrams = kg => kg * 1000;
console.log(toGrams(2)); // ➤ 2000
