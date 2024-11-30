import { useState } from "react";

function Counter({ children }) {
 
  const [count, setCount] = useState(0);
  console.log(children);
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {

          setCount(function (prevCount) {
            return prevCount + 1;
          });
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increase count
      </button>
      {
        children
      }
    </div>
  );
}

export default Counter;
