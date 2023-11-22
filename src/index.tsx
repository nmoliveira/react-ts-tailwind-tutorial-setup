import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

const App = () => {
  return <p className="text-5xl text-center text-sky-500">Hello World!</p>;
};

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
