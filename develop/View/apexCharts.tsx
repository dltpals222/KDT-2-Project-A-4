import React, {useState, useEffect} from 'react'
import ReactApexChart from "react-apexcharts"
import {ApexOptions} from "apexcharts"


interface ChartData {
  data: { x: Date, y: number[] }[];
}

interface CompanyDateType {
  no : number,
  open : number,
  high : number,
  low : number,
  close : number,
  volume : number,
  day : Date|string,
}

const ApexChart: React.FC = () => {
  const [series, setSeries] = useState<ChartData[]>([])
  const [options, setOptions] = useState<ApexOptions>({})

  useEffect(() => {
    fetch('/api/chart')
    .then(response => response.json())
    .then(result => {
      const formatDate = result[0].map((element : CompanyDateType) => 
        {
          const dateList = new Date(element.day)
          const formatDay = new Date(dateList.getFullYear(),dateList.getMonth()+1,dateList.getDate())
          })
      })
    // .then(result => {
    //   const resultData : ChartData = { data : 
    //   result[0].map((element : CompanyDateType) => 
    //     {
    //       const dateList = new Date(element.day)
    //       const formatDate = new Date(dateList.getFullYear(),dateList.getMonth()+1,dateList.getDate())
    //       return { 
    //       x : formatDate,
    //       y : [element.open, element.high, element.low, element.close]
    //     }})
    //   }
    //   setSeries([resultData])
    //   })
      const chartOptionValue : ApexOptions = {
        chart: {
          type: 'candlestick',
          height: 350,
        },
        title: {
          text: '삼성 차트',
          align: 'left',
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      }
    
      setOptions(chartOptionValue)
    },[])
    


    // {
    //   data: [ 
    //       {
    //         x: new Date(1538884800000),
    //         y: [6604.98, 6606, 6604.07, 6606]
    //       },
    //     ]
    //   }
  //   chart: {
  //     type: 'candlestick',
  //     height: 350,
  //   },
  //   title: {
  //     text: 'CandleStick Chart',
  //     align: 'left',
  //   },
  //   xaxis: {
  //     type: 'datetime',
  //   },
  //   yaxis: {
  //     tooltip: {
  //       enabled: true,
  //     },
  //   },
  // });
    
    
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default ApexChart;