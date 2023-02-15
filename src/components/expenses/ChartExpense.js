import React from "react";

import Chart from "../chart/Chart";

const ChartExpense = (props) => {
  const chartDataPoints = [
    { tag: "Jan", value: 0 },
    { tag: "Feb", value: 0 },
    { tag: "Mar", value: 0 },
    { tag: "Apr", value: 0 },
    { tag: "May", value: 0 },
    { tag: "Jun", value: 0 },
    { tag: "Jul", value: 0 },
    { tag: "Aug", value: 0 },
    { tag: "Sep", value: 0 },
    { tag: "Oct", value: 0 },
    { tag: "Nov", value: 0 },
    { tag: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.cost;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ChartExpense;
