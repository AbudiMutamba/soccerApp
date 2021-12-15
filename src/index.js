import React from 'react';
import ReactDOM from 'react-dom';
//import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './components/css/styles.css';
import 'semantic-ui-css/semantic.min.css'
import App from './components/routes/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
