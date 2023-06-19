import * as React from "react";
import KOSbox from "./StockChartBlock";
import StockReco from "./StockReconmendBlock";
import ApexChart from "./apexCharts";


function MainComp() : JSX.Element {
    return (
        <div>
            <KOSbox />
            <StockReco />
            <ApexChart />
        </div>
    );
}
export default MainComp;