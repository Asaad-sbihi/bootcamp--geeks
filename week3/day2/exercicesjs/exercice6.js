const navBarDiv = document.getElementById("navBar");
navBarDiv.setAttribute("id", "socialNetworkNavigation");


const ul = navBarDiv.querySelector("ul");


const newLi = document.createElement("li"); 

const textNode = document.createTextNode("Logout");


newLi.appendChild(textNode);

ul.appendChild(newLi);


const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;


console.log("First link text:", firstLi.textContent);
console.log("Last link text:", lastLi.textContent);