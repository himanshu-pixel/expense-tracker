import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="hero">
      <div className="date-div">{props.date.toISOString}</div>
      <div className="item-div"> {props.item}</div>
      <div className="cost-div">{props.cost}</div>
    </div>
  );
}
export default ExpenseItem;
