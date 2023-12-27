import React, { useState } from "react";
import RestaurantList from "../Components/Restaurant/RestaurantList";
import Header from "../Components/Header/Header";
import FilterInput from "../Components/Restaurant/FilterInput";
import RestaurantsData from "../Data/Restaurants.json";
import Pagination from "../Components/Restaurant/Pagination";

const Restaurent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  };

  const handleRating = (event) => {
    setMinRating(event.target.value);
    setCurrentPage(1); 
  };

  const itemsPerPage = 9;
  const filteredRestaurants = RestaurantsData.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      restaurant.rating >= minRating
    );
  });

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const visibleRestaurants = filteredRestaurants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePage = (page) => {
    setCurrentPage(page);
  };

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
      <RestaurantList restaurants={visibleRestaurants} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageHandler={handlePage}
      />
    </>
  );
};

export default Restaurent;
