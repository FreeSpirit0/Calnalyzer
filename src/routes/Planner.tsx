import React, { useState,useEffect} from "react";
import "../App.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Home = () => {


  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <Content />
      
    </div>
  );
};

export default Home;
