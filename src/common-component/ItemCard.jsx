import React from "react";
import { FaPlusCircle } from "react-icons/fa";
const ItemCard = ({ key, title, des, price, image, cardStyle }) => {
  const cardstyles = (title) => {
    switch (title) {
      case " Burgers":
        return "text-red";
      case "Fries ":
        return "";
      case "Cold Drinks":
        return "";
    }
  };
  return (
    <>
      <div
        key={key}
        className={`bg-white shadow-lg p-6 flex  gap-5 justify-between rounded-lg  ${cardstyles}`}
      >
        <div className={`flex flex-col gap-3`}>
          <h2 className="  text-2xl font-bold">{title}</h2>
          <p className="text-xl font-light">{des}</p>
          <h3 className="  font-bold text-[18px]  ">GBP {price}</h3>
        </div>
        <div>
          <div className=" relative w-[203px] h-[199px]">
            <img src={image} alt="" />
            <div className="flex items-center justify-center  w-[88px] h-[81px] rounded-tl-[30px] bg-white  absolute bottom-0 right-0">
              <FaPlusCircle size={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ItemCard.propTypes = {
  key: Number,
  title: String,
  des: String,
  price: Number,
  image: String,
  cardStyle: String,
};

export default ItemCard;
