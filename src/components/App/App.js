import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "../Main/Main";
import "./App.css";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { apiConfig } from "../../utils/MainApi";
import { movieApiConfig } from "../../utils/MoviesApi";
import { authApi } from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({ name: "", email: "" });
  const [infoTooltipMessage, setInfoTooltipMessage] = React.useState("");
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moviesSearchList, setmoviesSearchList] = React.useState(null);
  const [savedMoviesSearchList, setsavedMoviesSearchList] = React.useState([]);
  const [searchError, setSearchError] = React.useState("");

  const localStorageMovies = JSON.parse(localStorage.getItem("movies"));


  function handleSearchMovies(movies) {
    setmoviesSearchList(movies);
  }

  function handleSearchSavedMovies(movies) {
    setsavedMoviesSearchList(movies);
  }

  const history = useHistory();

  useEffect(() => {
    if (localStorage.loggedIn) {
      setLoggedIn(true);
      history.push("/movies");
    }
  }, [isLoggedIn, history]);

  useEffect(() => {
    console.log('token check');
    tokenCheck();
  });

  useEffect(() => {
    setInfoTooltipOpen(false);
    if (isRegistered) {
      history.push("/movies");
    }
  }, [isRegistered, history]);

  const handleLogin = ({ email, password }) => {
    return authApi
      .authorize(email, password)
      .then((data) => {
        if (!data) throw new Error("Неверные имя пользователя или пароль");
        if (data.token) {
          localStorage.setItem("token", data.token);
          apiConfig.setToken();
          setLoggedIn(true);
          localStorage.setItem("loggedIn", "true");
          getAllMovies();
          history.push('/movies');
        }
      })
      .catch((err) => {
        openInfoTooltip();
        setInfoTooltipMessage("Что-то пошло не так. Попробуйте еще раз");
        console.log(err);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    return authApi
      .register(name, email, password)
      .then((res) => {
        if (!res || res.statusCode === 400)
          throw new Error("Что-то пошло не так");
        setIsRegistered(true);
        handleLogin({email, password});
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tokenCheck = () => {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      authApi.getContent(token).then(({ email }) => {
        if (email) {
          setLoggedIn(true);
          setEmail(email);
        }
      });
    }
  };

  function signOut() {
    localStorage.removeItem("token");
    localStorage.clear("movies");
    history.push("/");
    setLoggedIn(false);
  }

  const openInfoTooltip = () => {
    setInfoTooltipOpen(true);
  };

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
  }

  function onRegisterPopup() {
    setInfoTooltipOpen(true);
  }

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    apiConfig
      .getUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]);

  function getAllMovies() {
    if (localStorage.loggedIn && !localStorage.getItem("movies")) {
      setIsLoading(true);
      movieApiConfig
        .getMovies()
        .then((res) => {
          localStorage.setItem("movies", JSON.stringify(res));
          setIsLoading(false);
          setMovies(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setSearchError(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        });
    }
  }

  function handleUpdateUser(user) {
    if (user.email !== "" && user.name !== "") {
      apiConfig
        .updateProfile(user)
        .then((res) => {
          setCurrentUser(res);
          openInfoTooltip();
          setInfoTooltipMessage("Изменения успешно сохранены");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    if (localStorage.loggedIn === 'true') {
      apiConfig
        .getMovies()
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => console.log(err));
    }
  },[])

  function handleSaveMovie(movie) {
    apiConfig
      .createMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteMovie(movieId) {
    apiConfig
      .deleteMovie(movieId)
      .then(() => {
        const updatedMovies = savedMovies.filter(
          (item) => item._id !== movieId
        );
        setSavedMovies(updatedMovies);
      })
      .catch((err) => console.log(err));
  }

  function handleFavButtonClick(movie) {
    if (!movie.isSaved && !movie._id) {
      handleSaveMovie(movie);
    } else {
      handleDeleteMovie(movie._id);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} />
          </Route>

          <ProtectedRoute
            path="/movies"
            movies={movies}
            isLoggedIn={isLoggedIn}
            component={Movies}
            isLoading={isLoading}
            moviesSearchList={moviesSearchList}
            handleSearchMovies={handleSearchMovies}
            searchError={searchError}
            localStorageMovies={localStorageMovies}
            savedMovies={savedMovies}
            handleFavButtonClick={handleFavButtonClick}
          />

          <ProtectedRoute
            path="/saved-movies"
            movies={movies}
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            savedMovies={savedMovies}
            moviesSearchList={savedMoviesSearchList}
            openInfoTooltip={openInfoTooltip}
            searchError={searchError}
            localStorageMovies={localStorageMovies}
            handleSearchMovies={handleSearchSavedMovies}
            handleFavButtonClick={handleFavButtonClick}
          />

          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            onClick={signOut}
            handleUpdateUser={handleUpdateUser}
          />

          <Route path="/signup">
            <Register
              onRegister={handleRegister}
              onRegisterPopup={onRegisterPopup}
            />
          </Route>
 
          <Route path="/signin">
            <Login
              onLogin={handleLogin}
              openInfoTooltip={openInfoTooltip}
              onRegisterPopup={onRegisterPopup}
            />
          </Route>

          <Route path={"*"}>
            <NotFoundPage />
          </Route>
        </Switch>

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeInfoTooltip}
          infoTooltipMessage={infoTooltipMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
