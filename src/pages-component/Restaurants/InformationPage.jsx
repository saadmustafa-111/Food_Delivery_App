import React from "react";
import { MdAddLocationAlt } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BsClockFill } from "react-icons/bs";
export default function InformationPage() {
  return (
    <>
      <div className="m-5 shadow-2xl md:m-0 flex flex-col md:flex-row bg-slate-100  items-center justify-between py-6">
        <div className="flex m-3 md:mx-20 items-center justify-between flex-col gap-6">
          <div className="flex  justify-between gap-3">
            <MdAddLocationAlt size={30} />
            <h2 className=" text-lg md:text-3xl font-bold whitespace-nowrap ">
              {" "}
              Delivery information
            </h2>
          </div>
          <div className="flex  flex-col gap-5">
            <p className="texr-md ">
              <strong>Monday</strong>8:00 AM–3:00 AM
            </p>
            <p className="texr-md ">
              <strong>Tuesday</strong> 8:00 AM–3:00 AM
            </p>
            <p className="texr-md ">
              <strong>Wednesday</strong>: 8:00 AM–3:00 AM
            </p>
            <p className="texr-md ">
              <strong>Thursday</strong>: 8:00 AM–3:00 AM
            </p>
            <p className="texr-md ">
              <strong>Friday</strong>: 8:00 AM–3:00 AM
            </p>
            <p className="texr-md ">
              <strong> Saturaday</strong>: 8:00 AM–3:00 AM
            </p>
            <p className="texr-md ">
              <strong>Sunday</strong>: 8:00 AM–3:00 AM
            </p>
          </div>
        </div>
        <div className="  m-3 md:mx-20 flex items-center justify-center flex-col gap-6">
          <div className="flex  justify-between gap-3 ">
            <RiContactsBook2Fill size={30} />
            <h2 className=" text-lg md:text-3xl font-bold whitespace-nowrap">
              Contact Information
            </h2>
          </div>
          <div className="flex  justify-items-start flex-col gap-5">
            <p>if you have al the allrgies and dietry</p>
            <p>restrictions, please contact the </p>
            <p>restaurant. The restaurant will provide</p>
            <p>food-specific information upon request</p>
            <p>
              <strong className="text-lg">Phone number</strong>
              <br />
              +934443-43
            </p>
            <p>
              <strong className="font-bold">Website</strong>
              <br />
              <a href="" className="text-lg">
                http://mcdonalds.uk/
              </a>
            </p>
          </div>
        </div>
        <div className="flex bg-slate-950 mt-0 text-white py-10 px-4 p rounded-lg gap-6 flex-col  m-3 md:mx-20 ">
          <div className="flex items-center justify-between gap-3">
            <BsClockFill size={30} />
            <h2 className="text-3xl font-bold whitespace-nowrap">
              Operational Times
            </h2>
          </div>
          <div className="flex flex-col gap-6 ">
            <p className="text-md">
              <strong>Monday</strong> 12:00 AM–3:00 AM
            </p>
            <p className="text-md">
              <strong>Tuesday</strong> 8:00 AM–3:00 AM
            </p>
            <p className="text-md">
              <strong>Wednesday</strong> 8:00 AM–3:00 AM
            </p>
            <p className="text-md">
              <strong>Thursday</strong> 8:00 AM–3:00 AM
            </p>
            <p className="text-md">
              <strong>Friday</strong> 8:00 AM–3:00 AM
            </p>
            <p className="text-md">
              <strong>Saturday</strong> 8:00 AM–3:00 AM
            </p>
            <p className="text-md">
              <strong>Sunday</strong> 8:00 AM–3:00 AM
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
