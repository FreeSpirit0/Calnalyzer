import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "../components/Card";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Planner = () => {
  const [randomFood, setRandomFood] = useState<any[]>([]);

  useEffect(() => {
    // getRandomFood().then((data) => {
    //   setRandomFood(data.recipes);
    // });
  }, []);

  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <Content>
        Content
        {randomFood.map((food) =>
          food.extendedIngredients.map((extended: any) => (
            <Card name={extended.name} />
          ))
        )}
      </Content>
    </div>
  );
};

export default Planner;
