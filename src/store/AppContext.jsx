import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AppContext = createContext();

function AppProvider({ children }) {
  const [todo, setTodo] = useState({});
  const [checkedTodos, setCheckedTodos] = useState([]);
  const [todoList, setTodoList] = useState(() => {
    const todosLocal = JSON.parse(localStorage.getItem("todolist"));
    const todoList = todosLocal || [];
    return todoList;
  });
  const [backgrounds, setBackgrounds] = useState([
    { id: "#ffffff", selected: true },
    { id: "#bfb2f3", selected: false },
    { id: "#96caf7", selected: false },
    { id: "#9cdcaa", selected: false },
    { id: "#e5e1ab", selected: false },
    { id: "#f3c6a5", selected: false },
    { id: "#f8a3a8", selected: false },
  ]);
  const [background, setBackground] = useState("#ffffff");
  const [message, setMessage] = useState({ error: false, title: "" });
  const createTodo = () => {
    if (!todo.title) {
      setMessage({ error: true, title: "Please type something" });
    } else {
      setMessage({ error: false, title: "" });

      const newTodo = {
        id: uuidv4(),
        title: todo.title,
        background,
        done: false,
        checked: false,
      };
      const newTodoList = [newTodo, ...todoList];
      setTodoList(newTodoList);
      localStorage.setItem("todolist", JSON.stringify(newTodoList));
      setTodo({ title: "" });
    }
  };
  const deleteTodos = () => {
    const newTodoList = [...todoList].filter((todo) => {
      if (!checkedTodos.includes(todo.id)) return todo;
    });
    localStorage.setItem("todolist", JSON.stringify(newTodoList));
    setTodoList(newTodoList);
  };
  const handleBackgroundClick = (color) => {
    setBackground(color);
    const newBackgrounds = backgrounds.map((bg) => {
      if (bg.id === color) bg.selected = true;
      else bg.selected = false;
      return bg;
    });
    setBackgrounds(newBackgrounds);
  };
  const handleCheck = (id) => {
    let newCheckedTodos = [...checkedTodos];
    if (!newCheckedTodos.includes(id)) newCheckedTodos.push(id);
    else {
      newCheckedTodos.splice(newCheckedTodos.indexOf(id), 1);
    }
    setCheckedTodos(newCheckedTodos);
  };
  const handleTodoClick = (id) => {
    const newTodoList = [...todoList];
    newTodoList.forEach((todo) => {
      if (todo.id === id) todo.done = !todo.done;
    });
    setTodoList(newTodoList);
    localStorage.setItem("todolist", JSON.stringify(newTodoList));
  };
  const value = {
    todo,
    setTodo,
    createTodo,
    deleteTodos,
    todoList,
    backgrounds,
    setBackgrounds,
    background,
    setBackground,
    handleBackgroundClick,
    message,
    handleCheck,
    handleTodoClick,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
