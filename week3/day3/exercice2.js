// 1. Retrieve the form and log it
const form = document.getElementById('myForm');
console.log(form);

// 2. Retrieve inputs by id and log them
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log(firstNameInput, lastNameInput);

// 3. Retrieve inputs by name attribute and log them
const inputsByName = document.getElementsByName('firstname');
console.log(inputsByName); // You can do the same for lastname

// 4. Add submit event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  // Check if not empty
  if (firstName === "" || lastName === "") {
    alert("Please fill in both fields.");
    return;
  }

  // Create <li> elements
  const ul = document.querySelector('.usersAnswer');

  const li1 = document.createElement('li');
  li1.textContent = firstName;

  const li2 = document.createElement('li');
  li2.textContent = lastName;

  // Append to ul
  ul.appendChild(li1);
  ul.appendChild(li2);
});