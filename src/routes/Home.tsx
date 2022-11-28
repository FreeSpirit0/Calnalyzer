import React, { useState, useEffect } from "react";
import "../App.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import AgeChart from "../components/AgeChart";
import { getForm, getMenuInfo, getMenuItems } from "../services/spoonacular";
import Navbar from "../components/Navbar";
import { n, N } from "chart.js/dist/chunks/helpers.core";
import { caloriesMock, formMock, genderMock } from "../mock";
import GenderChart from "../components/GenderChart";

type MenuRequest = {
  foodName: string;
};

type FormData = {
  Age: number;
  Breakfast: string;
  Calculate: string;
  Dinner: string;
  Exercise: number;
  FastFood: number;
  Favourite: string;
  Gender: string;
  Height: number;
  Lunch: string;
  Weight: number;
};

export type AgeCalorie = {
  age: number;
  calorie: number;
};

export type GenderCalorie = {
  gender: string;
  calorie: number;
}

const Home = () => {
  const [ageCalorie, setAgeCalorie] = useState<AgeCalorie[]>([]);
  const [genderCalorie, setGenderCalorie] = useState<GenderCalorie[]>([]);
  const [selectedChart, setSelectedChart] = useState<number>(1);



  const transformFormToMenuRequest = (formData: FormData): MenuRequest => {
    return {
      foodName: formData.Favourite,
    };
  };

  const prepareDataForChart = (formData: FormData[]) => {};

  // const getAgeWithCalorie = (data: FormData[]) => {
  //   return data.map(async (d) => {
  //     const calories = await getMenuItems(
  //       transformFormToMenuRequest(d).foodName
  //     ).then((menu) => menu.menuItems[0].id)
  //     .then
  //       getMenuInfo(menu.menuItems[0].id).then((info) =>
  //         info.nutrition.nutrients.filter(
  //           (n: { name: string }) => n.name == "Calories"
  //         )
  //       )
  //     );
  //     return { age: d.Age, calorie: calories[0].amount };
  //   });
  // };

  useEffect(() => {
    setAgeCalorie(caloriesMock)
    setGenderCalorie(genderMock)

    return () => {};
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-100">
        <Content>
          <div className="flex flex-col w-9/12">
            <div className="flex flex-row justify-center gap-16 mb-8">
              <button className="border rounded-lg p-4 hover:border-blue-400" onClick={e => setSelectedChart(1)}>By Age</button>
              <button className="border rounded-lg p-4 hover:border-blue-400" onClick={e => setSelectedChart(2)}>By Gender</button>
            </div>
            {selectedChart == 1 ? <AgeChart formData={ageCalorie}/> : <></>}
            {selectedChart == 2 ? <GenderChart formData={genderCalorie} /> : <></>}
          </div>
        </Content>
      </div>
    </>
  );
};

export default Home;
