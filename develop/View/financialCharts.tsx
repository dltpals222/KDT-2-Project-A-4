import { scaleTime } from "d3-scale";
import React from "react";
import { ChartCanvas, Chart } from "react-financial-charts";
import { LineSeries } from "react-financial-charts/lib/index";
import { XAxis, YAxis } from "react-financial-charts/lib/index";

const FinancialChart : React.FC = () => {
  return (
    <ChartCanvas data={data} width={380} height={300} xAccessor={(d)=> d.date } xScale={scaleTime()} ratio={1} seriesName="Kospi">
      <Chart id="kospi-chart" yExtents={(d) => [0,d.price]}>
        <XAxis />
        <YAxis />
        <LineSeries yAccessor={(d) => d.price} />
      </Chart>
    </ChartCanvas>
  )
}

export default FinancialChart