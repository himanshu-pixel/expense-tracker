import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const enteredExpenseHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={enteredExpenseHandler} />
    </div>
  );
}
export default NewExpense;
