import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



const LineChart4 = ({data}) => {
  const seriesData = data.map(item => ({
    name: item?.campaignType,
    data: item?.roas
  }));

  const options = {
    title: {
      text: 'ROAS VS CAMPAIGN TYPE',
      style: {
        color: '#0070BC', // Change the color of the chart title
        fontSize: '20px', // Optional: Change font size of the title
        fontWeight: 'bold' // Optional: Change font weight of the title
      }
    },
    xAxis: {
      categories: data?.map((d)=> d?.campaignType),
      title: {
        text: 'Campaign Type'
      }
    },
    yAxis: {
      title: {
        text: 'Return on Ads Spend (ROAS)'
      }
    },
    series: seriesData,
    chart: {
      type: 'line'
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart4;