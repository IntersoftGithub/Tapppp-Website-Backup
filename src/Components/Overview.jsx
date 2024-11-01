import React, { useState, useEffect ,useRef} from "react";
import logo1 from "../assets/Image15.png"; // Keep existing logo if needed
import ecommerceImg from "../assets/TAPPPP2.png"; // Replace with relevant images
import courierImg from "../assets/TAPPPP.png"; // Replace with relevant images
import promoImg from "../assets/TAPPPP1.png"; // Promotional Marketing image
import dataInsightsImg from "../assets/TAPPPP4.png"; // Data Insights image
import data from "../assets/Image34.png"; // Data Insights image
import { FaArrowRightLong } from "react-icons/fa6";
import candles from "../assets/Carousal-Imges/luma-candles.jpg"; // Data Insights image
import winkler from "../assets/Carousal-Imges/markus-winkler.jpg"; // Data Insights image
import perspective from "../assets/Carousal-Imges/perspective-studio.jpg"; // Data Insights image
import bailey from "../assets/Carousal-Imges/jess-bailey.jpg";
import dan from "../assets/Carousal-Imges/dan-gold.jpg"; // Data Insights image
import cesar from "../assets/Carousal-Imges/cesar-saravia.jpg";
import soares from "../assets/Carousal-Imges/eduardo-soares.jpg"; // Data Insights image
import robin from "../assets/Carousal-Imges/robin-edqvist.jpg";
// import { FaEnvelope, FaPaperPlane, FaSmile } from "react-icons/fa";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Overview = () => {
  const items = [
    { image: candles, text: "Fashion & Clothing" },
    { image: winkler, text: "Home Decor" },
    { image: perspective, text: "Restaurant & Cafe" },
    { image: bailey, text: "Jewellery & Accessories" },
    { image: dan, text: "Fashion & Clothing" },
    { image: cesar, text: "Home Decor" },
    { image: soares, text: "Restaurant & Cafe" },
    { image: robin, text: "Jewellery & Accessories" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > previousScroll) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      previousScroll = currentScroll;
    };

    let previousScroll = window.pageYOffset;
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [items.length]);
  return (
    <div className="bg-[#F4F5F8]">
      <div className="small:flex flex-col small:py-[2rem] ssmd:py-[9rem] gap-2 md:py-[9rem] smd:py-[9rem] smd:flex-row-reverse ssmd:flex-row-reverse md:flex-row-reverse justify-center items-center small:max-w-screen-xl smd:max-w-screen-xl ssmd:max-w-screen-xl md:max-w-screen-xl smd:px-[6rem] small:px-[2rem] ssmd:px-[3rem] md:px-[6rem] mx-auto p-4 md:p-8 ssmd:p-8 small:p-0 smd:p-8 space-y-4 smd:space-y-0 md:space-y-0">
        {/* Text Content */}
        <motion.div
      ref={ref}
      className="md:w-1/2 small:w-full ssmd:w-1/2 smd:w-1/2 text-center ssmd:text-left small:text-left smd:text-left md:text-left md:mr-5 order-1 ssmd:order-2"
      initial={{ opacity: 0, y: scrollDirection === "down" ? 50 : -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: scrollDirection === "down" ? 50 : -50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="md:text-6xl ssmd:text-4xl smd:text-5xl small:text-4xl font-extrabold pb-3 text-[#262657] leading-[4rem]"
      >
        Doing Business, <br />
        <span className="text-[#262657]">Has Just Got</span>
        <br />
        <span className="text-[#262657]"> Easier!</span>
      </motion.h1>
      <motion.p
        className="font-light ssmd:text-[18px] small:text-[17px] smd:text-[20px] mt-2 mb-3 mr-6"
      >
        Your all-in-one platform for business success. We handle the complexities of your business, so you can focus on growing your sales.
      </motion.p>
      <motion.button
        className="bg-[#CCFF00] text-[#262657] small:px-4 ssmd:px-4 smd:px-6 py-3 smd:mt-4 small:mt-2 ssmd:mt-2 rounded-[4px] font-medium hover:bg-[#c1f002] transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Get In Touch →
      </motion.button>
    </motion.div>

        {/* Image Content */}
        <div className="md:w-1/2 image-container small:w-full ssmd:w-1/2 smd:w-1/2 relative rounded-xl flex justify-center items-center order-2 ssmd:order-1">
          <img
            src={items[currentIndex].image}
            alt="Sliding Image"
            className="ssmd:w-[48rem] image xsmall:w-[48rem] small:w-[40rem] small:h-[18rem] xsmall:h-[22rem] ssmd:h-[22rem] smd:h-[25rem] object-cover ssmd:rounded-[35px] small:rounded-[15px]"
          />
          <p className="absolute text-[18px] bottom-4 left-4 bg-black text-white px-3 py-1 rounded-full">
            {items[currentIndex].text}
          </p>
        </div>
      </div>

      <div id="Aboutus-section" className="bg-[#08081A]">
        <div className=" md:max-w-screen-xl  small:max-w-screen-xl small:px-[2rem] ssmd:px-[3rem]  smd:max-w-screen-xl md:px-[6.5rem] smd:px-[6rem] mx-auto ssmd:py-[10rem] small:py-[5rem] smd:py-[10rem]  md:py-[10rem]  text-[#F4F5F8] ">
          <h3 className="md:text-[36px] ssmd:text-[32px] smd:text-[36px] small:text-[30px]  font-bold mb-4 text-[white]">
            What is Tapppp.
          </h3>
          <p className="md:text-[36px] smd:text-[36px] small:text-[25px] small:leading-[1.8rem] ssmd:text-[30px]   font-extrabold md:leading-[3rem] ssmd:leading-[3rem] smd:leading-[3rem]  text-[#F4F5F8]">
            Tapppp aims to simplify the way businesses interact with their
            customers both online and offline in-store. Our unified platform
            offers a seamless experience designed to simplify every aspect of
            business operations from quick{" "}
            <span className="text-lime-400">online store</span> creation to
            online <span className="text-lime-400">checkouts</span> and all the
            way to one-click <span className="text-lime-400">delivery</span>{" "}
            services.
          </p>

          {/* Container for Buttons */}
          <div className="smd:flex items-center mr-2  gap-4 mt-20  ">
            <h4 className="text-white ssmd:text-[16px] small:text-[14px] smd:mr-4 md:mr-6 font-semibold whitespace-nowrap">
              Explore for your business →
            </h4>
            <div className="flex small:py-3 ssmd:py-3 flex-wrap ssmd:gap-4 small:gap-2 md:gap-4 smd:gap-2 ">
              <button className="border-[1px] border-[#F4F5F8] text-[#F4F5F8]  smd:px-[10px] small:px-2 smd:py-3 ssmd:py-3 ssmd:px-4  md:px-4 small:py-2 md:py-3 rounded-full md:text-[16px] small:text-[12px] smd:text-[12px] font-medium hover:bg-lime-400 hover:text-[#1a1a36] transition">
                Fashion & Clothing
              </button>
              <button className="border-[1px] border-[#F4F5F8] text-[#F4F5F8]  smd:px-[10px] small:px-2 smd:py-3 ssmd:py-3 ssmd:px-4  md:px-4 small:py-2 md:py-3 rounded-full md:text-[16px] small:text-[12px] smd:text-[12px] font-medium hover:bg-lime-400 hover:text-[#1a1a36] transition">
                Jewellery & Accessories
              </button>
              <button className="border-[1px] border-[#F4F5F8] text-[#F4F5F8]  smd:px-[10px] small:px-2 smd:py-3 ssmd:py-3 ssmd:px-4  md:px-4 small:py-2 md:py-3 rounded-full md:text-[16px] small:text-[12px] smd:text-[12px] font-medium hover:bg-lime-400 hover:text-[#1a1a36] transition">
                Home Decor
              </button>
              <button className="border-[1px] border-[#F4F5F8] text-[#F4F5F8]  smd:px-[10px] small:px-2 smd:py-3 ssmd:py-3 ssmd:px-4  md:px-4 small:py-2 md:py-3 rounded-full md:text-[16px] small:text-[12px] smd:text-[12px] font-medium hover:bg-lime-400 hover:text-[#1a1a36] transition">
                Restaurant & Cafe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Features-section"
        class="flex justify-center small:pt-[5rem] ssmd:pt-[9rem]"
      >
        <div class="md:max-w-screen-xl small:max-w-screen-xl ssmd:max-w-screen-xl smd:max-w-screen-xl">
          <div className=" items-center justify-between ssmd:px-[3rem] small:px-[2rem] smd:px-[6rem] md:px-[6rem]">
            <h2 className="md:text-[48px] smd:text-[48px] small:text-[30px] small:leading-[2rem] ssmd:text-[36px] ssmd:leading-[3rem]   smd:leading-[3.2rem] font-bold mb-4 text-left text-[#262657]">
              All business dimensions covered. <br />
              You focus on growth.
            </h2>
            <p className="small:text-[16px] text-[#262657] mb-14 text-left smd:text-[22px] ssmd:text-[20px] md:text-[22px] ">
              Tapppp mananges your orders, deliveries and everything in between.
            </p>
            {/* <em className="flex-shrink-0  text-[#262657]">
              From Orders to Deliveries, and everything in between
            </em> */}
          </div>

          <div class="grid xxsmall:grid-cols-2 ssmd:grid-cols-2 md:grid-cols-2 small:px-[2rem] smd:px-[6rem] ssmd:px-[3rem] md:px-[6rem] gap-6 md:gap-12 ssmd:gap-12  ">
            <div class="bg-white overflow-hidden ssmd:rounded-[35px] small:rounded-[15px]  ">
              <img
                src={courierImg}
                alt="Workflow"
                class="w-full xsmall:h-[250px] ssmd:h-[250px] small:h-[180px] object-cover "
              />
              <div class="ssmd:p-6 ssmd:pb-8 small:p-4 small:pb-4">
                <h3 class="ssmd:text-xl xsmall:text-xl font-bold mb-2">
                  Build Your Online Store
                </h3>
                <p class="text-gray-700 small:text-[12px] xsmall:text-[14px] ssmd:text-[16px] mb-4">
                  Sell in-person, online, or from anywhere. Take secure payments
                  from customers, clients, and more.
                </p>
                <a
                  href="#"
                  class="text-[#859e23] xsmall:text-[16px] ssmd:text-[16px] small:text-[12px] font-medium "
                >
                  See Ecommerce solutions &rarr;
                </a>
              </div>
            </div>

            <div class="bg-white overflow-hidden ssmd:rounded-[35px] small:rounded-[15px]  ">
              <img
                src={ecommerceImg}
                alt="Intelligence"
                class="w-full xsmall:h-[250px] ssmd:h-[250px] small:h-[180px] object-cover "
              />
              <div class="ssmd:p-6 ssmd:pb-8 small:p-4 small:pb-4">
                <h3 class="ssmd:text-xl xsmall:text-xl font-bold mb-2">
                  Courier And Deliveries
                </h3>
                <p class="text-gray-700 small:text-[12px] xsmall:text-[14px] ssmd:text-[16px] mb-4">
                  Tapppp has partnered with major cash-on-delivery as well as
                  on-demand delivery partners in Pakistan.
                </p>
                <a
                  href="#"
                  class="text-[#859e23] xsmall:text-[16px] ssmd:text-[16px] small:text-[12px] font-medium "
                >
                  See delivery solutions &rarr;
                </a>
              </div>
            </div>

            <div class="bg-white overflow-hidden ssmd:rounded-[35px] small:rounded-[15px]  ">
              <img
                src={dataInsightsImg}
                alt="Security"
                class="w-full xsmall:h-[250px] ssmd:h-[250px] small:h-[180px] object-cover object-bottom "
              />
              <div class="ssmd:p-6 ssmd:pb-8 small:p-4 small:pb-4">
                <h3 class="ssmd:text-xl xsmall:text-xl font-bold mb-2">
                  Promotional Marketing
                </h3>
                <p class="text-gray-700 small:text-[12px] xsmall:text-[14px] ssmd:text-[16px] mb-4">
                  Tapppp provides you direct marketing options to your customers
                  through whatsapp integration
                </p>
                <a
                  href="#"
                  class="text-[#859e23] xsmall:text-[16px] ssmd:text-[16px] small:text-[12px] font-medium "
                >
                  See marketing solutions &rarr;
                </a>
              </div>
            </div>

            <div class="bg-white overflow-hidden ssmd:rounded-[35px] small:rounded-[15px]  ">
              <img
                src={promoImg}
                alt="Customization"
                class="w-full xsmall:h-[250px] ssmd:h-[250px] small:h-[180px] object-cover object-bottom "
              />
              <div class="ssmd:p-6 ssmd:pb-8 small:p-4 small:pb-4">
                <h3 class="ssmd:text-xl xsmall:text-xl font-bold mb-2">
                  Data Insights
                </h3>
                <p class="text-gray-700 small:text-[12px] xsmall:text-[14px] ssmd:text-[16px] mb-4">
                  Tapppp provides you with complete sales analytics as well as
                  customers data on your fingertips
                </p>
                <a
                  href="#"
                  class="text-[#859e23] xsmall:text-[16px] ssmd:text-[16px] small:text-[12px] font-medium "
                >
                  See data insight solutions &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center small:py-[4rem] ssmd:py-[9rem]">
        {" "}
        {/* Match the max-width and padding */}
        <div class="md:max-w-screen-xl small:max-w-screen-xl smd:max-w-screen-xl ssmd:max-w-screen-xl smd:px-[6rem]  small:px-[2rem] ssmd:px-[3rem] md:px-[6rem] w-full">
          <div className="text-center  ">
            <h2 className="md:text-[48px] smd:text-[48px] small:text-[30px] ssmd:text-[36px] smd:leading-[3.2rem] ssmd:leading-[2.8rem] font-bold mb-4 text-left text-[#262657]">
              Keep building your business. <br />
              We've got your back.
            </h2>
            <p className="text-[19px] text-[#262657] mb-10 text-left ">
              Tapppp helps guide your business every step of the way, no matter
              where you are in your journey.
            </p>
            <div className="w-full md:h-[380px] xxsmall:h-[350px] ssmd:h-[380px] smd:h-[380px] small:h-[240px]">
              <img
                src={data}
                alt="Small shop with a variety of products"
                className="w-full h-full object-cover small:rounded-[15px] ssmd:rounded-[25px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact-sales-section"
        className=" text-center bg-[#08081A] text-[#F4F5F8] "
      >
        <div className="md:pt-[4rem] small:pt-[4rem]  smd:pt-[4rem] small:pb-[4rem] ssmd:pb-[6rem] ssmd:pt-[4rem] smd:pb-[6rem] md:pb-[6rem] ">
          <h2 className="md:text-[40px] smd:text-[40px] small:text-[20px] ssmd:text-[32px] font-extralight text-[#F4F5F8]  ">
            Let's help you build your store
          </h2>
          <button className="bg-[#CCFF00] text-[#262657] hover:bg-[#c1f002] transition md:text-[14px] smd:text-[14px] small:text-[14px] ssmd:text-[14px] px-5 py-3 mt-4  rounded-[4px] font-medium ">
            Contact Sales →
          </button>
        </div>
        <div>
          <div>
            <div className="mx-auto">
              {" "}
              {/* Center the overall container */}
              <div className="scrolling-container overflow-hidden py-3 flex justify-center">
                {" "}
                {/* Center the scrolling container */}
                <div className="auto-scrolling-images">
                  <img
                    src={candles}
                    alt="E-Commerce"
                    className="scrolling-img rounded-[15px]"
                  />
                  <img
                    src={winkler}
                    alt="Courier"
                    className="scrolling-img rounded-[15px]"
                  />
                  <img
                    src={perspective}
                    alt="Promotions"
                    className="scrolling-img rounded-[15px]"
                  />
                  <img
                    src={bailey}
                    alt="Data Insights"
                    className="scrolling-img rounded-[15px]"
                  />
                  <img
                    src={dan}
                    alt="Small Shop"
                    className="scrolling-img rounded-[15px]"
                  />
                  {/* Duplicate images for continuous scrolling */}
                  <img
                    src={cesar}
                    alt="E-Commerce"
                    className="scrolling-img rounded-[15px]"
                  />
                  <img
                    src={soares}
                    alt="Courier"
                    className="scrolling-img rounded-[15px]"
                  />
                  <img
                    src={robin}
                    alt="Promotions"
                    className="scrolling-img rounded-[15px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {" "}
            {/* Add this wrapper */}
            <div className="scrolling-container overflow-hidden py-5 flex justify-center">
              <div className="auto-scrolling-images">
                <img
                  src={candles}
                  alt="E-Commerce"
                  className="scrolling-img rounded-[15px]"
                />
                <img
                  src={winkler}
                  alt="Courier"
                  className="scrolling-img rounded-[15px]"
                />
                <img
                  src={perspective}
                  alt="Promotions"
                  className="scrolling-img rounded-[15px]"
                />
                <img
                  src={bailey}
                  alt="Data Insights"
                  className="scrolling-img rounded-[15px]"
                />
                <img
                  src={dan}
                  alt="Small Shop"
                  className="scrolling-img rounded-[15px]"
                />
                {/* Duplicate images for continuous scrolling */}
                <img
                  src={cesar}
                  alt="E-Commerce"
                  className="scrolling-img rounded-[15px]"
                />
                <img
                  src={soares}
                  alt="Courier"
                  className="scrolling-img rounded-[15px]"
                />
                <img
                  src={robin}
                  alt="Promotions"
                  className="scrolling-img rounded-[15px]"
                />
              </div>
            </div>
            {/* Form positioned on top of the scrolling container */}
            <div className="absolute  small:px-[2rem] smd:px-[10rem] ssmd:px-[7rem] md:px-[20rem] inset-0 flex justify-center items-end md:bottom-1 smd:bottom-1 small:bottom-[-10px]  ssmd:bottom-1">
              <div className="max-w-screen-md  w-full small:pt-10 small:pb-10 xxsmall:px-10 small:px-5 md:pt-20 md:pb-16 md:pl-16  ssmd:pt-20 ssmd:pb-16 ssmd:pl-16 smd:pt-20 smd:pb-16 smd:pl-16 smd:p-0 ssmd:p-0 small:p-0  md:p-0 bg-[#f9fafb] bg-opacity-95 text-center shadow-md border border-gray-200 rounded-lg">
                <div className="flex  space-x-4 smd:mb-[1.4rem] small:mb-[1.4rem]  ssmd:mb-[1.4rem] md:mb-[1.4rem] gap-[3rem]   ">
                  <div className="">
                    <h1 className="md:text-[26px] ssmd:text-[26px] smd:text-[26px] small:text-[18px] font-bold text-black text-left ">
                      Stay in touch.
                    </h1>
                  </div>
                  <div className="flex justify-center items-center gap-3 ">
                    <span className="text-[18px] text-black ">
                      <FaRegEnvelope />
                    </span>
                    <span className="text-[18px] text-black">
                      <PiPaperPlaneRightBold />
                    </span>
                    <span className="text-[18px] text-black">
                      <FaRegSmile />
                    </span>
                  </div>
                </div>

                <p className="md:text-[14px] small:text-[14px]  ssmd:pr-4 smd:text-[14px] smd:block ssmd:text-[14px] xxsmall:block small:hidden  font-bold text-black md:mb-10 xxsmall:mb-10 xxsmall:mr-10  smd:mb-10  text-left">
                  Get insights and inspiration for your business delivered right
                  to your inbox.
                </p>

                <div className="flex space-x-2 md:mb-6 ssmd:mb-6 small:mb-4  smd:mb-6 small:w-[95%] xxsmall:w-[80%]   ssmd:w-[85%]  ">
                  <input
                    type="email"
                    placeholder="Email address"
                    style={{ fontSize: "16px" }}
                    className="border w-full smd:h-12 small:h-10   ssmd:h-12  md:h-12  border-gray-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#B9B9B9]"
                  />
                  <button
                    type="submit"
                    className="bg-[#CCFF00] text-[#262657] hover:bg-[#c1f002] transition md:text-[18px] small:text-[15px] smd:text-[18px] ssmd:text-[18px] small:px-2  md:px-6 smd:px-6 ssmd:px-6  rounded-[3px] font-light "
                  >
                    Submit
                  </button>
                </div>

                <p className="md:text-[12px] small:text-[12px] ssmd:text-[12px] smd:text-[12px] text-gray-500 text-left">
                  *This information may be transcribed, used, and stored by
                  third parties in <br></br>
                  <a
                    href="#"
                    className="text-blue-600  leading-[1.5rem] underline"
                  >
                    accordance with our Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center small:pb-8 ssmd:pb-8 md:pb-8 smd:pb-8 small:pt-10 ssmd:pt-6 md:pt-6 smd:pt-6  small:px-0 md:px-0 smd:px-0">
          <p className="text-[#BCC1CA] md:text-[14px] small:text-[14px] smd:text-[14px] ssmd:text-[14px] small:px-5 ssmd:px-0">
            © 2024 All Rights Reserved. For support or inquiries, contact us at{" "}
            <a href="mailto:support@tapppp.com" className="text-lime-400">
              support@tapppp.com
            </a>
          </p>
          <p className="text-[#BCC1CA] small:text-[14px] smd:text-[14px] md:text-[14px] ssmd:text-[14px] small:px-5 ssmd:px-0">
            Proudly powered by tapppp, the ultimate platform for online business
            growth.
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrolling-container {
          position: relative;
          width: 100%;
        }

        .auto-scrolling-images {
          display: flex;
          width: calc(200%);
          animation: scroll 13s linear infinite;
          gap: 20px;
        }

        .scrolling-img {
          height: 200px;
          object-fit: cover;
          flex-shrink: 0;
        }

        @media (max-width: 760px) {
          /* For small devices */
          .scrolling-img {
            height: 90px;
            width: 300px;
          }
        }
        @media (max-width: 500px) {
          /* For small devices */
          .scrolling-img {
            height: 137px;
            width: 200px;
          }
        }
        @media (min-width: 501px) and (max-width: 759px) {
          /* For small devices */
          .scrolling-img {
            height: 189px;
            width: 300px;
          }
        }
        @media (min-width: 760px) and (max-width: 1900px) {
          /* For medium devices */
          .scrolling-img {
            height: 240px;
            width: 450px;
          }
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Overview;
