export default function ExpenseForm({ setExpenses }) {
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target);
    getFormData(e.target);
    const expense = { id: crypto.randomUUID(), ...getFormData(e.target) };
    setExpenses((prevState) => [...prevState, expense]);
    e.target.reset();
  }

  function getFormData(form) {
    const formData = new FormData(form); //name attribute is important in all input tags to extract.
    const data = {};

    for (const [key, value] of formData.entries()) {
      // console.log(key, value);
      data[key] = value;
    }
    return data;
  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        {/* <input id="category" /> */}
        <select id="category" name="category">
          <option hidden>Select</option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
