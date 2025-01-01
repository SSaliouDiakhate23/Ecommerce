import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetters from "../components/NewsLetters";
function Contact() {
  return (
    <div>
      <div className="bordet text-2xl pt-10 text-center">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-gray-600">OUr Store</p>
          <p className="tetx-gray-500">
            54709 Williams
            <br />
            Suite 350 , San Francisco, CA 94107
          </p>
          <p className="text-gray-500">
            tel:{415} 555-0132
            <br /> Email:admin@gmail.com{" "}
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Carrers at ForEver
          </p>

          <p className="tetx-gray-500">
            Learn more about working at ForEver and view our open positions.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-200">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetters />
    </div>
  );
}

export default Contact;
