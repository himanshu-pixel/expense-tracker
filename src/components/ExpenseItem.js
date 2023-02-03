import "./ExpenseItem.css";
import ExpenceDate from "./ExpenseDate";
import { useState } from "react";
import Card from "./Card";
function ExpenseItem(props) {
  const months = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const [title, setTitle] = useState(props.item);
  const clickHandler = () => setTitle("Updated");
  return (
    <div className="expense-item">
      <ExpenceDate date={props.date} />
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">₹{props.cost}</div>
      </div>
      <button onClick={clickHandler} style={{ margin: "1rem" }}>
        Test
      </button>
    </div>
  );
}
export default ExpenseItem;
