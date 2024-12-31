import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import BreakCrump from "../Components/Product_Detail/BreakCrump";
import Modal from "../Components/Product_Detail/Modal";
import Product_detail from "../Components/Product_Detail/Product_detail";
import Back_top from "../Components/Back_top";
import Related_Product from "../Components/Product_Detail/Related_Product";
const product_detail = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <BreakCrump />
      <Product_detail />
      <Related_Product />
      <Footer />
      <Back_top />
      <Modal />
    </div>
  );
};
export default product_detail;
