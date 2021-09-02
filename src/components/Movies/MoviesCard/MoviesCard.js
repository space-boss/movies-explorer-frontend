import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard(props) {
  const [isSaved, setSaved] = useState(false);
  const location = useLocation();

  const movieDeleteButton =
    location.pathname === "/saved-movies" ? "movie__delete-button" : "";

  const movieSaveButton = 
    location.pathname === "/movies" ? "movie__button" : "";

  function toggleSaveButton() { 
    if (movieSaveButton) {
      setSaved(!isSaved)
      props.onClick();
    } else {
      return
    }
  };

  function setImgLink(movie) {
    return `https://api.nomoreparties.co${movie.image.url}`;
  }


  function setDurationSuffix() {
    const { duration } = props.movie;
    let suffix = "";
    if (duration % 10 === 1) {
      suffix = "минута";
    }
    else if (duration % 10 < 5) {
      suffix = "минуты";
    }
    else {
      suffix = "минут";
    }
    return duration + " " + suffix;
  }
  
  return (
    <div className="movie">
      <p className="movie__title">{props.movie.nameRU}</p>
      <p className="movie__duration">{setDurationSuffix(props.movie.duration)}</p>
      <img className="movie__pic" alt={props.movie.nameRU} src={setImgLink(props.movie)} />
      <button
        className={`${movieDeleteButton} ${movieSaveButton} ${
          isSaved ? "movie__button_pressed" : ""
        }`}
        onClick={toggleSaveButton}
        type="button"
      >
        Сохранить
      </button>
    </div>
  );
}

export default MoviesCard;
