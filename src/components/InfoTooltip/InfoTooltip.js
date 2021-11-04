import React from "react";
import "./InfoTooltip.css";

function InfoTooltip(props) {
  return (
    <section className={`popup popup__auth ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          aria-label="close"
          onClick={props.onClose}
        ></button>

        <div className="popup__content">
          <p className="popup__content-auth-text">{props.infoTooltipMessage}</p>
        </div>
      </div>
    </section>
  );
}

export default InfoTooltip;
