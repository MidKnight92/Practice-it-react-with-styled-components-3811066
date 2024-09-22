import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={handleClick}>Increment</button> 
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;