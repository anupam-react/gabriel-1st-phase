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







export function BarChart4({data}) {
  console.log(data)
  const labels = data?.map((data)=> data?.subCategoryName);

  const dataset = {
    labels,
    datasets: [
      {
        label: "Products ",
        data: data?.map((data)=> data?.totalSales),
        backgroundColor: "#FEA82F",
      },
    ],
  };


  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Product Subcategories",
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
  return <Bar options={options} data={dataset} />;
}
