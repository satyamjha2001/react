import { useRef, useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const myRef = useRef(0);
  console.log(myRef);
  // hum useRef ka use tab karte hai jab humko variable update karna hai lekin page reload nhi karna ho.
  //means useState ke time jab hum setState karenge to page reload hota hai lekin isme nahi hoga.
  let myNum = 0;
  function handleSubmit(e) {
    e.preventDefault();
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  }

  return (
    <>
      <button
        onClick={() => {
          myRef.current++;
          console.log(myRef); //console isliye karana para kyunki rerender nahi to change nahi.
          myNum++;
          console.log(myNum); //ab value iski kabhi change hoke display pe nahi dikhega
          //basic diff ye hai ki jab hum useRef wale ko use karenge or value change karenge tab wo change screen par nahi dikhega lekin agar hum kisi aise element ko change karenge jisse rerender ho jaise ki useState to value change hoga jaise hum isme form me value type karenge to value change hoga.
        }}
      >
        Click Me
      </button>
      <h1> myRef = {myRef.current}, myNum = {myNum} </h1>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={expense.title}
            onChange={(e) => {
              setExpense((prevState) => ({
                ...prevState,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={expense.category}
            onChange={(e) => {
              setExpense((prevState) => ({
                ...prevState,
                category: e.target.value,
              }));
            }}
          >
            <option hidden>Select</option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={expense.amount}
            onChange={(e) => {
              setExpense((prevState) => ({
                ...prevState,
                amount: e.target.value,
              }));
            }}
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}
