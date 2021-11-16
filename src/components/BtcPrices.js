import React from "react";
import CoinGecko from "./btc-price-coingecko";
import CoinPaprika from "./btc-price-coinpaprika";
import CoinCap from "./btc-price-coincap";
import Gemini from "./btc-price-gemini";
import CryptoComapre from "./btc-price-cryptocompare";
import Binance from "./btc-price-binance";
import AveragePrice from "./btc-average";

export default function BtcPrices() {
  return (
    <>
      <div className="section">
        <h1>Prices</h1>
      </div>
      <div className="products">
        <CoinPaprika />
        <CoinGecko />
        <CoinCap />
        <Gemini />
        <CryptoComapre />
        <Binance />
        <AveragePrice />
      </div>
    </>
  );
}
