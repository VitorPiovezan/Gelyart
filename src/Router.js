import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Sobre from './pages/Sobre';
import Categorias from './pages/Categorias';

export default function App() {
  const [mudaScreen, setMudaScreen] = useState(
    window.innerWidth > 900 ? true : false
  );

  useEffect(() => {
    function posicaoScreen() {
      if (window.innerWidth > 900) {
        setMudaScreen(true);
      } else {
        setMudaScreen(false);
      }
    }

    window.addEventListener('resize', posicaoScreen);
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/sobre">
          <Sobre mudaScreen={mudaScreen} />
        </Route>
        <Route path="/produtos/:name">
          <Categorias mudaScreen={mudaScreen} />
        </Route>
        <Route path="/home">
          <HomePage mudaScreen={mudaScreen} />
        </Route>
        <Redirect to={{ pathname: '/home' }} />
      </Switch>
    </Router>
  );
}
