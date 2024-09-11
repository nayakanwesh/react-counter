import React from 'react';
import './App.css';  

function ChildComponent({ count, increment, decrement,reset }) {
  return (
    <div className="card">
      <h1>Child Component</h1>
      <p className="count">Count: <span id="ct">{count}</span></p>
      <div className="button-conntainer">
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={decrement}>Decrement</button>
        <button className="button" id="btn" onClick={reset}>Reset</button>
        </div>
    </div>
  );
}

export default ChildComponent;




