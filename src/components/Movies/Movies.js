import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Expand from './Expand/Expand';


function Movies() {
  return (
    <main className="content">
      <title>Библиотека фильмов</title>
      <SearchForm />
      <MoviesCardList />
      <Expand />
    </main>
  );
}

export default Movies;

