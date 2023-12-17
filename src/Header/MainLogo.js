import React from 'react'

const MainLogo = () => {
  return (
    <a href="/" className="flex items-center">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 mr-3"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        GeekFoods
      </span>
    </a>
  );
}

export default MainLogo