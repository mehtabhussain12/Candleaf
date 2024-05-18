import React from "react";
import s1 from "../assets/section.png";
import Testimonials from "./Testimonials";

const benefits = () => {
  return (
    <>
      <div className="bg-[#F7F8FA] mt-12 mb-2 flex flex-col lg:flex-row justify-center items-center ">
        <div className="w-full lg:w-[540px] mt-12 lg:mt-6 px-4 ">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Clean and <br />{" "}
            <span className="text-4xl lg:text-5xl">fragrant soy wax</span>
          </h1>
          <p className="text-[#56B280] pt-4 text-base lg:text-lg">
            Made for your home and for your wellness
          </p>
          <div className="lg:hidden block sm:block md:block rounded-lg shadow-md max-w-sm">
            <img src={s1} alt="" />
          </div>
          <ul className="mt-8 list-disc pl-5 lg:pl-0 ">
            <li>
              <h5 className="font-semibold">
                Eco-sustainable:{" "}
                <span className="font-normal">
                  All recyclable materials, 0% CO2 emissions
                </span>
              </h5>
            </li>
            <li>
              <h5 className="font-semibold">
                Hyphoallergenic
                <span className="font-normal">
                  100% natural, human friendly ingredients{" "}
                </span>
              </h5>
            </li>
            <li>
              <h5 className="font-semibold">
                Handmade:{" "}
                <span className="font-normal">
                  {" "}
                  All candles are craftly made with love.
                </span>
              </h5>
            </li>
            <li>
              <h5 className="font-semibold">
                Long burning:
                <span className="font-normal">
                  {" "}
                  No more waste. Created for last long.
                </span>
              </h5>
            </li>
          </ul>
          <div className="mt-8 justify-center flex sm:flex sm:justify-center lg:flex lg:justify-start">
            <button className="bg-[#56B280] text-white py-2 px-6 mb-6 rounded hover:bg-green-600 transition ">
              <a href=""> Learn More </a>
            </button>
          </div>
        </div>
        <div className="sm:hidden hidden lg:block md:block ">
          <img src={s1} alt="" />
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default benefits;
