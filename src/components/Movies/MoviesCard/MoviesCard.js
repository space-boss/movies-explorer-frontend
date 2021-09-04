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
    props.handleFavButtonClick(props.movie)
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

  /*const checkIfMovieSaved = props.savedMovies.some((film) => film.nameRU === props.nameRU);

  function setSavedMovie() {
    if (checkIfMovieSaved) {
      return
    } const movie = {
        country: props.country,
        director: props.director,
        duration: props.duration,
        year: props.year,
        description: props.description,
        image: `https://api.nomoreparties.co${props.image.url}`,
        trailer: props.trailerLink,
        thumbnail: `https://api.nomoreparties.co${props.image.formats.thumbnail.url}`,
        movieId: props.id,
        nameRU: props.nameRU,
        nameEN: props.nameEN,
    }
      props.handleSaveMovie(movie);
  } 

  function handleFavButtonClick() {
    props.handleSaveMovie();
  } */

