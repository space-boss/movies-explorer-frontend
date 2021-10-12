import React from "react";
import "./Login.css";
import FormElement from "../FormElement/FormElement";
import "../FormElement/FormElement.css";
import { useHistory } from 'react-router-dom';

function Login({ onLogin }) {

  const [email, setUserEmail] = React.useState('');
  const [password, setUserPassword] = React.useState('');
  
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const [emailTrue, setEmailTrue] = React.useState(false);
  const [passwordTrue, setPasswordTrue] = React.useState(false);
  const history = useHistory();


  function handleEmailInput(evt) {
    setUserEmail(evt.target.value);

    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!evt.target.value) {
      setEmailError('Данное поле обязательно для заполнения');
      setEmailTrue(false);
    } else if (!pattern.test(String(evt.target.value).toLowerCase())) {
      setEmailError('Введите корректный email');
      setEmailTrue(false);
    } else {
      setEmailError('');
      setEmailTrue(true);
    }
  }

  function handlePasswordInput(evt) {
    setUserPassword(evt.target.value);

    if (!evt.target.value) {
      setPasswordError('Данное поле обязательно для заполнения');
      setPasswordTrue(false);
    } else if (evt.target.value.length < 8 ) {
      setPasswordError('Минимальная длина пароля - 8 символов');
      setPasswordTrue(false);
    } else {
      setPasswordError('');
      setPasswordTrue(true);
    }
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

  const isEnabled = emailTrue && passwordTrue;

  return (
    <section className="login">
      <FormElement
        disabled={!isEnabled}
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
          className={`form__input ${emailTrue ? "" : "form__input_false"}`}
          required
          minLength="2"
          maxLength="40"
        />
        <span  id="form-email-error" className="form__input-error">{emailError}</span>

        <h4 className="form__input-label">Пароль</h4>
        <input
          onChange={handlePasswordInput}
          value={password}
          type="password"
          id="register-password"
          name="newuserpassword"
          placeholder="Пароль"
          className={`form__input ${passwordTrue ? "" : "form__input_false"}`}
          required
          minLength="8"
          maxLength="40"
        />
        <span  id="form-password-error" className="form__input-error">{passwordError}</span>

      </FormElement>
    </section>
  );
}

export default Login;
