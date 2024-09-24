import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Time of the Day",
        color: "#000000",
        font: {
          size: 16
        }
      }
    },
    y: {
      title: {
        display: true,
        text: "Transaction",
        color: "#000000",
        font: {
          size: 16
        }
      }
    }
  },
  plugins: {
    legend: {
      display: true,
      position: "top"
    }
  }
};




export function BarChart({data}) {
  const labels = data?.map((data)=> data?.time);
const dataset = {
  labels,
    datasets: [
        {
        label: 'Transaction',
        data: data?.map((data)=> data?.amount) ,
        backgroundColor:'#FD575B'
      },
    ],
  };
  return <Bar options={options} data={dataset} />;
}
