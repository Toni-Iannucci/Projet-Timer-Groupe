import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Capsules from './Components/capsules/Capsules';
import Launches from './Components/launches/Launches';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Capsules />
    <Launches />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
