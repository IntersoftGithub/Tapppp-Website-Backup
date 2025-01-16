import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/TappppNewLogo.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const scrollPosition = useRef(0);
  const navigate = useNavigate(); // Initialize navigate hook

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleBodyScroll = () => {
      if (menuOpen) {
        scrollPosition.current = window.scrollY; // Store scroll position
        document.body.style.position = "fixed";
        document.body.style.overflow = "hidden";
        document.body.style.width = "100%";
        document.body.style.top = `-${scrollPosition.current}px`;
      } else {
        document.body.style.position = "";
        document.body.style.overflow = "";
        document.body.style.width = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollPosition.current); // Restore scroll position
      }
    };

    handleBodyScroll();

    return () => {
      document.body.style.position = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [menuOpen]);

  const scrollToSection = (sectionId, buttonName) => {
    setMenuOpen(false);
    setActiveButton(buttonName);
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="ssmd:pt-20 small:pt-12">
      <nav className="fixed top-0 w-full flex bg-[#F4F5F8] justify-between items-center small:py-3 ssmd:py-2 px-4 z-10 border-b border-gray-300">
        <div className="pl-3 lg:pl-5">
          <img src={logo} alt="Logo" className="h-8 md:h-10" />
        </div>

        <div className="ssmd:hidden flex justify-center items-center h-full">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden ssmd:flex items-center px-6 py-3">
          <button
            onClick={() => scrollToSection("Aboutus-section", "About Us")}
            className={`px-4 py-2 text-[#262657] font-bold ${
              activeButton === "About Us" ? "text-[#c1f002]" : ""
            }`}
          >
            About us
          </button>
          <button
            onClick={() => scrollToSection("Features-section", "Features")}
            className={`px-4 py-2 text-[#262657] font-bold ${
              activeButton === "Features" ? "text-[#c1f002]" : ""
            }`}
          >
            Features
          </button>
          <button
            onClick={() =>
              scrollToSection("contact-sales-section", "Contact Sales")
            }
            className={`px-4 py-2 text-[#262657] font-bold ${
              activeButton === "Contact Sales" ? "text-[#c1f002]" : ""
            }`}
          >
            Contact sales
          </button>
          <button
            onClick={() => navigate("/create-store")} // Redirect to Create Store
            className="px-4 py-2 ml-4 font-bold hover:bg-[#c1f002] transition bg-[#CCFF00] text-[#262657] rounded-md "
          >
            Create Store
          </button>
          <button
            onClick={() => (window.location.href = "https://tapppp.com/Login")}
            className="px-4 py-2 ml-4 font-bold hover:bg-[#c1f002] transition bg-[#CCFF00] text-[#262657] rounded-md "
          >
            Sign In
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-[#F4F5F8] bg-opacity-[0.98] z-20 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ssmd:hidden`}
      >
        {/* Close button at the top */}
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Centered menu items */}
        <div className="flex flex-col items-center justify-center h-full p-6 space-y-4">
          <button
            onClick={() => scrollToSection("Aboutus-section", "About Us")}
            className={`px-4 py-2 text-[#262657] font-bold text-[40px] ${
              activeButton === "About Us" ? "text-[#c1f002]" : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("Features-section", "Features")}
            className={`px-4 py-2 text-[#262657] font-bold text-[40px] ${
              activeButton === "Features" ? "text-[#c1f002]" : ""
            }`}
          >
            Features
          </button>
          <button
            onClick={() =>
              scrollToSection("contact-sales-section", "Contact Sales")
            }
            className={`px-4 py-2 text-[#262657] font-bold text-[40px] pb-5 ${
              activeButton === "Contact Sales" ? "text-[#c1f002]" : ""
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => navigate("/create-store")} // Redirect to Create Store
            className="px-4 py-2 text-[22px] font-bold  hover:bg-[#c1f002] transition bg-[#CCFF00] text-[#262657] rounded-md"
          >
            Create Store
          </button>
          <button
            onClick={() => (window.location.href = "https://tapppp.com/Login")}
            className="px-4 py-2 text-[22px] font-bold  hover:bg-[#c1f002] transition bg-[#CCFF00] text-[#262657] rounded-md"
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="border-b border-[#bab9b9]"></div>
      {/* Text Below Dividers with Flex Layout for Left and Right Text */}
      <div className="flex justify-between  pl-8 bg-[#F4F5F8] items-center py-4  ">
        {/* Left Side Text */}
        <h1 className="text-[#262657] w-[55%]  font-semibold text-[14px] hover:text-[#c1f002] hover:underline cursor-pointer">
          Tapppp for E-commerce →
        </h1>
        {/* Right Side Buttons */}
        <div className="font-light text-[14px] w-[40%] text-right pr-10  ">
          <em>Tapppp POS And Online Ordering</em>
        </div>
      </div>
      {/* Divider Below Text */}
      <div className="border-b border-[#bab9b9]"></div>
    </div>
  );
};

export default Navbar;
