import { React, useContext } from "react";
import { AppContext } from "../../store/AppContext";
import "./TodoItem.css";
export default function TodoItem({ todo }) {
  const { handleCheck, handleTodoClick } = useContext(AppContext);
  return (
    <div
      className="todo--item"
      style={{
        backgroundColor: todo.background,
        textDecoration: todo.done ? "line-through" : "",
      }}
    >
      <p onClick={() => handleTodoClick(todo.id)}>{todo.title}</p>
      <input
        className="todo--checkbox"
        type="checkbox"
        id={todo.id}
        onChange={(e) => handleCheck(todo.id)}
      />
    </div>
  );
}
