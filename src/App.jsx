import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { use } from "react";

function App() {
  const [newTodo, setNewTodo] = React.useState("");

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      const todos = data.records.map((record) => {
        const newTodo = {
          title: record.fields.title,
          id: record.id,
        };
        return newTodo;
      });
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = async (newTodo) => {
    try {
      const airtableData = {
        fields: {
          title: newTodo.title,
        },
      };
      const url = `https://api.airtable.com/v0/${
        import.meta.env.VITE_AIRTABLE_BASE_ID
      }/${import.meta.env.VITE_TABLE_NAME}`;

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
        body: JSON.stringify(airtableData),
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Detalles del error:", errorDetails);
        const message = `Error has occurred: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();

      const addedTodoNew = {
        id: data.id,
        title: data.fields.title,
      };
      setTodoList((prevTodoList) => [...prevTodoList, addedTodoNew]);
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodo = function (id) {
    const newList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(newList);
  };

  return (
    <>
      <h1> To Do List</h1>
      <br />
      <AddTodoForm onAddTodo={addTodo} />
      <br />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <br />
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        </>
      )}
    </>
  );
}

export default App;
