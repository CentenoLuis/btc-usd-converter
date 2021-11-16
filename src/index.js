import React from "react";
import ReactDom from "react-dom";
import { useState } from "react";
import "./index.css";
import ConverterBtcUsd from "./components/converter-btc-usd";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import BtcPrices from "./components/BtcPrices";
import Modal from "./components/Modal";

const ThankYouNote = ({ messageToUser }) => {
  return (
    <>
      <div>
        <h2>{messageToUser}</h2>
      </div>
    </>
  );
};

const App = () => {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(true);

  const displayMessage = () => {
    setShowMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log(email);
      setMessage("Thanks!");
      setShowMessage(true);
      setEmail("");
      setTimeout(() => {
        displayMessage();
        setShowModal(false);
      }, 2000);
    } else {
      setMessage("Please Enter Email");
      setShowMessage(true);
      setTimeout(() => {
        displayMessage();
      }, 2000);
    }
  };

  return (
    <>
      <main id="home">
        <Navbar />
        {showModal && (
          <Modal>
            {showMessage && <ThankYouNote messageToUser={message} />}
            <article>
              <form className="form">
                <h3>Subscribe to our Newsletter</h3>
                <div className="form-control">
                  <label className="form-label" htmlFor="emailInput">
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    name="emailInput"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </div>
                <button className="btn" type="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </form>
            </article>
          </Modal>
        )}

        <section className="home">
          <Header />
        </section>

        <section className="prices container" id="prices">
          <BtcPrices />
        </section>

        <section className="converter" id="converter">
          <ConverterBtcUsd />
        </section>
      </main>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
