import { React, useContext } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import "./TodoForm.css";
import { AppContext } from "../../store/AppContext";

function TodoForm() {
  return (
    <div className="todo--form">
      <h2>Add todos</h2>
      <AddTodoForm />
    </div>
  );
}

TodoForm.propTypes = {};

export default TodoForm;
