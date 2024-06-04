// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar/index';
// import Home from '../src/pages/JobSeeker/index'
// import JobSeeker from "../src/pages/JobSeeker";
import Footer from "./component/Footer";
import SignUp from "./component/signup/index";
import SignUpStepTwo from "./component/signupStepTow";
import { RegisterFormProvider, useFormContext } from "./contexts/RegisterFormContext.jsx";
import Protected from "./component/Protected/index";
import { useState } from "react";


function App() {

  const [isSinUp, setIsSinUp] = useState('false');
  
  return (
    <Router>
      <Navbar />
      <RegisterFormProvider>
        <Routes>
          {/* Define your routes here */}
          {/* <Route path="/JobSeeker" element={<JobSeeker />} /> */}

          {/* <Route path="/find-jobs" element={<FindJobs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />*/}

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/step-two" element={<Protected isSinUp={isSinUp} >
                <SignUpStepTwo/>
            </Protected>} />
        </Routes>
      </RegisterFormProvider>

      <Footer />
    </Router>
  );
}

export default App;
