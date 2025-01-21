import React from "react";
import ecommerceImg from "../assets/TAPPPP2.png"; // Replace with relevant images
import courierImg from "../assets/TAPPPP.png"; // Replace with relevant images
import promoImg from "../assets/TAPPPP1.png"; // Promotional Marketing image
import dataInsightsImg from "../assets/TAPPPP4.png"; // Data Insights image
import data from "../assets/Image34.png"; // Data Insights image
import Buttons from "./ResuablelComponents/Buttons";
import ImageScroller from "./ResuablelComponents/ImageScroller";
import HorizontalScrolling from "./ResuablelComponents/HorizontalScrolling";

const Overview = () => {
  return (
    <div className="bg-[#F4F5F8]">
      <div className="small:flex flex-col small:py-[2rem] ssmd:py-[9rem] gap-2 md:py-[9rem] smd:py-[9rem] smd:flex-row-reverse ssmd:flex-row-reverse md:flex-row-reverse justify-center items-center small:max-w-screen-xl smd:max-w-screen-xl ssmd:max-w-screen-xl md:max-w-screen-xl smd:px-[6rem] small:px-[2rem] ssmd:px-[3rem] md:px-[6rem] mx-auto p-4 md:p-8 ssmd:p-8 small:p-0 smd:p-8 space-y-4 smd:space-y-0 md:space-y-0">
        {/* Text Content */}
        <div className=" md:w-1/2 small:w-full ssmd:w-1/2 smd:w-1/2 text-center ssmd:text-left small:text-left smd:text-left md:text-left md:mr-5 order-1 ssmd:order-2">
          <h1 className="md:text-6xl ssmd:text-4xl smd:text-5xl small:text-4xl font-extrabold pb-3 text-[#262657] leading-[4rem] fade-in-delay-1">
            Doing Business, <br />
            <span className="text-[#262657]">Has Just Got</span>
            <br />
            <span className="text-[#262657]"> Easier!</span>
          </h1>
          <p className="font-light ssmd:text-[18px] small:text-[17px] smd:text-[20px] mt-2 mb-3 mr-6 fade-in-delay-2">
            Your all-in-one platform for business success. We handle the
            complexities of your business, so you can focus on growing your
            sales.
          </p>
          <button className="bg-[#CCFF00] text-[#262657] small:px-4 ssmd:px-4 smd:px-6 py-3 smd:mt-4 small:mt-2 ssmd:mt-2 rounded-[4px] font-medium hover:bg-[#c1f002] transition fade-in-delay-3">
            Get In Touch →
          </button>
        </div>

        {/* Image Content */}
        <ImageScroller />
      </div>

      <div id="Aboutus-section" className="bg-[#08081A]">
        <div className=" md:max-w-screen-xl  small:max-w-screen-xl small:px-[2rem] ssmd:px-[3rem]  smd:max-w-screen-xl md:px-[6.5rem] smd:px-[6rem] mx-auto ssmd:py-[10rem] small:py-[5rem] smd:py-[10rem]  md:py-[10rem]  text-[#F4F5F8] ">
          <h3 className="md:text-[36px] ssmd:text-[32px] smd:text-[36px] small:text-[30px]  font-bold mb-4 text-[white]">
            What is Tapppp.
          </h3>
          <p
            data-letters="Tapppp aims to simplify the way businesses interact with their customers both online and offline in-store. Our unified platform offers a seamless experience designed to simplify every aspect of business operations from quick online store creation to online checkouts and all the way to one-click delivery services."
            className="title multi-line md:text-[36px] smd:text-[36px] small:text-[25px] small:leading-[1.8rem] ssmd:text-[30px]   font-extrabold md:leading-[3rem] ssmd:leading-[3rem] smd:leading-[3rem]  text-[#F4F5F8]"
          >
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
            <div className="flex small:py-3 ssmd:py-3 flex-wrap ssmd:gap-4 small:gap-2 md:gap-4 smd:gap-2">
              <Buttons label="Fashion & Clothing" />
              <Buttons label="Jewellery & Accessories" />
              <Buttons label="Home Decor" />
              <Buttons label="Restaurant & Cafe" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="Features-section"
        className="flex justify-center small:pt-[5rem] ssmd:pt-[9rem]"
      >
        <div className="md:max-w-screen-xl small:max-w-screen-xl ssmd:max-w-screen-xl smd:max-w-screen-xl">
          <div className=" items-center justify-between ssmd:px-[3rem] small:px-[2rem] smd:px-[6rem] md:px-[6rem]">
            <h2 className="md:text-[48px] smd:text-[48px] small:text-[30px] small:leading-[2rem] ssmd:text-[36px] ssmd:leading-[3rem]   smd:leading-[3.2rem] font-bold mb-4 text-left text-[#262657]">
              All business dimensions covered. <br />
              You focus on growth.
            </h2>
            <p className="small:text-[16px] text-[#262657] mb-14 text-left smd:text-[22px] ssmd:text-[20px] md:text-[22px] ">
              Tapppp mananges your orders, deliveries and everything in between.
            </p>
          </div>

          <div className="grid xxsmall:grid-cols-2 ssmd:grid-cols-2 md:grid-cols-2 small:px-[2rem] smd:px-[6rem] ssmd:px-[3rem] md:px-[6rem] gap-6 md:gap-12 ssmd:gap-12  ">
            <div className="bg-white overflow-hidden ssmd:rounded-[35px] small:rounded-[15px]  ">
              <img
                src={courierImg}
                alt="Workflow"
                className="w-full xsmall:h-[250px] ssmd:h-[250px] small:h-[180px] object-cover "
              />
              <div className="ssmd:p-6 ssmd:pb-8 small:p-4 small:pb-4">
                <h3 className="ssmd:text-xl xsmall:text-xl font-bold mb-2">
                  Build Your Online Store
                </h3>
                <p className="text-gray-700 small:text-[12px] xsmall:text-[14px] ssmd:text-[16px] mb-4">
                  Sell in-person, online, or from anywhere. Take secure payments
                  from customers, clients, and more.
                </p>
                <a
                  href="#"
                  className="text-[#859e23] xsmall:text-[16px] ssmd:text-[16px] small:text-[12px] font-medium "
                >
                  See Ecommerce solutions &rarr;
                </a>
              </div>
            </div>

            <div className="bg-white overflow-hidden ssmd:rounded-[35px] small:rounded-[15px]  ">
              <img
                src={ecommerceImg}
                alt="Intelligence"
                className="w-full xsmall:h-[250px] ssmd:h-[250px] small:h-[180px] object-cover "
              />
              <div className="ssmd:p-6 ssmd:pb-8 small:p-4 small:pb-4">
                <h3 className="ssmd:text-xl xsmall:text-xl font-bold mb-2">
                  Courier And Deliveries
                </h3>
                <p className="text-gray-700 small:text-[12px] xsmall:text-[14px] ssmd:text-[16px] mb-4">
                  Tapppp has partnered with major cash-on-delivery as well as
                  on-demand delivery partners in Pakistan.
                </p>
                <a
                  href="#"
                  className="text-[#859e23] xsmall:text-[16px] ssmd:text-[16px] small:text-[12px] font-medium "
                >
                  See delivery solutions &rarr;
                </a>
              </div>
            </div>

            <div className="bg-white overflow-hidden ssmd:rounded-[35px] small:rounded-[15px]  ">
              <img
                src={dataInsightsImg}
                alt="Security"
                className="w-full xsmall:h-[250px] ssmd:h-[250px] small:h-[180px] object-cover object-bottom "
              />
              <div className="ssmd:p-6 ssmd:pb-8 small:p-4 small:pb-4">
                <h3 className="ssmd:text-xl xsmall:text-xl font-bold mb-2">
                  Promotional Marketing
                </h3>
                <p className="text-gray-700 small:text-[12px] xsmall:text-[14px] ssmd:text-[16px] mb-4">
                  Tapppp provides you direct marketing options to your customers
                  through whatsapp integration
                </p>
                <a
                  href="#"
                  className="text-[#859e23] xsmall:text-[16px] ssmd:text-[16px] small:text-[12px] font-medium "
                >
                  See marketing solutions &rarr;
                </a>
              </div>
            </div>

            <div className="bg-white overflow-hidden ssmd:rounded-[35px] small:rounded-[15px]  ">
              <img
                src={promoImg}
                alt="Customization"
                className="w-full xsmall:h-[250px] ssmd:h-[250px] small:h-[180px] object-cover object-bottom "
              />
              <div className="ssmd:p-6 ssmd:pb-8 small:p-4 small:pb-4">
                <h3 className="ssmd:text-xl xsmall:text-xl font-bold mb-2">
                  Data Insights
                </h3>
                <p className="text-gray-700 small:text-[12px] xsmall:text-[14px] ssmd:text-[16px] mb-4">
                  Tapppp provides you with complete sales analytics as well as
                  customers data on your fingertips
                </p>
                <a
                  href="#"
                  className="text-[#859e23] xsmall:text-[16px] ssmd:text-[16px] small:text-[12px] font-medium "
                >
                  See data insight solutions &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center small:py-[4rem] ssmd:py-[9rem]">
        {" "}
        {/* Match the max-width and padding */}
        <div className="md:max-w-screen-xl small:max-w-screen-xl smd:max-w-screen-xl ssmd:max-w-screen-xl smd:px-[6rem]  small:px-[2rem] ssmd:px-[3rem] md:px-[6rem] w-full">
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
        <HorizontalScrolling />
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
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-delay-1 {
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }

        .fade-in-delay-2 {
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 1s;
          opacity: 0;
        }

        .fade-in-delay-3 {
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 1.5s;
          opacity: 0;
        }
              @keyframes scrollAnimation {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-scroll {
          animation: scrollAnimation 1s ease forwards;
        
      `}</style>
    </div>
  );
};

export default Overview;
