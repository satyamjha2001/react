import AppleCounter from "./components/AppleCounter";

const App = ({root}) => {
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
      <AppleCounter root={root}/>
    </div>
  );
};

export default App;
