import React from 'react';
import './App.css';
import AddTodo from "./components/AddTodo";
import VisibilityFilters from "./components/VisibilityFilters";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default App;
