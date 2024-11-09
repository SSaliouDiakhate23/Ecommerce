import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Product() {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProduct() {
    setIsLoading(true);
    try {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.log("Product not found");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  ) : (
    <div>Product {productId}</div>
  );
}

export default Product;
