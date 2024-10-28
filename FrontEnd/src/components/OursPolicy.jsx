import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OursPolicy = () => {
  return (
    <div className="flex flex-col py-20 gap-12 sm:gap-2 text-gray-600 sm:flex-row justify-around text-center text-xs sm:text-xs md:text-base ">
      <div className="">
        <img src={assets.exchange_icon} alt="" className="mx-auto mb-5 w-12" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer Hassle free Exchange policy</p>
      </div>
      <div className="">
        <img src={assets.quality_icon} alt="" className="mx-auto mb-5 w-12" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer Hassle free Exchange policy</p>
      </div>
      <div className="">
        <img src={assets.support_img} alt="" className="mx-auto mb-5 w-12" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer Hassle free Exchange policy</p>
      </div>
    </div>
  );
};

export default OursPolicy;
