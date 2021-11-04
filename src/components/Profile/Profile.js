import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";
import Header from "../Header/Header";

import {
  OBLIGATORY_FIELD_ERROR_MESSAGE,
  MIN_USERNAME_LENGTH_MESSAGE,
  INVALID_EMAIL_ERROR_MESSAGE,
} from "../../utils/errorMessages";

import {
  NAME_LABEL,
  EMAIL_LABEL,
  EDIT_LABEL,
  EXIT_PROFILE_LABEL
} from "../../utils/textConstants";


function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setUserName] = React.useState('');
  const [email, setUserEmail] = React.useState('');

  const [emailError, setEmailError] = React.useState('');
  const [nameError, setNameError] = React.useState('');

  const [emailTrue, setEmailTrue] = React.useState(false);
  const [nameTrue, setNameTrue] = React.useState(false);


  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
  }, [currentUser]);

  function changeUserName(evt) {
    setUserName(evt.target.value);

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

  function changeUserEmail(evt) {
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

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleUpdateUser({
      name,
      email,
    });
  }

  const isEnabled = (emailTrue || nameTrue) && (name !== currentUser.name || email !== currentUser.email);


  return (
    <>
      <Header loggedIn />

      <section className="profile">
        <h3 className="profile__title">{`Привет, ${currentUser.name}`}</h3>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__info-container">
            <h4 className="profile__info-text">{NAME_LABEL}</h4>
            <input
              type="text"
              id="profile-name"
              value={name}
              onChange={changeUserName}
              name="username"
              placeholder={NAME_LABEL}
              className="profile__info-text profile__info-text_value"
              minLength={2}
              maxLength={40}
            />
            <span id="profile-name-error" className="form__profile-input-error">{nameError}</span>

            <div className="profile__line"></div>
            <h4 className="profile__info-text">{EMAIL_LABEL}</h4>
            <input
              type="text"
              id="profile-email"
              name="email"
              value={email}
              onChange={changeUserEmail}
              placeholder={EMAIL_LABEL}
              className="profile__info-text profile__info-text_value"
            />
            <span id="profile-email-error" className="form__profile-input-error">{emailError}</span>

          </div>
          <input
            disabled={!isEnabled}
            name="edit-profile"
            type="submit"
            className={`profile__link ${!isEnabled && 'profile__link_disabled'}`}
            value={EDIT_LABEL}
          />
        </form>
        <input
          onClick={props.onClick}
          name="exit-profile"
          type="submit"
          className="profile__link profile__link_exit"
          value={EXIT_PROFILE_LABEL}
        />
      </section>
    </>
  );
}

export default Profile;
