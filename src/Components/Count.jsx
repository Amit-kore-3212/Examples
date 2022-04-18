import React, { useEffect, useState } from "react";
//useState

export const Count = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("amit");
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    console.log("clicked");
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrment = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleReverse = () => {
    setShowName((x) => !x);
  };
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrment}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <h3>name : {showName ? name.split("").reverse().join("") : name}</h3>
      <button onClick={handleReverse}>
        {showName ? "reverse" : "reversed"}
      </button>
    </div>
  );
};

//login signup
//react virtual dom concept
//virtual document object module
//state changes it will re-render the component
