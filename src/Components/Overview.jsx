import React from "react";
import logo1 from "../assets/Image15.png"; // Keep existing logo if needed
import ecommerceImg from "../assets/TAPPPP2.png"; // Replace with relevant images
import courierImg from "../assets/TAPPPP.png"; // Replace with relevant images
import promoImg from "../assets/TAPPPP1.png"; // Promotional Marketing image
import dataInsightsImg from "../assets/TAPPPP4.png"; // Data Insights image
import data from "../assets/Image34.png"; // Data Insights image
import { FaArrowRightLong } from "react-icons/fa6";

// import { FaEnvelope, FaPaperPlane, FaSmile } from "react-icons/fa";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="bg-[#F4F5F8]">
      <div className="flex flex-col ssmd:py-[9rem] gap-2  md:py-[9rem]  smd:py-[9rem] smd:flex-row-reverse ssmd:flex-row-reverse  md:flex-row-reverse justify-center  items-center smd:max-w-screen-xl ssmd:max-w-screen-xl md:max-w-screen-xl smd:px-[6rem] ssmd:px-[3rem]  md:px-[6rem] mx-auto p-4 md:p-8 ssmd:p-8 smd:p-8 space-y-4 smd:space-y-0 md:space-y-0 ">
        <div className="md:w-1/2 ssmd:w-1/2 smd:w-1/2  rounded-xl flex justify-center items-center">
          <img
            src={logo1}
            alt="Logo"
            className="w-[48rem] ssmd:h-[22rem] smd:h-[25rem] object-cover rounded-[35px] "
          />
        </div>

        <div className="md:w-1/2 ssmd:w-1/2  smd:w-1/2 text-center ssmd:text-left smd:text-left md:text-left md:mr-5">
          <h1 className="md:text-6xl ssmd:text-4xl smd:text-5xl font-extrabold pb-3 text-[#262657] leading-[4rem]">
            Doing Business, <br />
            <span className="text-[#262657]">Has Just Got</span>
            <br />
            {/* <span className="hidden md:inline-block text-[#262657]">Got</span> */}
            {/* <span className="inline-block md:hidden text-[#262657]">Got</span> */}
            <span className="text-[#262657]"> Easier!</span>
          </h1>
          <p className="font-light ssmd:text-[18px] smd:text-[20px] mt-2 mb-3 mr-6 ">
            Your all-in-one platform for business success. We handle the
            complexities of your business, so you can focus on growing your
            sales.
          </p>
          <button className="bg-[#CCFF00] text-[#262657] ssmd:px-4 smd:px-6 py-3 smd:mt-4 ssmd:mt-2 rounded-[4px] font-medium hover:bg-[#c1f002] transition">
            Get In Touch →
          </button>
        </div>
      </div>
      <div className="bg-[#08081A]">
        <div className=" md:max-w-screen-xl ssmd:px-[3rem]  smd:max-w-screen-xl md:px-[6.5rem] smd:px-[6rem] mx-auto ssmd:py-[10rem]  smd:py-[10rem]  md:py-[10rem]  text-[#F4F5F8] ">
          <h3 className="md:text-[36px] ssmd:text-[32px] smd:text-[36px]  font-bold mb-4 text-[white]">
            What is Tapppp.
          </h3>
          <p className="md:text-[36px] smd:text-[36px] ssmd:text-[30px]   font-extrabold md:leading-[3rem] ssmd:leading-[3rem] smd:leading-[3rem]  text-[#F4F5F8]">
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
            <h4 className="text-white text-[16px] smd:mr-4 md:mr-6 font-semibold whitespace-nowrap">
              Explore for your business →
            </h4>
            <div className="flex ssmd:py-3 flex-wrap ssmd:gap-4 md:gap-4 smd:gap-2 ">
              <button className="border-[1px] border-[#F4F5F8] text-[#F4F5F8]  smd:px-[10px] smd:py-3 ssmd:py-3 ssmd:px-4  md:px-4 md:py-3 rounded-full md:text-[16px] smd:text-[12px] font-medium hover:bg-lime-400 hover:text-[#1a1a36] transition">
                Fashion & Clothing
              </button>
              <button className="border-[1px] border-[#F4F5F8] text-[#F4F5F8]  smd:px-[10px] smd:py-3 ssmd:py-3 ssmd:px-4  md:px-4 md:py-3 rounded-full md:text-[16px] smd:text-[12px] font-medium hover:bg-lime-400 hover:text-[#1a1a36] transition">
                Jewellery & Accessories
              </button>
              <button className="border-[1px] border-[#F4F5F8] text-[#F4F5F8]  smd:px-[10px] smd:py-3 ssmd:py-3 ssmd:px-4  md:px-4 md:py-3 rounded-full md:text-[16px] smd:text-[12px] font-medium hover:bg-lime-400 hover:text-[#1a1a36] transition">
                Home Decor
              </button>
              <button className="border-[1px] border-[#F4F5F8] text-[#F4F5F8]  smd:px-[10px] smd:py-3 ssmd:py-3 ssmd:px-4  md:px-4 md:py-3 rounded-full md:text-[16px] smd:text-[12px] font-medium hover:bg-lime-400 hover:text-[#1a1a36] transition">
                Restaurant & Cafe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center pt-[9rem]">
        <div class="md:max-w-screen-xl ssmd:max-w-screen-xl smd:max-w-screen-xl">
          <div className=" items-center justify-between ssmd:px-[3rem] smd:px-[6rem] md:px-[6rem]">
            <h2 className="md:text-[48px] smd:text-[48px] ssmd:text-[36px] ssmd:leading-[3rem]   smd:leading-[3.2rem] font-bold mb-4 text-left text-[#262657]">
              All business dimensions covered. <br />
              You focus on growth.
            </h2>
            <p className="text-[19px] text-[#262657] mb-14 text-left smd:text-[22px] ssmd:text-[20px] md:text-[22px] ">
              Tapppp mananges your orders, deliveries and everything in between.
            </p>
            {/* <em className="flex-shrink-0  text-[#262657]">
              From Orders to Deliveries, and everything in between
            </em> */}
          </div>

          <div class="grid smd:grid-cols-2 ssmd:grid-cols-2 md:grid-cols-2 smd:px-[6rem] ssmd:px-[3rem] md:px-[6rem] gap-6 md:gap-12 ssmd:gap-12  ">
            <div class="bg-white overflow-hidden rounded-[35px] ">
              <img
                src={courierImg}
                alt="Workflow"
                class="w-full h-[250px] object-cover "
              />
              <div class="p-6 pb-8">
                <h3 class="text-xl font-bold mb-2">Build Your Online Store</h3>
                <p class="text-gray-700 mb-4">
                  Sell in-person, online, or from anywhere. Take secure payments
                  from customers, clients, and more.
                </p>
                <a href="#" class="text-[#859e23] font-medium ">
                  See Ecommerce solutions &rarr;
                </a>
              </div>
            </div>

            <div class="bg-white overflow-hidden rounded-[35px] ">
              <img
                src={ecommerceImg}
                alt="Intelligence"
                class="w-full h-[250px] object-cover"
              />
              <div class="p-6 pb-8">
                <h3 class="text-xl font-bold mb-2">Courier And Deliveries</h3>
                <p class="text-gray-700 mb-4">
                  Tapppp has partnered with major cash-on-delivery as well as
                  on-demand delivery partners in Pakistan.
                </p>
                <a href="#" class="text-[#859e23] font-medium">
                  See delivery solutions &rarr;
                </a>
              </div>
            </div>

            <div class="bg-white overflow-hidden rounded-[35px] ">
              <img
                src={dataInsightsImg}
                alt="Security"
                class="w-full h-[250px] object-cover object-bottom"
              />
              <div class="p-6 pb-8">
                <h3 class="text-xl font-bold mb-2">Promotional Marketing</h3>
                <p class="text-gray-700 mb-4">
                  Tapppp provides you direct marketing options to your customers
                  through whatsapp integration
                </p>
                <a href="#" class="text-[#859e23] font-medium">
                  See marketing solutions &rarr;
                </a>
              </div>
            </div>

            <div class="bg-white overflow-hidden rounded-[35px] ">
              <img
                src={promoImg}
                alt="Customization"
                class="w-full h-[250px] object-cover"
              />
              <div class="p-6 pb-8">
                <h3 class="text-xl font-bold mb-2">Data Insights</h3>
                <p class="text-gray-700 mb-4">
                  Tapppp provides you with complete sales analytics as well as
                  customers data on your fingertips
                </p>
                <a href="#" class="text-[#859e23] font-medium">
                  See data insight solutions &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center py-[9rem]">
        {" "}
        {/* Match the max-width and padding */}
        <div class="md:max-w-screen-xl smd:max-w-screen-xl ssmd:max-w-screen-xl smd:px-[6rem] ssmd:px-[3rem] md:px-[6rem] w-full">
          <div className="text-center  rounded-lg">
            <h2 className="md:text-[48px] smd:text-[48px] ssmd:text-[36px] smd:leading-[3.2rem] ssmd:leading-[2.8rem] font-bold mb-4 text-left text-[#262657]">
              Keep building your business. <br />
              We've got your back.
            </h2>
            <p className="text-[19px] text-[#262657] mb-10 text-left ">
              Tapppp helps guide your business every step of the way, no matter
              where you are in your journey.
            </p>
            <div className="w-full md:h-[380px] ssmd:h-[380px] smd:h-[380px] ">
              <img
                src={data}
                alt="Small shop with a variety of products"
                className="w-full h-full object-cover rounded-[25px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-[#08081A] text-[#F4F5F8] ">
        <div className="md:pt-[4rem] smd:pt-[4rem] ssmd:pb-[6rem] ssmd:pt-[4rem] smd:pb-[6rem] md:pb-[6rem] ">
          <h2 className="md:text-[40px] smd:text-[40px] ssmd:text-[32px] font-extralight text-[#F4F5F8]  ">
            Let's help you build your store
          </h2>
          <button className="bg-[#CCFF00] text-[#262657] hover:bg-[#c1f002] transition md:text-[14px] smd:text-[14px] ssmd:text-[14px] px-5 py-3 mt-4  rounded-[4px] font-medium ">
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
                    src={ecommerceImg}
                    alt="E-Commerce"
                    className="scrolling-img rounded-[16px]"
                  />
                  <img
                    src={courierImg}
                    alt="Courier"
                    className="scrolling-img rounded-[16px]"
                  />
                  <img
                    src={promoImg}
                    alt="Promotions"
                    className="scrolling-img rounded-[16px]"
                  />
                  <img
                    src={dataInsightsImg}
                    alt="Data Insights"
                    className="scrolling-img rounded-[16px]"
                  />
                  <img
                    src={data}
                    alt="Small Shop"
                    className="scrolling-img rounded-[16px]"
                  />
                  {/* Duplicate images for continuous scrolling */}
                  <img
                    src={ecommerceImg}
                    alt="E-Commerce"
                    className="scrolling-img rounded-[16px]"
                  />
                  <img
                    src={courierImg}
                    alt="Courier"
                    className="scrolling-img rounded-[16px]"
                  />
                  <img
                    src={promoImg}
                    alt="Promotions"
                    className="scrolling-img rounded-[16px]"
                  />
                  <img
                    src={dataInsightsImg}
                    alt="Data Insights"
                    className="scrolling-img rounded-[16px]"
                  />
                  <img
                    src={data}
                    alt="Small Shop"
                    className="scrolling-img rounded-[16px]"
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
                  src={ecommerceImg}
                  alt="E-Commerce"
                  className="scrolling-img rounded-[16px]"
                />
                <img src={courierImg} alt="Courier"                     className="scrolling-img rounded-[16px]"
                />
                <img
                  src={promoImg}
                  alt="Promotions"
                  className="scrolling-img rounded-[16px]"
                />
                <img
                  src={dataInsightsImg}
                  alt="Data Insights"
                  className="scrolling-img rounded-[16px]"
                />
                <img
                  src={data}
                  alt="Small Shop"
                  className="scrolling-img rounded-[16px]"
                />
                {/* Duplicate images for continuous scrolling */}
                <img
                  src={ecommerceImg}
                  alt="E-Commerce"
                  className="scrolling-img rounded-[16px]"
                />
                <img
                  src={courierImg}
                  alt="Courier"
                  className="scrolling-img rounded-[16px]"
                />
                <img
                  src={promoImg}
                  alt="Promotions"
                  className="scrolling-img rounded-[16px]"
                />
                <img
                  src={dataInsightsImg}
                  alt="Data Insights"
                  className="scrolling-img rounded-[16px]"
                />
                <img
                  src={data}
                  alt="Small Shop"
                  className="scrolling-img rounded-[16px]"
                />
              </div>
            </div>
            {/* Form positioned on top of the scrolling container */}
            <div className="absolute  smd:px-[10rem] ssmd:px-[7rem] md:px-[20rem] inset-0 flex justify-center items-end md:bottom-1 smd:bottom-1  ssmd:bottom-1">
              <div className="max-w-screen-md w-full md:pt-20 md:pb-16 md:pl-16  ssmd:pt-20 ssmd:pb-16 ssmd:pl-16 smd:pt-20 smd:pb-16 smd:pl-16 smd:p-0 ssmd:p-0  md:p-0 bg-[#f9fafb] bg-opacity-95 text-center shadow-md border border-gray-200 rounded-lg">
                <div className="flex  space-x-4 smd:mb-[1.4rem] ssmd:mb-[1.4rem] md:mb-[1.4rem] gap-[3rem]">
                  <h1 className="md:text-[26px] ssmd:text-[26px] smd:text-[26px] font-bold text-black text-left ">
                    Stay in touch.
                  </h1>
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

                <p className="md:text-[14px] ssmd:pr-4 smd:text-[14px] smd:block ssmd:text-[14px] ssmd:block small:hidden  font-bold text-black md:mb-10 ssmd:mb-10  smd:mb-10  text-left">
                  Get insights and inspiration for your business delivered right
                  to your inbox.
                </p>

                <div className="flex space-x-2 md:mb-6 ssmd:mb-6  smd:mb-6  w-[85%]  ">
                  <input
                    type="email"
                    placeholder="Email address"
                    style={{ fontSize: "16px" }}
                    className="border w-full smd:h-12   ssmd:h-12  md:h-12  border-gray-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#B9B9B9]"
                  />
                  <button
                    type="submit"
                    className="bg-[#CCFF00] text-[#262657] hover:bg-[#c1f002] transition md:text-[18px] smd:text-[18px] ssmd:text-[18px] md:px-6 smd:px-6 ssmd:px-6  rounded-[3px] font-light "
                  >
                    Submit
                  </button>
                </div>

                <p className="md:text-[12px] ssmd:text-[12px] smd:text-[12px] text-gray-500 text-left">
                  *This information may be transcribed, used, and stored by
                  third parties in <br></br>
                  <a
                    href="#"
                    className="text-blue-600 leading-[1.5rem] underline"
                  >
                    accordance with our Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center ssmd:pb-8 md:pb-8 smd:pb-8 ssmd:pt-6 md:pt-6 smd:pt-6  md:px-0 smd:px-0">
          <p className="text-[#BCC1CA] md:text-[14px] smd:text-[14px] ssmd:text-[14px] ">
            © 2024 All Rights Reserved. For support or inquiries, contact us at{" "}
            <a href="mailto:support@tapppp.com" className="text-lime-400">
              support@tapppp.com
            </a>
          </p>
          <p className="text-[#BCC1CA] smd:text-[14px] md:text-[14px] ssmd:text-[14px]">
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
          animation: scroll 30s linear infinite;
          gap: 20px;
        }

        .scrolling-img {
          height: 200px;
          object-fit: cover;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          /* For small devices */
          .scrolling-img {
            height: 90px;
          }
        }

        @media (min-width: 768px) and (max-width: 1900px) {
          /* For medium devices */
          .scrolling-img {
            height: 240px;
            width: 450px;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Overview;
