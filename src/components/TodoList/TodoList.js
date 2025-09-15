import DB from "../../core/DB";
import Todo from "../Todo/Todo";
import getTodoListTemplate from "./template";

export default class Todolist {
  constructor(data) {
    this.domElet = document.querySelector(data.elt);
    DB.setApiURL(data.apiURL);
    this.todos = [];
    this.loadTodos();
  }
  async loadTodos() {
    const todos = await DB.findAll();
    this.todos = todos.map((todo) => new Todo(todo));
    this.render();
  }
  render() {
    this.domElet.innerHTML = getTodoListTemplate(this);
  }
  getItemLeftCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }
}
