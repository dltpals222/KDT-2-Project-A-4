import * as React from "react";
import {createRoot} from "react-dom/client"

function App() {
    
    return (
      <div>
        <h1>Title</h1>
        <p>Hello World!</p>
      </div>
    )
}

createRoot(document.getElementById("root")!).render(<App />);