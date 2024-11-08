import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { SlArrowLeftCircle } from "react-icons/sl";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);

  console.log(isVisible);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo-image" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col gap-1 items-center">
          <p>HOME</p>
          <div className="w-1/2 border-b-black border-b-2 hidden duration-200"></div>
        </NavLink>

        <NavLink to="/collection" className="flex flex-col gap-1 items-center">
          <p>COLLECTION</p>
          <div className="w-1/2 border-b-black border-b-2 hidden duration-200"></div>
        </NavLink>

        <NavLink to="/about" className="flex flex-col gap-1 items-center">
          <p>ABOUT</p>
          <div className="w-1/2 border-b-black border-b-2 hidden duration-200"></div>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col gap-1 items-center">
          <p>CONTACT</p>
          <div className="w-1/2 border-b-black border-b-2 hidden duration-200"></div>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt=""
          className="w-5 cursor-pointer"
          onClick={() => {
            setShowSearch((prev) => !prev);
          }}
        />
        <div className="group relative duration-200">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />

          <div className="group-hover:block hidden duration-200 absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black duration-200">
                My Profile
              </p>
              <p className="cursor-pointer hover:text-black duration-200">
                Orders
              </p>
              <p className="cursor-pointer hover:text-black duration-200">
                Logout
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className=" w-5 min-w-5" />
          <p className="absolute -bottom-[5px] -right-[5px]  bg-black text-white rounded-full text-center leading-4 w-4 text-xs ">
            3
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          onClick={() => {
            setIsVisible((prev) => !prev);
          }}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
        <div
          className={`absolute top-0 right-0 bottom-0  overflow-hidden bg-white transition-all ${
            isVisible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex-col flex text-gray-600">
            <div
              className="flex items-center gap-3 p-3 cursor-pointer w-auto"
              onClick={() => {
                setIsVisible((prev) => !prev);
              }}
            >
              <SlArrowLeftCircle className="w-5 h-5" />
              <p className="">Back</p>
            </div>
            <NavLink
              to={"/"}
              onClick={() => {
                setIsVisible((prev) => !prev);
              }}
              className="pl-6 py-2 border"
            >
              HOME
            </NavLink>
            <NavLink
              to={"/collection"}
              onClick={() => {
                setIsVisible((prev) => !prev);
              }}
              className="pl-6 py-2 border"
            >
              COLLECTION
            </NavLink>
            <NavLink
              to={"/about"}
              onClick={() => {
                setIsVisible((prev) => !prev);
              }}
              className="pl-6 py-2 border"
            >
              ABOUT
            </NavLink>
            <NavLink
              to={"/contact"}
              onClick={() => {
                setIsVisible((prev) => !prev);
              }}
              className="pl-6 py-2 border"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
