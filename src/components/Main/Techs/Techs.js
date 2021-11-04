import React from 'react';
import './Techs.css';
import '../Main.css';
import {
  STACK_TITLE,
  STACK_ABOUT,
  STACK_SIZE,
} from "../../../utils/textConstants";

function Technologies() {
  return (
    <div className="techs" id="techs">
      <h3 className="main__block-description">{STACK_TITLE}</h3>

      <div className="techs__main">
        <h2 className="main__heading main__heading-techs">{STACK_SIZE}</h2>
        <p className="techs__main-paragraph main__text">
          {STACK_ABOUT}
        </p>
        <div className="techs__landing">
          <div className="techs__landing-icon">HTML</div>
          <div className="techs__landing-icon">CSS</div>
          <div className="techs__landing-icon">JS</div>
          <div className="techs__landing-icon">React</div>
          <div className="techs__landing-icon">Git</div>
          <div className="techs__landing-icon">Express.js</div>
          <div className="techs__landing-icon">mongoDB</div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
