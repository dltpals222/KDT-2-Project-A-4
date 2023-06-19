import { scaleTime } from "d3-scale";
import React, { useState, useEffect } from "react";
import { ChartCanvas, Chart } from "react-financial-charts";
import { CandlestickSeries } from "react-financial-charts/lib/index";
import { XAxis, YAxis } from "react-financial-charts/lib/index";

const FinancialChart : React.FC = () => {
  interface CompanyDateType {
    no : number,
    open : number,
    high : number,
    low : number,
    close : number,
    volume : number,
    day : Date|string,
    day : Date|string,
  }
  const [companyDate, setCompanyDate] = useState<CompanyDateType[]>([])
  const [companyDate, setCompanyDate] = useState<CompanyDateType[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('/api/chart');
        const result = await response.json();
        const formattedData = result[0].map((element:CompanyDateType) => {
          const formattedDay = new Date(element.day);
          const oneDayTypeDate = new Date()
          element.day = formattedDay; 
          return {...element, day:formattedDay}
          });
          setCompanyDate(formattedData)
        } catch (error){
        }
      }
      fetchData()
  },[])

  return (
    // <ChartCanvas 
    //   data={companyDate}
    //   width={380}
    //   height={300}
    //   // xAccessor={(d)=> d.day } 
    //   xScale={scaleTime()} 
    //   ratio={1} 
    //   seriesName="kospi_005930_d"
    // >
    //   <Chart id="kospi-chart" yExtents={(d) => [d.high, d.low]}>
    //     <CandlestickSeries yAccessor={(d) => ({open : d.open, high : d.high,low: d.low,close: d.close})} />
    //   </Chart>
    // </ChartCanvas>
    <></>
  )
}

export default FinancialChart;