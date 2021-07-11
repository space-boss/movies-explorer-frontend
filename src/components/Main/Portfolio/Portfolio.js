import React from "react";
import "./Portfolio.css";
import "../Main.css";
const staticSiteLink = "https://space-boss.github.io/how-to-learn";
const adaptiveSiteLink = "https://space-boss.github.io/russian-travel/";
const appSiteLink = "https://spaceboss.mesto.nomoredomains.club/sign-up";

function Portfolio() {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <nav>
        <div className="portfolio__links">
          <a
            href={staticSiteLink}
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
          >
            Статичный сайт
          </a>
          <a
            href={staticSiteLink}
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
          >
            &#8599;
          </a>
          <div className="portfolio__line"></div>
          <a
            href={adaptiveSiteLink}
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
          >
            Адаптивный сайт
          </a>
          <a
            href={adaptiveSiteLink}
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
          >
            &#8599;
          </a>
          <div className="portfolio__line"></div>
          <a
            href={appSiteLink}
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
          >
            Одностраничное приложение
          </a>
          <a
            href={appSiteLink}
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
          >
            &#8599;
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Portfolio;
