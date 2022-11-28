import React, { useState, useEffect } from "react";
import "../App.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";
import { getForm, getMenuInfo, getMenuItems } from "../services/spoonacular";
import Navbar from "../components/Navbar";
import { n, N } from "chart.js/dist/chunks/helpers.core";

type MenuRequest = {
  foodName: string;
};

type FormData = {
  Age: string;
  Breakfast: string;
  Calculate: string;
  Dinner: string;
  Exercise: string;
  FastFood: string;
  Favourite: string;
  Gender: string;
  Height: string;
  Lunch: string;
  Weight: string;
};

type AgeCalorie = {
  age: string;
  calorie: number;
};

const Home = () => {
  const [ageCalorie, setAgeCalorie] = useState<AgeCalorie[]>([]);

  const transformFormToMenuRequest = (formData: FormData): MenuRequest => {
    return {
      foodName: formData.Favourite,
    };
  };

  const prepareDataForChart = (formData: FormData[]) => {};

  const getAgeWithCalorie = (data: FormData[]) => {
    return data.map(async (d) => {
      const calories = await getMenuItems(
        transformFormToMenuRequest(d).foodName
      ).then((menu) =>
        getMenuInfo(menu.menuItems[0].id).then((info) =>
          info.nutrition.nutrients.filter(
            (n: { name: string }) => n.name == "Calories"
          )
        )
      );
      return { age: d.Age, calorie: calories[0].amount };
    });
  };
  useEffect(() => {
    getForm().then(async (data) => {
      Promise.all(getAgeWithCalorie(data.slice(0, 1))).then(res => setAgeCalorie(res))
    });

    console.log(ageCalorie)

    return () => {};
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-100">
        <Content>
          <div className="flex w-9/12">
            <Chart />
          </div>
        </Content>
      </div>
    </>
  );
};

export default Home;
