import React, { useState, useEffect } from "react";
import "../App.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";
import { getForm } from "../services/spoonacular";

type CaloriesFoodRequest = {
  foodName: string
}

type FormData = {
  Age: string,
  Breakfast: string,
  Calculate: string,
  Dinner: string,
  Exercise: string,
  FastFood: string,
  Favourite: string,
  Gender: string,
  Height: string,
  Lunch: string,
  Weight: string
}

const Home = () => {
  const prepareDataForSpooncular = (formData: FormData[]): CaloriesFoodRequest[] => {
    return formData.map(
      data => ({
        foodName: data.Favourite
      })
    )
  }

  const prepareDataForChart = (formData: FormData[]) => {
    
  }

  useEffect(() => {
    getForm().then(data => {
      console.log(data)
      console.log(prepareDataForSpooncular(data))
    })

    return () => {
      
    }
  }, [])
  
  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <Content>
        <Chart />
      </Content>
    </div>
  );
};

export default Home;
