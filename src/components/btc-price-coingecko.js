import React from "react";
import { useState, useEffect } from "react";

const BtcPriceCoinGecko = () => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    const url =
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
    const response = await fetch(url);
    const data = await response.json();
    const price = Number(data.bitcoin.usd);
    setPrice(price);
  };

  return (
    <>
      <div className="product">
        <img
          src="https://blog.btcbox.jp/wp2/wp-content/uploads/2020/03/CoinGecko.png"
          alt=""
        />
        <p>Price from CoinGecko</p>
        <h3>{price} USD / BTC</h3>
      </div>
    </>
  );
};

export default BtcPriceCoinGecko;
