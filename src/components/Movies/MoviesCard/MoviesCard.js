import React from "react";
import "./MoviesCard.css";
import moviePicPath from '../../../images/movie-pic-example.jpg';


function MoviesCard() {
  return (
    <div className="movie">
      <p className="movie__title">В погоне за Бэнкси</p>
      <p className="movie__duration">27 минут</p>
      <img className="movie__pic" alt="Кадр из фильма" src={moviePicPath} />
      <button className="movie__save-button movie__save-button_pressed" type="button">Сохранить</button>
    </div>
  );
}

export default MoviesCard;
