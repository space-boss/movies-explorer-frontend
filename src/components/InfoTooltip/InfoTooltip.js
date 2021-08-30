import React from "react";
import "./InfoTooltip.css";

function InfoTooltip(props) {
  return (
    <section className={`popup popup__auth ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          aria-label="закрыть"
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


/*function InfoTooltip(props) {
  const popupOpenedClass = props.isOpen ? "popup_opened" : "";

  return (
    <div className={`popup popup_infotooltip ${popupOpenedClass}`}>
      <div className={`popup__container popup__container-auth-feedback`}>
        <button
          type="button"
          onClick={props.onClose}
          className="popup__close"
          aria-label="Закрыть форму"
        />

        <div className="popup__content">
          <p className="popup__content-info">{props.infoTooltipMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;*/
