import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import Title from "../Components/Blog/Title";
import Content from "../Components/Blog/Content";
import Back_top from "../Components/Back_top";

const Blog = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Title />
      <Content />
      <Footer />
      <Back_top />
    </div>
  );
};

export default Blog;
