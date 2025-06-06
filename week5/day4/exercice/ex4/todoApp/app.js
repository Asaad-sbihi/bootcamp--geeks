import { TodoList } from './todo.js';

const myTodos = new TodoList();

myTodos.addTask('Apprendre Node.js');
myTodos.addTask('Faire les exercices');
myTodos.addTask('Boire du café');

myTodos.completeTask(1);

console.log('📋 Ma liste de tâches :\n');
console.log(myTodos.listTasks());
