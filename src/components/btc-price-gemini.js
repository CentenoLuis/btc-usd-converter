import React from "react";
import { useState, useEffect } from "react";

const BtcPriceGemini = () => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    try {
      const response = await fetch("https://api.gemini.com/v2/ticker/btcusd");
      const data = await response.json();
      const receivedData = Object.entries(data);
      const price = parseInt(receivedData[6][1]);
      setPrice(price.toFixed(0));
    } catch {
      console.log("FETCH ERROR");
    }
  };

  return (
    <>
      <div className="product">
        <img
          src="https://media.igms.io/2018/11/18/1545141998963-f987dd75-d69c-4c20-b48b-9b345ef3f8a7.png"
          alt=""
        />
        <p>Price from Gemini</p>
        <h3>{price} USD / BTC</h3>
      </div>
    </>
  );
};

export default BtcPriceGemini;
