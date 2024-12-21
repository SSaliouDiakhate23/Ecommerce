import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

function RelatedProduct({ category, subcategory }) {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { products } = useContext(ShopContext);

  function filterProducts() {
    if (products !== null) {
      let cpProduct = [...products];
      cpProduct = cpProduct.filter((item) => item.category === category);
      cpProduct = cpProduct.filter((item) => item.subcategory === subcategory);
      setRelatedProduct(cpProduct.slice(0, 4));
      console.log(relatedProduct);
    }
  }
  useEffect(() => {
    filterProducts();
  }, [products]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {relatedProduct.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              <ProductItem
                key={item._id}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RelatedProduct;
