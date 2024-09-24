import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Customers",
        color: "#000000",
        font: {
          size: 16
        }
      }
    },
    y: {
      title: {
        display: true,
        text: "Sales",
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
      position: "bottom"
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August" , "September", "October", "November", "December"];

const monthNames = {
  1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
  7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'
};
export function LineChart({data}) {
  const newData =  Object.keys(monthNames).map(month => {
    const salesRecord = data?.newCustomerSales?.find(item => item?.month == month);
    return salesRecord ? salesRecord?.totalSales : 0;
});

  const dataSet = {
    labels,
    datasets: [
      {
        label: 'NEW CUSTOMERS',
        data:  Object.keys(monthNames).map(month => {
          const salesRecord = data?.newCustomerSales?.find(item => item?.month == month);
          return salesRecord ? salesRecord?.totalSales : 0;
      }),
        borderColor: '#FEA82F',
        backgroundColor: '#FEA82F',
      },
      {
        label: 'OLD CUSTOMERS',
        data:  Object.keys(monthNames).map(month => {
          const salesRecord = data?.oldCustomerSales?.find(item => item?.month == month);
          return salesRecord ? salesRecord?.totalSales : 0;
      }),
        borderColor: '#FD575B',
        backgroundColor: '#FD575B',
      },
    ],
  };
  
  return <Line options={options} data={dataSet} />;
}
