import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> { /* za router koristiti treba instalirati "npm i react-router-dom"*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
