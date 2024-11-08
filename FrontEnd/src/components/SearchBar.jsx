import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext"; // ajustez le chemin selon votre structure
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const location = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    location.pathname === "/collection" && setVisible(true);
    location.pathname !== "/collection" && setVisible(false);
  }, [location]);

  return (
    <>
      {showSearch && visible && (
        <div className="border-t border-b bg-gray-50 text-center">
          <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input
              className="flex-1 outline-none bg-inherit text-sm sm:text-base"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products"
            />
            <img src={assets.search_icon} className="w-4" alt="" />
          </div>
          <img
            src={assets.cross_icon}
            className="inline w-3 cursor-pointer"
            alt=""
            onClick={() => {
              setShowSearch(false);
            }}
          />
        </div>
      )}
    </>
  );
}

export default SearchBar;
