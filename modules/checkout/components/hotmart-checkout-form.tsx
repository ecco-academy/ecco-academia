"use client";

import { useEffect, useRef } from "react";

export default function HotmartCheckout() {
  const checkoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    script.async = true;
    script.onload = () => {
      //@ts-ignore
      const elements = window.checkoutElements?.init("inlineCheckout", {
        offer: "v1xy9yp2",
        prefilledInfo: {
          name: "Yoshio Mack",
          email: "support.test.goe1oxfc@hotmart.com",
          doc: "1234567909",
          zip: "30110056",
          phoneac: "31",
          phonenumber: "988887777",
          sck: "your sck param",
        },
      });
      elements?.mount("#inline_checkout");
    };

    document.body.appendChild(script);
  }, []);

  return <div id="inline_checkout" ref={checkoutRef} />;
}
