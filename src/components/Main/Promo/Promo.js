import React from 'react';
import './Promo.css';
import '../Main.css';


function Promo() {
  return (
    <div className="promo">
      <h1 className="main__heading promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <div className="promo__links">
        <div className="promo__link">О проекте</div>
        <div className="promo__link">Технологии</div>
        <div className="promo__link">Студент</div>
      </div>
      
    </div>
  )
}

export default Promo;

