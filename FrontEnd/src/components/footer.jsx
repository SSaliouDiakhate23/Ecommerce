import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm mt-40">
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            doloremque repudiandae culpa sequi, quo nemo neque adipisci beatae
            magnam ea magni aperiam illum consequuntur, perferendis deserunt?
            Est natus distinctio omnis.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">ENTREPRISE</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Accueil</li>
            <li>À propos de nous</li>
            <li>Livraison</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-987</li>
            <li>Contact@forevery.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-300">
          Copyright 2024@ forever.com -All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default footer;
