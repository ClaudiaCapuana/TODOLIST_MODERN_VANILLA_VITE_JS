import "./styles.css";
export default function getTodoListTemplate(todolist) {
  return `<h1> Ma Todolist </h1>
    <ul class="todolist">
    ${todolist.todos.map((todo) => todo.render()).join(" ")}
    </ul>`;
}
