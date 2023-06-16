import * as React from "react";
import { Outlet } from "react-router-dom";
import Navi from "./NavigatorBar";



function MainPage() : JSX.Element {
    return (
        <div>
            <Navi />
            <Outlet />
        </div>
    );
}
export default MainPage;