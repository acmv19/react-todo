import { useState } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newTodo, setNewTodo] = React.useState("");
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div>
      <h1> To Do List</h1>
      <br />
      <AddTodoForm onAddTodo={addTodo} />
      <br />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
