import React from "react";
import { MealPlan } from "../routes/Planner";
import Card from "./Card";

const MEAL = ["Breakfast", "Lunch", "Dinner"];

const DayPlan = ({ day, meals, calories }: MealPlan) => {
  const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl text-bold underline">{capitalize(day)}</h1>
      <h2 className="text-l">Total calories: {calories}</h2>
      <div className="flex flex-row gap-4">
        {meals.map((m, i) => (
          <Card name={m.title} meal={MEAL[i]} />
        ))}
      </div>
    </div>
  );
};

export default DayPlan;
