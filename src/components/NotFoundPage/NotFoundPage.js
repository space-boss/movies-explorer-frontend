import React from "react";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="notfound">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__text">Страница не найдена</p>
        <Link to="/" className="notfound__link">
          Назад
        </Link>
    </section>
  );
}

export default NotFoundPage;
