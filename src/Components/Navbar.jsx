import React from "react";
import logo from "../assets/TappppNewLogo.png";

const Navbar = () => {
  return (
    <div className="pt-20">
      {" "}
      {/* Add enough top padding to accommodate the navbar */}
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex bg-[#F4F5F8] justify-between items-center py-2 px-4 z-10 border-b border-gray-300">
  {/* Logo */}
  <div className="pl-3 lg:pl-5">
    <img src={logo} alt="Logo" className="h-8 md:h-10" />
  </div>

  {/* Navbar Items */}
  <div className="flex items-center px-6 py-3">
    {/* About Button */}
    <button className="px-4 py-2 text-gray-700">About</button>

    {/* Overview Button */}
    <button className="px-4 py-2 text-gray-700">Overview</button>
    <button className="px-4 py-2 text-gray-700">Contact sales</button>

    {/* Contact Sales Button - hidden on mobile (screen width < 640px) */}
    <button className="px-4 py-2 ml-4 hover:bg-[#c1f002] transition bg-[#CCFF00] text-[#262657] rounded-md">
      Sign In
    </button>
  </div>
</nav>

      {/* Horizontal Dividers Below Navbar */}
      <div className="border-b border-[#bab9b9]"></div>
      {/* Text Below Dividers with Flex Layout for Left and Right Text */}
      <div className="flex justify-between  bg-[#F4F5F8] items-center py-4 px-10">
        {/* Left Side Text */}
        <h1 className="text-[#262657] font-semibold text-[16px] hover:text-blue-500 hover:underline cursor-pointer">
          Tapppp for E-commerce →
        </h1>

        {/* Right Side Buttons */}
        <div className="font-light">
          <em>Tapppp POS And Online Ordering</em>
        </div>
      </div>
      {/* Divider Below Text */}
      <div className="border-b border-[#bab9b9]"></div>
    </div>
  );
};

export default Navbar;
