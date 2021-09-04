import React from "react";
import "./FormElement.css";
import headerLogoPath from "../../images/header-logo.svg";
import { Link } from "react-router-dom";

function FormElement(props) {
  return (
    <>
      <Link to="/">
        <img
          className="header__logo"
          src={headerLogoPath}
          alt="Логотип учетной записи"
        />
      </Link>
      <section className="form">
        <h3 className="form__title">{props.title}</h3>
        <form
          onSubmit={props.onSubmit}
          name="editValues"
          method="post"
          className={`form__body form__body-${props.name}`}
          noValidate
        >
          {props.children}
          <button
            disabled={props.disabled}
            name="submit"
            type="submit"
            className={`form__submit form__submit-${props.name}`}
          > {props.submit} </button>
        </form>

        <div className={`form__redirect form__redirect-${props.name}`}>
          <p className="form__redirect-text">{props.suggestion}</p>

          <Link to={props.link} className="form__redirect-link">
            {props.action}
          </Link>
        </div>
      </section>
    </>
  );
}

export default FormElement;
