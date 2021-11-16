import React from "react";

export default function Header() {
  return (
    <>
      <div>
        <h1>Bitcoin an innovative payment network. A new kind of money.</h1>
        <img
          src="https://www.inversionsimple.com/wp-content/uploads/2020/10/portada-bitcoin.jpg"
          alt="imagen"
        />
      </div>

      <div className="section">
        <h2>Why do bitcoins have value? </h2>
        <p>
          Bitcoins have value because they are useful as a form of money.
          Bitcoin has the characteristics of money (durability, portability,
          fungibility, scarcity, divisibility, and recognizability) based on the
          properties of mathematics rather than relying on physical properties
          (like gold and silver) or trust in central authorities (like fiat
          currencies). In short, Bitcoin is backed by mathematics. With these
          attributes, all that is required for a form of money to hold value is
          trust and adoption. In the case of Bitcoin, this can be measured by
          its growing base of users, merchants, and startups. As with all
          currency, bitcoin's value comes only and directly from people willing
          to accept them as payment.
        </p>
        <a
          href="https://localbitcoins.com/instant-bitcoins/?action=buy&amount=&currency=USD&country_code=US&online_provider=PAYONEER&find-offers=Search"
          target="blank"
        >
          <button className="btn" style={{ background: "red" }}>
            Buy BTC
          </button>
        </a>
        <a
          href="https://localbitcoins.com/instant-bitcoins/?action=sell&amount=&currency=USD&country_code=US&online_provider=PAYONEER&find-offers=Buscar"
          target="blank"
        >
          <button className="btn" style={{ background: "green" }}>
            Sell BTC
          </button>
        </a>
      </div>
    </>
  );
}
