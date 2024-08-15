import React from "react";
import g1 from "../../assets/Group 22.png";
import g2 from "../../assets/Group 43.png";
import g3 from "../../assets/Group 44.png";
export default function Discountimage() {
  return (
    <>
      {" "}
      <div className="py-6 m-3">
        <div className="py-6 mx-4 md:mx-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4  overflow-x-auto  md:overflow-x-visible whitespace-nowrap md:whitespace-normal  hide-scrollbar ">
          <div className="inline-block md:block px-5 md:px-0">
            <img
              src={g1}
              alt=""
              className="w-full md:w-auto max-w-xs md:max-w-none block "
            />
          </div>
          <div className="inline-block md:block px-5 md:px-0">
            <img
              src={g2}
              alt=""
              className="w-full md:w-auto max-w-xs md:max-w-none block "
            />
          </div>
          <div className="inline-block md:block px-5 md:px-0">
            <img
              src={g3}
              alt=""
              className="w-full md:w-auto max-w-xs md:max-w-none block "
            />
          </div>
        </div>
      </div>
    </>
  );
}
