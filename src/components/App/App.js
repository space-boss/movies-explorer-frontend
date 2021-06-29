import React, {useEffect} from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';

function App() {

  return (
    <div className = "page">
      <Route exact path="/">
        <Main/>
      </Route>
    </div>
  );
}

export default App;
