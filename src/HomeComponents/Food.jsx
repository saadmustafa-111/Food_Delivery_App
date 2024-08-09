import React from "react";
import food1 from "../assets/Group 8 (1).png";
import food2 from "../assets/Group 8 (2).png";

export default function Food() {
  return (
    <div className="py-4 m-2 h-auto text-sm md:mx-5">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative mb-4 md:mb-0 md:mr-0 w-full">
          <img src={food1} alt="Food 1" className="w-full h-auto " />
          <div className="absolute bg-white  text-black top-0 left-8  md:left-36 py-2 px-3 md:py-3 md:px-6  rounded-bl-md rounded-br-md  ">
            <p className="font-bold">Earn more with lower fees</p>{" "}
          </div>
          <div className="absolute bottom-0 ml-8 p-4 z-20">
            <p className="text-orange-500 text-base md:text-xl">
              sign up with business
            </p>
            <p className="text-white text-xl md:text-3xl font-bold  mb-4">
              Partner With Us
            </p>
            <button className="bg-orange-500 text-white py-2  px-4 md:py-3 md:px-6 rounded-full  text-sm md:text-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
        <div className="relative md:ml-4 w-full">
          <img src={food2} alt="Food 2" className="w-full h-auto " />
          <div className="absolute bg-white  text-black top-0 left-8  md:left-36 py-2 px-3  md:py-3 md:px-6 rounded-bl-md rounded-br-md  ">
            <p className="font-bold">Avail exclusive perks</p>{" "}
          </div>
          <div className="absolute bottom-0 left-0 ml-4 p-4 z-20">
            <p className="text-orange-500 text-base md:text-xl">
              sign up as a Rider
            </p>
            <p className="text-white text-xl md:text-3xl font-bold mb-4">
              Ride With Us
            </p>
            <button className="bg-orange-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-full text-sm md:text-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
