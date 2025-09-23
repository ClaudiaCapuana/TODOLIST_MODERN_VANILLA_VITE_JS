import getTemplate from "./template";
import Todo from "../Todo/Todo";
import DB from "../../core/DB";

export default class Todolist {
  constructor(data) {
    this.domElt = document.querySelector(data.elt);
    this.newTodo = null;
    DB.setApiURL(data.apiURL);
    this.todos = [];
    this.loadTodos();
  }
  async loadTodos() {
    // Je mets dans this.todos des objets de type Todo
    const todos = await DB.findAll();
    this.todos = todos.map((todo) => new Todo(todo));
    this.render();
  }
  render() {
    this.domElt.innerHTML = getTemplate(this);
  }

  //Feature Item Left Count -----------------------------------------------------------------------
  getItemsLeftCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }
  renderItemsLeftCount() {
    this.domElt.querySelector('[role="todo-count"] span').innerText =
      this.getItemsLeftCount();
  }

  //Feature ADD --------------------------------------------------------------------------
  async addTodo(input) {
    const todo = await DB.create(input.value);

    this.addItemInTodos(todo);
    this.addItemInDOM();
    this.renderItemsLeftCount();

    input.value = "";
  }
  addItemInTodos(data) {
    this.newTodo = new Todo(data);
    this.todos.push(this.newTodo);
  }
  addItemInDOM() {
    const todoListElt = this.domElt.querySelector('[role="todo-list"]');
    const newLi = document.createElement("div");
    todoListElt.append(newLi);
    newLi.outerHTML = this.newTodo.render();
  }

  //Feature DELETE autonomie----------------------------------------------------------------------
  async deleteOneById(id) {
    // Je supprime de la DB
    await DB.deleteOne(id);

    // Je supprime des todos
    this.deleteItemInTodos(id);
    // Je supprime du DOM
    this.deleteItemInDOM(id);
    // Rerenderer le itemsLeftCount
    this.renderItemsLeftCount();
  }
  deleteItemInTodos(id) {
    const index = this.todos.indexOf((todo) => todo.id === id);
    this.todos.splice(index, 1);
  }
  deleteItemInDOM(id) {
    const liEl = this.domElt.querySelector(`[data-id="${id}"]`);
    liEl.remove();
  }
}
