// import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/index";
// import Home from '../src/pages/JobSeeker/index'
// import JobSeeker from "../src/pages/JobSeeker";
import Footer from "./component/Footer";
import SignUp from "./pages/signup/index";
import SignUpStepTwo from "./component/signupStepTow";

import Protected from "./component/Protected/index";
import { useState } from "react";
import  { RegisterFormProvider } from "./contexts/RegisterFormContext";

function App() {
  const [isSinUp, setIsSinUp] = useState("false");

  return (
    <BrowserRouter>
      <Navbar />
      <RegisterFormProvider>      
            <Routes>
              {/* <Route path="/JobSeeker" element={<JobSeeker />} /> */}

              {/* <Route path="/find-jobs" element={<FindJobs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />*/}

              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/step-two" element={<SignUpStepTwo />} />
            </Routes>    
      </RegisterFormProvider>

      <Footer />
    </BrowserRouter>
  );
}
export default App;




