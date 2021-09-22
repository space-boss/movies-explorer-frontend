import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";

function SavedMovies(props) {
  console.log(props.savedMovies);
  return (
    <>
    <Header loggedIn={props.isLoggedIn} />
    <main className="content">
      <title>Сохраненные фильмы</title>
      <SearchForm
        path={props.place}
        movies={props.localStorageMovies}
        savedMovies={props.savedMovies}
        handleSearchMovies={props.handleSearchMovies}
      />
      <MoviesCardList 
        path={props.path}
        movies={props.movies}
        savedMovies={props.savedMovies}
        moviesSearchList={props.moviesSearchList}
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
