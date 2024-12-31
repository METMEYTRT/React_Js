import React from "react";
import bg from "../../images/bg-02.jpg";
const Title = () => {
  return (
    <div>
      {/* Title page */}
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className="ltext-105 cl0 txt-center">Blog</h2>
      </section>
    </div>
  );
};

export default Title;
