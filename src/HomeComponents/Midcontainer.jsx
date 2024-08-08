import React from "react";
import foodImage from "../assets/Pizzagirl.png";
import group1 from "../assets/Group 3.png";
import group2 from "../assets/Group 2.png";
import group3 from "../assets/Group1.png";
import color from "../assets/color.png";
import backgroundimage from "../assets/Group 111.png";
import { IoMdMenu } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
export default function Midcontainer() {
  return (
    <>
      <div className="hidden md:flex py-4 bg-slate-950 h-auto text-sm mx-5 border-4 rounded-lg  relative">
        {/* Large Container for Text and Photos */}
        <div className="mx-10 mt-12 ml-14  text-white rounded-lg p-6">
          <h2 className="text-2xl mb-4">
            Order Restaurant food takeaway and groceries
          </h2>
          <p className="font-bold text-4xl mb-4">Feast Your Senses,</p>
          <p className="text-orange-500 font-bold text-4xl mb-4">
            Fast and Fresh,
          </p>
          <p className="mb-4">Enter the PostCode here</p>
          <div className="ml-auto flex items-center">
            <div className="relative">
              <div className=" flex">
                <input
                  type="text"
                  placeholder="EX445FT....."
                  className="py-3 px-8 rounded-full border text-black border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 flex-1 w-64"
                />
                <button className="absolute right-0 bottom-0 top-0 bg-orange-500 text-white py-3 px-8 rounded-full">
                  <p>Search</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center ">
          <img src={foodImage} className="rounded-lg mr-2" />
        </div>
        <div className="relative">
          <img src={color} alt="Main Background" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <img
              src={group1}
              alt="Group 1"
              className=" flex items-center justify-center w-48 h-28 rounded-lg "
            />
            <img
              src={group3}
              alt="Group 1"
              className=" flex items-center justify-center w-48 h-28 rounded-lg "
            />
            <img
              src={group2}
              alt="Group 1"
              className=" flex items-center justify-center w-48 h-28 rounded-lg "
            />
          </div>
        </div>
      </div>
      {/* Component for the small screens */}
      <div className="lg:hidden m-3 rounded-lg p-5 flex flex-col gap-3 bg-slate-950 text-white text-center">
        <h6 className="">Order Restaurant food, takeaway and groceries.</h6>
        <h1 className="text-2xl font-semibold">
          Feast Your Senses,
          <br />
          <span className="text-orange-500">Fast and Fresh</span>
        </h1>
        <h6>Enter a postcode to see what we deliver</h6>
        <div className=" flex rounded-full justify-end bg-slate-50 text-black  ">
          <input
            type="text"
            placeholder="Search "
            className="rounded-full p-2 outline-none focus:outline-none  w-full"
          />
          <div className="h-[40px]  bg-orange-500 flex justify-center items-center  p-3 rounded-full  text-black  ">
            <FaChevronRight className="  rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}
