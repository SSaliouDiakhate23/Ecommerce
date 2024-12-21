/* eslint-disable react/prop-types */
import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("please select a size !");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getCartCount = () => {
    let count = 0;
    for (const idItems in cartItems) {
      for (const size in cartItems[idItems]) {
        try {
          if (cartItems[idItems][size] > 0) {
            count += cartItems[idItems][size];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    // if (count !== 0) {
    //   toast.success("items added to cart succefully");
    // }
    return count;
  };
  async function UpdateQuantity(id, size, quantity) {
    let cartData = structuredClone(cartItems);
    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] = quantity;
      }
    }
    setCartItems(cartData);
  }
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    setCartItems,
    getCartCount,
    UpdateQuantity,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
