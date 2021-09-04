import React, { useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";


function SavedMovies(props) {
  console.log(props.savedMovies);
  return (
    <>
    <Header loggedIn={true} />
    <main className="content">
      <title>Сохраненные фильмы</title>
      <SearchForm
        path={props.path}
        movies={props.localStorageMovies}
        savedMovies={props.savedMovies}
        handleSearchMovies={props.handleSearchMovies}
        place={props.place}
      />
      <MoviesCardList 
        path={props.path}
        movies={props.movies}
        savedMovies={props.savedMovies}
        movieSearchList={props.movieSearchList}
        handleFavButtonClick={props.handleFavButtonClick}
        searchError={
          props.savedMovies.length < 1
            ? "Нет сохраненных фильмов"
            : "Ничего не найдено"
        }
      />
    </main>
    <Footer />
    </>
  );
}

export default SavedMovies;
