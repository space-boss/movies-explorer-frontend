import React from "react";
import "./Expand.css";

function Expand() {

  const [moviesCards, setMoviesCards] = React.useState();

  function handleMovies() {
    setMoviesCards(moviesCards);
  }  

  return (
    <div className="expand">
      <button onClick={handleMovies} type="button" className="expand__button">Ещё</button>
    </div>
  );
}

export default Expand;
