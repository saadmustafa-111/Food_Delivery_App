import React, { useState } from "react";
import orderlogo from "../assets/LOGO 1.png";
import img from "../assets/Ellipse 9.png";
import basket from "../assets/Shopping Basket.png";
import { IoMdMenu } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const MobileHeader = ({ onclose }) => {
  return (
    <>
      <div className=" w-full flex flex-col lg:hidden p-3 ">
        <div className="flex justify-between">
          <div>
            <img src={orderlogo} alt="" className="w-20" />
          </div>
          <div className="flex items-center border-l-2  pl-3">
            <IoMdMenu size={30} onClick={() => onclose()} />
          </div>
        </div>
      </div>
      <div className="flex md:hidden ">
        <div className="flex gap-2 bg-orange-500 w-full p-6 items-center justify-center">
          <img src={img} alt="" />
          <p className="font-semibold">Saad </p>
        </div>
        <div className="flex gap-4 bg-green-600 w-full p-6 items-center justify-center">
          <div>
            <img src={basket} alt="" />
          </div>
          <div>
            <p className="font-semibold">GBP 79.89</p>
          </div>
        </div>
      </div>
      <div className=" md:hidden p-4 flex gap-4 justify-end items-center">
        <div>
          <FaLocationDot size={30} />
        </div>
        <div className="font-semibold ">
          <p>Lution Street, N4G-00....</p>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
