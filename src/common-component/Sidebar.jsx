import React from "react";
import { Link } from "react-router-dom";
import { MdCancelPresentation } from "react-icons/md";
import { BiFoodMenu, BiSolidOffer } from "react-icons/bi";
import { LiaFirstOrderAlt } from "react-icons/lia";
import { GrRestaurant } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const navitems = [
  { id: 1, icon: <FaHome />, label: "Home", path: "/" },
  { id: 2, icon: <BiFoodMenu />, label: "Browse Menu", path: "/restaurant" },
  { id: 3, icon: <BiSolidOffer />, label: "Special offers", path: "/" },
  { id: 4, icon: <GrRestaurant />, label: "Rastaurants", path: "/" },
  { id: 5, icon: <LiaFirstOrderAlt />, label: "Track Orders", path: "/" },
];
export default function Sidebar({ isopen, onclose }) {
  return (
    isopen && (
      <div className=" fixed top-0 left-0 w-[300px] h-[100vh] bg-slate-200 shadow-lg z-[999999]">
        <div className="flex justify-end items-center p-2">
          <div
            onClick={onclose}
            className=" w-6 h-6 rounded-full flex justify-center items-center bg-red-700 hover:bg-red-700 "
          >
            <IoMdClose color="#ffffff" size={20} />
          </div>
        </div>
        <div className="flex flex-col gap-6 px-4 ">
          {navitems.map((items) => (
            <Link
              key={items.id}
              to={items.path}
              className="flex items-center justify-start gap-3 p-2 rounded-lg border border-red-700  bg-slate-950 text-white"
            >
              {items.icon}
              <div>{items.label}</div>
            </Link>
          ))}
        </div>
      </div>
    )
  );
}
