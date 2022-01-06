import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import Servicos from './components/Servicos';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Servicos/>
    <Footer />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Importando arquivo json para armazenar no LocalStorage
localStorage.setItem('cursos', JSON.stringify(require('./utils/cursos.json')));
