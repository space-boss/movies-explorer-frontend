import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import "./App.css";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <Route exact path="/movies">
            <Movies loggedIn={loggedIn} />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies loggedIn={loggedIn}/>
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route path={'*'}>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
