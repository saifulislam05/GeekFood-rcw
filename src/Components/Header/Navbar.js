import MainLogo from "./MainLogo";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <MainLogo />
          
          <NavItems />
          <div className="flex md:order-2">
            <button
              type="button"
              className="btn btn-primary btn-sm text-primary-content"
            >
              Get started
            </button>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
