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
        <h4 className="form__input-label">Email</h4>
        <input
          type="email"
          id="register-email"
          name="newuseremail"
          placeholder="Email"
          className="form__input"
          required 
          minLength="2" 
          maxLength="40"
        />
        <h4 className="form__input-label">Пароль</h4>
        <input
          type="password"
          id="register-password"
          name="newuserpassword"
          placeholder="Пароль"
          className="form__input form__input_false"
          required 
          minLength="8"
          maxLength="40"
        />
      </FormElement>
    </section>
  );
}

export default Login;
