import React from "react";
import FoodIcon from "./FoodIcon";
import FooterNav from "./FooterNav";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <FoodIcon/>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>

          <FooterNav/>

          <SocialIcons/>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
