import  persons  from './data.js';

function averageAge(people) {
  const total = people.reduce((sum, person) => sum + person.age, 0);
  return total / people.length;
}

console.log('Âge moyen :', averageAge(persons));