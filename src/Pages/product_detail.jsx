import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import BreakCrump from "../Components/Product_Detail/BreakCrump";
import Modal from "../Components/Product_Detail/Modal";
import ProductDetailContent from "../Components/Product_Detail/Product_detail";
import BackTop from "../Components/Back_top";
import RelatedProduct from "../Components/Product_Detail/Related_Product";

const ProductDetail = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <BreakCrump />
      <ProductDetailContent />
      <RelatedProduct />
      <Footer />
      <BackTop />
      <Modal />
    </div>
  );
};

export default ProductDetail;
