import { scaleTime } from "d3-scale";
import React, { useState, useEffect } from "react";
import { ChartCanvas, Chart } from "react-financial-charts";
import { LineSeries } from "react-financial-charts/lib/index";
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
    fetch('/')
    .then(response => response.json())
    .then(result => {console.log(result)})
  },[])

  return (
    // <ChartCanvas data={data} width={380} height={300} xAccessor={(d)=> d.date } xScale={scaleTime()} ratio={1} seriesName="Kospi">
    //   <Chart id="kospi-chart" yExtents={(d) => [0,d.price]}>
    //     <XAxis />
    //     <YAxis />
    //     <LineSeries yAccessor={(d) => d.price} />
    //   </Chart>
    // </ChartCanvas>
    <></>
  )
}

export default FinancialChart