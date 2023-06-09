import { scaleTime } from "d3-scale";
import React from "react";
import { ChartCanvas, Chart } from "react-financial-charts";
import { LineSeries } from "react-financial-charts/lib/index";
import { XAxis, YAxis } from "react-financial-charts/lib/index";

interface DataPoint {
  date : Date;
  price : number;
}

const data : DataPoint[] =[
  {date : new Date('2021-01-01'), price : 100},
  {date : new Date('2021-01-02'), price : 150},
  {date : new Date('2021-01-03'), price : 120},
  {date : new Date('2021-01-04'), price : 190},
  {date : new Date('2021-01-05'), price : 180},
]

const FinancialChart : React.FC = () => {
  return (
    <ChartCanvas data={data} width={800} height={400} xAccessor={(d)=> d.date } xScale={scaleTime()} ratio={1} seriesName="Kospi">
      <Chart id="kospi-chart" yExtents={(d) => [0,d.price]}>
        <XAxis />
        <YAxis />
        <LineSeries yAccessor={(d) => d.price} />
      </Chart>
    </ChartCanvas>
  )
}

export default FinancialChart