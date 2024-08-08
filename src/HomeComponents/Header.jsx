import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import orderlogo from "../assets/LOGO 1.png";
export default function Header() {
  const navitems = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Browse Menu",
      path: "/",
    },
    {
      text: "Special Offers",
      path: "/",
    },
    {
      text: "Restaurants",
      path: "/restaurant",
    },
    {
      text: "Track Orders",
      path: "/",
    },
  ];
  return (
    <>
      <div className=" hidden md:flex py-6 text-lg mx-5 rounded-lg  items-center">
        <img src={orderlogo} alt="" />
        <nav className="ml-auto font-bold flex gap-6items-center">
          {navitems.map((items, index) => (
            <Link
              key={index}
              to={items.path}
              className="text-gray-600 hover:text-gray-900 ml-4 relative"
            >
              <span className="inline-block py-2 px-5 rounded-full hover:bg-orange-500 hover:text-white active:bg-black transition-all duration-300 transform group-hover:scale-105">
                {items.text}
              </span>
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center">
          <button className="bg-slate-950 text-white border-4   hover:border-orange-500 transition-all duration-500 py-5 px-6 rounded-full flex items-center">
            <MdAccountCircle className="mt-1 mr-1 w-6 h-6 text-orange-500" />
            <span>Login/Sign up</span>
          </button>
        </div>
      </div>
    </>
  );
}
