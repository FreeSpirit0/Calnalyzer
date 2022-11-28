import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "../components/Card";
import Content from "../components/Content";
import DayPlan from "../components/DayPlan";
import Sidebar from "../components/Sidebar";
import { mock } from "../mock";
import { getMealPlan } from "../services/spoonacular";

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
let cal = prompt("Enter you calories for your meal plan", "0");
let calories = 0;
if (cal) {
  calories = parseInt(cal);
}
const Planner = () => {
  // const [mealPlan, setRandomFood] = useState<MealPlan[]>();
  const [mealPlan, setMealPlan] = useState<MealPlan[]>();

  useEffect(() => {
    console.log(getMealPlan(2100));
    getMealPlan(calories).then((data) => {
      setMealPlan(
        Object.keys(data.week).map((key) => ({
          day: key,
          meals: data.week[key as keyof typeof data.week].meals as Meal[],
          calories: data.week[key as keyof typeof data.week].nutrients.calories,
        }))
      );
    });
  }, []);

  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <Content>
        <div className="flex flex-col gap-8">
          {mealPlan ? (
            mealPlan.map((m) => (
              <DayPlan day={m.day} meals={m.meals} calories={m.calories} />
            ))
          ) : (
            <></>
          )}
        </div>
      </Content>
    </div>
  );
};

export default Planner;
