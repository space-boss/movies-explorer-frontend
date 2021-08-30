import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import "./Profile.css";
import Header from "../Header/Header";

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setUserName] = React.useState('');
  const [email, setUserEmail] = React.useState('');

  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
  }, [currentUser])

  function changeUserName(name) {
    setUserName(name.target.value)
    console.log(name.target.value)
  }

  function changeUserEmail(email) {
    setUserEmail(email.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser({
      name,
      email,
    });
  }


  return (
    <>
      <Header loggedIn/>

      <section className="profile">
        <h3 className="profile__title">{`Привет, ${currentUser.name}`}</h3>
        <div className="profile__info-container">
          <h4 className="profile__info-text">Имя</h4>
          <input
            type="text"
            id="profile-name"
            value={name}
            onChange={changeUserName}
            name="username"
            placeholder="Имя"
            className="profile__info-text profile__info-text_value"
            minLength={2} 
            maxLength={40}
          />
          <div className="profile__line"></div>
          <h4 className="profile__info-text">E-mail</h4>
          <input
            type="text"
            id="profile-email"
            name="email"
            value={email}
            onChange={changeUserEmail}
            placeholder="Email "
            className="profile__info-text profile__info-text_value"
          />
        </div>
        <input
          onSubmit = {handleSubmit}
          name="edit-profile"
          type="submit"
          className="profile__link"
          value="Редактировать"
        />
        <input
          onClick={props.onClick}
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
