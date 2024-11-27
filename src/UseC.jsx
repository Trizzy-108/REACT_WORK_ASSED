// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

const UseC = () => {
  const [inputValue, setInputValue] = useState('');
  const [valuesArray, setValuesArray] = useState([]);

  const handleAddValue = () => {
    if (inputValue.trim() !== '') {
      setValuesArray([...valuesArray, inputValue]);
      setInputValue(''); 
    }
  };

  return (
    <MyContext.Provider value={{ valuesArray, handleAddValue }}>
      <div>
        <h1>Input and Display Values</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button onClick={handleAddValue}>Add </button>
        <ChildComponent />
      </div>
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const { valuesArray } = useContext(MyContext);

  return (
    <div>
      <h2>All Values:</h2>
      <ul>
        {valuesArray.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseC;
