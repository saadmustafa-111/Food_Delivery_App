import React from "react";

export default function Progress() {
  return (
    <div className="py-2 m-3 md:mt-10 bg-orange-500 h-auto text-sm md:mx-5 rounded-lg">
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="flex-1 p-6 relative  md:border-r-2 md:border-white text-center">
          <h3 className="text-4xl font-bold text-white mb-2">546+</h3>
          <p className="text-white text-lg font-bold">Registered Riders</p>
          <div className=" block md:hidden absolute bottom-0 left-1/2  transform -translate-x-1/2 w-1/2 border-b-2 border-white"></div>
        </div>
        <div className="flex-1  relative p-6 md:border-r-2 border-white text-center">
          <h3 className="text-4xl font-bold text-white mb-2">789,900+</h3>
          <p className="text-white text-lg font-bold">Orders Delivered</p>{" "}
          <div className=" block md:hidden absolute bottom-0 left-1/2  transform -translate-x-1/2 w-1/2 border-b-2 border-white"></div>
        </div>
        <div className="flex-1  relative p-6  md:border-r-2 border-white text-center">
          <h3 className="text-4xl font-bold text-white mb-2">690+</h3>
          <p className="text-white text-lg font-bold">Restaurants Partnered</p>
          <div className=" block md:hidden absolute bottom-0 left-1/2  transform -translate-x-1/2 w-1/2 border-b-2 border-white"></div>
        </div>
        <div className="flex-1 p-6 text-center ">
          <h3 className="text-4xl font-bold text-white mb-2">17,457+</h3>
          <p className="text-white text-lg font-bold">Food items</p>
        </div>
      </div>
    </div>
  );
}
