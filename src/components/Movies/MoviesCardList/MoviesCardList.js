import React, { useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {

  const movies = [{
    id: 1, 
    nameRu: "В погоне за Бенкси", 
    duration: "27 минут", 
    image: "https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"
  },

  {
    id: 2, 
    nameRu: "В погоне за Бенкси", 
    duration: "27 минут", 
    image: "https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"
  },

  {
    id: 3, 
    nameRu: "В погоне за Бенкси", 
    duration: "27 минут", 
    image: "https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"
  },

  {
    id: 4, 
    nameRu: "В погоне за Бенкси", 
    duration: "27 минут", 
    image: "https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"
  }]

  return (
    <section className="movies-list">
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

export default MoviesCardList;
