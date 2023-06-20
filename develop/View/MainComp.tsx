import * as React from "react";
import StockReco from "./StockReconmendBlock";
import ApexChart from "./apexCharts";


function MainComp() : JSX.Element {
    return (
        <div>
            <StockReco />
            <br />
            <br />
            <ApexChart />
        </div>
    );
}
export default MainComp;