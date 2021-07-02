import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
  } from "react-router-dom";
  import HomePage from './pages/HomePage'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
             <HomePage/>
          </Route>
          <Route path="/sobre">
             oi
          </Route>
        </Switch>
    </Router>
  );
}
