import React from "react";
import { MealPlan } from "../routes/Planner";
import Card from "./Card";

const MEAL = ['Breakfast', 'Lunch', 'Dinner']

const DayPlan = ({ day, meals }: MealPlan) => {
  const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl text-bold underline">{capitalize(day)}</h1>
      <div className="flex flex-row gap-4">
        {meals.map((m, i) => (
          <Card name={m.title} imgUrl={m.sourceUrl} meal={MEAL[i]} />
        ))}
      </div>
    </div>
  );
};

export default DayPlan;
