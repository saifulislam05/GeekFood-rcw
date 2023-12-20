import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavSingleItem = ({ title }) => {
  const location = useLocation();
  const isActive =
    location.pathname === (title === "Home" ? "/" : `/${title.toLowerCase()}`);
console.log(isActive);
  return (
    <li>
      <NavLink
        to={title === "Home" ? "/" : `/${title.toLowerCase()}`}
        className={`block py-2 pl-3 pr-4 ${
          isActive ? "text-blue-700" : "text-gray-900"
        } rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default NavSingleItem;
