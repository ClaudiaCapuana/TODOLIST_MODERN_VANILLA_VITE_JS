// class DB {
//   static setApiURL(data) {
//     this.apiURL = data;
//   }
//   static async findAll() {
//     const response = await fetch(this.apiURL + "/todos");
//     return response.json();
//   }
// }

// class Todolist {
//   constructor(data) {
//     this.domEl = document.querySelector(data.domEl);
//     DB.setApiURL(data.apiURL);
//     this.todos = [];
//     this.loadTodo();
//   }
//   async loadTodo() {
//     const todos = await DB.findAll();
//     this.todos = todos.map((todo) => new Todo(todo));
//     this.render();
//   }
//   render() {
//     this.domEl.innerHTML = getTodolistTemplate(this);
//   }
// }

// function getTodolistTemplate(todolist) {
//   return `<h1> My Todolist </h1>
//   <ul> ${todolist.todos.map((todo) => todo.render()).join(" ")}  </ul>`;
// }
// new Todolist({
//   domEl: "#app",
//   apiURL: "https://6895f2f5039a1a2b2890eae8.mockapi.io",
// });

// class Todo {
//   constructor(data) {
//     this.id = data.id;
//     this.content = data.content;
//     this.completed = data.completed;
//     this.createdAt = data.createdAt;
//     this.render();
//   }
//   render() {
//     return getTodoTemplate(this);
//   }
// }

// function getTodoTemplate(todo) {
//   return `<li> ${todo.content} </li>`;
// }
