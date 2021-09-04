import React from "react";
import { useHistory } from 'react-router-dom';
import "./Register.css";
import FormElement from "../FormElement/FormElement";
import "../FormElement/FormElement.css";

function Register({onRegister}) {

  const [email, setUserEmail] = React.useState('');
  const [password, setUserPassword] = React.useState('');
  const [name, setUserName] = React.useState('');
  
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [nameError, setNameError] = React.useState('');

  const [emailTrue, setEmailTrue] = React.useState(false);
  const [passwordTrue, setPasswordTrue] = React.useState(false);
  const [nameTrue, setNameTrue] = React.useState(false);

  const history = useHistory();

  function handleEmailInput(evt) {
    setUserEmail(evt.target.value)

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
    setUserPassword(evt.target.value)

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

  function handleNameInput(evt) {
    setUserName(evt.target.value)

    if (!evt.target.value) {
      setNameError('Данное поле обязательно для заполнения');
      setNameTrue(false);
    } else if (evt.target.value.length <= 2 ) {
      setNameError('Имя пользователя должно быть длиннее двух символов');
      setNameTrue(false);
    } else {
      setNameError('');
      setNameTrue(true);
    }
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
          className={`form__input ${nameTrue ? "" : "form__input_false"}`}
          required 
          minLength="2" 
          maxLength="40"
        />
        <span id="form-username-error" className="form__input-error">{nameError}</span>
        <h4 className="form__input-label">Email</h4>
        <input
          value={email}
          onChange={handleEmailInput}
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
          value={password}
          onChange={handlePasswordInput}
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

export default Register;
