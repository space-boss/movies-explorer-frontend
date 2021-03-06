import React, { useEffect } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import Expand from "./Expand/Expand";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies(props) {
  const [startArray, setStartArray] = React.useState();
  const [expandedArray, setExpandedArray] = React.useState();
  const [moviesCards, setMoviesCards] = React.useState();
  const [moviesCardsExpand, setMoviesCardsExpand] = React.useState();
  const [hideExpand, setHideExpand] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setStartArray(12);
      setExpandedArray(3);
    } else if (window.innerWidth > 480) {
      setStartArray(8);
      setExpandedArray(2);
    } else {
      setStartArray(5);
      setExpandedArray(2);
    }
    setMoviesCards(startArray);
    setMoviesCardsExpand(expandedArray);
  }, [startArray, expandedArray]);

  useEffect(() => {
    if (moviesCards === null || props.moviesSearchList === null) {
      setHideExpand(true)
      return
    }

    if (moviesCards > props.moviesSearchList.length) {
      setHideExpand(true);
    } else {
      setHideExpand(false);
    }
  }, [moviesCards, props.moviesSearchList]);

  function handleMovies() {
    setMoviesCards(moviesCards + moviesCardsExpand);
  }

  return (
    <>
      <Header loggedIn={props.isLoggedIn} />
      <main className="content">
        <title>Movie library</title>
        <SearchForm
          loggedIn={props.isLoggedIn}
          movies={props.localStorageMovies}
          path={props.path}
          savedMovies={props.savedMovies}
          handleSearchMovies={props.handleSearchMovies}
          searchError={props.searchError}
        />

        {props.preloader ? <Preloader /> : ""}

        <MoviesCardList
          movies={
            props.localStorageMovies === null
              ? null
              : props.localStorageMovies.length !== 0
              ? props.localStorageMovies.slice(0, moviesCards)
              : ""
          }
          path={props.path}
          isLoading={props.isLoading}
          handleSaveMovie={props.handleSaveMovie}
          handleFavButtonClick={props.handleFavButtonClick}
          savedMovies={props.savedMovies}
          moviesSearchList={
            props.moviesSearchList === null
              ? null
              : props.moviesSearchList.length !== 0
              ? props.moviesSearchList.slice(0, moviesCards)
              : ""
          }
          searchError={props.searchError}
        />
        {hideExpand || <Expand onClick={handleMovies} />}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
