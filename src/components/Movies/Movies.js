import React, { useEffect } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import Expand from "./Expand/Expand";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies(props) {

  let startArray;
  let expandedArray; 

  const [moviesCards, setMoviesCards] = React.useState();
  const [moviesCardsExpand, setMoviesCardsExpland] = React.useState();

  useEffect(() => {
    if (window.innerWidth >= 768) {
      startArray = 12;
      expandedArray = 3;
    } else if (window.innerWidth >= 480) {
      startArray = 8;
      expandedArray = 2;
    } else {
      startArray = 5;
      expandedArray = 2;
    }
    setMoviesCards(startArray);
    setMoviesCardsExpland(expandedArray);
  }, [])

  function handleMovies() {
    setMoviesCards(moviesCards + moviesCardsExpand);
  }


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
        <Expand onClick={handleMovies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
