import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import ExpenseForm from "./components/ExpenseForm";
import NewExpense from "./components/NewExpense";
import Expense from "./components/Expense";

function App() {
  const expenses = [
    { date: new Date(), item: "Panner", cost: 45 },
    { date: new Date(), item: "Milk", cost: 78 },
    { date: new Date(), item: "Bread", cost: 12 },
    { date: new Date(), item: "Egg", cost: 78 },
  ];

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense />
      <Expense item={expenses} />
    </div>
  );
}

export default App;
