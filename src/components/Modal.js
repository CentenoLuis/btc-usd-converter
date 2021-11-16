import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

export default function Modal(props) {
  const [display, setDisplay] = useState(true);

  const closeModal = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <>
        <div className="modal-wrapper">
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div className="modal-box">
            {props.children}
            <button
              className="btn"
              type="button"
              onClick={closeModal}
              style={{ background: "gray" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </>,
      document.getElementById("modal-root")
    );
  } else return null;
}
