import React from "react";
import r1 from "../assets/Rectangle 13.png";
import r2 from "../assets/Rectangle 15.png";
import r3 from "../assets/Rectangle 17.png";
import r4 from "../assets/Rectangle 19.png";
import categorytext from "../assets/category.png";

export default function Categories() {
  const categories = [
    { img: r1, title: "Burgers and Fast Food", description: "21 Restaurants" },
    { img: r2, title: "Salads", description: "32 Restaurants" },
    { img: r3, title: "Pasta and Casuals", description: "4 Restaurants" },
    { img: r4, title: "Pizza", description: "32 Restaurants" },
    { img: r1, title: "Breakfast", description: "4 Restaurants" },
    { img: r2, title: "Soups", description: "32 Restaurants" },
  ];

  return (
    <div className="p-2 m-2 flex flex-col gap-6  h-auto text-sm md:mx-5 bg-slate-200 md:bg-transparent">
      <h1 className="text-[20px] md:text-[35px] font-bold">
        Order.Uk’s Popular Categories
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={category.img} alt={category.title} className="w-full" />
            <div className="bg-blue-950 w-full text-center text-white py-2 px-4 rounded-b-lg">
              <h3 className="text-orange-500 text-lg font-bold  single-line-ellipsis">
                {category.title}
              </h3>
              <p className="text-white text-sm">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
