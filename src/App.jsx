import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const todoList = [
  { objectId: 1, title: "complete assigment" },
  { objectId: 2, title: "gocery shoping" },
  { objectId: 3, title: "payments-rent-utilities" },
];

{
  /* firts component  */
}

function ToDoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return <li key={item.objectId}>{item.title}</li>;
      })}
    </ul>
  );
}

function App() {
  return (
    <di>
      <hi> To Do List</hi>
      <br />

      <label htmlFor="search"> search: </label>
      <input id="search" type="text" />
      <br />

      <ToDoList />
    </di>
  );
}

export default App;
