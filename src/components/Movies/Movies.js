import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import Expand from "./Expand/Expand";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies(props) {
  return (
    <>
      <Header loggedIn={true} />
      <main className="content">
        <title>Библиотека фильмов</title>
        <SearchForm
          movies={props.movies}
          savedMovies={props.savedMovies}
          handleSearchMovies={props.handleSearchMovies}
          place={props.place}
          searchError={props.searchError}

        />
        {props.isLoading && <Preloader />}
        
        <MoviesCardList
          movies={props.movies}
          handleSaveMovie={props.handleSaveMovie}
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
// {props.isLoading && <Preloader />}