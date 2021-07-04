import React from 'react';
import './Techs.css';
import '../Main.css';

function Technologies() {
  return (
    <div className="techs" id="techs">
      <h3 className="main__block-description">Технологии</h3>

      <div className="techs__main">
        <h2 className="main__heading">7 технологий</h2>
        <p className="techs__main-paragraph main__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
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
