import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import ExpenseForm from "./components/ExpenseForm";

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
      <ExpenseForm />
      <ExpenseItem
        date={expenses[0].date}
        item={expenses[0].item}
        cost={expenses[0].cost}
      />
      <ExpenseItem
        date={expenses[1].date}
        item={expenses[1].item}
        cost={expenses[1].cost}
      />
      <ExpenseItem
        date={expenses[2].date}
        item={expenses[2].item}
        cost={expenses[2].cost}
      />
      <ExpenseItem
        date={expenses[3].date}
        item={expenses[3].item}
        cost={expenses[3].cost}
      />
    </div>
  );
}

export default App;
