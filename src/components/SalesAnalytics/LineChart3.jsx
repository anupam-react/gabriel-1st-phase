import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart3({data}) {
  console.log(data)
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "DAYS OF WEEK",
          color: "#000000",
          font: {
            size: 16,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "SALES",
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
        position: "bottom",
      },
    },
  };

  const labels = data?.map((data)=> data?._id);

  const dataset = {
    labels,
    datasets: [
      {
        label: "SALES",
        data: data?.map((data)=> data?.averageDailySalesPercentage),
        borderColor: "#FEA82F",
        backgroundColor: "#FEA82F",
      },
      // {
      //   label: "TIME TAKEN",
      //   data: [30, 50, 60, 70, 40, 70, 80],
      //   borderColor: "#FD575B",
      //   backgroundColor: "#FD575B",
      // },
    ],
  };
  return <Line options={options} data={dataset} />;
}
