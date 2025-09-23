import "./styles.css";
import TodoList from "./components/TodoList/TodoList";

window.todoList = new TodoList({
  elt: "#app",
  apiURL: "https://6942aaef69b12460f3124d89.mockapi.io/",
});
