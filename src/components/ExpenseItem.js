import "./ExpenseItem.css";
import ExpenceDate from "./ExpenseDate";
import { useState } from "react";
import Card from "./Card";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenceDate date={props.date} />
      <div className="expense-item-description">
        <h2>{props.item}</h2>
        <div className="expense-item-price">₹{props.cost}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
