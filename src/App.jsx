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
// import Home from '../src/pages/JobSeeker/index';
// import JobSeeker from "../src/pages/JobSeeker";
import Footer from "./component/Footer";
import SignUp from "./pages/signup/index";
import SignUpStepTwo from "./component/signupStepTow";
import JobCard from './component/JobCard/index';
import Candidates from "./pages/Candidates";
import CompanyNavbar from "./component/CompanyNavbar";
import JobSeekerNavbar from "./component/Navbar";
import SideMenuItem from './component/JobSeekerSidebar';
import  AccordionItem  from "./component/AccordionItem";
import CompanySidebar from "./component/CompanySidebar";



import Protected from "./component/Protected/index";
import { useState } from "react";
import { RegisterFormProvider } from "./contexts/RegisterFormContext";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import GoogleRegister from "./component/GoogleRegister";
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
function App() {
  const [isSinUp, setIsSinUp] = useState("false");
   
  return (
    <BrowserRouter>
      <Navbar />
      <RegisterFormProvider>
        <ToastContainer theme="colored"/>
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
