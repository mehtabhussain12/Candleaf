import React from "react";
import bgimg from "../assets/bg-image.png";
import bgimgd from "../assets/bg-imaged.png";
import Products from "./Products";

const Hero = () => {
  return (
   <>
    <div className="relative flex items-center justify-center mt-6  ">
      <img
        src={bgimgd}
        alt=""
        className="hidden sm:hidden lg:block md:block w-full h-full"
      />
      <img
        src={bgimg}
        alt=""
        className="block sm:block lg:hidden md:hidden w-full h-full"
      />

      <div className=" sm:text-xsm  absolute  lg:w-[730px] lg:h-[350px] md:w-[730px] md:h-[350px] sm:w-[350px] sm:h-[370px]  flex flex-col items-center justify-center bg-[#F7F8FA] bg-opacity-80  sm:p-8 sm:m-4 md:p-16 lg:p-24 text-center">
        <div className="w-full max-w-2xl px-2 py-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            🌱 <br /> The Nature Candle
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10">
            All handmade with natural soy wax. Candleaf is a companion to <br />{" "}
            all your pleasure moments.
          </p>
          <button className="bg-[#56B280]  text-white py-2 px-6 mb-6 rounded hover:bg-green-600 transition">
            <a href="">Discover our collection</a>
          </button>
        </div>
      </div>
    </div>
    <Products/>
   </>
  );
};

export default Hero;
