import React from "react";
import "./AboutMe.css";
import "../Main.css" ;
import studentPicPath from '../../../images/about-irina.jpg';
import {
  STUDENT_TITLE,
  STUDENT_NAME,
  STUDENT_INFO,
  STUDENT_BIO,
} from "../../../utils/textConstants";

function AboutMe() {
  return (
    <div id="aboutme" className="about-me">
      <h3 className="main__block-description">{STUDENT_TITLE}</h3>
      <div className="about-me__info">
        <div className="about-me__bio">
          <h2 className="main__heading">{STUDENT_NAME}</h2>
          <h4 className="about-me__subtitle main__text-subtitle">{STUDENT_INFO}</h4>
          <p className="main__text">{STUDENT_BIO}</p>
          <nav>
            <ul className="about-me__links">
              <li><a href="https://www.facebook.com/irina.tkrv/" className="about-me__link" rel="noreferrer" target="_blank">Facebook</a></li>
              <li><a href="https://github.com/space-boss" className="about-me__link"  rel="noreferrer" target="_blank">Github</a></li>
            </ul>
          </nav>
        </div>
        <img className="about-me__userpic" src={studentPicPath} alt="Student_picture"/>
      </div>
    </div>
  )
}

export default AboutMe;
