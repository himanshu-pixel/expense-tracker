import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/expenses/expenses";
const DUMMY_EXPENSES = [
  { key: "e1", date: new Date(2020, 7, 14), item: "Panner", cost: 45 },
  { key: "e2", date: new Date(2021, 2, 28), item: "Milk", cost: 78 },
  { key: "e3", date: new Date(2023, 5, 12), item: "Bread", cost: 12 },
  { key: "e4", date: new Date(2023, 6, 15), item: "book", cost: 250 },
  { key: "e5", date: new Date(2023, 8, 25), item: "cell phone", cost: 17500 },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const expenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onExpenseHandler={expenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
