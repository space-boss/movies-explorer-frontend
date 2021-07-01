import React from "react";
import "./AboutProject.css";
import '../Main.css';

function AboutProject() {
  return (
    <div className="project-about">
      <h3 className="main__block-description">О проекте</h3>

      <div className="project-about__description">
        <div className="project-about__paragraph">
          <div className="project-about__subtitle">Дипломный проект включал 5 этапов</div>
          <p className="main__text project-about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="project-about__paragraph">
          <div className="project-about__subtitle">На выполнение диплома ушло 5 недель</div>
          <p className="main__text project-about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>

      <div className="project-about__progress">
        <div className="project-about__progress-text project-about__progress-text_bar-checked">1 Неделя</div>
        <div className="project-about__progress-text project-about__progress-text_bar-unchecked">4 Недели</div>
        <div className="project-about__progress-text">Back-end</div>
        <div className="project-about__progress-text">Front-end</div>
      </div>
    </div>
  );
}

export default AboutProject;