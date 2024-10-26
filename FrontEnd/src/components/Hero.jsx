import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row border items-center border-gray-400">
        <div className="w-full sm:w-1/2 items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center justify-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">
                OUR BESTSELLERS
              </p>
            </div>
            <h1 className="text-3xl prata-regular  sm:py-3 lg:text-5xl leading-relaxed text-center">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2 justify-center">
              <p className="font-semibold text-sm md:text-base">SHOP IN</p>
              <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
          {/* Hero Right Side */}
        </div>
        <img src={assets.hero_img} className="w-full sm:w-1/2" alt="" />
      </div>
    </>
  );
}

export default Hero;
