
const inputElement = document.getElementById("myInput") as HTMLInputElement;

if (inputElement) {
  
  inputElement.value = "Hello from TypeScript!";
  console.log("Input value is:", inputElement.value);
} else {
  console.log("Element not found");
}
