import React, { StrictMode } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom';
import App from './App';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const root = createRoot(document.getElementById('root'));

root.render( 

  <StrictMode>
    <App/>
  </StrictMode>
)