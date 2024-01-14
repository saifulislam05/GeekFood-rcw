import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ data }) => {
  const { id, title, image } = data;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-full object-fill"
        />
      </figure>
      <div className="card-body items-center justify-end text-center">
        <h2 className="card-title">{title}</h2>
        <Link
          to={`/foods/recipe/${id}/${title}/${encodeURIComponent(image)}`}
          className="btn btn-primary btn-sm text-white"
        >
          Get Recipe
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
