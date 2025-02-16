import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import TodoList from "./components/TodoList/TodoList";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import { use } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SortControl from "./components/SortButton/SortButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [newTodo, setNewTodo] = React.useState("");

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("title");

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
    }/${
      import.meta.env.VITE_TABLE_NAME
    }?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();

      data.records.sort((objectA, objectB) => {
        const titleA = objectA.fields.title.toLowerCase();
        const titleB = objectB.fields.title.toLowerCase();
        if (titleA < titleB) {
          if (sortOrder === "asc") {
            return -1;
          } else {
            return 1;
          }
        }
        if (titleA > titleB) {
          if (sortOrder === "asc") {
            return 1;
          } else {
            return -1;
          }
        }
        return 0;
      });

      const todos = data.records.map((record) => {
        const newTodo = {
          title: record.fields.title,
          id: record.id,
          createdTime: record.fields.createdTime || new Date().toISOString(),
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
  }, [sortOrder, sortBy]);

  const toggleSortOrder = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
  };

  const toggleSortBy = () => {
    if (sortBy === "title") {
      setSortBy("createdTime");
    } else {
      setSortBy("title");
    }
  };

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

  const removeTodo = async function (id) {
    try {
      const url = `https://api.airtable.com/v0/${
        import.meta.env.VITE_AIRTABLE_BASE_ID
      }/${import.meta.env.VITE_TABLE_NAME}/${id}`;

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const newList = todoList.filter((item) => {
        return item.id !== id;
      });
      setTodoList(newList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
            </div>
          }
        />
        <Route
          path="/todo"
          element={
            <>
              <Sidebar />
              <h1> To Do List</h1>
              <br />
              <SortControl
                sortOrder={sortOrder}
                toggleSortOrder={toggleSortOrder}
                sortBy={sortBy}
                toggleSortBy={toggleSortBy}
              />
              <br />
              <AddTodoForm onAddTodo={addTodo} />
              <br />
              {isLoading ? (
                <p className="loadingTex">Loading...</p>
              ) : (
                <>
                  <br />
                  <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                </>
              )}
            </>
          }
        />
        <Route
          path="/new"
          element={
            <>
              <Sidebar />
              <h1>New Todo List</h1>
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
