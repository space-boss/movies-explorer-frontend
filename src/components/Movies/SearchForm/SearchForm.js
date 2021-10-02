import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  const [searchValue, setSearchValue] = useState('');
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
    console.log(movies);
    if (moviesFilter) {
      return movies.filter((movie) => movie.duration <= 40 && handleSearchQuery(movie, value))
    } else {
      return movies.filter((movie) => handleSearchQuery(movie, value));
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (props.path === '/movies') {
      console.log(props.movies);
      const filteredMovies = filterMovies(props.movies, searchValue);
      props.handleSearchMovies(filteredMovies);
    } else if (props.path === '/saved-movies') {
      const filteredMovies = filterMovies(props.savedMovies, searchValue);
      console.log(filteredMovies);
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
          placeholder="Фильм"
          required
          minLength="1"
          maxLength="40"
        />

        <input
          value=" "
          name="submit"
          type="submit"
          className="search__submit-button"
        />
      </form>

      <FilterCheckbox 
        onChange={handleCheckbox}
      />


    </section>
  );   
}

export default SearchForm;
