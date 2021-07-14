import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();
  const width = window.innerWidth;


  if (location.pathname === "/") {
    return (
      <nav className="header__links-main">
        <Link to="/signup" className="header__link">
          Регистрация
        </Link>
        <Link to="/signin" className="header__link header__link_calltoaction">
          Войти
        </Link>
      </nav>
    );
  } else if (width<=768) {
    return (
      <p>Burger</p>
    )

  } else {
    return (
      <>
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
      </>
    );
  }
}

export default Navigation;