import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {HelmetProvider} from 'react-helmet-async'
import App from './App';
import { StoreProvider } from './Store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
    <HelmetProvider>
         <App />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
