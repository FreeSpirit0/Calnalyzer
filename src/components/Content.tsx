import React, {
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { getRandomFood } from "../services/spoonacular.js";
import Card from "./Card";
const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 flex-row height-100">
      {children}
    </div>
  );
};

export default Content;
