// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './component/Navbar/index';
// import Home from '../src/pages/JobSeeker/index'
import JobSeeker from '../src/pages/JobSeeker';

function App() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                {/* Define your routes here */}
                <Route path="/JobSeeker" element={<JobSeeker />} />
                {/* <Route path="/find-jobs" element={<FindJobs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
