import * as React from "react";
import { Outlet } from "react-router-dom";
import Navi from "./NavigatorBar";
import KOSbox from "./StockChartBlock";
import StockReco from "./StockReconmendBlock";


function MainPage() : JSX.Element {
    return (
        <div>
            <Navi />
            <Outlet />
        </div>
    );
}
export default MainPage;