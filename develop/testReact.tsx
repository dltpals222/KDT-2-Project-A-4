import * as React from "react";
import {createRoot} from "react-dom/client";


function App() {
    return (
        <React.StrictMode>  
        </React.StrictMode>
    )
}

const root = createRoot(document.createElement('root'));
root.render(<App />);