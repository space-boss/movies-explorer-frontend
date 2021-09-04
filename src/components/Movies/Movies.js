import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import Expand from "./Expand/Expand";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies(props) {

  const [moviesCards, setMoviesCards] = React.useState()


  return (
    <>
      <Header loggedIn={props.isLoggedIn} />
      <main className="content">
        <title>Библиотека фильмов</title>
        <SearchForm
          movies={props.localStorageMovies}
          path={props.path}
          savedMovies={props.savedMovies}
          handleSearchMovies={props.handleSearchMovies}
          searchError={props.searchError}

        />
        {props.isLoading && <Preloader />}
        
        <MoviesCardList
          movies={
            props.localStorageMovies === null
            ? null
            : props.localStorageMovies.length !== 0
              ? props.localStorageMovies.slice(0, moviesCards)
              : ''
          }
          path={props.path}
          handleSaveMovie={props.handleSaveMovie}
          handleFavButtonClick={props.handleFavButtonClick}
          savedMovies={props.savedMovies}
          movieSearchList={props.movieSearchList}
          searchError={props.searchError}
        />
        <Expand />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
