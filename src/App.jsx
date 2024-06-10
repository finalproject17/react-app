import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import SignUp from "./pages/signup";
import SignUpStepTwo from "./component/signupStepTow";
import CompanyNavbar from "./component/CompanyNavbar";
import CompanyForm from "./component/JobSeekerMyProfileEdit";
import { RegisterFormProvider } from "./contexts/RegisterFormContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isSinUp, setIsSinUp] = useState("false");

  return (
    <Router>
      <CompanyNavbar />
      <CompanyForm />

      <RegisterFormProvider>
        <ToastContainer theme="colored" />
        <Navbar />
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/step-two" element={<SignUpStepTwo />} />
        </Routes>
        <Footer />
      </RegisterFormProvider>
    </Router>
  );
}

export default App;
