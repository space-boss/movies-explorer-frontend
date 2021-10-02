import React from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  if (props.moviesSearchList === null) {
    return (
      <div className='movies-list'>
        <p className='movies-list__error'>Начните поиск</p>
      </div>
    )
  }

  else if (props.path !== '/saved-movies' && props.moviesSearchList.length === 0) {
    return (
      <div className='movies-list'>
        <p className='movies-list__error'>Ничего не найдено</p>
      </div>
    )
  }

  else if (props.moviesSearchList.length > 0) {
    console.log(props.movies.length);
    return (
      <div className='movies-list'>
        {
          props.moviesSearchList.map((movie) => {
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
            )
          })
        }
      </div>
    )
  } 

  else if (props.path === '/saved-movies') {
    return (
      <div className='movies-list'>
        {
          props.savedMovies.map((savedMovie) => {
            return (
              <MoviesCard
                movie={savedMovie}
                key={savedMovie.movieId}
                {...savedMovie}
                savedMovies={props.savedMovies}
                handleFavButtonClick={props.handleFavButtonClick}
              />
            )
          })
        }
      </div>
    )
  }

  else if (props.path === '/movies') {
    console.log(props.movies);
    return (
      <div className='movies-list'>
        {
          props.movies.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id}
                {...movie}
                handleSaveMovie={props.handleSaveMovie}
                savedMovies={props.savedMovies}
                handleFavButtonClick={props.handleFavButtonClick}
              />
            )
          })
        }
      </div>
    )
  }
}

export default MoviesCardList;
