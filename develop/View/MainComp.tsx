import * as React from "react";
import KOSbox from "./StockChartBlock";
import StockReco from "./StockReconmendBlock";
import FinancialChart from "./financialCharts";


function MainComp() : JSX.Element {
    return (
        <div>
            <KOSbox />
            <StockReco />
            <FinancialChart />
        </div>
    );
}
export default MainComp;