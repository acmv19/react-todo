import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { use } from "react";

function App() {
  const [newTodo, setNewTodo] = React.useState("");

  /* const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem("savedTodoList");
    let initialTodoList = [];
    if (savedTodoList) {
      try {
        initialTodoList = JSON.parse(savedTodoList);
      } catch (error) {
        console.error("error parsing todo list from localStorage:", error);
        initialTodoList = [];
      }
    }
    return initialTodoList;
  });*/
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const savedTodoList = localStorage.getItem("savedTodoList");

        if (savedTodoList) {
          try {
            const data = JSON.parse(savedTodoList);
            resolve({ data: { todoList: data } });
          } catch (error) {
            reject(new Error("error  parsing data localStorage"));
          }
        } else {
          reject(new Error("No todoList found in localStorage"));
        }
      }, 2000);
    })
      .then((result) => {
        setTodoList(result.data.todoList);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
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
