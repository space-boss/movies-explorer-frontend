import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Expand from './Expand/Expand';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";


function Movies() {
  return (
    <>
    <Header loggedIn />
    <main className="content">
      <title>Библиотека фильмов</title>
      <SearchForm />
      <MoviesCardList />
      <Expand />
    </main>
    <Footer />
    </>
  );
}

export default Movies;

