import React, { useState, useEffect } from "react";
import "../App.css";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import AgeChart from "../components/AgeChart";
import { getForm, getMenuInfo, getMenuItems } from "../services/spoonacular";
import Navbar from "../components/Navbar";
import { n, N, r, R } from "chart.js/dist/chunks/helpers.core";
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
};

const Home = () => {
  const [ageCalorie, setAgeCalorie] = useState<AgeCalorie[]>([]);
  const [genderCalorie, setGenderCalorie] = useState<GenderCalorie[]>([]);
  const [selectedChart, setSelectedChart] = useState<number>(1);

  const transformFormToMenuRequest = (formData: FormData): MenuRequest => {
    return {
      foodName: formData.Favourite,
    };
  };

  const getAgeWithCalorie = async (data: FormData[]): Promise<AgeCalorie[]> => {
    const menuIdsPromise = data.map((d) => {
      const ids = getMenuItems(
        transformFormToMenuRequest(d).foodName
      ).then<number>((menu) => menu.menuItems[0].id);
      return ids;
    });

    const menuIds = await Promise.all(menuIdsPromise);

    const menuInfosPromise = menuIds.map((id) =>
      getMenuInfo(id).then((info) =>
        info.nutrition.nutrients.filter(
          (n: { name: string }) => n.name == "Calories"
        )
      )
    );

    const menuInfos = await Promise.all(menuInfosPromise);

    const calories = menuInfos.map((info) => info[0].amount);

    const ageCal = data.map((d, i) => ({
      age: d.Age,
      calorie: calories[i],
    }));

    return ageCal;
  };

  const getGenderWithCalorie = async (data: FormData[]): Promise<GenderCalorie[]> => {
    const menuIdsPromise = data.map((d) => {
      const ids = getMenuItems(
        transformFormToMenuRequest(d).foodName
      ).then<number>((menu) => menu.menuItems[0].id);
      return ids;
    });

    const menuIds = await Promise.all(menuIdsPromise);

    const menuInfosPromise = menuIds.map((id) =>
      getMenuInfo(id).then((info) =>
        info.nutrition.nutrients.filter(
          (n: { name: string }) => n.name == "Calories"
        )
      )
    );

    const menuInfos = await Promise.all(menuInfosPromise);

    const calories = menuInfos.map((info) => info[0].amount);

    const genderCalorie = data.map((d, i) => ({
      gender: d.Gender,
      calorie: calories[i],
    }));

    return genderCalorie;
  };

  useEffect(() => {
    const fetchAll = async () => {
      const ageWithCalorie = await getAgeWithCalorie(formMock.slice(0, 4));
      const genderWithCalorie = await getGenderWithCalorie(formMock.slice(0, 4));

      const groupedAge = ageWithCalorie.reduce((r, a) => {
        r[a.age] = r[a.age] || [];
        r[a.age].push(a);
        return r;
      }, Object.create(null));

      const calculatedAgeWithCalorie = Object.keys(groupedAge).map(groupKey => groupedAge[groupKey].reduce((r: { age: any; calorie: any; }, a: { calorie: any; }) => {
        return ({ age: r.age, calorie: r.calorie + a.calorie})
      }, { age: groupedAge[groupKey][0].age, calorie: 0}))

      // const groupedGender = genderWithCalorie.reduce((r, a) => {
      //   r[a.gender] = r[a.gender] || [];
      //   r[a.gender].push(a)
      //   return r;
      // }, Object.create(null))

      // const calculatedGenderWithCalorie = Object.keys(groupedGender).map(groupKey => groupedGender[groupKey].reduce((r: { gender: any; calorie: any; }, a: { calorie: any; }) => {
      //   return ({ age: r.gender, calorie: r.calorie + a.calorie})
      // }, { age: groupedAge[groupKey][0].gender, calorie: 0}))

      setAgeCalorie(calculatedAgeWithCalorie);
      setGenderCalorie(genderMock);
    };
    fetchAll();

    return () => {};
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-100">
        <Content>
          <div className="flex flex-col w-9/12">
            <div className="flex flex-row justify-center gap-16 mb-8">
              <span className="flex items-center font-bold">Filter By:</span>
              <button
                className="border rounded-lg p-4 hover:border-blue-400"
                onClick={(e) => setSelectedChart(1)}
              >
                By Age
              </button>
              <button
                className="border rounded-lg p-4 hover:border-blue-400"
                onClick={(e) => setSelectedChart(2)}
              >
                By Gender
              </button>
            </div>
            {selectedChart == 1 ? <AgeChart formData={ageCalorie} /> : <></>}
            {selectedChart == 2 ? (
              <GenderChart formData={genderCalorie} />
            ) : (
              <></>
            )}
          </div>
        </Content>
      </div>
    </>
  );
};

export default Home;
