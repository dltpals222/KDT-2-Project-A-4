import { scaleTime } from "d3-scale";
import React, { useState, useEffect } from "react";
import { ChartCanvas, Chart } from "react-financial-charts";
import { CandlestickSeries } from "react-financial-charts/lib/index";
import { XAxis, YAxis } from "react-financial-charts/lib/index";

const FinancialChart : React.FC = () => {
  interface CompanyDate {
    no : number,
    open : number,
    high : number,
    low : number,
    close : number,
    volume : number,
    day : Date,
  }
  const [companyDate, setCompanyDate] = useState<CompanyDate[]>([])
  useEffect(() => {
    fetch('/api/chart')
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setCompanyDate(result)
    })
  },[])

  return (
    <ChartCanvas data={companyDate} width={380} height={300} xAccessor={(d)=> d.date } xScale={scaleTime()} ratio={1} seriesName="kospi_005930_d">
      <Chart id="kospi-chart" yExtents={(d) => [d.high, d.low]}>
        <XAxis />
        <YAxis />
        <CandlestickSeries yAccessor={(d) => d.price} />
      </Chart>
    </ChartCanvas>
  )
}

export default FinancialChart;