import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import Main from './pages/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)