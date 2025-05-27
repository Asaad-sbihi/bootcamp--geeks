// Part1

function makeJuice(size) {
  function addIngredients(ing1, ing2, ing3) {
    const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, and ${ing3}.`;
    document.getElementById("juice-order").innerText = sentence;
  }

  addIngredients("apple", "banana", "kiwi");
}

makeJuice("large");

// Parrt2
function makeJuice(size) {
  const ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
    document.getElementById("juice-order").innerText = sentence;
  }

  addIngredients("apple", "banana", "kiwi");
  addIngredients("mango", "pineapple", "orange");
  displayJuice();
}

makeJuice("medium");
