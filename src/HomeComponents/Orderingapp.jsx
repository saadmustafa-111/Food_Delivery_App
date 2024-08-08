import React from "react";
import orderimg from "../assets/Ordering APP.png";
import frndimg from "../assets/friends.png";
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
            <button className="flex gap-2 text-white bg-black justify-self-center items-center px-3 py-2 rounded-md">
              <div>
                {" "}
                <FaApple size={25} />
              </div>
              <div className="flex flex-col justify-center items-centerms-">
                <p>Download on the </p>
                <h5 className="text-lg  font-bold">App Store </h5>
              </div>
            </button>
            <button className="flex gap-2 bg-black text-white justify-center items-center px-3 py-2 rounded-md">
              <div>
                <BiLogoPlayStore size={25} />{" "}
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>GET IT ON</p>
                <h5 className="text-lg font-bold">Google Play</h5>
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
