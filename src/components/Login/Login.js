import React from "react";
import "./Login.css";
import FormElement from "../FormElement/FormElement";
import "../FormElement/FormElement.css";
import { useHistory } from 'react-router-dom';

function Login({ onLogin, onRegister }) {
  const [email, setUserEmail] = React.useState("");
  const [password, setUserPassword] = React.useState("");
  const history = useHistory();


  function handleEmailInput(evt) {
    setUserEmail(evt.target.value);
  }

  function handlePasswordInput(evt) {
    setUserPassword(evt.target.value);
  }

  function _handleRedirect() {
    history.push("/movies")
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    const userData = {
      email,
      password,
    };
    onLogin(userData);
    _handleRedirect();
  }

  return (
    <section className="login">
      <FormElement
        name="login"
        title="Рады видеть!"
        submit="Войти"
        suggestion="Еще не зарегистрированы?"
        link="/signup"
        action="Регистрация"
        onSubmit={handleFormSubmit}
      >
        <h4 className="form__input-label">Email</h4>
        <input
          onChange={handleEmailInput}
          value={email}
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
          onChange={handlePasswordInput}
          value={password}
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
