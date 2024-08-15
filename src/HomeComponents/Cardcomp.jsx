import React from "react";
import order1 from "../assets/order 1.png";
import order2 from "../assets/food 1.png";
import order3 from "../assets/order-food 1.png";
import pizzagirl from "../assets/pizaGirl.png";
import { Link } from "react-router-dom";

function Cardcomp() {
  const navitems = [
    {
      text: " Frequent Questions",
      path: "/",
    },
    {
      text: " Who we are?",
      path: "/",
    },
    {
      text: "  Partner Program",
      path: "/",
    },
    {
      text: "Help & Support",
      path: "/",
    },
  ];
  const cards = [
    {
      title: "Place an Order!",
      description: "Please order through our Website or Mobile app.",
      img: order3,
    },
    {
      title: "Track Progress",
      description: "You can track your order status with delivery time",
      img: order2,
    },
    {
      title: "Get Your Order",
      description: "Receive your order at a lightning-fast speed!",
      img: order1,
    },
  ];

  return (
    <div className="w-full bg-transparent md:bg-gray-200 h-auto text-sm md:mx-5 rounded-lg relative">
      <div className="flex flex-col m-0 relative z-20">
        <div className="md:mb-10 flex flex-col md:flex-row items-center text-lg">
          <p className="md:ml-20 font-bold text-xl md:text-3xl">
            Know More About Us
          </p>
          <nav className="hidden md:mt-20 ml-auto font-bold md:flex space-x-4 items-center mr-20">
            {navitems.map((items, index) => (
              <Link
                key={index}
                to={items.path}
                className="text-gray-600 hover:text-gray-900 relative"
              >
                <span className="inline-block py-2 px-5 rounded-full border border-transparent hover:border-orange-500 hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105">
                  {items.text}
                </span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="md:bg-slate-950 p-6 md:p-24 mt-4 my-10 md:my-20 mx-4 md:mx-20 rounded-lg relative">
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex-1">
              <div className="mb-6 flex justify-center md:justify-start">
                <button className="bg-orange-500 font-bold text-lg rounded-full py-3 px-6 whitespace-nowrap">
                  How Does Order.UK Work?
                </button>
              </div>
              <div className="mt-5 text-center md:text-left">
                <p className="text-black md:text-white text-lg font-bold mt-3">
                  What payment methods are accepted?
                </p>
                <p className="text-black md:text-white text-lg font-bold mt-3">
                  Can I track my order in real-time?
                </p>
                <p className="text-black md:text-white text-lg font-bold mt-3">
                  Are there any special discounts or promotions available?
                </p>
                <p className="text-black md:text-white text-lg font-bold mt-3">
                  Is Order.UK available in my area?
                </p>
              </div>
            </div>
            <div className="md:flex-1">
              <div className="bg-slate-950 p-5 sm:p-5 md:p-0 rounded-lg">
                <div className="flex gap-4 flex-col md:flex-row">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-gray-400 p-6 rounded-lg shadow-md flex-1"
                    >
                      <h3 className="text-xl   text-center font-bold mb-2">
                        {card.title}
                      </h3>
                      <img
                        src={card.img}
                        alt={card.title}
                        className="mx-auto mb-4"
                      />
                      <p className="text-black text-md font-bold text-center">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-white text-lg">
                    Order.UK simplifies the food ordering process. Browse
                    through our diverse menu, select your favorite dishes, and
                    proceed to checkout. Your delicious meal will be on its way
                    to your doorstep in no time!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardcomp;
