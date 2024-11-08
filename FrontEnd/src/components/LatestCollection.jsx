import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLastestProducts] = useState([]);
  useEffect(() => {
    setLastestProducts(products.slice(0, 10));
  }, []);
  console.log(latestProduct);

  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"LATEST"} text2={"COLLECTION"} />
          <p className="w-3/4 mx-auto sm:mt-2 text-xs sm:text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            maxime molestias sit ea assumenda eius aliquam culpa voluptatibus
            nostrum quam.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestCollection;
