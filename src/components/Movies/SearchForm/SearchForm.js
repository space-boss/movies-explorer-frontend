import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchOutput, setSearchOutput] = useState(false);


  function handleSearch(evt) {
    setSearchQuery(evt.target.value);
  }

  function handleSlider() {
    setSearchOutput(!searchOutput)
  };

  function handleFilterValue (movies, search) {
    return movies.nameRu.toLowerCase().includes(search.toLowerCase());
  }

  function filterMovies(movies, value) {
    if (searchOutput) {
      return movies.filter((movie) => movie.duration <= 40 && handleSlider(movie, value))
    } else {
      return movies.filter((movie) => handleFilterValue(movie, value));
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (props.place === 'movies') {
      const moviesArray = filterMovies(props.movie, searchQuery);
      props.handleSearchMovies(moviesArray);
    } else if (props.place === 'saved-movies') {
      const savedMoviesArray = filterMovies (props.savedMovies, searchQuery);
      props.handleSearchMovies(savedMoviesArray);
    }
  }

  return (
    <section className="search">
      <form 
      className="search__form"
      onSubmit={handleSubmit}>
        <input
          onChange={handleSearch}
          className="search__input"
          id="search-input"
          name="search-input"
          placeholder="Фильм"
          required
          minLength="2"
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
      onChange={handleSlider}/>


    </section>
  );   
}

export default SearchForm;
