import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

function Cart() {
  const { products, cartItems, currency, UpdateQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
    console.log(tempData);
  }, [cartItems]);
  return (
    <>
      <div className="border-t pt-14">
        <div className="text-2xl mb-3 text-center ">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
      </div>
      <div className="">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] items-center sm:grid-cols-[4fr_2fr_0.5fr] gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  className="w-16 sm:w-20 cursor-pointer hover:scale-105 transition-all duration-300"
                  alt=""
                />
                <p className="text-xs font-md sm:text-lg">
                  <div className="flex justify-between items-center"></div>
                  {productData.name}
                  <div className="flex gap-5 items-center mt-5">
                    <p>
                      {currency} {productData.price}
                    </p>
                    <p className="bg px-3 sm:py-1 bg-slate-50">{item.size}</p>
                  </div>
                </p>
              </div>

              <input
                type="number"
                value={item.quantity}
                className="border max-w-10 sm:max-w-20 px-1 py-1 "
              />
              <img
                src={assets.bin_icon}
                alt=""
                onClick={() => UpdateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
