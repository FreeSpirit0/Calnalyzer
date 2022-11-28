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
        <div className="grid grid-cols-6 gap-4">
          {Object.keys(workOut).map((key) => (
            <div className=" max-w-sm rounded overflow-hidden shadow-lg rounded-lg border border-lime-400">
              <div className="px-8 py-4">
                <div className="font-bold text-xl mb-2">
                  <div>{workOut[key as keyof typeof workOut].Workout}</div>
                </div>
                <p className="text-gray-700 text-base">
                  Workout Time: {workOut[key as keyof typeof workOut].Minute}{" "}
                  minutes
                  <div>
                    Calories Burned:{" "}
                    {workOut[key as keyof typeof workOut].CaloriesUsed} Kcal
                  </div>
                </p>
              </div>
              <div className="px-4 pt-4 pb-2"></div>
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
};

export default Workout;
