import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="/acompanhamento/computacao">Acompanhamento Computação</Link>
            </li>
            <li>
              <Link to="/acompanhamento/sistemas">Acompanhamento Sistemas</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/acompanhamento/computacao">
          <AcompanhamentoComp/>
        </Route>
        <Route path="/acompanhamento/sistemas">
          <AcompanhamentoSis/>
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

function Login() {
  return <h2>
    Tela login
  </h2>
}

function Cadastro() {
  return <h2>
    Tela cadastro
  </h2>
}

function AcompanhamentoComp() {
  return <h2>
    Acompanhamento Computação
  </h2>
} 

function AcompanhamentoSis() {
  return <h2>
    Acompanhamento Sistemas
  </h2>
} 

export default App;
