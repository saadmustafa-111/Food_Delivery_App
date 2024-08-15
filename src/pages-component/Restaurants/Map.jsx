import React from "react";

export default function Map() {
  return (
    <>
      <div className=" relative py-6 mx-10 flex rounded-2xl gap-4">
        <iframe
          className="w-full h-[450px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79480.22765659456!2d-0.25439404504286794!3d51.49932450757113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2861dbc9f3%3A0x7d8050e5ed5eaff7!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1722332095243!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute md:w-1/5  bg-slate-950 px-3 py-10 my-8 mx-8 rounded-lg  justify-center">
          <h2 className="text-xl text-white font-semibold my-4 mx-4 mb-2">
            McDonald’s
          </h2>
          <h3 className="text-[#FC8A06] font-semibold mx-4">South London.</h3>
          <p className="text-white text-sm my-4 mx-4">
            Tooley St, London Bridge, London SE1 2TF,UnitedKingdom{" "}
          </p>
          <p className=" mx-4 text-sm text-white ">
            <strong>Phone number</strong>
            <br /> <span className="text-[#FC8A06] text-lg  ">+934443-43</span>
          </p>
          <p className=" mx-4 my-4 text-sm text-white ">
            <strong>Website</strong>
            <br />
            <span className="text-[#FC8A06] text-lg  hover:underline ">
              <a href="">http://mcdonalds.uk/</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
