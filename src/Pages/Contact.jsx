import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import Title from "../Components/Contact/Title";
import Content from "../Components/Contact/Content";
import Back_top from "../Components/Back_top";
const Contact = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Title />
      <Content />
      {/* <Map /> */}
      <Footer />
      <Back_top />
    </div>
  );
};

export default Contact;
