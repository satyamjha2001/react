import { useState } from "react";
//in this counterName is props and it is used in useState.
// states are passed as a props to another components and props is use in useState.
function Counter({ counterName }) {
  // use state makes array and changes the value of states array when we use setState.
  // const states = [3, "Satyam Kumar Jha"];
  const [count, setCount] = useState(0);
  const [name, setName] = useState(counterName);
  console.log("rendering");
  
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          // so if we write setCount more than 1 times then also it reflect change 1 time.
          // setCount(count + 1);
          // setCount(count + 1);
          // setCount(count + 1);
          // for solving this if we use the previous state then we have to give callback function.
          setCount(function (prevCount) {
            return prevCount + 1;
          });
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
          setName("Satyam Kumar Jha");
          console.log(count);
        }}
      >
        Increase count
      </button>
    </div>
  );
}

export default Counter;
