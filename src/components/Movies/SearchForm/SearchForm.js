import React from "react";
import "./SearchForm.css";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
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
