// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ColorComponent from "./colorComponent";
import UseC from "./UseC";
import Hearder from "./Hearder";


// Create a context

// ThemeProvider component

// Component to display and manage count
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        +
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        -
      </button>
    </div>
  );
};

// Component to use theme from context

// Main App component
const App = () => {
  return (
    <>
    <Hearder/>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f4f4f4",
          border: "1px solid #ddd",
          display:"flex",
          justifyContent:"space-between"
        }}
      >
        <h1>Counter</h1>
        <Counter />
        <div 
        style={
          {
            display:"flex",
            flexDirection:"column"
          }
        }
        >
        <h3>Use Context
          <br />==========
        </h3>
        <ColorComponent/>
        </div>
        <div>
        <UseC/>
        </div>
      </div>
      </>
  );
};

export default App;
