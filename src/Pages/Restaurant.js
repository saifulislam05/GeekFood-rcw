import React, { useState } from "react";
import RestaurantList from "../Components/Restaurant/RestaurantList";
import Header from "../Components/Header/Header";
import FilterInput from "../Components/Restaurant/FilterInput";
import RestaurantsData from '../Data/Restaurants.json'

const Restaurent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleRating = (event) => {
    setMinRating(event.target.value);
  };

  const filteredRestaurants = RestaurantsData.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) && restaurant.rating >= minRating
  });
  console.log(filteredRestaurants);
  return (
    <>
      <Header />
      <FilterInput
        searchTerm={searchTerm}
        minRating={minRating}
        handleSearch={handleSearch}
        handleRating={handleRating}
      />
      <hr className="max-w-screen-xl mx-auto" />
      <RestaurantList restaurants={filteredRestaurants}/>
    </>
  );
};

export default Restaurent;
