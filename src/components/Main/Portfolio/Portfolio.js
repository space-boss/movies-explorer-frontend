import React from "react";
import "./Portfolio.css";
import "../Main.css";
import {
  PORTFOLIO_LABEL,
  PORTFOLIO_STATIC,
  PORTFOLIO_ADAPTIVE,
  PORTFOLIO_SINGLE_PAGE,
} from "../../../utils/textConstants";
const staticSiteLink = "https://space-boss.github.io/how-to-learn";
const adaptiveSiteLink = "https://space-boss.github.io/russian-travel/";
const appSiteLink = "https://spaceboss.mesto.nomoredomains.club/sign-up";

function Portfolio() {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">{PORTFOLIO_LABEL}</h4>
      <nav>
        <div className="portfolio__links">
          <a
            href={staticSiteLink}
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
          >
            {PORTFOLIO_STATIC}
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
            {PORTFOLIO_ADAPTIVE}
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
            {PORTFOLIO_SINGLE_PAGE}
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
