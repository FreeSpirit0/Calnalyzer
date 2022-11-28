import React, { useState,useEffect} from "react";
import "../App.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";

const Home = () => {


  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <Chart />
      
    </div>
  );
};

export default Home;
