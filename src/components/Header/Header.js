import React from 'react';
import './Header.css';
import headerLogoPath from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogoPath} alt="Логотип учетной записи"/>
      <nav className="header__links-main">
        <Link to="/signup" className="header__link">Регистрация</Link>
        <Link to="/signin" className="header__link header__link_calltoaction">Войти</Link>
      </nav>
      <div className="header__nav-movies">
        <nav className="header__links-movies">
          <Link to="/movies" className="header__link-movies header__link-movies_active">Фильмы</Link>
          <Link to="/saved-movies" className="header__link-movies">Сохраненные фильмы</Link>
        </nav>
      </div>
      <Link to="/profile" className="header__link-profile">Аккаунт</Link>
    </header>
  )
}

export default Header;

