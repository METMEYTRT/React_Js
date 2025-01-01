import React, { useState } from "react";
import Header from "../Components/Header";
import Title from "../Components/About/Title";
import Content from "../Components/About/Content";
import Cart from "../Components/Cart";
import Footer from "../Components/Footer";
import Back_top from "../Components/Back_top";
const About = () => {
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

export default About;
