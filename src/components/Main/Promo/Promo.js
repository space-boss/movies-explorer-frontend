import React from 'react';
import './Promo.css';
import '../Main.css';
import { Link } from 'react-scroll';


function Promo() {
  return (
    <div className="promo">
      <h1 className="main__heading promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <nav className="promo__links">
        <Link to="about" smooth={true} className="promo__link">О проекте</Link>
        <Link to="techs" smooth={true} className="promo__link">Технологии</Link>
        <Link to="aboutme" smooth={true} className="promo__link">Студент</Link>
      </nav>      
    </div>
  )
}

export default Promo;