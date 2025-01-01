import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <div>
      {/* breadcrumb */}
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <Link to="/home" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </Link>
          <span className="stext-109 cl4">Shoping Cart</span>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
