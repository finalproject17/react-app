//import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import store from "./store";
import { Provider } from 'react-redux';
=======
// import { BrowserRouter } from 'react-router-dom';
>>>>>>> 1bafa587feed4e2213e1ea98426baba11e5dbcac
import App from './App.jsx'

import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
<<<<<<< HEAD
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
=======

  // <BrowserRouter>

    <App />
    // {/* </BrowserRouter> */}
>>>>>>> 1bafa587feed4e2213e1ea98426baba11e5dbcac

  // </React.StrictMode>
)
