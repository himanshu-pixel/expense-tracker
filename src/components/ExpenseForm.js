import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const TitleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const AmountChangeHandler = (event) => setEnteredAmount(event.target.value);
  const DateChangeHandler = (event) => setEnteredDate(event.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(ExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="Expense-controls">
        <div className="Expense-control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="Expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="Expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-02-12"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-control-action">
        <button id="submit-button" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}
export default ExpenseForm;
