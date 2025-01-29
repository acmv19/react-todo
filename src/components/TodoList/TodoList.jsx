import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import styles from "./TodoList.module.css";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul className={styles.todoList}>
      {todoList.map((item) => {
        return (
          <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
        );
      })}
    </ul>
  );
}

export default TodoList;
