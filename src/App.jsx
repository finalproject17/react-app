import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import JobSeeker from "./pages/JobSeeker";
import JobSeekerProfile from "./pages/JobSeekerProfile";
import BrowseJobs from './pages/BrowseJobs';
import "./App.css";
// import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import SignUp from "./pages/signup";
import SignUpStepTwo from "./component/signupStepTow";
import JobCard from "./component/JobCard/index";
import Candidates from "./pages/Candidates";
import CompanyNavbar from "./component/CompanyNavbar";
// import JobSeekerNavbar from "./component/Navbar";
import SideMenuItem from "./component/JobSeekerSidebar";
import AccordionItem from "./component/AccordionItem";
import CompanySidebar from "./component/CompanySidebar";
import { RegisterFormProvider } from "./contexts/RegisterFormContext";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import GoogleRegister from "./component/GoogleAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./component/login/index";
import { AuthProvider } from "./contexts/authContext";
import Guards from "./Guards";
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <AuthProvider>
   
        <Navbar />
        <RegisterFormProvider>
          <ToastContainer theme="colored" />
          <Routes>
            <Route path="/login" element={<Login />} />

            {/*<Route path="/about-us" element={<AboutUs />} />*/}
            {/*-------------------------------- protected routes --------------------------*/}
            <Route path="/SignUp" element={<SignUp />} />
            <Route element={<Guards/>}>
            <Route path="/step-two" element={<SignUpStepTwo />} />
            {/* <Route path="/find-jobs" element={<FindJobs />} /> */}
            {/* <Route path="/JobSeeker" element={<JobSeeker />} /> */}
            <Route path="/JobSeeker" element={<Candidates />} />
            </Route>
          </Routes>
        </RegisterFormProvider>
        <Footer />
   
    </AuthProvider>
  );
}

export default App;
