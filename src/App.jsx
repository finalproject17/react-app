import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import JobSeeker from "./pages/JobSeeker";
import Jobs from "./pages/Jobs";
import JobSeekerProfile from "./pages/JobSeekerProfile";
import BrowseJobs from './pages/BrowseJobs';
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import SignUp from "./pages/signup";
import SignUpStepTwo from "./component/signupStepTow";
import CompanyNavbar from "./component/CompanyNavbar";
import CompanyForm from "./component/JobSeekerMyProfileEdit";
import { RegisterFormProvider } from "./contexts/RegisterFormContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobSeekerSidebar from './component/JobSeekerSidebar';
import JobsDetails from './pages/JobsDetails';
import ContactForm from './pages/Contact';

function App() {
  const [isSignUp, setIsSignUp] = useState("false");

  return (
    <>
      <Router>
        {/* <CompanyNavbar /> */}
        <CompanyForm />

        <RegisterFormProvider>
          <ToastContainer theme="colored" />
          <ContactForm />
          <JobSeekerProfile />
          <Navbar />
          <Routes>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/step-two" element={<SignUpStepTwo />} />
            <Route path="/jobseeker" element={<JobSeekerSidebar />} />
            <Route path="/JobsDetails/:id" element={<JobsDetails />} />
            <Route path="/Jobs" element={<BrowseJobs />} />
          </Routes>
          <Footer />
          <BrowseJobs />
        </RegisterFormProvider>
      </Router>
    </>
  );
}

export default App;
