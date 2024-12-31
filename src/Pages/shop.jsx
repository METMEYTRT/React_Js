import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import Product from "../Components/Shop/ShopProduct";
import Back_top from "../Components/Back_top";
import Modol from "../Components/Home/HomeModal";

const Shop = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Product />
      <Footer />
      <Back_top />
      <Modol />
    </div>
  );
};

export default Shop;
