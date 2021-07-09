import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header />

      <section className="profile">
        <h3 className="profile__title">Привет, Ирина</h3>
        <div className="profile__info-container">
          <h4 className="profile__info-text">Имя</h4>
          <input
            type="text"
            id="profile-name"
            name="username"
            value="Ирина"
            placeholder="Имя"
            className="profile__info-text profile__info-text_value"
          />
          <div className="profile__line"></div>
          <h4 className="profile__info-text">E-mail</h4>
          <input
            type="text"
            id="profile-email"
            name="email"
            value="mail@email.com"
            placeholder="Email "
            className="profile__info-text profile__info-text_value"
          />
        </div>
        <input
          name="edit-profile"
          type="submit"
          className="profile__link"
          value="Редактировать"
        />
        <input
          name="exit-profile"
          type="submit"
          className="profile__link profile__link_exit"
          value="Выйти из аккаунта"
        />
      </section>
    </>
  );
}

export default Profile;
