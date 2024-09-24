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

export function BarChart2({data}) {
  console.log(data)
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "OUTLETS",
          color: "#000000",
          font: {
            size: 16,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "PERCENTAGES",
          color: "#000000",
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
  };
  const labels = data?.map((data)=> data?.location);

  const dataset = {
    labels,
    datasets: [
      {
        label: "OUTLETS ",
        data: data?.map((data)=> data?.count),
        backgroundColor: "#FEA82F",
      },
    ],
  };
  return <Bar options={options} data={dataset} />;
}
