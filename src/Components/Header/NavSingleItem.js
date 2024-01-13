import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavSingleItem = ({ title }) => {
  const location = useLocation();
  const isActive =
    location.pathname === (title === "Home" ? "/" : `/${title.toLowerCase()}`);
  let textColor = isActive ? "text-blue-700" : "text-white";
  return (
    <li>
      <NavLink
        to={title === "Home" ? "/" : `/${title.toLowerCase()}`}
        className={`block py-2 pl-3 pr-4 ${textColor} rounded hover:text-blue-700 md:p-0 dark:border-gray-700`}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default NavSingleItem;
