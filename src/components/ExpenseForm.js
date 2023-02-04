import React from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  return (
    <form>
      <div className="Expense-controls">
        <div className="Expense-control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="Expense-control">
          <label>Amount</label>
          <input type="number" min="0.1" step="0.1" />
        </div>
        <div className="Expense-control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-02-12" />
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
