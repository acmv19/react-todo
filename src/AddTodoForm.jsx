import React from "react";

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
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle"> Title: </label>
      <input
        name="title"
        id="todoTitle"
        type="text"
        required
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button type="submit"> Add </button>
    </form>
  );
}

export default AddTodoForm;
