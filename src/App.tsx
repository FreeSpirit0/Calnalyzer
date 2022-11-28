import React, { useState,useEffect} from "react";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const App = () => {


  return (
    <div className="flex bg-gray-50">
      <Sidebar />      
    </div>
  );
};

export default App;
