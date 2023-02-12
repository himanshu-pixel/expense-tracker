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
      {props.item.map((expense) => (
        <ExpenseItem
          date={expense.date}
          item={expense.item}
          cost={expense.cost}
        />
      ))}
    </div>
  );
}
export default Expenses;
