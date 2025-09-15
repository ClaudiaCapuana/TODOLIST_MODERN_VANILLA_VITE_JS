import getTodoTemplate from "./template";

export default class Todo {
  constructor(data) {
    this.id = data.id;
    this.content = data.content;
    this.completed = data.completed;
    this.createdAt = data.createdAt;
    this.render();
  }
  render() {
    return getTodoTemplate(this);
  }
}
