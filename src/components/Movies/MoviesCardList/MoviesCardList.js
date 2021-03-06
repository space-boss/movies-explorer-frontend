import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {
  START_SEARCH,
  NOTHING_FOUND
} from "../../../utils/textConstants";

function MoviesCardList(props) {
  if (props.moviesSearchList === null) {
    if (props.path === "/movies") {
      return (
        <div className="movies-list">
          <p className="movies-list__error">{START_SEARCH}</p>
        </div>
      );
    }

    if (props.path === "/saved-movies") {
      return (
        <div className="movies-list">
          {props.savedMovies.map((savedMovie) => {
            return (
              <MoviesCard
                movie={savedMovie}
                key={savedMovie.movieId}
                {...savedMovie}
                savedMovies={props.savedMovies}
                handleFavButtonClick={props.handleFavButtonClick}
              />
            );
          })}
        </div>
      );
    }
  }

  if (props.moviesSearchList.length === 0) {
    return (
      <div className="movies-list">
        <p className="movies-list__error">{NOTHING_FOUND}</p>
      </div>
    );
  }

  return (
    <div className="movies-list">
      {props.moviesSearchList.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            key={movie.id === undefined ? movie.movieId : movie.id}
            {...movie}
            handleSaveMovie={props.handleSaveMovie}
            savedMovies={props.savedMovies}
            handleFavButtonClick={props.handleFavButtonClick}
            path={props.path}
          />
        );
      })}
    </div>
  );
}

export default MoviesCardList;
