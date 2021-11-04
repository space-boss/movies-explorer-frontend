import React from "react";
import "./Header.css";
import headerLogoPath from "../../images/header-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const location = useLocation();

  const moviesLinkHighlight =
    location.pathname === "/movies" ? "header__link-movies_active" : "";
  const savedMoviesLinkHighlight =
    location.pathname === "/saved-movies" ? "header__link-movies_active" : "";

  const [ isNavMenuOpen, setIsNavMenuOpen ] = React.useState(false);

  const { loggedIn } = props;

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  function handleBurgerMenuClick() {
    setIsNavMenuOpen(!isNavMenuOpen);
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img
          className="header__logo"
          src={headerLogoPath}
          alt="account logo"
        />{" "}
      </Link>

      {loggedIn ? (
        <>
          {isMobile && (
            <>
              {!isNavMenuOpen && (
                <button
                  type="button"
                  className="header__burger-button"
                  onClick={handleBurgerMenuClick}
                />
              )}
              <Navigation
                isOpen={isNavMenuOpen}
                onClose={handleBurgerMenuClick}
              />
            </>
          )}

          {!isMobile && (
            <>
              <div className="header__nav-movies">
                <nav className="header__links-movies">
                  <Link
                    to="/movies"
                    className={`header__link-movies ${moviesLinkHighlight}`}
                  >
                    Movies
                  </Link>
                  <Link
                    to="/saved-movies"
                    className={`header__link-movies ${savedMoviesLinkHighlight}`}
                  >
                    Saved Movies
                  </Link>
                </nav>
              </div>
              <Link to="/profile" className="header__link-profile">
                Profile
              </Link>
            </>
          )}
        </>
      ) : (
        <nav className="header__links-main">
          <Link to="/signup" className="header__link">
            Sign up
          </Link>
          <Link to="/signin" className="header__link header__link_calltoaction">
            Sign in
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
