import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { date: new Date(2021, 8, 7), item: "Panner", cost: 45 },
    { date: new Date(2021, 8, 7), item: "Milk", cost: 78 },
    { date: new Date(2021, 8, 7), item: "Bread", cost: 12 },
    { date: new Date(2021, 8, 7), item: "Egg", cost: 78 },
  ];

  return (
    <div className="App">
      <ExpenseItem
        date={expenses[0].date}
        item={expenses[0].item}
        cost={expenses[0].cost}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        item={expenses[1].item}
        cost={expenses[1].cost}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        item={expenses[2].item}
        cost={expenses[2].cost}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[3].date}
        item={expenses[3].item}
        cost={expenses[3].cost}
      ></ExpenseItem>
    </div>
  );
}

export default App;
