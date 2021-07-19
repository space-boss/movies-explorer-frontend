import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({movie}) {
  const [isSaved, setSaved] = useState(false);

  const toggleSaveButton = () => {
    setSaved(!isSaved);
  };

  const location = useLocation();

  const movieDeleteButton =
    location.pathname === "/saved-movies" ? "movie__delete-button" : "";

  const movieSaveButton = 
    location.pathname === "/movies" ? "movie__button" : "";


  return (
    <div className="movie">
      <p className="movie__title">{movie.nameRu}</p>
      <p className="movie__duration">{movie.duration}</p>
      <img className="movie__pic" alt={movie.nameRu} src={movie.image} />
      <button
        className={`${movieDeleteButton} ${movieSaveButton} ${
          isSaved ? "movie__button_pressed" : ""
        }`}
        onClick={movieSaveButton ? toggleSaveButton : ""}
        type="button"
      >
        Сохранить
      </button>
    </div>
  );
}

export default MoviesCard;
