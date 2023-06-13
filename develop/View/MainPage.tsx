import * as React from "react";
import Navi from "./NavigatorBar";
import KOSbox from "./StockChartBlock";
import StockReco from "./StockReconmendBlock";


function MainPage() : JSX.Element {
    return (
        <div>
            <Navi />
            <KOSbox />
            <StockReco />
        </div>
    );
}
export default MainPage;