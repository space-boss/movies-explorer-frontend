import React from 'react';
import './Promo.css';
import '../Main.css';
import { Link } from 'react-scroll';
import {
  APP_TITLE,
  APP_ABOUT,
  APP_STACK,
  APP_STUDENT,
} from "../../../utils/textConstants";


function Promo() {
  return (
    <div className="promo">
      <h1 className="main__heading promo__title">{APP_TITLE}</h1>
      <nav className="promo__links">
        <Link to="about" smooth={true} className="promo__link">{APP_ABOUT}</Link>
        <Link to="techs" smooth={true} className="promo__link">{APP_STACK}</Link>
        <Link to="aboutme" smooth={true} className="promo__link">{APP_STUDENT}</Link>
      </nav>
    </div>
  )
}

export default Promo;
