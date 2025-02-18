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
import TodoContainer from "./components/TodoContainer/TodoContainer";

function App() {
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
              <TodoContainer tableName="Todo" />
            </>
          }
        />
        <Route
          path="/new"
          element={
            <>
              <Sidebar />
              <div className="new-todo-page">
                <img src={reactLogo} alt="React Logo" className="logo" />
                <h1>New Todo List</h1>
              </div>
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
