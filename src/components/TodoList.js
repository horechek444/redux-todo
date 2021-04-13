import React from 'react';
import Todo from "./Todo";
import {connect} from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => {
  return (
    <ul className="todo__list">
      {todos && todos.length
        ? todos.map((todo) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />
        }) : "There are no todos, add them"
      }
    </ul>
  );
}

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
