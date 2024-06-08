//import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import store from "./store";
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import "fortawesome/fontawesome-free/css/all.min.css"; 
import App from './App.jsx'

import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>

    <App />

    </Provider>

  // </React.StrictMode>
)
