import React from "react";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";
import styles from "./AddTodoForm.module.css";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  const handleAddTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };

    onAddTodo(newTodo);
    setTodoTitle("");
  };
  return (
    <form onSubmit={handleAddTodo} className={styles.fom}>
      <div className={styles.inputWrapper}>
        <InputWithLabel
          className={styles.Input}
          id="todoTitle"
          type="text"
          required
          value={todoTitle}
          onChange={handleTitleChange}
        >
          <strong style={{ color: "#2c3e50", padding: "6px" }}>Title:</strong>
        </InputWithLabel>
        <button type="submit" className={styles.addButton}>
          {" "}
          Add{" "}
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
