import React from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  console.log(props.moviesSearchList)
  console.log(props.movies)
  return (
    <div className='movies-list'>
    {
      props.movies === null && props.preloader
      ? (<p className='movies-list__error'>Начните поиск</p>)
      : props.movies === null || props.moviesSearchList.length === 0 
        ? (<p className='movies-list__error'>Ничего не найдено</p>)
        : props.moviesSearchList.length > 0
          ? (
           props.moviesSearchList.map((movie) => {
                return (
                  <MoviesCard
                    movie={movie}
                    key={movie.id === undefined ? movie.movieId : movie.id}
                    {...movie}
                    handleSaveMovie={props.handleSaveMovie}
                    savedMovies={props.savedMovies}
                    handleFavButtonClick={props.handleFavButtonClick}
                    place={props.place}
                  />
                )
              })

          )
          :
          (
            props.path === 'movies'
              ? props.movies.map((movie) => {
                return (
                  <MoviesCard
                    movie={movie}
                    key={movie.id}
                    {...movie}
                    place={props.place}
                    handleSaveMovie={props.handleSaveMovie}
                    savedMovies={props.savedMovies}
                    handleFavButtonClick={props.handleFavButtonClick}
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
                    place={props.place}
                    handleFavButtonClick={props.handleFavButtonClick}
                  />
                )
              })
          )
      }
    </div>
  )
}

export default MoviesCardList;