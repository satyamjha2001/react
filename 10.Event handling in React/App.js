import AppleCounter from "./components/AppleCounter";

const App = () => {
  return (
    <div>
      <h1
        onClick={(e) => {
          console.log(e);
        }}
      >
        Hello
      </h1>
      <input type="text" />
      <AppleCounter />
    </div>
  );
};

export default App;
