import React from 'react';

const Input = ({ handleInputChange, inputValue }) => {
  return (
    <input
      onChange={handleInputChange}
      value={inputValue}
    />
  );
};

export default Input;
