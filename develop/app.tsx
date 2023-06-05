import * as React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
