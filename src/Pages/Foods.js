import React, { useState } from 'react'
import axios from 'axios'
import FoodItems from '../Components/Foods/FoodItems';
import Input from '../Components/Foods/Input';

const Foods = () => {
  const [inputText, setInputText] = useState("");
  const [foodsData, setFoodsData] = useState([]);

  const handleSearch = async () => {
     try {
       const response = await axios.get(
         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${inputText}&number=30`
       );
       setFoodsData(response.data.results || []);
     } catch (error) {
       console.error("Error fetching equipment data:", error);
     }
}

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 gap-6 my-8 ">
      <Input
        value={inputText}
        setInputText={setInputText}
        handleSearch={handleSearch}
      />
      <FoodItems foodsData={ foodsData} />
    </div>
  );
}

export default Foods