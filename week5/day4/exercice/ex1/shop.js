const products = require("./products");



 function findProductByName(name) {
    return products.find(product => product.name.toLocaleLowerCase() === name.toLocaleLowerCase());
}

console.log(findProductByName("Laptop")); // { name: "Laptop", price: 999, category: "Electronics" }
console.log(findProductByName("Smartphone")); // { name: "Smartphone", price: 499, category: "Electronics" }
console.log(findProductByName("Tablet")); // { name: "Tablet", price: 299, category: "Electronics" }