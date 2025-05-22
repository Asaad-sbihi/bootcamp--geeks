

const containerDiv = document.getElementById("container");
console.log(containerDiv);


const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";


lists[1].children[1].remove();


for (let ul of lists) {
    ul.children[0].textContent = "Zakaria"; 
}


lists.forEach((ul) => {
    ul.classList.add("student_list");
});


lists[0].classList.add("university", "attendance");


containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";


const danLi = lists[1].querySelector("li:last-child");
danLi.style.display = "none";


const richardLi = lists[0].children[1];
richardLi.style.border = "2px solid black";


document.body.style.fontSize = "18px";

if (containerDiv.style.backgroundColor === "lightblue") {
    const user1 = lists[0].children[0].textContent;
    const user2 = lists[0].children[1].textContent;
    alert(`Hello ${user1} and ${user2}`);
}
