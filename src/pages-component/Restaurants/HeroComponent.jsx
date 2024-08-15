import React from "react";
import g23 from "../../assets/Group 23.png";
import cart from "../../assets/Cart.png";
import cycle from "../../assets/Motocross.png";
import burger from "../../assets/Burger.png";
import review from "../../assets/Review.png";
import clock from "../../assets/Clock.png";
import heading from "../../assets/Heading.png";
import { CiSearch } from "react-icons/ci";
import pizzagirl from "../../assets/GirlPizza.png";
import smallimg from "../../assets/Simage.png";
export default function HeroComponent() {
  return (
    <>
      {/* for large screens */}
      <div className="hidden py-6 mx-10 md:flex items-center">
        <div className="relative w-full">
          <img src={g23} alt="" className="w-full h-auto" />
          <div className="absolute inset-y-0 left-0 flex flex-col justify-center pl-10 gap-6">
            <p className="text-white text-xl">I'm loving it!</p>
            <h1 className="text-white text-4xl font-bold">
              McDonald's East London
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-white py-2 px-6 rounded-full">
                <img src={cart} alt="" className="mr-3" />
                <p className="text-white text-lg font-bold">
                  Minimum Order: 12 GBP
                </p>
              </div>
              <div className="flex items-center border-2 border-white py-2 px-6 rounded-full">
                <img src={cycle} alt="" className="mr-3" />
                <p className="text-white text-lg font-bold">
                  Delivery in 20-25 Minutes
                </p>
              </div>
            </div>
            <div className="absolute bottom-[-30px] left-0 border-4 border-orange-500 rounded-r-lg bg-orange-500 flex items-center space-x-4 py-3 px-8">
              <img src={clock} alt="" className="w-8 h-8" />
              <p className="text-white text-lg font-bold">Open until 3:00 AM</p>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-10">
            <img src={burger} alt="Small Image" className="" />
            <div className="absolute bottom-[40px] left-[-50px]">
              <img
                src={review}
                alt="Overlapping Image"
                className="h-auto"
                style={{ marginBottom: "30%%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* this is a search bar */}
      <div className="hidden   md:flex relative  ">
        <div className=" flex items-center mx-20 py-10 space-x-4 ">
          <img src={heading} alt="" className="space-x-4" />
          <div className="flex flex-1  absolute right-20 border-2 border-black  rounded-full px-8 py-3 items-center  justify-end">
            <CiSearch className="mr-4" />
            <input
              type="text"
              placeholder="Search from menu"
              className="focus:outline-none"
            />
          </div>
        </div>
      </div>
      {/* for small screens */}
      <div className="md:hidden m-2 bg-gray-200  rounded-lg h-full  pb-10  ">
        <div className="relative flex justify-center items-center p-10">
          <img src={pizzagirl} width={250} height={150} alt="" />
          <div className="absolute bottom-0  left-10">
            <img src={smallimg} alt="" />
          </div>
        </div>
        <div className="flex mt-5 gap-2 bg-orange-500 p-4 rounded-r-2xl w-10/12">
          <img src={clock} alt="" className="w-8 h-8" />
          <p className="text-white text-lg font-bold">Open until 3:00 AM</p>
        </div>
        <div className="flex flex-col p-4 mx-auto">
          <p className="whitespace-nowrap">
            Desi Flavours with a blend of Italian aesthetics!
          </p>
          <h1 className="text-[28px] font-bold">Tandoori Pizza London</h1>
        </div>
        <div className="flex flex-col gap-4 mx-auto px-5">
          <div className="flex justify-center gap-3 items-center bg-slate-950 rounded-3xl p-2 text-white">
            <img src={cart} alt="" />
            <p className="text-white font-bold">Minimum Order: 12 GBP</p>
          </div>
          <div className="flex  items-center justify-center gap-3 bg-slate-950 rounded-3xl p-2">
            <img src={cycle} alt="" />
            <p className="text-white text-lg font-bold">
              Delivery in 20-25 Minutes
            </p>
          </div>
        </div>
      </div>
      {/* now search bar for the small screens */}
      <div className="md:hidden mt-4 flex flex-col gap-4 justify-center items-center">
        <div className="py-3 px-6  border border-black rounded-full">
          <input
            type="text"
            placeholder="search from menu..."
            className="w-full border-none rounded-full  text-center focus:outline-none"
          />
        </div>
        <h3 className="text-lg font-bold">Order from Tandoori Pizza London</h3>
      </div>
    </>
  );
}
