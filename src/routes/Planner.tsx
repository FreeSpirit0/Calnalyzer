import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "../components/Card";
import Content from "../components/Content";
import DayPlan from "../components/DayPlan";
import Sidebar from "../components/Sidebar";
import { mock } from "../mock";

type Plan = typeof mock;
type WeekPlan = typeof mock.week;
type Meal = {
  id: number;
  imageType: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
};
export type MealPlan = {
  day: string;
  meals: Meal[];
  calories: number;
};

const Planner = () => {
  const [mealPlan, setRandomFood] = useState<MealPlan[]>();

  useEffect(() => {
    // getRandomFood().then((data) => {
    //   setRandomFood(data.recipes);
    // });
    setRandomFood(
      Object.keys(mock.week).map((key) => ({
        day: key,
        meals: mock.week[key as keyof typeof mock.week].meals as Meal[],
        calories: mock.week[key as keyof typeof mock.week].nutrients.calories
      }))
    );
  }, []);

  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <Content>
        <div className="flex flex-col gap-8">
          {mealPlan ? (
            mealPlan.map((m) => <DayPlan day={m.day} meals={m.meals} calories={m.calories} />)) : <></>}
        </div>
      </Content>
    </div>
  );
};

export default Planner;
