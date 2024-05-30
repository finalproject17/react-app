<<<<<<< HEAD

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Jobs from '../src/pages/Jobs'
import JobSeeker from './pages/JobSeeker'
import JobSeekerProfile from './pages/JobSeekerProfile'


function App() {
  

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<JobSeeker/>}/>
    <Route path='/Jobs'element={<Jobs/>}/>
    <Route path='/profile' element={<JobSeekerProfile/>}/>
  </Routes>
  </BrowserRouter>
   </>
  )
=======
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return <></>;
>>>>>>> e032bf6204847b17c1415ac6b22183ef17071bba
}

export default App;
