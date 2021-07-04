import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sobre">oi</Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Redirect to={{ pathname: '/home' }} />
      </Switch>
    </Router>
  );
}
