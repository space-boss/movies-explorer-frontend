import React from "react";
import {
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import "./App.css";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies />
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
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
