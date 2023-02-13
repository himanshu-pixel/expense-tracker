import "./ExpenseList.css";
import ExpenseIte from "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.item.lenght) {
    return <h2 className="expenses-list__fallback">No expense found!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          date={expense.date}
          item={expense.item}
          cost={expense.cost}
          key={expense.id}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
