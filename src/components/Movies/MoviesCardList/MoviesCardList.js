import React from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <div className='movies-list'>
    {
      props.movies === null && props.preloader
      ? ('')
      : props.movies === null && props.movieSearchList.length === 0
        ? (<p className='movies-list__error'>Ничего не найдено</p>)
        : props.movieSearchList.length > 0
          ? (
           props.movieSearchList.map((movie) => {
                return (
                  <MoviesCard
                    movie={movie}
                    key={movie.id === undefined ? movie.movieId : movie.id}
                    {...movie}
                    handleSaveMovie={props.handleSaveMovie}
                    savedMovies={props.savedMovies}
                    deleteSavedMovie={props.deleteSavedMovie}
                  />
                )
              })

          )
          :
          (
            props.path === '/movies'
              ? props.movies.map((movie) => {
                return (
                  <MoviesCard
                    movie={movie}
                    key={movie.id}
                    {...movie}
                    handleSaveMovie={props.handleSaveMovie}
                    savedMovies={props.savedMovies}
                    deleteSavedMovie={props.deleteSavedMovie}
                  />
                )
              })
              : props.savedMovies.map((savedMovie) => {
                return (
                  <MoviesCard
                    movie={savedMovie}
                    key={savedMovie.movieId}
                    {...savedMovie}
                    savedMovies={props.savedMovies}
                    deleteSavedMovie={props.deleteSavedMovie}
                  />
                )
              })
          )
      }
    </div>
  )
}

export default MoviesCardList;