import React, { useState } from "react";
import Header from "../Components/Header";
import Cart from "../Components/Cart";
import HomeBanner from "../Components/Home/HomeBanner";
import HomeSlider from "../Components/Home/HomeSlider";
import HomeProduct from "../Components/Home/HomeProduct";
import Footer from "../Components/Footer";
import Back_top from "../Components/Back_top";
import Modal from "../Components/Home/HomeModal";

const home = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      {/* <HomeHeader/>
      <HomeCart/> */}
      <Header setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <HomeSlider />
      <HomeBanner />
      <HomeProduct />
      <Footer />
      <Back_top />
      <Modal />
    </div>
  );
};

export default home;
