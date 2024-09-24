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







export function BarChart3({data}) {
  console.log(data)
  const labels = data?.map((data)=> data?.dayOfWeek);
const dataSet = {
    labels,
    datasets: [
      {
        label: "Total Sales",
        data: data?.map((data)=> data?.totalSales),
        backgroundColor: "#FD575B",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "DAYS OF WEEK",
          color: "#000000",
          font: {
            size: 16
          }
        }
      },
      y: {
        title: {
          display: true,
          text: "Total Sales",
          color: "#000000",
          font: {
            size: 16
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false,
        position: "bottom"
      }
    }
  };
  return <Bar options={options} data={dataSet} />;
}
