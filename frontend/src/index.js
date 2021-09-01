import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
=======
import TelaLogin  from "./modules/Login/Login";
>>>>>>> master

const history = createBrowserHistory();

ReactDOM.render(
<<<<<<< HEAD
  <Router history = {history}>
    <App />
  </Router>,
=======
  <React.StrictMode>
    <TelaLogin />
  </React.StrictMode>,
>>>>>>> master
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
