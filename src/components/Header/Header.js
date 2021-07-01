import React from 'react';
import './Header.css';
import headerLogoPath from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogoPath} alt="Логотип учетной записи"/>
      <div className="header__links">
        <Link to="/signup" className="header__link">Регистрация</Link>
        <Link to="/signin" className="header__link header__link_calltoaction">Войти</Link>
      </div>
    </header>
  )
}

export default Header;

