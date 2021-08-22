import React  from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Expand from "./Expand/Expand";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { movieApiConfig } from "../../utils/MoviesApi";


function Movies(props) {

  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    console.log(props.isLoggedIn);
    if (!props.isLoggedIn) {
      return;
    }
    movieApiConfig
      .getMovies()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res));
        setMovies(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.isLoggedIn]);


  return (
    <>
      <Header loggedIn={true} />
      <main className="content">
        <title>Библиотека фильмов</title>
        <SearchForm
          //movies={props.localStorageMovies}
          savedMovies={props.savedMovies}
          handleSearchMovies={props.handleSearchMovies}
          place={props.place}
        />
        <MoviesCardList 
          movies={movies}
          handleSaveMovie={props.handleSaveMovie}
          savedMovies={props.savedMovies}
          movieSearchList={props.movieSearchList}
         />
        <Expand />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
