import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const LifeCycleStage = ({data}) => {

  const data1 = {
    labels: [`Active ${data?.Active}%`, `New ${data?.New}%`, `Churn ${data?.Churn}%`, `Slipping ${data?.Slipping}%`,],
  
    
    datasets: [
      {
        label: '# of Votes',
        data: [data?.Active, data?.New, data?.Churn, data?.Slipping],
        backgroundColor: [
            '#00B050',
          '#ED7D31',
          '#CF2C15',
          '#0096DB',
        ],
        borderColor: [
            '#00B050',
          '#ED7D31',
          '#CF2C15',
          '#0096DB',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom"
      }
    }
  };


    return (
        <div>
            <p className="font-semibold text-xl pb-4">Life Cycle Stage</p>
                <div className="rounded-lg shadow-md flex justify-center items-center bg-white p-4 w-80 h-[330px]">
                <Doughnut data={data1} options={options}/>
                </div>
            </div>
  )
}

export default LifeCycleStage
