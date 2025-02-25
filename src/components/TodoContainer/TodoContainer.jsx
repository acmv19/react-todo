import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoList from "../TodoList/TodoList";
import SortControl from "../SortButton/SortButton";

const TodoContainer = ({ tableName }) => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("title");

  const toggleSortOrder = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
  };

  const toggleSortBy = () => {
    setSortBy((prev) => {
      const newSortBy = prev === "title" ? "createdTime" : "title";
      console.log("Sorting by:", newSortBy);
      return newSortBy;
    });
  };

  useEffect(() => {
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

        console.log("API Response:", data.records);

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
    fetchData();
  }, [tableName, sortOrder, sortBy]);

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
    <div>
      <h1>{tableName} List</h1>
      <SortControl
        sortOrder={sortOrder}
        toggleSortOrder={toggleSortOrder}
        sortBy={sortBy}
        toggleSortBy={toggleSortBy}
      />
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p className="loadingTex">Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
};

TodoContainer.propTypes = {
  tableName: PropTypes.string.isRequired,
};

export default TodoContainer;
