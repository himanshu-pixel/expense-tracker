import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxVal = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          //   key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxVal}
          tag={dataPoint.tag}
        />
      ))}
    </div>
  );
};
export default Chart;
