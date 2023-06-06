import * as React from "react";
import {createRoot} from "react-dom/client";

type ReactNode = React.ReactNode;

function App() : ReactNode {
    return (
        <React.StrictMode>  
        </React.StrictMode>
    )
}

const root = createRoot(document.createElement('root'));
root.render(<App />);