import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './style.css';
import bookStore from './models/BookStore';
import RouterComponment from './RouterComponent';

ReactDOM.render(
  <RouterComponment bookStore={bookStore} />,
  document.getElementById('root')
);
