import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import {
  NAV_MAIN,
  NAV_MOVIES,
  NAV_MY_ACCOUNT,
  NAV_SAVED_MOVIES
} from "../../utils/textConstants";

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
                {NAV_MAIN}
              </Link>
            </li>
            <li className="nav__link">
              <Link to="/movies" className={`nav__link ${moviesLinkHighlight}`}>
                {NAV_MOVIES}
              </Link>
            </li>
            <li className="nav__link">
              <Link
                to="/saved-movies"
                className={`nav__link ${savedMoviesLinkHighlight}`}
              >
                {NAV_SAVED_MOVIES}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            aria-label="Close the menu"
            className="nav__close-button"
            onClick={handleNavMenuClose}
          />
          <Link to="/profile" className="nav__link-profile">
            {NAV_MY_ACCOUNT}
          </Link>{" "}
        </nav>
      </div>
    </>
  );
}

export default Navigation;
