import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Placeholder from "./pages/Placeholder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeholder" element={<Placeholder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
