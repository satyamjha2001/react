import AppleCounter from "./components/AppleCounter";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      {false?<Counter ></Counter>: <AppleCounter />}
    </div>
  );
};

export default App;
