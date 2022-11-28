import {
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { getRandomFood } from "../services/spoonacular.js";
import Card from "./Card";
const Content = () => {
  const [randomFood, setRandomFood] = useState<any[]>([]);

  useEffect(() => {
    // getRandomFood().then((data) => {
    //   setRandomFood(data.recipes);
    // });
  }, []);
  return (
    <div className="flex-1 flex-row height-100">
      Content
      {randomFood.map((food) =>
        food.extendedIngredients.map((extended: any) => <Card name={extended.name}/>)
      )}
    </div>
  );
};

export default Content;
