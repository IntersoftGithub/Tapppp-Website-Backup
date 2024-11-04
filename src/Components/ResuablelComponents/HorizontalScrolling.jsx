import React from "react";
import candles from "../../assets/Carousal-Imges/luma-candles.jpg";
import winkler from "../../assets/Carousal-Imges/markus-winkler.jpg";
import perspective from "../../assets/Carousal-Imges/perspective-studio.jpg";
import bailey from "../../assets/Carousal-Imges/jess-bailey.jpg";
import dan from "../../assets/Carousal-Imges/dan-gold.jpg";
import cesar from "../../assets/Carousal-Imges/cesar-saravia.jpg";
import soares from "../../assets/Carousal-Imges/eduardo-soares.jpg";
import robin from "../../assets/Carousal-Imges/robin-edqvist.jpg";

import candles1 from "../../assets/Carousal-Imges/43.jpg";
import winkler1 from "../../assets/Carousal-Imges/44.jpg";
import perspective1 from "../../assets/Carousal-Imges/45.jpg";
import bailey1 from "../../assets/Carousal-Imges/46.jpg";
import dan1 from "../../assets/Carousal-Imges/47.jpg";
import cesar1 from "../../assets/Carousal-Imges/48.jpg";
import soares1 from "../../assets/Carousal-Imges/49.jpg";
import robin1 from "../../assets/Carousal-Imges/50.jpg";

import { PiPaperPlaneRightBold } from "react-icons/pi";
import { FaRegEnvelope, FaRegSmile } from "react-icons/fa";

const HorizontalScrolling = () => {
  const images = [
    { src: candles, alt: "E-Commerce" },
    { src: winkler, alt: "Courier" },
    { src: perspective, alt: "Promotions" },
    { src: bailey, alt: "Data Insights" },
    { src: dan, alt: "Small Shop" },
    { src: cesar, alt: "E-Commerce" },
    { src: soares, alt: "Courier" },
    { src: robin, alt: "Promotions" },
  ];

  const images2 = [
    { src: candles1, alt: "E-Commerce" },
    { src: winkler1, alt: "Courier" },
    { src: perspective1, alt: "Promotions" },
    { src: bailey1, alt: "Data Insights" },
    { src: dan1, alt: "Small Shop" },
    { src: cesar1, alt: "E-Commerce" },
    { src: soares1, alt: "Courier" },
    { src: robin1, alt: "Promotions" },
  ];

  // Duplicate the arrays to enable seamless looping
  const loopingImages = [...images, ...images];
  const loopingImages2 = [...images2, ...images2];

  return (
    <div>
      <div>
        <div className="mx-auto">
          <div className="scrolling-container overflow-hidden py-3 flex justify-center">
            <div className="auto-scrolling-images">
              {loopingImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="scrolling-img rounded-[15px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="scrolling-container overflow-hidden py-5 flex justify-center">
          <div className="auto-scrolling-images">
            {loopingImages2.map((image, index) => (
              <img
                key={index + loopingImages2.length}
                src={image.src}
                alt={image.alt}
                className="scrolling-img rounded-[15px]"
              />
            ))}
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
              Get insights and inspiration for your business delivered right to
              your inbox.
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
              *This information may be transcribed, used, and stored by third
              parties in <br></br>
              <a href="#" className="text-blue-600  leading-[1.5rem] underline">
                accordance with our Privacy Policy.
              </a>
            </p>
          </div>
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

export default HorizontalScrolling;
