import React from "react";

const Card = ({ name, meal }: { name: string, meal: string }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="text-l mb-2">Meal: {meal}</div>
        <div className="text-xl mb-2">{name}</div>
      </div>
    </div>
  );
};

export default Card;
