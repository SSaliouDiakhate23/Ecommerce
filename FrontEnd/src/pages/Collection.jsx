import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";

function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const handleFilter = () => {
    setShowFilter(!showFilter); // toggle showFilter state
  };
  console.log(products);
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Option */}
        <div className="min-w-60">
          <p
            onClick={handleFilter}
            className="my-2 text-xl items-center cursor-pointer gap-2"
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              className={`h-3 sm:hidden transition-all ease-in-out ${
                showFilter ? "rotate-90 " : ""
              } `}
              alt=""
            />
          </p>
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } `}
          >
            <p className="mb-3 text-sm font-meduim">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-400">
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"MEN"} /> Men
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Women"} /> Women
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Kids"} /> Kids
              </p>
            </div>
          </div>

          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } `}
          >
            <p className="mb-3 text-sm font-meduim">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-400">
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Topwear"} />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Bottowear"} />{" "}
                Bottowear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value={"Winterwear"} />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </div>
        {/* Sub Categorie */}

        {/*  */}
      </div>
    </>
  );
}

export default Collection;
