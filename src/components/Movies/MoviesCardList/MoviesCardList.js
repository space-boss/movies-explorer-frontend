import React, { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  return (
    <section className="movies-list">
      {props.movies.map((movie) => (
        <MoviesCard key={movie._id} movie={movie}/>
      ))}
    </section>
  );
}

export default MoviesCardList;
