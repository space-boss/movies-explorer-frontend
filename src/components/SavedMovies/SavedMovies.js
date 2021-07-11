import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";


function SavedMovies() {
  return (
    <>
    <Header />
    <main className="content">
      <title>Сохраненные фильмы</title>
      <SearchForm />
      <MoviesCardList />
    </main>
    <Footer />
    </>
  );
}

export default SavedMovies;
