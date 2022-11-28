import React, { useState,useEffect} from "react";
import "../App.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Workout = () => {


  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <Content>
        <div></div>
      </Content>
    </div>
  );
};

export default Workout;
