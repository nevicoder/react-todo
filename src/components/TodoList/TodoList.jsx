import { React, useContext } from "react";
import { AppContext } from "../../store/AppContext";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList() {
  const { todoList } = useContext(AppContext);

  return (
    <div className="todos">
      <h2>Todos list</h2>
      {todoList.length > 0 ? (
        <ul className="todo--list">
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p className="message">Congrat! You've finished all the tasks</p>
      )}
    </div>
  );
}

export default TodoList;
