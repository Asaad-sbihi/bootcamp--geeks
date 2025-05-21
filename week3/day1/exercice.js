const people = [ "Greg", "mary", "devon", "james" ];
// Write code to remove “Greg” from the people array.
people.shift(0);

// Write code to replace “James” to “Jason”.

people[2]="Jason"

// Write code to add your name to the end of the people array.

people.push("Asaad");

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log("Index of Mary:",people.indexOf("mary"));


// Write code to make a copy of the people array using the slice method.

// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

const newPeople = people.slice(1, 3);
console.log("New people array:", newPeople);



// Write code that gives the index of “Foo”. Why does it return -1 ?

console.log("Index of Foo:", people.indexOf("Foo"));


// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


const last = people[people.length - 1];
console.log("Last person:", last); 

// part2
 
// Using a loop, iterate through the people array and console.log each person.
console.log("All people:");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}


// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (var i =0 ; i<people.length;i++){
    console.log(people[i])
    if(people[i]=="Devon"){
        break
    }
}










// exercice2

const colors = ["blue", "red", "green", "white", "black"];
const suffixes = ["st", "nd", "rd", "th", "th"]; 

for (let i = 0; i < colors.length; i++) {
  let rank = i + 1;
  let suffix = suffixes[i] || "th";
  console.log("My " + rank + suffix + " choice is " + colors[i]);
}




// exercice3

let number = Number(prompt("Please enter a number:"));

while (number < 10) {
  number = Number(prompt("The number is less than 10. Please enter a new number:"));
}

console.log("Thank you! The number is", number);




// exercice4


const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};


// 2
console.log("Number of floors:", building.numberOfFloors);
// 3

console.log("Apartments on 1st floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on 3rd floor:", building.numberOfAptByFloor.thirdFloor);

// 4

const secondTenant = building.nameOfTenants[1]; // Dan
const rooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0]; 
console.log(`Second tenant is ${secondTenant} and he has ${rooms} rooms.`);



// 5

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log("Dan’s rent was updated to:", building.numberOfRoomsAndRent.dan[1]);
} else {
  console.log("No rent update needed.");
}




// Exercice5

// 1

const family = {
  father: "Mohammed",
  mother: "Amina",
  son: "Youssef",
  daughter: "Sara"
};

// 2


for (let key in family) {
  console.log("Key:", key);
}
// 3

for (let key in family) {
  console.log("Value:", family[key]);
}


// Exercice6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

let sentence = "";

for (let key in details) {
  sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim());



// 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = names
  .map(name => name[0])     
  .sort()                   
  .join("");                

console.log(secretName); 

