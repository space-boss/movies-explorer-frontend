import React from "react";
import "./Header.css";
import headerLogoPath from "../../images/header-logo.svg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname === "/") {
    return (
      <header className="header">
        <Link to="/" className="header__logo">
          <img
            className="header__logo"
            src={headerLogoPath}
            alt="Логотип учетной записи"
          />{" "}
        </Link>
        <nav className="header__links-main">
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
          <Link to="/signin" className="header__link header__link_calltoaction">
            Войти
          </Link>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="header">
        <Link to="/" className="header__logo">
          <img
            className="header__logo"
            src={headerLogoPath}
            alt="Логотип учетной записи"
          />{" "}
        </Link>
        <div className="header__nav-movies">
          <nav className="header__links-movies">
            <Link
              to="/movies"
              className="header__link-movies header__link-movies_active"
            >
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__link-movies">
              Сохраненные фильмы
            </Link>
          </nav>
        </div>
        <Link to="/profile" className="header__link-profile">
          Аккаунт
        </Link>
      </header>
    );
  }
}

export default Header;
