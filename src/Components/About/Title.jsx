import React from "react";
import bg2 from "../../images/bg-02.jpg";

const Title = () => {
  return (
    <div>
      {/* Title page */}
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <h2 className="ltext-105 cl0 txt-center">About</h2>
      </section>
    </div>
  );
};

export default Title;
