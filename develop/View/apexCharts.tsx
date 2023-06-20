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
      const reverseResult = result[0].reverse()
      const resultData: ChartData = {
        data: reverseResult.map((element: CompanyDateType) => {
          const date = new Date(element.day);
          const formattedDate = new Intl.DateTimeFormat('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(date);
          return {
            x: formattedDate,
            y: [element.open, element.high, element.low, element.close],
          };
        }),
      };
      setSeries([resultData])
      })
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
    
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
        width={380}
      />
    </div>
  );
};

export default ApexChart;