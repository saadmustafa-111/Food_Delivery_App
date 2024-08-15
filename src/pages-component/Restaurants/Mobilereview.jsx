import React from "react";
import review from "../../assets/Review.png";

export default function Mobilereview() {
  return (
    <>
      <div className="bg-gray-200 p-10">
        <h1 className="text-2xl font-bold text-center">Customer Reviews</h1>
        <img
          src={review}
          alt=""
          className="w-28 h-28 text-center mx-auto mt-5"
        />
        <div className="flex flex-col bg-white mt-5 p-5 rounded-lg">
          <div className="flex gap-3">
            <img
              src={review}
              alt="Reviewer"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="w-1 bg-orange-300 h-16"></div>
            <div className="flex-grow">
              <h2 className="text-lg font-bold">St Glx</h2>
              <h2 className="text-lg text-[#FC8A06]">South London</h2>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex ml-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73-1.64 7.03z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 ml-2 text-sm">24th September, 2023</p>
            </div>
          </div>

          <p className=" mt-4 text-justify">
            The positive aspect was undoubtedly the efficiency of the service.
            The queue moved quickly, the staff was friendly, and the food was up
            to the usual McDonald's standard – hot and satisfying.
          </p>
        </div>
      </div>
    </>
  );
}
