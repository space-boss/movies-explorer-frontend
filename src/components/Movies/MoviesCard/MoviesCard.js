import React, { useState } from "react";
import "./MoviesCard.css";

function MoviesCard({movie}) {
  const [isSaved, setSaved] = useState(false);

  const toggleSaveButton = () => {
    setSaved(!isSaved);
  };

  return (
    <div className="movie">
      <p className="movie__title">{movie.nameRu}</p>
      <p className="movie__duration">{movie.duration}</p>
      <img className="movie__pic" alt={movie.nameRu} src={movie.image} />
      <button
        className={`movie__save-button ${
          isSaved ? "movie__save-button_pressed" : ""
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
