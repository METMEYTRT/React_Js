import React from "react";
import pay1 from "../images/icons/icon-pay-01.png";
import pay2 from "../images/icons/icon-pay-02.png";
import pay3 from "../images/icons/icon-pay-03.png";
import pay4 from "../images/icons/icon-pay-04.png";
import pay5 from "../images/icons/icon-pay-05.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="bg3 p-t-75 p-b-32">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3 p-b-50">
            <h4 class="stext-301 cl0 p-b-30">Categories</h4>

            <ul>
              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                  Women
                </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                  Men
                </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                  Electronics
                </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                  Jewelry
                </a>
              </li>
            </ul>
          </div>

          <div class="col-sm-6 col-lg-3 p-b-50">
            <h4 class="stext-301 cl0 p-b-30">Help</h4>

            <ul>
              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                  Track Order
                </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                  Returns
                </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                  Shipping
                </a>
              </li>

              <li class="p-b-10">
                <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div class="col-sm-6 col-lg-3 p-b-50">
            <h4 class="stext-301 cl0 p-b-30">GET IN TOUCH</h4>

            <p class="stext-107 cl7 size-201">
              Any questions? Let us know in store at KaKab, Phorsen Chay, Phnom
              Penh or call us on (+855) 88 294 0407
            </p>

            <div class="p-t-27">
              <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i class="fa fa-facebook"></i>
              </a>

              <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i class="fa fa-instagram"></i>
              </a>

              <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i class="fa fa-pinterest-p"></i>
              </a>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3 p-b-50">
            <h4 class="stext-301 cl0 p-b-30">Newsletter</h4>

            <form>
              <div class="wrap-input1 w-full p-b-4">
                <input
                  class="input1 bg-none plh1 stext-107 cl7"
                  type="text"
                  name="email"
                  placeholder="Enter the Email"
                />
                <div class="focus-input1 trans-04"></div>
              </div>

              <div class="p-t-18">
                <button class="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="p-t-40">
          <div class="flex-c-m flex-w p-b-18">
            <Link to="/features" class="m-all-1">
              <img src={pay1} alt="ICON-PAY" />
            </Link>

            <Link to="/features" class="m-all-1">
              <img src={pay2} alt="ICON-PAY" />
            </Link>

            <Link to="/features" class="m-all-1">
              <img src={pay3} alt="ICON-PAY" />
            </Link>

            <Link to="/features" class="m-all-1">
              <img src={pay4} alt="ICON-PAY" />
            </Link>

            <Link to="/features" class="m-all-1">
              <img src={pay5} alt="ICON-PAY" />
            </Link>
          </div>

          <p class="stext-107 cl6 txt-center"></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
