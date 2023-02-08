import "./expense.css";
import ExpenseItem from "./ExpenseItem";
function Expense(props) {
  return (
    <div>
      <ExpenseItem
        date={props.item[0].date}
        item={props.item[0].item}
        cost={props.item[0].cost}
      />
      <ExpenseItem
        date={props.item[1].date}
        item={props.item[1].item}
        cost={props.item[1].cost}
      />
      <ExpenseItem
        date={props.item[2].date}
        item={props.item[2].item}
        cost={props.item[2].cost}
      />
      <ExpenseItem
        date={props.item[3].date}
        item={props.item[3].item}
        cost={props.item[3].cost}
      />
    </div>
  );
}
export default Expense;
