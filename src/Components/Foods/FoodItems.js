import React from "react";
import FoodCard from "./FoodCard";
import foodData from "../../Data/Food.json";

const FoodItems = ({ foodsData }) => {

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {foodsData.length > 0
        ? foodsData.map((item) => <FoodCard key={item.id} data={item} />)
        : foodData.map((item) => <FoodCard key={item.id} data={item} />)}
    </div>
  );
};

export default FoodItems;
