import { useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    // const expense = { title, category, amount, id: crypto.randomUUID() };
    // setExpenses((prevState) => [...prevState, expense]);
    // console.log(expense);
    // setTitle("");
    // setCategory("");
    // setAmount("");

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

  // console.log("Rendering");
  // in input we have to use onChange because it is called one way of data flow or data binding so we have to set onChange manually otherwise it will not work and we cant change the value of title but in vue.js it automatically works and it is called two way data binding.
  //iska concept ye hai ki ham ui or screen se data change nahi kar sakte, hum data or dom se ui ko change karenge. (unidirectional data flow)
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          // value={title}
          value={expense.title}
          // onChange={(e) => {
          //   setTitle(e.target.value);
          // }}
          onChange={(e) => {
            setExpense((prevState) => ({
              ...prevState,
              title: e.target.value,
            }));
          }}
        />
        {/* we have to set onChange */}
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        {/* <input id="category" /> */}
        <select
          id="category"
          name="category"
          // value={category}
          value={expense.category}
          // onChange={(e) => {
          //   setCategory(e.target.value);
          // }}
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
          // value={amount}
          value={expense.amount}
          // onChange={(e) => {
          //   setAmount(e.target.value);
          // }}
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
  );
}
