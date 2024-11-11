import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function AddTodoForm() {
  return (
    <form>
      <label htmlFor="todoTitle"> Title: </label>
      <input id="todoTitle" type="text" />
      <button type="submit"> Add </button>
    </form>
  );
}

export default AddTodoForm;
