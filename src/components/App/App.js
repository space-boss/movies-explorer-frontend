import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
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
import {
  CREDENTIALS_ERROR_MESSAGE,
  GENERIC_ERROR_MESSAGE,
  NO_NOTOKEN_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  WRONG_TOKEN_ERROR_MESSAGE,
  PROFILE_UPDATE_SUCCESS_MESSAGE
} from "../../utils/errorMessages";

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
  const [moviesSearchList, setMoviesSearchList] = React.useState(null);
  const [savedMoviesSearchList, setSavedMoviesSearchList] = React.useState(null);
  const [searchError, setSearchError] = React.useState("");

  const localStorageMovies = JSON.parse(localStorage.getItem("movies"));

  function handleSearchMovies(movies) {
    setMoviesSearchList(movies);
  }

  function handleSearchSavedMovies(movies) {
    setSavedMoviesSearchList(movies);
  }

  const path = useLocation().pathname;

  const history = useHistory();

  useEffect(() => {
    if (localStorage.loggedIn) {
      setLoggedIn(true);
      history.push(path);
    }
  }, [isLoggedIn, history, path]);

  useEffect(() => {
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
        if (!data) throw new Error(CREDENTIALS_ERROR_MESSAGE);
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
        setInfoTooltipMessage(GENERIC_ERROR_MESSAGE);
        console.log(err);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    return authApi
      .register(name, email, password)
      .then((res) => {
        if (!res || res.statusCode === 400)
          throw new Error(GENERIC_ERROR_MESSAGE);
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
      const token = localStorage.getItem("token");
      authApi.getContent(token).then(({ email }) => {
        if (email) {
          setLoggedIn(true);
          setEmail(email);
        }
      })
      .catch((err) => {
        history.push('/signin');

        if (err === "400") {
          console.log(NO_NOTOKEN_ERROR_MESSAGE)
        }
        if (err === "401") {
           console.log(WRONG_TOKEN_ERROR_MESSAGE);
        }
      })
    }
  };

  function signOut() {
    localStorage.clear();
    setSavedMovies([]);
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
            SERVER_ERROR_MESSAGE
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
          setInfoTooltipMessage(PROFILE_UPDATE_SUCCESS_MESSAGE);
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

    const movieToHandle = savedMovies.find(item => item.nameRU === movie.nameRU)
    if (!movieToHandle) {
      handleSaveMovie(movie);
    } else {
      handleDeleteMovie(movieToHandle._id);
    }
  }

  if (isLoggedIn && (path === "/signin" || path === "/signup")) {
    history.push("/")
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
