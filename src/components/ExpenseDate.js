import "./ExpenseDate.css";
function ExpenseDate(props) {
  const months = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="date">
      <div className="date-months">{months}</div>
      <div className="date-day">{day}</div>
      <div className="date-year">
        <small>{year}</small>
      </div>
    </div>
  );
}
export default ExpenseDate;
