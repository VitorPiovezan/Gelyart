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
import Revendedor from './pages/Revendedor';
import FaleConosco from './pages/FaleConosco';
import Produtos from './pages/Produtos';

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
        <Route path="/seja-um-revendedor">
          <Revendedor mudaScreen={mudaScreen} />
        </Route>
        <Route path="/fale-conosco">
          <FaleConosco mudaScreen={mudaScreen} />
        </Route>
        <Route path="/produtos">
          <Produtos mudaScreen={mudaScreen} />
        </Route>
        <Route path="/">
          <HomePage mudaScreen={mudaScreen} />
        </Route>
        <Redirect to={{ pathname: '/' }} />
      </Switch>
    </Router>
  );
}
