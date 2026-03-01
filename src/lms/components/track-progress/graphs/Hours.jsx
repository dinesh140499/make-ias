import React from 'react'
import ReactApexChart from 'react-apexcharts'

const month = [
  {
    x: 'Jan',
    y: 54,
  },
  {
    x: 'Feb',
    y: 20,
  },
  {
    x: 'Mar',
    y: 25,
  },
  {
    x: 'Apr',
    y: 75,
  },
  {
    x: 'May',
    y: 70,
  },
 
]

const Hours = () => {
 
  const series = [
    {
      name: 'Actual',
      data: month
    }
  ]

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
        distributed: true // enables per-bar coloring
      }
    },
    colors: ['#F27055', '#FDF416'], // 👈 two alternating colors
    dataLabels: {
      enabled: true
    },
    yaxis: {
      min: 0,
      max: 80,
      tickAmount: 4,
      labels: {
        formatter: function (val) {
          return `${val} hrs`;
        },
        style: {
          fontSize: '14px',
          colors: ['#333']
        }
      },
      title: {
        style: {
          fontSize: '16px',
          fontWeight: 600
        }
      }
    }
  }
  
  

  return (
    <div className='w-full lg:w-auto'>
      <h1>Hours Spent</h1>
      <ReactApexChart options={options} series={series} type="bar" height={350} width={320} />
    </div>
  )
}

export default Hours
