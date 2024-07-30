/* eslint-disable react/prop-types */
import { useState } from "react";
import React from "react";

import ItemCard from "./ItemCard";
const MenuItem = ({ title, item }) => {
  // eslint-disable-next-line no-unused-vars
  const cardstyles = (title) => {
    // debugger;
    switch (title.trim()) {
      case "Burgers":
        return "text-black"; // Example class for Burgers
      case "Fries":
        return "text-red-500"; // Example class for Fries
      case "Cold Drinks":
        return "text-orange-500"; // Example class for Cold Drinks
      default:
        return "";
    }
  };
  return (
    <>
      <div className="py-6 mx-10 mb-5">
        <h4 id={title} className={`text-3xl font-bold ${cardstyles(title)}`}>
          {title}
        </h4>
        <div className=" grid grid-cols-3 gap-2">
          {item.map((item, index) => (
            <ItemCard
              key={index}
              title={item.title}
              des={item.des}
              image={item.imageUrl}
              price={item.price}
              cardStyle={cardstyles(title)}
            ></ItemCard>
          ))}
        </div>
      </div>
    </>
  );
};
ItemCard.propTypes = {
  title: String,
};

export default MenuItem;
