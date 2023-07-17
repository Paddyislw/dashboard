import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import {
  optionForBar,
  optionForLine,
  optionForPie,
} from "../static/OptionsForChart";
import clsx from "clsx";

const ReportsPage = () => {
  const [option, setOption] = useState(optionForLine);
  const [chartType, setChartType] = useState("Line");
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    if (option) {
      chart.setOption(option);
    }
  }, [chartType, option]);
  
  return (
    <div className="flex flex-col h-[100dvh]">
      <p className="text-center text-xl font-semibold my-2">Reports Page</p>
      <div className="flex justify-center space-x-2 my-2">
        {chartTypes.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setChartType(item.label);
              setOption(item.value);
            }}
            className={clsx(
              "py-1 px-4 rounded font-semibold",
              item.label === chartType ? "bg-indigo-500 text-white" : "bg-gray-200"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="w-[80%] mx-auto mt-20 grow">
        <div
          ref={chartRef}
          style={{ width: "100%", height: "100%" }}
          id="chart-container"
        />
      </div>
    </div>
  );
};

const chartTypes = [
  { label: "Line", value: optionForLine },
  { label: "Bar", value: optionForBar },
  { label: "Pie", value: optionForPie },
];

export default ReportsPage;
