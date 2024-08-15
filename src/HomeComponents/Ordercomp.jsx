import React from "react";
import g1 from "../assets/A.png";
import g2 from "../assets/b.png";
import g3 from "../assets/c.png";
import orderuk from "../assets/Order.uk.png";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Ordercomponent() {
  const Data = [
    {
      image: g1,
      Res: "Restaurant",
      cafe: "Chef Burgers London",
    },
    {
      image: g2,
      Res: "Restaurant",
      cafe: "Chef Burgers London",
    },

    {
      image: g1,
      Res: "Restaurant",
      cafe: "Chef Burgers London",
    },
  ];
  const navitems = ["Vegan", "Sushi", " Pizza & Fast food", "others"];
  return (
    <>
      <div className="   py-6 text-lg m-2 md:mx-5 rounded-lg lg:flex items-center ">
        <div className=" flex  justify-between items-center gap-2 ">
          <h4 className=" single-line-ellipsis text-[16px] md:text-[32px] font-bold">
            Up to -40% Discount Offers 🎊{" "}
          </h4>
          <div className="md:hidden flex gap-1 justify-between items-center border border-black rounded-full p-1">
            <IoIosArrowDropdownCircle />
            <button className="text-[10px] "> Pizza and food</button>
          </div>
        </div>

        <nav className=" hidden lg:flex ml-auto font-bold  gap-4 items-center">
          {navitems.map((items, index) => (
            <Link
              to="/"
              key={index}
              className=" hover:text-gray-900 ml-4 relative"
            >
              {" "}
              <span className="text-xl inline-block py-2 px-5 rounded-full border border-transparent hover:border-orange-500 hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105">
                {items}
              </span>{" "}
            </Link>
          ))}
        </nav>
      </div>
      <div className="md:grid md:grid-cols-3 flex md:mx-5 hide-scrollbar gap-3 w-full overflow-hidden">
        {Data.map((data, index) => (
          <div key={index} className={`flex flex-col gap-2 `}>
            <div
              key={index}
              style={{ backgroundImage: `url(${data?.image}) ` }}
              className="   flex flex-col justify-end relative object-cover bg-cover   bg-no-repeat  bg-center w-[150px] md:w-full h-[150px] md:h-[428px] rounded-lg "
            >
              <div className="text-white flex justify-center items-center bg-black absolute right-4 top-0 md:w-[66px] md:h-[50px] rounded-br-xl rounded-bl-xl">
                {" "}
                -40%
              </div>
              <div className=" hidden md:block p-3 text-white   bg-opacity-50 mt-2">
                <h3 className="text-orange-500 md:text-2xl">{data.Res}</h3>
                <h3 className="font-bold text-lg">{data.cafe}</h3>
              </div>
            </div>
            <div className=" block md:hidden">
              <h3 className="text-orange-500">{data.Res}</h3>
              <h3 className="font-bold text-black text-lg   one-line-text w-full">
                {data.cafe}
              </h3>
            </div>
          </div>
        ))}
      </div>
      ` `{" "}
    </>
  );
}
