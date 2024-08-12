import React from "react";
import orderimg from "../assets/Ordering APP.png";
import frndimg from "../assets/Friends.png";
import orderlogo from "../assets/LOGO 1.png";
import {
  FaApple,
  FaTiktok,
  FaFacebook,
  FaTwitter,
  FaSnapchat,
} from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
export default function Orderingapp() {
  return (
    <>
      {" "}
      <div className="hidden md:flex py-4 bg-slate-100  h-auto text-sm md:mx-5 rounded-lg">
        <div className="flex mx-10 mt-0 ">
          <img src={orderimg} alt="" />
        </div>
      </div>
      {/* now ordering component for the small screens: */}
      <div className=" md:hidden py-4 mx-2 flex flex-col justify-center items-center  rounded-lg bg-slate-100 p-6">
        <div className="flex  flex-col gap-4 text-center ">
          <h1 className="text-3xl font-bold ">Ordering is more</h1>
          <h3 className="text-2xl">
            <span className="text-orange-400 text-2xl underline font-semibold ">
              Personalised
            </span>
            & Instant
          </h3>

          <p className="text-lg two-line-text w-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            excepturi veritatis optio, quo aperiam rerum ut soluta nostrum nemo?
            Inventore architecto odit id iusto optio molestias saepe a impedit
            eligendi.
          </p>
          <div className=" justify-center items-center flex gap-4">
            <button className="bg-black text-white px-4 py-1 md:px-6 md:py-2 flex items-center rounded-lg whitespace-nowrap">
              <div className="flex items-center">
                <FaApple className="w-6 h-6 md:w-8 md:h-8 inline-block mr-2" />
              </div>
              <div className="text-center text-xs md:text-base">
                <p>Download on the</p>
                <h3 className="text-sm md:text-xl font-bold">App Store</h3>
              </div>
            </button>

            <button className="bg-black text-white px-4 py-1 md:px-6 md:py-2 flex items-center rounded-lg whitespace-nowrap">
              <div className="flex items-center">
                <BiLogoPlayStore className="w-6 h-6 md:w-12 md:h-12 inline-block mr-2" />
              </div>
              <div className="text-left text-xs md:text-base">
                <p>GET IT ON</p>
                <h3 className="text-sm md:text-xl font-bold">Google Play</h3>
              </div>
            </button>
          </div>
          <div className="mt-6">
            <img src={frndimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
