import React from 'react';
import './AboutProject.css';
import '../Main.css';
import {
  PROJECT_ABOUT,
  PROJECT_LENGTH,
  PROJECT_STAGES,
  PROJECT_DEADLINE,
  PROJECT_DEADLINE_INFO,
} from "../../../utils/textConstants";

function AboutProject() {
  return (
    <div id="about" className="project-about">
      <h3 className="main__block-description">{PROJECT_ABOUT}</h3>

      <div className="project-about__description">
        <div className="project-about__paragraph">
          <div className="project-about__subtitle">{PROJECT_LENGTH}</div>
          <p className="main__text project-about__text">{PROJECT_STAGES}</p>
        </div>
        <div className="project-about__paragraph">
          <div className="project-about__subtitle">{PROJECT_DEADLINE}</div>
          <p className="main__text project-about__text">{PROJECT_DEADLINE_INFO}</p>
        </div>
      </div>

      <div className="project-about__progress">
        <div className="project-about__progress-text project-about__progress-text_bar-checked">1 Week</div>
        <div className="project-about__progress-text project-about__progress-text_bar-unchecked">4 Weeks</div>
        <div className="project-about__progress-text">Back-end</div>
        <div className="project-about__progress-text">Front-end</div>
      </div>
    </div>
  );
}

export default AboutProject;
