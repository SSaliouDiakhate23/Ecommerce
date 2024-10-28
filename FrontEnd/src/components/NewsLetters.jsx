import React from "react";

const NewsLetters = () => {
  const onSubmitHandle = (e) => {
    e.preventdefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subcribe now and get 20% off
      </p>
      <p className="text-gray-500 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        itaque expedita, possimus velit, inventore pariatur dolores ipsum{" "}
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto border my-6  ">
        <input
          type="email"
          placeholder="your email"
          className="w-full outline-none sm:flex-1 placeholder:text-gray-500 pl-3 "
          required
        />
        <button
          className="bg-black  text-white text-xs py-4 px-10 "
          type="submit"
          onSubmit={(e) => {
            onSubmitHandle(e);
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetters;
