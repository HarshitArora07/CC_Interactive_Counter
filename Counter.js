// src/components/Counter.js
import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  // Initialize the state for count
  const [count, setCount] = useState(0);

  // Handler functions for increment, decrement, and reset
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2>Current Count: {count}</h2>
      {/* Render the Button components with appropriate props */}
      <Button label="Increment" onClick={increment} />
      <Button label="Decrement" onClick={decrement} />
      <Button label="Reset" onClick={reset} />
    </div>
  );
};

export default Counter;
