import "./Footer.css";
const newDate = new Date();
const year = newDate.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__summary">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__infos">
      <p className="footer__copyright">© {year}</p>
      <nav>
        <ul className="footer__links">
          <li>
            <a
              href="https://praktikum.yandex.ru/"
              className="footer__link"
              rel="noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/space-boss"
              className="footer__link"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/irina.tkrv/"
              className="footer__link"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </footer>
  )
}

export default Footer;
