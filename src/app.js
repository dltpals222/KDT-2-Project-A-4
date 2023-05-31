"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var client_1 = require("react-dom/client");
function App() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Title"),
        React.createElement("p", null, "Hello World!")));
}
(0, client_1.createRoot)(document.getElementById("root")).render(React.createElement(App, null));
