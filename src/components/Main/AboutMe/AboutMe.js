import React from "react";
import "./AboutMe.css";
import "../Main.css" ;
import studentPicPath from '../../../images/about-irina.jpg';

function AboutMe() {
  return (
    <div className="about-me">
      <h3 className="main__block-description">Студентка</h3>
      <div className="about-me__info">
        <div class="about-me__bio">
          <h2 className=" main__heading">Ирина</h2>
          <h4 className="about-me__subtitle main__text-subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="main__text">Родилась и выросла во Владимире, но в 2014 году переехала в Гамбург учиться градостроительству.
          Работаю по специальности, но хочу сменить сферу деятельности, чтобы быстрее видеть результаты своей работы, поэтому пошла на курсы веб-разработки. Увлекаюсь фотографией, разбираюсь в крафтовом пиве и сериалах.</p>
          <nav>
            <ul class="about-me__links">
              <li><a href="https://www.facebook.com/irina.tkrv/" className="about-me__link" rel="noreferrer" target="_blank">Facebook</a></li>
              <li><a href="https://github.com/space-boss" className="about-me__link"  rel="noreferrer" target="_blank">Github</a></li>
            </ul>
          </nav>
        </div>
        <img class="about-me__userpic" src={studentPicPath} alt="Фото Ирины"/>
      </div>
    </div>
  )
}

export default AboutMe;