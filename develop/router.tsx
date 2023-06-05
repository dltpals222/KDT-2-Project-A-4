import * as React from "react";
import {createRoot} from "react-dom/client"
import { BrowserRouter , Routes, Route, Link} from "react-router-dom"
import App from "./app";

function Router() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

createRoot(document.getElementById("root")!).render(<Router />);