import React from "react";
import { Link, useHistory } from 'react-router-dom';
import "./Register.css";
import FormElement from "../FormElement/FormElement";
import "../FormElement/FormElement.css";

function Register({onRegister}) {

  const [email, setUserEmail] = React.useState('');
  const [password, setUserPassword] = React.useState('');
  const [name, setUserName] = React.useState('');
  const history = useHistory();

  function handleEmailInput(evt) {
    setUserEmail(evt.target.value)
  }

  function handlePasswordInput(evt) {
    setUserPassword(evt.target.value)
  }

  function handleNameInput(evt) {
    setUserName(evt.target.value)
  }

  function _handleRedirect() {
    history.push("/signin")
  }

  function handleFormSubmit(evt) {
    evt.preventDefault(); 
    onRegister({
      name: name, 
      password: password,
      email: email,
    })
    _handleRedirect();
  }

  return (
    <section className="register">
      <FormElement
        name="register"
        title="Добро пожаловать!"
        submit="Зарегестрироваться"
        suggestion="Уже зарегестрированы?"
        link="/signin"
        action="Войти"
        onSubmit={handleFormSubmit}
      >
        <h4 className="form__input-label">Имя</h4>
        <input
          value={name}
          onChange={handleNameInput}
          type="text"
          id="register-name"
          name="newusername"
          placeholder="Имя"
          className="form__input"
          required 
          minLength="2" 
          maxLength="40"
        />
        <span id="form-username-error" className="form__input-error"></span>
        <h4 className="form__input-label">Email</h4>
        <input
          value={email}
          onChange={handleEmailInput}
          type="email"
          id="register-email"
          name="newuseremail"
          placeholder="Email"
          className="form__input"
          required 
          minLength="2" 
          maxLength="40"
        />
        <span  id="form-email-error" className="form__input-error"></span>
        <h4 className="form__input-label">Пароль</h4>
        <input
          value={password}
          onChange={handlePasswordInput}
          type="password"
          id="register-password"
          name="newuserpassword"
          placeholder="Пароль"
          className="form__input form__input_false"
          required 
          minLength="8"
          maxLength="40"
        />
        <span  id="form-password-error" className="form__input-error">Что-то пошло не так... </span>
      </FormElement>
    </section>
  );
}

export default Register;
