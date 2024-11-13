import React from "react";

const todoList = [
  { id: 1, title: "complete assignment" },
  { id: 2, title: "grocery shoping" },
  { id: 3, title: "payments-rent-utilities" },
];

{
  /* firts component  */
}

function TodoList() {
  return (
    <ul>
      {todoList.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
