import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import {
  SEARCH_ERROR_MESSAGE
} from "../../../utils/errorMessages";

function SearchForm(props) {

  const [searchValue, setSearchValue] = useState('');
  const [searchError, setSearchError] = useState("");
  const [moviesFilter, setMoviesFilter] = useState(false);

  function handleSearch(evt) {
    setSearchValue(evt.target.value);
  }

  function handleCheckbox() {
    setMoviesFilter(!moviesFilter);
  }

  function handleSearchQuery(movies, search) {
    return (movies.nameRU.toLowerCase().includes(search.toLowerCase()))
  }

  function filterMovies(movies, value) {
    if (moviesFilter) {
      return movies.filter((movie) => movie.duration <= 40 && handleSearchQuery(movie, value))
    } else {
      return movies.filter((movie) => handleSearchQuery(movie, value));
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (searchValue === "") {
      setSearchError(SEARCH_ERROR_MESSAGE)
      return
    }

    setSearchError("")
    if (props.path === '/movies') {
      const filteredMovies = filterMovies(props.movies, searchValue);
      props.handleSearchMovies(filteredMovies);
    } else if (props.path === '/saved-movies') {
      const filteredMovies = filterMovies(props.savedMovies, searchValue);
      props.handleSearchMovies(filteredMovies);
    }
    return;
  }


  return (
    <section className="search">
      <form
      className="search__form"
      onSubmit={handleSubmit}
      >
        <input
          onChange={handleSearch}
          className="search__input"
          id="search-input"
          name="search-input"
          placeholder="Movie"
          minLength="1"
          maxLength="40"
        />
        <input
          value=""
          name="submit"
          type="submit"
          className="search__submit-button"
        />
      </form>
      <span id="search-input-error" className="form__search-input-error">{searchError}</span>
      <FilterCheckbox
        onChange={handleCheckbox}
      />


    </section>
  );
}

export default SearchForm;


