import { useState } from "react";
import styles from './Counter.module.css'
console.log(styles);


function Counter({ children }) {
 
  const [count, setCount] = useState(0);
  console.log(children);
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={styles['text-xl']}>{count}</h1>
      <button
        className={[styles.button, styles['text-xl']].join(' ')}
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
