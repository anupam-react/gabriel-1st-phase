import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Counter1", "Counter2", "Counter3", "Counter4"];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Total Sales",
      data: [200, 400, 500, 300],
      backgroundColor: "#FEA82F",
    },
  ],
};

export function BarChartMap() {
  return <Bar options={options} data={data} />;
}
