import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Sobre from './pages/Sobre';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Redirect to={{ pathname: '/home' }} />
      </Switch>
    </Router>
  );
}
