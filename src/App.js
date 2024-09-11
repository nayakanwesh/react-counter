import React, { useState } from 'react';
import './App.css';  
import ChildComponent from './ChildComponent';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div id="container">
    
      <div className="app-container">
      <div className="card">
        <h1>Parent Component</h1>
        <p className="count">Count: <span id="ct">{count}</span></p>
        <div className="button-conntainer">
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={decrement}>Decrement</button>
        <button className="button" id="btn" onClick={reset}>Reset</button>
        </div>
      </div>

      <ChildComponent count={count} increment={increment} decrement={decrement} reset={reset} />
    </div>
    </div>
  );
}

export default App;







// import React, { useState } from 'react';
// import ChildComponent from './ChildComponent';

// function App() {
//   // State to manage the count
//   const [count, setCount] = useState(0);

//   // Function to increment the count
//   const increment = () => {
//     setCount(count + 1);
//   };

//   // Function to decrement the count
//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Parent Component</h1>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
      
//       {/* Pass the count and functions as props to the child */}
//       <ChildComponent count={count} increment={increment} decrement={decrement} />
//     </div>
//   );
// }

// export default App;
