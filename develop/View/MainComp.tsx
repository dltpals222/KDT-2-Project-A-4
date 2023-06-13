import * as React from "react";
import KOSbox from "./StockChartBlock";
import StockReco from "./StockReconmendBlock";


function MainComp() : JSX.Element {
    return (
        <div>
            <KOSbox />
            <StockReco />
        </div>
    );
}
export default MainComp;