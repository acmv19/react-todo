import React from "react";
import styles from "./TodoListItem.module.css";

function TodoListItem(props) {
  return (
    <div>
      <li className={styles.ListItem}>
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
