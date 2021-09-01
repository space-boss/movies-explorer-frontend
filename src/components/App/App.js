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
  const [movieSearchList, setMovieSearchList] = React.useState([]);
  const [searchError, setSearchError] = React.useState("");

  const localStorageMovies = JSON.parse(localStorage.getItem("movies"));

  const path = useLocation().pathname;

  const history = useHistory();

  React.useEffect(() => {
    if (isLoggedIn) {
      history.push("/movies");
    }
  }, [isLoggedIn, history]);


  useEffect(() => {
    tokenCheck();
  });


  useEffect(() => {
    setInfoTooltipOpen(false);
    if (isRegistered) {
      history.push("/signin");
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
          history.push("/movies");
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
        setInfoTooltipOpen(true);
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
    history.push("/");
    setLoggedIn(false);
  };

  const openInfoTooltip = () => {
    setInfoTooltipOpen(true);
  };

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
  };

  /*useEffect(() => {
    if (isLoggedIn) {
      Promise.all([apiConfig.getUser(token), apiConfig.getMovies(token)])
        .then(([userData, movies]) => {
          setCurrentUser({ email: userData.email, name: userData.name });
          setSavedMovies(movies.reverse());
          localStorage.setItem("saved-movies", JSON.stringify(movies));
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn, token]); */

  function onRegisterPopup() {
    setInfoTooltipOpen(true);
  }

  React.useEffect(() => {
    if (!isLoggedIn) {
      return;
    };
    apiConfig.getUser()
    .then((res) => {
      setCurrentUser(res)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [isLoggedIn]);


  React.useEffect(() => {
    if (!isLoggedIn) {
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
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoggedIn]);


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

  function handleSearchMovies(movies) {
    setMovieSearchList(movies);
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
            movieSearchList={movieSearchList}
            //onGetCards={getMovies}
            handleSearchMovies={handleSearchMovies}
            searchError={searchError}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            savedMovies={savedMovies}
          />

          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            onClick={signOut}
            handleUpdateUser={handleUpdateUser}
            openInfoTooltip={openInfoTooltip}
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
