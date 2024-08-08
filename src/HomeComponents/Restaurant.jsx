import React from "react";

import g1 from "../assets/Group 17.png";
import g2 from "../assets/Group 16.png";
import g3 from "../assets/Group 18.png";
import g4 from "../assets/Group 19.png";
import g5 from "../assets/Group 20.png";
import g6 from "../assets/Group 21.png";
import text from "../assets/Popular Restaurants.png";

export default function Restaurant() {
  return (
    <>
      <div className="py-4  md:mx-5 flex flex-col gap-6 h-auto text-sm ">
        <h2 className="text-[20px]  md:text-[35px] font-bold ">
          Popular Restaurants{" "}
        </h2>
        <div className="flex  flex-nowrap  overflow-x-auto  gap-6 hide-scrollbar">
          <img src={g1} alt="" className="w-1/3 " />
          <img src={g2} alt="" className="w-1/3  " />
          <img src={g3} alt="" className="w-1/3   " />
          <img src={g4} alt="" className="w-1/3 " />
          <img src={g5} alt="" className="w-1/3  " />
          <img src={g6} alt="" className="w-1/3  " />
        </div>
      </div>
    </>
  );
}
