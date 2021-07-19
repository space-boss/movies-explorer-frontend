import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchOutput, setsearchOutput] = useState(false);


  function handleSearch(evt) {
    setSearchQuery(e.target.value);
  }

  function handleSlider() {
    setsearchOutput(!searchOutput)
  };

  function handleFilterCondition (movies, value) {

  }


  function filterMovies(movies, value) {
    if (searchOutput) {
      return movies.filter((movie) => movie.duration <= 40 && handleSlider(movie, value))
    } else {
      return movies.filter((movie) => )
    }
  }




  return (
    <section className="search">
      <form className="search__form">
        <input
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

      <FilterCheckbox />


    </section>
  );
}

export default SearchForm;
