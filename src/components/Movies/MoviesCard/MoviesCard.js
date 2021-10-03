import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard(props) {
  const location = useLocation();
  const isSaved = props.savedMovies.some((item) => item.nameRU === props.nameRU)

  const movieDeleteButton =
    location.pathname === "/saved-movies" ? "movie__delete-button" : "";

  const movieSaveButton =
    location.pathname === "/movies" ? "movie__button" : "";


    function setImgLink(movie) {
      if (movie.image && movie.image.url) {
        return `https://api.nomoreparties.co${movie.image.url}`;
      }
      if (movie.image) {
        return movie.image;
      } else {
        return "";
      }
    }

  function handleFavClick() {
    props.handleFavButtonClick(props.movie);
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
      <a className="movie__trailer-link" href={props.movie.trailerLink} target="_blank"  rel="noreferrer">
        <img className="movie__pic" alt={props.movie.nameRU} src={setImgLink(props.movie)} />
      </a>
      <button
        onClick={handleFavClick}
        className={`${movieDeleteButton} ${movieSaveButton} ${
          isSaved ? "movie__button_pressed" : ""
        }`}
        type="button"
      >
        Сохранить
      </button>
    </div>
  );
}

export default MoviesCard;
