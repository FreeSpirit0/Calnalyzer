import React, { useState, useEffect } from "react";
import "../App.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";
import { getForm } from "../services/spoonacular";
import Navbar from "../components/Navbar";

type CaloriesFoodRequest = {
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

const Home = () => {
  const prepareDataForSpooncular = (
    formData: FormData[]
  ): CaloriesFoodRequest[] => {
    return formData.map((data) => ({
      foodName: data.Favourite,
    }));
  };

  const prepareDataForChart = (formData: FormData[]) => {};

  useEffect(() => {
    getForm().then((data) => {
      console.log(data);
      console.log(prepareDataForSpooncular(data));
    });

    return () => {};
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex bg-gray-50">
        <Content>
          <div className="h-full w-full grid grid-cols-2 gap-10">
            <div className="h-full w-full">
              <Chart />
            </div>
            <div className="h-full w-full">
              <Chart />
            </div>
            <div className="flex col-span-2 h-full w-full">
              <div>
                <Chart />
              </div>
            </div>
          </div>
        </Content>
      </div>
    </>
  );
};

export default Home;
