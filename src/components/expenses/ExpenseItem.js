import "./ExpenseItem.css";
import ExpenceDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  return (
    <li className="expense-list">
      <div className="card">
        <div className="expense-item">
          <ExpenceDate date={props.date} />
          <div className="expense-item-description">
            <h2>{props.item}</h2>
            <div className="expense-item-price">₹{props.cost}</div>
          </div>
        </div>
      </div>
    </li>
  );
}
export default ExpenseItem;
