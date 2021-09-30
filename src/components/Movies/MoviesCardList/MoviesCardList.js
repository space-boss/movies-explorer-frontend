import React from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  if (props.moviesSearchList === null) {
    console.log('start your serch');
    return (
      <div className='movies-list'>
        <p className='movies-list__error'>start your search</p>
      </div>
    )
  }

  else if (!props.savedMovies && props.moviesSearchList.length === 0) {
    console.log('nothing found');
    return (
      <div className='movies-list'>
        <p className='movies-list__error'>nothing found</p>
      </div>
    )
  }

  else if (props.moviesSearchList.length > 0) {
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
