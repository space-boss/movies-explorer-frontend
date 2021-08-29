import React, { useEffect } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
  useHistory,
  Redirect,
} from "react-router-dom";
import Main from "../Main/Main";
import "./App.css";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { apiConfig } from "../../utils/MainApi";
// import { movieApiConfig } from "../../utils/MoviesApi";
import { authApi } from "../../utils/auth";

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");

  //const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  //const localStorageMovies = JSON.parse(localStorage.getItem("movies"));

  const [movieSearchList, setMovieSearchList] = React.useState([]);
  const [savedMovieSearchList, setSavedMovieSearchList] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    if (isLoggedIn) {
      history.push("/main");
    }
  }, [isLoggedIn, history]);


  useEffect(() => {
    tokenCheck();
  });


  useEffect(() => {
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
          history.push("/");
        }
      })
      .catch((err) => {
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
    setLoggedIn(false);
  }

  function handleSearchMovies(movies) {
    console.log(movies);
    setMovieSearchList(movies)
  }

  /*React.useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    movieApiConfig
      .getMovies()
      .then((res) => {
        localStorage.setItem("movies", JSON.stringify(res));
        setMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]); */

  return (
    <BrowserRouter>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} /*movies={movies}*/ />
          </Route>
          <Route exact path="/movies" /*movies={movies}*/>
            <Movies isLoggedIn={isLoggedIn} 
            handleSearchMovies={handleSearchMovies} 
            movieSearchList={movieSearchList}
            //localStorageMovies={localStorageMovies} 
            />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route exact path="/signin">
            <Login onLogin={handleLogin} isRegistered={isRegistered} />
          </Route>
          <Route path={"*"}>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

