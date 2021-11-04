import React from "react";
import "./Register.css";
import FormElement from "../FormElement/FormElement";
import "../FormElement/FormElement.css";

import {
  OBLIGATORY_FIELD_ERROR_MESSAGE,
  INVALID_EMAIL_ERROR_MESSAGE,
  MIN_PASSWORD_LENGTH_MESSAGE,
  MIN_USERNAME_LENGTH_MESSAGE,
} from "../../utils/errorMessages";

import {
  NEW_USER_WELCOME_MESSAGE,
  REGISTER_LABEL,
  ALREADY_REGISTERED_MESSAGE,
  LOGIN_LABEL,
  NAME_LABEL,
  EMAIL_LABEL,
  PASSWORD_LABEL
} from "../../utils/textConstants";

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


  function handleEmailInput(evt) {
    setUserEmail(evt.target.value)

    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!evt.target.value) {
      setEmailError(OBLIGATORY_FIELD_ERROR_MESSAGE);
      setEmailTrue(false);
    } else if (!pattern.test(String(evt.target.value).toLowerCase())) {
      setEmailError(INVALID_EMAIL_ERROR_MESSAGE);
      setEmailTrue(false);
    } else {
      setEmailError('');
      setEmailTrue(true);
    }
  }

  function handlePasswordInput(evt) {
    setUserPassword(evt.target.value)

    if (!evt.target.value) {
      setPasswordError(OBLIGATORY_FIELD_ERROR_MESSAGE);
      setPasswordTrue(false);
    } else if (evt.target.value.length < 8 ) {
      setPasswordError(MIN_PASSWORD_LENGTH_MESSAGE);
      setPasswordTrue(false);
    } else {
      setPasswordError('');
      setPasswordTrue(true);
    }
  }

  function handleNameInput(evt) {
    setUserName(evt.target.value)

    if (!evt.target.value) {
      setNameError(OBLIGATORY_FIELD_ERROR_MESSAGE);
      setNameTrue(false);
    } else if (evt.target.value.length <= 2 ) {
      setNameError(MIN_USERNAME_LENGTH_MESSAGE);
      setNameTrue(false);
    } else {
      setNameError('');
      setNameTrue(true);
    }
  }


  function handleFormSubmit(evt) {
    evt.preventDefault();
    onRegister({
      name: name,
      password: password,
      email: email,
    })
  }

  const isEnabled = emailTrue && nameTrue && passwordTrue;

  return (
    <section className="register">
      <FormElement
        name="register"
        title={NEW_USER_WELCOME_MESSAGE}
        submit={REGISTER_LABEL}
        suggestion={ALREADY_REGISTERED_MESSAGE}
        link="/signin"
        action={LOGIN_LABEL}
        onSubmit={handleFormSubmit}
        disabled={!isEnabled}
      >
        <h4 className="form__input-label">{NAME_LABEL}</h4>
        <input
          value={name}
          onChange={handleNameInput}
          type="text"
          id="register-name"
          name="newusername"
          placeholder={NAME_LABEL}
          className={`form__input ${nameTrue ? "" : "form__input_false"}`}
          required
          minLength="2"
          maxLength="40"
        />
        <span id="form-username-error" className="form__input-error">{nameError}</span>
        <h4 className="form__input-label">{EMAIL_LABEL}</h4>
        <input
          value={email}
          onChange={handleEmailInput}
          type="email"
          id="register-email"
          name="newuseremail"
          placeholder={EMAIL_LABEL}
          className={`form__input ${emailTrue ? "" : "form__input_false"}`}
          required
          minLength="2"
          maxLength="40"
        />
        <span  id="form-email-error" className="form__input-error">{emailError}</span>
        <h4 className="form__input-label">{PASSWORD_LABEL}</h4>
        <input
          value={password}
          onChange={handlePasswordInput}
          type="password"
          id="register-password"
          name="newuserpassword"
          placeholder={PASSWORD_LABEL}
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
