import {
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import {
  getRandomFood,
  getMealPlan,
  getForm,
} from "../services/spoonacular.js";

const Content = () => {
  const [randomFood, setRandomFood] = useState<any[]>([]);
  const [mealPlan, setMealPlan] = useState<any>({});
  const [formData, setFormData] = useState<any[]>([]);

  useEffect(() => {
    getForm().then((allData) => {
      allData.map((data: any) => {
        formData.push(data);
        console.log("pushed");
      });
      console.log(formData);
      // console.log(formData[2]);
    });
  }, []);

  // useEffect(() => {
  //   getRandomFood().then((data) => {
  //     setRandomFood(data.recipes);
  //   });
  // }, []);

  // useEffect(() => {
  //   getMealPlan().then((data) => {
  //     setMealPlan(data);
  //     console.log(mealPlan);
  //   });
  // }, []);
  return (
    <div>
      <div>
        Content
        {/* {randomFood.map((food) =>
            food.extendedIngredients.map((extended: any) => (
              <p>{extended.name}</p>
            ))
          )} */}
      </div>

      {/* <div>
        Content
        {mealPlan.week.monday.meals.map((meal: any) => meal.title)}
      </div> */}
    </div>
  );
};

export default Content;
