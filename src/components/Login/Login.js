import React from "react";
import "./Login.css";
import FormElement from "../FormElement/FormElement";
import "../FormElement/FormElement.css";
import { useHistory } from 'react-router-dom';
import {
  OBLIGATORY_FIELD_ERROR_MESSAGE, INVALID_EMAIL_ERROR_MESSAGE, MIN_PASSWORD_LENGTH_MESSAGE
} from "../../utils/errorMessages";

import {
  SIGNED_UP_WELCOME_MESSAGE, NEW_USER_REGISTRATION_MESSAGE, REGISTER_LABEL,
} from "../../utils/textConstants";

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
    setUserPassword(evt.target.value);

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
        title={SIGNED_UP_WELCOME_MESSAGE}
        submit="Sign in"
        suggestion={NEW_USER_REGISTRATION_MESSAGE}
        link="/signup"
        action={REGISTER_LABEL}
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

        <h4 className="form__input-label">Password</h4>
        <input
          onChange={handlePasswordInput}
          value={password}
          type="password"
          id="register-password"
          name="newuserpassword"
          placeholder="Password"
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
