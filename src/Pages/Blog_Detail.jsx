import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import BreadCrumb from "../Components/Blog_Detail/BreakCrumb";
import Content from "../Components/Blog_Detail/Content";
import Back_top from "../Components/Back_top";
const Blog_Detail = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <BreadCrumb />
      <Content />
      <Footer />
      <Back_top />
    </div>
  );
};

export default Blog_Detail;
