import React from "react";

const Card = ({ name, imgUrl, meal }: { name: string, imgUrl: string, meal: string }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
        alt="Food"
      />
      <div className="px-6 py-4">
        <div className="text-l mb-2">Meal: {meal}</div>
        <div className="text-xl mb-2">{name}</div>
      </div>
    </div>
  );
};

export default Card;
