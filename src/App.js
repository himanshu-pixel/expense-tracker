import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";

function App() {
  const expenseHandler = (expense) => {
    console.log("in App.js");
    console.log(expense);
  };
  const expenses = [
    { date: new Date(), item: "Panner", cost: 45 },
    { date: new Date(), item: "Milk", cost: 78 },
    { date: new Date(), item: "Bread", cost: 12 },
    { date: new Date(), item: "Egg", cost: 78 },
  ];

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onExpenseHandler={expenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
