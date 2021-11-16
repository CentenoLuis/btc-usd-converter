import React from "react";
import { useState, useEffect } from "react";

const BtcPriceCryptoCompare = () => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    const url =
      "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
    try {
      const response = await fetch(url);
      const data = await response.json();
      const price = data.USD;
      setPrice(price.toFixed(0));
    } catch {
      console.log("FETCH ERROR");
    }
  };

  return (
    <>
      <div className="product">
        <a href="https://www.cryptocompare.com/">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLTOhQ-AXagffOJuD26lgZb7b-tVokLjiHRi4MDJ=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </a>
        <p>Price from CryptoCompare</p>
        <h3>{price} USD / BTC</h3>
      </div>
    </>
  );
};

export default BtcPriceCryptoCompare;
