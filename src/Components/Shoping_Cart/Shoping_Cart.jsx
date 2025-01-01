import React, { useState } from "react";
import { useCart } from "../CartContext";
import Paypal from "../Paypal";

const Shoping_Cart = () => {
  const { cart, setCart } = useCart();
  const [updatedCart, setUpdatedCart] = useState(cart);
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const handleQuantityChange = (id, quantity) => {
    setUpdatedCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const totalAmount = updatedCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <form className="bg0 p-t-75 p-b-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
              <div className="m-l-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-shopping-cart">
                  <table className="table-shopping-cart">
                    <thead>
                      <tr className="table_head">
                        <th className="column-1">Product</th>
                        <th className="column-2"></th>
                        <th className="column-3">Price</th>
                        <th className="column-4">Quantity</th>
                        <th className="column-5">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {updatedCart.length === 0 ? (
                        <tr>
                          <td colSpan={5} style={{ textAlign: "center" }}>
                            Your cart is empty
                          </td>
                        </tr>
                      ) : (
                        updatedCart.map((item) => (
                          <tr key={item.id} className="table_row">
                            <td className="column-1">
                              <div className="how-itemcart1">
                                <img src={item.image} alt={item.title} />
                              </div>
                            </td>
                            <td className="column-2">{item.title}</td>
                            <td className="column-3">${item.price}</td>
                            <td className="column-4">
                              <input
                                className="mtext-104 cl3 txt-center num-product"
                                type="number"
                                value={item.quantity}
                                min="1"
                                onChange={(e) =>
                                  handleQuantityChange(item.id, e.target.value)
                                }
                              />
                            </td>
                            <td className="column-5">
                              ${item.price * item.quantity}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm"></div>
              </div>
            </div>
            <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
              <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
                <div className="flex-w flex-t bor12 p-b-13">
                  <div className="size-208">
                    <span className="stext-110 cl2">Subtotal:</span>
                  </div>
                  <div className="size-209">
                    <span className="mtext-110 cl2">
                      $
                      {updatedCart.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: paymentMethod === "paypal" ? "block" : "none",
                  }}
                >
                  <Paypal total={totalAmount} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Shoping_Cart;
