// const handleTextChange = (e) => {
//   setFilterText(e.target.value);
// };

// // Appliquer le filtre basé sur `filterText`
// const applyFilter = () => {
//   let productCopy = products;

//   if (filterText.trim() !== "") {
//     productCopy = productCopy.filter((item) =>
//       item.name.toLowerCase().includes(filterText.toLowerCase()) ||
//       item.category.toLowerCase().includes(filterText.toLowerCase())
//     );
//   }

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProduct, setFilterProduct] = useState([]);
  const [categorie, setCategorie] = useState([]);
  const [subCategorie, setSubCategorie] = useState([]);

  function toggleCategorie(e) {
    if (categorie.includes(e.target.value)) {
      setCategorie((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategorie((prev) => [...prev, e.target.value]);
    }
  }

  function toggleSubCategorie(e) {
    if (subCategorie.includes(e.target.value)) {
      setSubCategorie((prevSub) =>
        prevSub.filter((item) => item !== e.target.value)
      );
    } else {
      setSubCategorie((prevSub) => [...prevSub, e.target.value]);
    }
  }

  const applyFilter = () => {
    let productCopy = products;
    if (categorie.length > 0) {
      productCopy = productCopy.filter((item) =>
        categorie.includes(item.category)
      );
    }
    if (subCategorie.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategorie.includes(item.subCategory)
      );
    }
    console.log(productCopy);

    setFilterProduct(productCopy);
  };

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [categorie, subCategorie]);

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
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Men"}
                  onChange={toggleCategorie}
                />{" "}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Women"}
                  onChange={toggleCategorie}
                />{" "}
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Kids"}
                  onChange={toggleCategorie}
                />{" "}
                Kids
              </p>
            </div>
          </div>

          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 mb-4 sm:mb-0 ${
              showFilter ? "" : "hidden"
            } `}
          >
            <p className="mb-3 text-sm font-meduim">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-400">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Topwear"}
                  onChange={toggleSubCategorie}
                />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Bottomwear"}
                  onChange={toggleSubCategorie}
                />{" "}
                Bottowear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Winterwear"}
                  onChange={toggleSubCategorie}
                />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTION"} />
            <select className="border-2 border-gray-200 text-sm px-2">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProduct.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
