import React, { useState } from 'react';
import './Counter.css'; // You'll style here

const Counter = () => {
  const [count, setCount] = useState(0); // Initial value

  const increase = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>Click Counter App</h1>
      <div className="counter-value">{count}</div>
      <div className="button-group">
        <button className="btn increase" onClick={increase}>Increase</button>
        <button className="btn decrease" onClick={decrease}>Decrease</button>
      </div>
      {count === 20 && <p className="limit-message">🎉 You've reached the limit!</p>}
    </div>
  );
};

export default Counter;
