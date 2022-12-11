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
        className={`form--input ${message.error === "input" ? "error" : null}`}
        contentEditable="true"
        style={{
          background,
        }}
      ></input>
      <FormBackground />
    </>
  );
}

AddTodoForm.propTypes = {};

export default AddTodoForm;
