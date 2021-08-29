import React from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {

  const existingMovies = props.movieSearchList.length > 0;

  return (
    <div className='movies-list'>
      { !existingMovies ? (<p className='movies-list__error'>{props.searchError}</p>)
        : props.movieSearchList.map((movie) => {
            return (
              <MoviesCard key={movie.id} movie={movie} />
            )
          }) 
      }
    </div>
  )
};

export default MoviesCardList;



/*function MoviesCardList(props) {
  return (
    <div className='movies-list'>
      {
        if (props.movies === null) {
          if (props.preloader) {
            ('')
          } else if (props.movieSearchList.length === 0) {
              (<p className='movies-list__error'>Ничего не найдено</p>)
          }
        } else if (props.movieSearchList.length > 0) {
            (
              props.movieSearchList.map((movie) => {
                return (
                  <MoviesCard key={movie.id} movie={movie} />
                )
              })
            )
        } else {
            ('')
          // (
          //   props.place === 'movies'
          //     ? props.movies.map((movie) => {
          //       return (
          //         <MoviesCard
          //           movie={movie}
          //           key={movie.id}
          //           {...movie}
          //           place={props.place}
          //           handleSaveMovie={props.handleSaveMovie}
          //           savedMovies={props.savedMovies}
          //           deleteSavedMovie={props.deleteSavedMovie}
          //         />
          //       )
          //     })
          //     : props.savedMovies.map((savedMovie) => {
          //       return (
          //         <MoviesCard
          //           movie={savedMovie}
          //           key={savedMovie.movieId}
          //           {...savedMovie}
          //           place={props.place}
          //           savedMovies={props.savedMovies}
          //           deleteSavedMovie={props.deleteSavedMovie}
          //         />
          //       )
          //     })
          // )
        }
      }
    </div>
  )
}




/*    <section className="movies-list">
      {
        (props.movies === null && props.preloader) 
        ? ('')
        : props.movieSearchList.length > 0 
          ? (
              props.movieSearchList.map((movie) => {
                return (
                <MoviesCard key={movie.id} movie={movie} />
                )
              })
            )
        : props.movies === null && props.movieSearchList.length === 0 
          ? (<p className='movies-list__alert'>Ничего не найдено</p>)
      }
    </section> */