import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import Expand from "./Expand/Expand";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { movieApiConfig } from "../../utils/MoviesApi";

function Movies(props) {
  const [movies, setMovies] = React.useState([]);
  //const [preloader, setPreloader] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchError, setSearchError] = React.useState("");
  const [savedMovies, setSavedMovies] = React.useState([]);


  React.useEffect(() => {
    console.log(props.isLoggedIn);
    if (!props.isLoggedIn) {
      return;
    }
    setIsLoading(true);
    movieApiConfig
      .getMovies()
      .then((res) => {
        localStorage.setItem("movies", JSON.stringify(res));
        setMovies(res);
        setSearchError("Начните поиск");
      })
      .catch((err) => {
        setSearchError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      })
      .finally (() => {
        setIsLoading(false);
      })
  }, [props.isLoggedIn]);

  /*const checkSavedMovies = (movies, savedMovies) => {
    savedMovies.forEach((savedMovie) => {
      const movie = movies.find((item) => item.nameRU === savedMovie.nameRU);
      movie.isSaved = true;
    });
    return movies;
  };

  React.useEffect(() => {
    const allMovies = JSON.parse(localStorage.getItem("movies"));
    if (allMovies) {
      setMovies(checkSavedMovies(allMovies));
      setSearchError("Ничего не найдено");
    } else {
      setSearchError("Начните поиск");
      setMovies([]);
    }
  }); */


  return (
    <>
      <Header loggedIn={true} />
      <main className="content">
        <title>Библиотека фильмов</title>
        <SearchForm
          movies={movies}
          savedMovies={props.savedMovies}
          handleSearchMovies={props.handleSearchMovies}
          place={props.place}
          isLoading={isLoading}
          searchError={searchError}

        />
        {props.isLoading && <Preloader />}

        <MoviesCardList
          movies={movies}
          handleSaveMovie={props.handleSaveMovie}
          savedMovies={props.savedMovies}
          movieSearchList={props.movieSearchList}
          isLoading={isLoading}
          searchError={searchError}

        />
        <Expand />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
