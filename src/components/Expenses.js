import React, { useState } from "react";
import "./expense.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
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
export default Expenses;
