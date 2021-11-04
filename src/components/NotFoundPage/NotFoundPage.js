import React from "react";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

import {
  PAGE_NOT_FOUND_ERROR_MESSAGE
} from "../../utils/errorMessages";

import {
  BACK_LABEL,
  NOT_FOUND_LABEL
} from "../../utils/textConstants";

function NotFoundPage() {
  return (
    <section className="notfound">
        <h1 className="notfound__title">{NOT_FOUND_LABEL}</h1>
        <p className="notfound__text">{PAGE_NOT_FOUND_ERROR_MESSAGE}</p>
        <Link to="/" className="notfound__link">
          {BACK_LABEL}
        </Link>
    </section>
  );
}

export default NotFoundPage;
