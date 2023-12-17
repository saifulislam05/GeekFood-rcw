import React from "react";
import NavSingleItem from "./NavSingleItem";

const NavItems = () => {
  const navTitles = ["Home", "Quote", "Restaurants","Foods", "Contact"];

  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {navTitles.map((title, index) => (
          <NavSingleItem key={index} title={title} />
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
