import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem("savedTodoList");
    let initialTodoList = [];
    if (savedTodoList) {
      try {
        initialTodoList = JSON.parse(savedTodoList);
      } catch (error) {
        console.error("error parsing todo list from localStorage:", error);
        initialTodoList = [];
      }
    }
    return initialTodoList;
  });

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [newTodo, setNewTodo] = React.useState("");
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    <>
      <h1> To Do List</h1>
      <br />
      <AddTodoForm onAddTodo={addTodo} />
      <br />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
