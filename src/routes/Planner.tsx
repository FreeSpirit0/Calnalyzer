import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "../components/Card";
import Content from "../components/Content";
import DayPlan from "../components/DayPlan";
import Navbar from "../components/Navbar";
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

const Planner = () => {
  const [mealPlan, setMealPlan] = useState<MealPlan[]>();
  const [calorie, setCalorie] = useState<number>(0);

  const handleOnClick = async () => {
    const response = await getMealPlan(calorie)
      .then((data) => setMealPlanFromApi(data))
      .catch((_) => mock);
  };

  const setMealPlanFromApi = (data: any) =>
    setMealPlan(
      Object.keys(data.week).map((key) => ({
        day: key,
        meals: data.week[key as keyof typeof data.week].meals as Meal[],
        calories: data.week[key as keyof typeof data.week].nutrients.calories,
      }))
    );

  return (
    <>
      <Navbar />
      <div className="flex">
        <Content>
          <div>
            <span className="text-l">
              Enter Calories:{" "}
              <input
                type="number"
                className="border rounded-md h-8 mb-4 ml-4"
                onChange={(e) => setCalorie(e.target.valueAsNumber)}
                value={calorie}
              ></input>{" "}
              <button
                className="ml-4 border rounded-full py-2 px-4 bg-emerald-500 text-white"
                onClick={handleOnClick}
              >
                Find Meal
              </button>
            </span>
          </div>
          <div className="flex flex-col gap-8 divide-y-2">
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
    </>
  );
};

export default Planner;
