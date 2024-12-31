import React from "react";
import about2 from "../../images/about-02.jpg";
import about1 from "../../images/about-01.jpg";

const Content = () => {
  return (
    <div>
      {/* Content page */}
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">Our Story</h3>
                <p className="stext-113 cl6 p-b-26">
                  Welcome to Coza Store, where style meets convenience and
                  quality comes first. Our journey began with a simple idea: to
                  provide customers with a seamless online shopping experience
                  that combines the best products at affordable prices with
                  exceptional service. Founded in 2024, we have grown from a
                  small, passionate team to a trusted destination for all your
                  shopping needs. We carefully curate our collection of products
                  from renowned brands and trusted suppliers to ensure that you
                  have access to the latest trends, unique finds, and timeless
                  classics. At Coza Store, we believe shopping should be a joy,
                  not a chore. Our user-friendly website, secure payment
                  options, and fast shipping make it easy to find exactly what
                  you're looking for, whether it's fashion, home decor, tech
                  gadgets, or lifestyle essentials. We take pride in delivering
                  excellent customer service, ensuring that every experience is
                  as smooth as possible. We’re more than just an online store –
                  we’re a community of like-minded individuals who share a
                  passion for quality, value, and innovation. Our mission is to
                  make your life easier, one purchase at a time. Thank you for
                  choosing us, and we hope to be a part of your shopping journey
                  for years to come!
                </p>
              </div>
            </div>
            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div className="how-bor1 ">
                <div className="hov-img0">
                  <img src={about1} alt="IMG" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
              <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 className="mtext-111 cl2 p-b-16">Our Mission</h3>
                <p className="stext-113 cl6 p-b-26">
                  At Coza Store, our mission is simple: to provide a seamless
                  and enjoyable shopping experience for every customer. We
                  strive to offer high-quality, affordable products that cater
                  to the diverse needs and tastes of our community. We believe
                  that everyone deserves access to the best of fashion, home
                  decor, technology, and lifestyle essentials, all in one place.
                </p>
                <div className="bor16 p-l-29 p-b-9 m-t-22">
                  <p className="stext-114 cl6 p-r-40 p-b-11">
                    Through everything we do, we aim to make your shopping
                    experience enjoyable, trustworthy, and hassle-free. At Coza
                    Store, we’re here to make your life easier, one purchase at
                    a time.
                  </p>
                  <span className="stext-111 cl8">- Met Meytry’s</span>
                </div>
              </div>
            </div>
            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <div className="how-bor2">
                <div className="hov-img0">
                  <img src={about2} alt="IMG" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
