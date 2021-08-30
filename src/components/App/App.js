import React, { useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
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
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [token, setToken] = React.useState("");
  const [infoTooltipMessage, setInfoTooltipMessage] = React.useState("");
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
      history.push('/');
    }
  }, [isLoggedIn, history]);

  useEffect(() => {
    tokenCheck();
  });

  const openInfoTooltip = () => {
    setInfoTooltipOpen(true);
  };

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
  }

  useEffect(() => {
    setInfoTooltipOpen(false);
    if (isRegistered) {
      history.push("/signin");
    }
  }, [isRegistered, history]);


  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([apiConfig.getUser(token), apiConfig.getMovies(token)])
        .then(([userData, movies]) => {
          setCurrentUser({ email: userData.email, name: userData.name });
          setSavedMovies(movies.reverse());
          localStorage.setItem("saved-movies", JSON.stringify(movies));
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn, token]);


  const handleRegister = ({ name, email, password }) => {
    return authApi
      .register(name, email, password)
      .then((res) => {
        console.log(res);
        if (!res || res.statusCode === 400)
          throw new Error("Что-то пошло не так");
        setIsRegistered(true);
        setLoggedIn(true);
        history.push("/movies");
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = ({ email, password }) => {
    return authApi
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          console.log(data);
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

  function handleUpdateUser(user) {
    if (user.name !== "" && user.about !== "") {
      apiConfig
        .updateProfile(user)
        .then((res) => {
          setCurrentUser(res);
          setInfoTooltipOpen(true);
          openInfoTooltip();
          setInfoTooltipMessage("Изменения успешно сохранены");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function signOut() {
    localStorage.removeItem("token");
    history.push("/");
    setLoggedIn(false);
  }

  function handleSearchMovies(movies) {
    setMovieSearchList(movies);
  }

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


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} />
          </Route>

          <ProtectedRoute path="/movies">
            <Movies
              movies={movies}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              //onGetCards={getMovies}
              handleSearchMovies={handleSearchMovies}
              searchError={searchError}
            />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies">
            <SavedMovies
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              savedMovies={savedMovies}
            />
          </ProtectedRoute>

          <Route path="/profile">
            <Profile 
              isLoggedIn={isLoggedIn} 
              handleSignOut={signOut}
              onUpdateUser={handleUpdateUser}
              openInfoTooltip={openInfoTooltip}
              />
          </Route>

          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>

          <Route path="/signin">
            <Login
              onLogin={handleLogin}
              openInfoTooltip={openInfoTooltip}
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
