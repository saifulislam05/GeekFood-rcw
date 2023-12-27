import React from "react";

const FilterInput = ({ searchTerm, minRating, handleSearch, handleRating }) => {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-between items-center  px-4 my-6">
      <input
        type="text"
        placeholder="Search restaurants..."
        className="border rounded-lg p-2 focus:border-[#2563eb] outline-none"
              value={searchTerm}
              onChange={handleSearch}
      />
      <div>
        <label htmlFor="minRating" className="mr-2">
          Minimum Rating:
        </label>
        <input
          type="number"
          id="minRating"
          min="0"
          max="5"
          step="1"
          className="border rounded-lg p-2 focus:border-[#2563eb] outline-none"
                  value={minRating}
                  onChange={handleRating}
        />
      </div>
    </div>
  );
};

export default FilterInput;
