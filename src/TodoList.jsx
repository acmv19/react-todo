import React from "react";
import TodoListItem from "./TodoListItem";

/*const todoList = [
  { id: 1, title: "complete assignment" },
  { id: 2, title: "grocery shoping" },
  { id: 3, title: "payments-rent-utilities" },
];*/

{
  /* firts component  */
}

function TodoList({ todoList }) {
  {
    /*todoList= props */
  }
  return (
    <ul>
      {todoList.map((item) => {
        return <TodoListItem key={item.id} todo={item} />;
      })}
    </ul>
  );
}

export default TodoList;
