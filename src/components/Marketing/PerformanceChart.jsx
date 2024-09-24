import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  Filler,
  Legend
);







const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: "A day of the week",
        color: "#131313",
        font: {
          size: 16,
          weight: 600,
        }
        
      }
    },
    y: {
      title: {
        display: true,
        text: "People Engaged with AD",
        color: "#131313",
        font: {
          size: 16,
          weight: 600
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

export function PerformanceChart({data}) {
  console.log(data)

  const labels =  data?.map((data)=> data?.day);
  const dataset = {
    labels,
    datasets: [
      {
        fill: true,
        label: "People Engaged with AD",
        data:  data?.map((data)=> data?.peopleEngaged),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={dataset} />;
}
