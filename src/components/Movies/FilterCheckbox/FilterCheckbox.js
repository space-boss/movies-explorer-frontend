import "./FilterCheckbox.css";
import {
  SHORT_MOVIE_LABEL
} from "../../../utils/textConstants";

function FilterCheckbox(props) {
  return (
    <div className="search__slider-block">
      <label className="search__switch">
        <input className="search__switch-input" type="checkbox" onChange={props.onChange} />
        <span className="search__slider" />
      </label>
      <p className="search__slider-text">{SHORT_MOVIE_LABEL}</p>
    </div>
  );
}

export default FilterCheckbox;



