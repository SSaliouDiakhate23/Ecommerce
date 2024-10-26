import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
function LatestCollection() {
  const { products } = useContext(ShopContext);
  console.log(products);
  return <></>;
}

export default LatestCollection;
