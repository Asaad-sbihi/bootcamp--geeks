type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return { name, age };
}

const person = createPerson("Bob", 40);
console.log(person); // { name: 'Bob', age: 40 }
