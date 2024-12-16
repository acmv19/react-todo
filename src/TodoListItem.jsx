import React from "react";

function TodoListItem(props) {
  return (
    <div>
      <li>
        {props.todo.title} &nbsp; &nbsp;
        <button type="button" onClick={() => props.onRemoveTodo(props.todo.id)}>
          {" "}
          Remove{" "}
        </button>
      </li>
    </div>
  );
}

export default TodoListItem;
