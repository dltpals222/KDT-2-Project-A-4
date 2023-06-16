import * as React from "react";
import { Outlet } from "react-router-dom";
import Navi from "./NavigatorBar";
import FinancialChart from "./financialCharts";



function MainPage() : JSX.Element {
    return (
        <div>
            <Navi />
            <Outlet />
            <FinancialChart />
        </div>
    );
}
export default MainPage;