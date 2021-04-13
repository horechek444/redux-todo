import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actionCreators";

let Todo = ({ todo, toggleTodo }) => {
  return (
    <li
      className="todo__item"
      onClick={() => toggleTodo(todo.id)}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.content}
    </li>
  );
};
export default connect(
  null,
  { toggleTodo }
)(Todo);
