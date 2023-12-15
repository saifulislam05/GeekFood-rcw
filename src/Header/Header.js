import Navbar from "./Navbar";

const Header = () => {
    const navItems = ["Home", "About", "Services", "FAQ", "Contact"];
  return (
    <>
      <h1 className="mb-4 text-3xl text-pink-800 md:text-4xl lg:text-5xl">
        Family Wellness
      </h1>
      <p className="mb-4 text-xs tracking-widest uppercase md:text-sm lg:text-base">
        Massage Therapy
      </p>
      <Navbar navItems={navItems}/>
    </>
  );
};

export default Header;
