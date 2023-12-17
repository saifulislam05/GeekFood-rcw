import React from "react";
import FooterNavItem from "./FooterNavItem";

const FooterNav = () => {
  const footerNavItems = [
    "About",
    "Carrers",
    "History",
    "Services",
    "Projects",
    "Blogs",
  ];

  return (
    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      {footerNavItems.map((item, index) => (
        <FooterNavItem key={index} title={item} />
      ))}
    </ul>
  );
};

export default FooterNav;
