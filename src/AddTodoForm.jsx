import React from "react";

function AddTodoForm(props) {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.currentTarget.title.value; //// Obtener el valor del campo de entrada con el atributo `name="title"
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    event.target.reset();
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle"> Title: </label>
      <input name="title" id="todoTitle" type="text" required />
      <button type="submit"> Add </button>
    </form>
  );
}

export default AddTodoForm;
