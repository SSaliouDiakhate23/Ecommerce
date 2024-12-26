import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
function Orders() {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="flex flex-col">
        {products.slice(1, 4).map((product, index) => (
          <div
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            key={index}
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={product.image[0]} alt="" className="w-20" />
              <div className="">
                <p className="sm:text-base font-medium">{product.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700 ">
                  <p className="text-lg">
                    {currency}
                    {product.price}
                  </p>
                  <p> Quantite: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date <span className="text-gray-400 ml-2">24, Jul, 2024</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full cursor-pointer hover:animate-ping bg-green-500"></p>
                <p className="text-sm txt-base ">Read to ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
