import React from "react";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="bg-gray-50">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
