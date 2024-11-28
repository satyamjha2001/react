import { useState } from "react";

function Counter() {
  // const myStateArray = useState(0);
  // const count = myStateArray[0];
  // const setCount = myStateArray[1];

  const [count, setCount] = useState(0);
  console.log("rendering");
  
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Increase count
      </button>
    </div>
  );
}

export default Counter;
