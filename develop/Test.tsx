import * as React from "react";
import Navi from "./MainPageCom/NavigatorBar";
import KOSbox from "./MainPageCom/StockChartBlock";
import StockReco from "./MainPageCom/StockReconmendBlock";


function Test() : JSX.Element {
    return (
        <>
        <hr />
        <div>
            <Navi />
            <KOSbox />
            <StockReco />
        </div>
        </>
    );
}
export default Test;