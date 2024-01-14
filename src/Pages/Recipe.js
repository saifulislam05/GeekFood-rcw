import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const [equipments, setEquipments] = useState([]);
  let { foodId, title, image } = useParams();
  image = decodeURIComponent(image);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${foodId}/equipmentWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setEquipments(response.data.equipment || []);
      } catch (error) {
        console.error("Error fetching equipment data:", error);
      }
    };

    fetchEquipments();
  }, [foodId]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 gap-6 my-8 ">
      <img src={image} alt={title} className="mx-auto mt-4 rounded-md" />
      <h2 className=" mx-auto text-xl text-center font-semibold border-b-2 border-black my-4 pb-1 w-fit">
        Equipments need for <span className="font-bold">{title}</span> Recipe
      </h2>

      <ol className="w-fit mx-auto list-decimal">
        {equipments.map((equipment, index) => (
          <li className="font-semibold" key={index}>{equipment.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
