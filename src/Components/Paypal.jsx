import React, { useEffect, useRef, useState } from "react";

const PayPal = ({ total }) => {
  const paypalRef = useRef(null);
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    if (window.paypal) {
      setSdkReady(true);
    } else {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AcND9GFoF8socwINhA05VaALL17Wm7M-2NAdrihOkWsi6xE5IRbGTs9_jH3JwyGqZtF_fL7Gcff9Uq08";
      script.async = true;
      script.onload = () => setSdkReady(true);
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (sdkReady && paypalRef.current) {
      paypalRef.current.innerHTML = "";
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total.toFixed(2),
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(
                `Transaction completed by ${details.payer.name.given_name}`
              );
              console.log("Transaction details:", details);
            });
          },
          onError: (err) => {
            console.error("PayPal error:", err);
          },
        })
        .render(paypalRef.current);
    }
  }, [sdkReady, total]);

  if (!sdkReady) {
    return <div>Loading PayPal...</div>;
  }

  return <div ref={paypalRef}></div>;
};

export default PayPal;
