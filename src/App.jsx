import { useState } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newTodo, setNewTodo] = React.useState("");
  return (
    <div>
      <h1> To Do List</h1>
      <br />
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>value of the varable newTodo {newTodo}</p>
      <br />
      <TodoList />
    </div>
  );
}

export default App;
