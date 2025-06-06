// todo.js
export class TodoList {
  constructor() {
    this.tasks = [];
}

  addTask(description) {
    this.tasks.push({ description, completed: false });
  }

  completeTask(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
    }
  }

  listTasks() {
    return this.tasks.map((task, i) => {
      return `${i + 1}. ${task.description} - ${task.completed ? ' Fait' : ' À faire'}`;
    }).join('\n');
  }
}
