import React from 'react';
import cardImage from '../assets/Rectangle 46.png';

const ItemCard = ({ title, des, price, image }) => {
  return (
    <>
      <div className=" bg-white shadow-lg p-6 flex justify-between rounded-lg">
        <div className=" flex flex-col gap-3">
          <h2 className="  text-2xl font-bold">{title}</h2>
          <p className="text-xl font-light">{des}</p>
          <h3 className="  font-bold text-[18px]  ">GBP {price}</h3>
        </div>
        <div>
          <div className=" relative w-[203px] h-[199px]">
            <img src={cardImage} alt="" />
            <div className=" w-[88px] h-[81px] bg-white  absolute bottom-0 right-0">
              {' '}
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
