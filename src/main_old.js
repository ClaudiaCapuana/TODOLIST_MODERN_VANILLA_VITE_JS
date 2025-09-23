import "./styles.css";
import TodoList from "./components/TodoList/TodoList";

window.todoList = new TodoList({
  elt: "#app",
  apiURL: "https://6895f2f5039a1a2b2890eae8.mockapi.io",
});
