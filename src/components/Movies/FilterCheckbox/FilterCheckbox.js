import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="search__slider-block">
      <label className="search__switch">
        <input className="search__switch-input" type="checkbox" />
        <span className="search__slider" />
      </label>
      <p className="search__slider-text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
