import './index.scss';
import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';

let main = document.querySelector('.main');

reactDom.render(
  <>
    <App textContent="Grid Component" />
  </>,
  main
);
