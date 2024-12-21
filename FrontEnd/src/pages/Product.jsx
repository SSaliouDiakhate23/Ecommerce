import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProduct from "../components/RelatedProduct";
import Title from "../components/Title";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  async function fetchProduct() {
    setIsLoading(true);
    try {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
        setImage(foundProduct.image[0]);
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
  }, [productId, product]);

  return isLoading ? (
    <div className="flex  transition-all duration-300 ease-in-out items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  ) : (
    <>
      <hr className="w-full bg-gray-900 mb-6 md:mb-10" />
      <div className="flex flex-col-reverse md:flex-row items-start gap-4 md:gap-8 lg:gap-10 transition-all duration-300 ease-in-out">
        {/* Thumbnails Gallery */}
        <div className="w-full md:w-24 lg:w-32 transition-all duration-300">
          <div className="flex  flex-row md:flex-col gap-2 md:gap-4 items-center justify-center">
            {product.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={product.name}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover cursor-pointer transform transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className="w-full md:w-1/2 lg:w-2/5 cur h-auto mb-6 md:mb-0 transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
          <img
            src={image}
            alt={product.name}
            className="w-full h-auto object-cover transition-opacity duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/3 lg:w-2/4 px-4 transition-transform duration-300 ease-in-out">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold transform transition-all duration-300 hover:translate-x-1">
            {product.name}
          </h1>

          <div className="flex items-center gap-1 mt-2 md:mt-3">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={assets.star_icon}
                alt="star"
                className="w-3 h-3 md:w-4 md:h-4"
              />
            ))}
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl font-bold mt-4 md:mt-6">
            {currency}
            {product.price}
          </p>

          <p className="text-sm md:text-base max-w-3xl lg:text-lg font-light mt-4 md:mt-6">
            {product.description}
          </p>

          <p className="text-base md:text-lg font-medium my-4 md:my-6">
            Select Size
          </p>

          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size, index) => (
              <div
                key={index}
                className={`px-4 py-2 ${
                  size === selectedSize
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                } cursor-pointer text-center rounded`}
                onClick={() => setSelectedSize(size)}
              >
                <p className="text-sm md:text-base">{size}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              addToCart(product._id, selectedSize);
            }}
            className="bg-gray-900 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border hover:border-black text-white px-8 py-3 rounded mt-4  md:mt-8"
          >
            Add to Cart
          </button>

          <hr className="w-full bg-black mb-6 my-6 md:my-10" />
          <div className="text-sm flex flex-col gap-2">
            <p>100% Secure Payment</p>
            <p>Easy Return Policy</p>
            <p>24/7 Customer Support</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 sm:mt-16">
        <div className="flex">
          <p className="border border-gray-400 px-6 py-3 text-center text-xs sm:text-sm font-bold">
            Description
          </p>
          <p className="border border-gray-400 px-6 py-3 text-center text-xs sm:text-sm ">
            Reviews(122)
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 border pt-4 py-4 sm:py-8 px-4 border-gray-400">
          <p className="text-xs sm:text-sm font-light ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            nihil sapiente! Cumque doloremque mollitia odio reprehenderit
            minima, expedita ex ratione unde explicabo eum repudiandae quidem
            officiis architecto labore accusantium. Dicta. expedita ex ratione
            unde explicabo eum repudiandae quidem officiis architecto labore
            accusantium. Dicta.
          </p>

          <p className="text-xs sm:text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            nihil sapiente! Cumque doloremque mollitia odio reprehenderit
            minima, expedita ex ratione unde explicabo eum repudiandae quidem
            officiis architecto labore accusantium. Dicta.
          </p>
        </div>
      </div>
      <div className="mt-10 md:mt-10 flex flex-col items-center gap-4">
        <div className="text-center text-2xl sm:text-3xl">
          <Title text1="Related" text2={"Products"} />
        </div>
        <RelatedProduct
          category={product.category}
          subcategory={product.subcategory}
        />
      </div>
    </>
  );
}

export default Product;
