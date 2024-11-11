import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function Search() {
  return (
    <div>
      <label htmlFor="search">SEARCH: </label>
      <input id="search" type="text" />
    </div>
  );
}

function App() {
  return (
    <div>
      <hi> To Do List</hi>
      <br />
      <AddTodoForm />
      <br />
      <Search />
      <br />
      <TodoList />
    </div>
  );
}

export default App;
