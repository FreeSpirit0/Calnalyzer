import React, { useState, useEffect } from "react";
import "../App.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import { getWorkOut } from "../services/spoonacular";
const Workout = () => {
  const [workOut, setWorkOut] = useState<any[]>([]);

  useEffect(() => {
    getWorkOut().then((w) => {
      setWorkOut(w);
      // console.log(w);
      console.log(workOut);
    });
  }, []);
  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <Content>
        <div>
          {Object.keys(workOut).map((key) => (
            <div className="flex justify-around">
              {workOut[key as keyof typeof workOut].Workout}
              {workOut[key as keyof typeof workOut].Minute}
              {workOut[key as keyof typeof workOut].CaloriesUsed}
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
};

export default Workout;
