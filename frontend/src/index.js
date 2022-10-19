import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {HelmetProvider} from 'react-helmet-async'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <HelmetProvider>
         <App />
      </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
