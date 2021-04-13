import React, { useState } from 'react';
import Input from "./Input";
import AddButton from "./AddButton";
import {connect} from "react-redux";
import {addTodo} from "../redux/actionCreators";

let AddTodo = ({dispatch}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleTodoAdd = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
    setInputValue('');
  }

  return (
    <form className="add__cover" onSubmit={handleTodoAdd}>
      <Input handleInputChange={handleInputChange} inputValue={inputValue} />
      <AddButton />
    </form>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
