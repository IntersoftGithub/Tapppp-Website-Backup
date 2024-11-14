import React, { useState, useEffect, useMemo } from "react";
import candles from "../../assets/Carousal-Imges/luma-candles.jpg";
import winkler from "../../assets/Carousal-Imges/markus-winkler.jpg";
import perspective from "../../assets/Carousal-Imges/perspective-studio.jpg";
import bailey from "../../assets/Carousal-Imges/jess-bailey.jpg";
import dan from "../../assets/Carousal-Imges/dan-gold.jpg";
import cesar from "../../assets/Carousal-Imges/cesar-saravia.jpg";
import soares from "../../assets/Carousal-Imges/eduardo-soares.jpg";
import robin from "../../assets/Carousal-Imges/robin-edqvist.jpg";

const ImageScroller = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showText, setShowText] = useState(true);  // Start by showing text

    const imageData = useMemo(
        () => [
            { image: candles },
            { image: winkler },
            { image: perspective },
            { image: bailey },
            { image: dan },
            { image: cesar },
            { image: soares },
            { image: robin },
        ],
        []
    );

    const textData = useMemo(
        () => [
            { text: "Fashion & Clothing" },
            { text: "Home Decor" },
            { text: "Restaurant & Cafe" },
            { text: "Jewellery & Accessories" },
            { text: "Fashion & Clothing" },
            { text: "Home Decor" },
            { text: "Restaurant & Cafe" },
            { text: "Jewellery & Accessories" },
        ],
        []
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText(false);  // Hide text just before the image changes
            setTimeout(() => {
                // After hiding text, change the image
                setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
            }, 500);  // Small delay for a smooth transition between hiding text and changing image
        }, 5000);  // 5 seconds for the image to stay before the change

        return () => clearInterval(interval);
    }, [imageData.length]);

    useEffect(() => {
        // Delay showing the text by 4 seconds after the image has changed
        const textTimeout = setTimeout(() => {
            setShowText(true);
        }, 1000);  // 4 seconds after the new image is set

        return () => clearTimeout(textTimeout);  // Clear the timeout when the image changes
    }, [currentIndex]);

    return (
        <div className="md:w-1/2 image-container small:w-full ssmd:w-1/2 smd:w-1/2 relative rounded-xl flex justify-center items-center order-2 ssmd:order-1">
            <img
                src={imageData[currentIndex].image}
                alt="Sliding Image"
                className="ssmd:w-[48rem] image xsmall:w-[48rem] small:w-[40rem] small:h-[18rem] xsmall:h-[22rem] ssmd:h-[22rem] smd:h-[25rem] object-cover ssmd:rounded-[35px] small:rounded-[15px]"
            />
            <p
                className={`absolute text-[16px] bottom-4 left-4 bg-black text-white px-3 py-1 rounded-full transition-opacity duration-700 ease-in-out ${
                    showText ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {textData[currentIndex].text}
            </p>
        </div>
    );
};

export default ImageScroller;
