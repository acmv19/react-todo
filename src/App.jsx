import { useState } from "react";
import reactLogo from "./assets/react.svg";

import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  return (
    <div>
      <hi> To Do List</hi>
      <br />
      <AddTodoForm />
      <br />
      <TodoList />
    </div>
  );
}

export default App;
