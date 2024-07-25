import React from 'react';
import g23 from '../../assets/Group 23.png';
import cart from '../../assets/Cart.png';
import cycle from '../../assets/Motocross.png';
import burger from '../../assets/Burger.png';
import review from '../../assets/Review.png';
import clock from '../../assets/Clock.png';
import heading from '../../assets/Heading.png';
import { CiSearch } from 'react-icons/ci';
export default function HeroComponent() {
  return (
    <>
      <div className="py-6 mx-10 flex items-center">
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
                style={{ marginBottom: '30%%' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative  ">
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
    </>
  );
}
