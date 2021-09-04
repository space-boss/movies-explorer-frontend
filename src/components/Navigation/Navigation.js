import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  const { isOpen, onClose } = props;
  const location = useLocation();

  const moviesLinkHighlight =
    location.pathname === "/movies" ? "nav__link_active" : "";
  const savedMoviesLinkHighlight =
    location.pathname === "/saved-movies" ? "nav__link_active" : "";

  let showNavClass;
  isOpen ? (showNavClass = "_opened") : (showNavClass = "_hidden");

  const handleNavMenuClose = () => {
    onClose();
  };

  return (
    <>
      <div className={`nav__popup nav__popup${showNavClass}`}>
        <nav className="nav__menu-area">
          <ul className="nav__links">
            <li className="nav__link">
              <Link to="/" className="nav__link">
                Главная
              </Link>
            </li>
            <li className="nav__link">
              <Link to="/movies" className={`nav__link ${moviesLinkHighlight}`}>
                Фильмы
              </Link>
            </li>
            <li className="nav__link">
              <Link
                to="/saved-movies"
                className={`nav__link ${savedMoviesLinkHighlight}`}
              >
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <button
            type="button"
            aria-label="Закрыть меню"
            className="nav__close-button"
            onClick={handleNavMenuClose}
          />
          <Link to="/profile" className="nav__link-profile">
            Аккаунт
          </Link>{" "}
        </nav>
      </div>
    </>
  );
}

export default Navigation;
