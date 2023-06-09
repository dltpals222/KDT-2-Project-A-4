import * as React from 'react'
import { ChartCanvas, Chart } from 'react-financial-charts';

const MyChartComponent = () => {
  // 차트 구현 및 설정
  return (
    <ChartCanvas /* 차트 설정 */>
      <Chart /* 차트 유형 및 데이터 설정 */ />
    </ChartCanvas>
  );
};

export default FinancialChart