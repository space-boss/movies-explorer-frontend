import React from "react";
import "./Register.css";
import FormElement from "../FormElement/FormElement";
import "../FormElement/FormElement.css";

function Register() {


  return (
    <section className="register">
      <FormElement
        name="register"
        title="Добро пожаловать!"
        submit="Зарегестрироваться"
        suggestion="Уже зарегестрированы?"
        link="/signin"
        action="Войти"
      >
        <h4 className="form__input-label">Имя</h4>
        <input
          type="text"
          id="register-name"
          name="newusername"
          placeholder="Имя"
          className="form__input"
          required 
          minlength="2" 
          maxlength="40"
        />
        <span id="form-username-error" className="form__input-error"></span>
        <h4 className="form__input-label">Email</h4>
        <input
          type="email"
          id="register-email"
          name="newuseremail"
          placeholder="Email"
          className="form__input"
          required 
          minlength="2" 
          maxlength="40"
        />
        <span  id="form-email-error" className="form__input-error"></span>
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
        <span  id="form-password-error" className="form__input-error">Что-то пошло не так... </span>
      </FormElement>
    </section>
  );
}

export default Register;
