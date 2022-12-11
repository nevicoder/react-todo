import { React, useContext } from "react";
import { AppContext } from "./store/AppContext";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import AddBtn from "./components/AddBtn/AddBtn";
import "./App.css";
function App() {
  const { message } = useContext(AppContext);
  return (
    <div className="app">
      <h1 className="app--title">MY TO-DO LIST</h1>
      {message.error ? (
        <h3 className="app--message">{message.title}</h3>
      ) : (
        <h3 className="app--message"></h3>
      )}
      <div className="app--todo">
        <TodoForm />
        <AddBtn />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
