import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import BreakCrumb from "../Components/Shoping_Cart/BreadCrumb";
import ShopingCart from "../Components/Shoping_Cart/Shoping_Cart";
const features = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <BreakCrumb />
      <ShopingCart />
      <Footer />
    </div>
  );
};

export default features;
