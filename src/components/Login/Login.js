import React from "react";
import "./Login.css";
import FormElement from "../FormElement/FormElement";
import "../FormElement/FormElement.css";


function Login() {
  return (
    <section className="login">
      <FormElement
        name="login"
        title="Рады видеть!"
        submit="Войти"
        suggestion="Еще не зарегистрированы?"
        link="/signup"
        action="Регистрация"
      >
        <h4 className="form__input-label">Имя</h4>
        <input
          type="text"
          id="login-name"
          name="username"
          placeholder="Имя"
          className="form__input"
        />
        <h4 className="form__input-label">Email</h4>
        <input
          type="text"
          id="login-email"
          name="useremail"
          placeholder="Email"
          className="form__input"
        />
      </FormElement>
    </section>
  );
}

export default Login;
