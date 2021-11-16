import React from "react";
import { useState, useEffect } from "react";

const BtcPriceBinance = () => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    const url = "https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT";
    try {
      const response = await fetch(url);
      const data = await response.json();
      const price = parseInt(data.price);
      setPrice(price.toFixed(0));
    } catch {
      console.log("FETCH ERROR");
    }
  };

  return (
    <>
      <div className="product">
        <a href="https://www.binance.com/es">
          <img
            src="https://public.bnbstatic.com/static/images/common/ogImage.jpg"
            alt=""
          />
        </a>
        <p>Price from Binance</p>
        <h3>{price} USD / BTC</h3>
      </div>
    </>
  );
};

export default BtcPriceBinance;
