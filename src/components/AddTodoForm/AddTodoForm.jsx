import { React, useState, useContext } from "react";
import FormBackground from "../FormBackground/FormBackground";
import "./AddTodoForm.css";
import { AppContext } from "../../store/AppContext";
function AddTodoForm() {
  const { background, todo, setTodo, message } = useContext(AppContext);
  return (
    <>
      <input
        value={todo.title || ""}
        onChange={(e) => setTodo({ title: e.target.value })}
        className={`form--input ${message.error ? "error" : null}`}
        contentEditable="true"
        style={{
          background,
          border: message.error ? "1px solid #f8a3a8" : null,
        }}
      ></input>
      <FormBackground />
    </>
  );
}

AddTodoForm.propTypes = {};

export default AddTodoForm;
