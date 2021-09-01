import logo from './logo.svg';
import './App.css';
import TelaInicial from './modules/Login/Login'
import Acompanhamento from './modules/Acompanhamento/Acompanhamento';
import Cadastro from './modules/Cadastro/Cadastro';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <TelaInicial />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/acompanhamento">
          <Acompanhamento/>
        </Route>
        <Route path="/">
          <TelaInicial />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
