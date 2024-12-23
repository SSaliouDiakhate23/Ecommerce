import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
function CartTotal() {
  const { currency, delivery_fee, getCartAmout } = useContext(ShopContext);
  return (
    <>
      <div className="w-full">
        <div className="text-2xl">
          <Title text1={"CART"} text2={"TOTAL"} />
          <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>
                {currency} {getCartAmout()}.00
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Shipping fee</p>
              <p>
                {currency} {delivery_fee}
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <b>Total</b>
              <b>
                {currency}{" "}
                {getCartAmout() === 0 ? 0 : getCartAmout() + delivery_fee}
              </b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotal;
