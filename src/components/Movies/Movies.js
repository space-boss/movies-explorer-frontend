import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Expand from "./Expand/Expand";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies(props) {

  const [moviesCards, setMoviesCards] = React.useState()

  return (
    <>
      <Header loggedIn />
      <main className="content">
        <title>Библиотека фильмов</title>
        <SearchForm
          movies={props.localStorageMovies}
          savedMovies={props.savedMovies}
          handleSearchMovies={props.handleSearchMovies}
          place={props.place}
        />
        <MoviesCardList 
        place={props.place}
        movies={
          props.localStorageMovies === null
          ? null
          : props.localStorageMovies.length !== 0
            ? props.localStorageMovies.slice(0, moviesCards)
            : ''
        }
        handleSaveMovie={props.handleSaveMovie}
        savedMovies={props.savedMovies}
        movieSearchList={props.movieSearchList}
         />
        <Expand />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
