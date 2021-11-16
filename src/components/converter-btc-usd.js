import React from "react";
import { useState, useEffect } from "react";

const ConverterBtcUsd = () => {
  const [averagePrice, setAveragePrice] = useState(0);
  const [usdInput, setUsdInput] = useState(0);
  const [btcInput, setBtcInput] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      getAverage();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getAverage();
  }, []);

  const getAverage = async () => {
    try {
      const urlCoinGecko =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
      const urlBinance =
        "https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT";
      const urlCoinPaprika =
        "https://api.coinpaprika.com/v1/tickers/btc-bitcoin";
      const urlCryptoCompare =
        "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
      const urlGemini = "https://api.gemini.com/v2/ticker/btcusd";

      const responseGemini = await fetch(urlGemini);
      const dataGemini = await responseGemini.json();
      const receivedData = Object.entries(dataGemini);
      const priceGemini = parseInt(receivedData[6][1]);

      const responseCryptoCompare = await fetch(urlCryptoCompare);
      const dataCryptoCompare = await responseCryptoCompare.json();
      const priceCryptoCompare = dataCryptoCompare.USD;

      const responseCoinPaprika = await fetch(urlCoinPaprika);
      const dataCoinPaprika = await responseCoinPaprika.json();
      const priceCoinPaprika = Number(dataCoinPaprika.quotes.USD.price);

      const responseBinance = await fetch(urlBinance);
      const dataBinance = await responseBinance.json();
      const priceBinance = parseInt(dataBinance.price);

      const responseCoinGecko = await fetch(urlCoinGecko);
      const dataCoinGecko = await responseCoinGecko.json();
      const priceCoinGecko = Number(dataCoinGecko.bitcoin.usd);

      setAveragePrice(
        (
          (priceBinance +
            priceCoinGecko +
            priceCoinPaprika +
            priceCryptoCompare +
            priceGemini) /
          5
        ).toFixed(0)
      );
    } catch {
      console.log("average error");
    }
  };

  const convertToUsd = (e) => {
    setBtcInput(e.target.value);
    setUsdInput(averagePrice * e.target.value);
  };

  const convertToBtc = (e) => {
    setUsdInput(e.target.value);
    setBtcInput((e.target.value / averagePrice).toFixed(8));
  };

  return (
    <>
      <div className="section">
        <h1>converter</h1>
        <form className="form">
          <div className="form-control">
            <label className="form-label" htmlFor="btcInput">
              BTC
            </label>
            <input
              type="text"
              id="btcInput"
              name="btcInput"
              onChange={convertToUsd}
              value={btcInput}
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="usdInput">
              USD
            </label>
            <input
              type="text"
              id="usdInput"
              name="usdInput"
              onChange={convertToBtc}
              value={usdInput}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ConverterBtcUsd;
