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
import JobCard from "./component/JobCard/index";
import Candidates from "./pages/Candidates";
import CompanyNavbar from "./component/CompanyNavbar";
import JobSeekerNavbar from "./component/Navbar";
import SideMenuItem from "./component/JobSeekerSidebar";
import AccordionItem from "./component/AccordionItem";
import CompanySidebar from "./component/CompanySidebar";

import { useState } from "react";
import { RegisterFormProvider } from "./contexts/RegisterFormContext";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import GoogleRegister from "./component/GoogleAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./component/login/index";
import { AuthProvider } from "./contexts/authContext";
import Guards from "./Guards";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <JobSeekerNavbar></JobSeekerNavbar>
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
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
