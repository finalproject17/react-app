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
import "react-toastify/dist/ReactToastify.css";
import JobSeekerSidebar from './component/JobSeekerSidebar';
import JobsDetails from './pages/JobsDetails';
import ContactForm from './pages/Contact';
import SavedJobs from './component/SavedJobs';
import JobSeekerNavbar from './component/JobSeekerNavbar';

import Jobs from './pages/Jobs';
import JobsFilter from './component/JobsFilter';
import JobTable from './component/JobTable';
import JobSeekerMyProfileEdit from './component/JobSeekerMyProfileEdit';
import Setting from './component/Setting';
import { RegisterFormProvider } from './contexts/RegisterFormContext';
import { ToastContainer } from 'react-bootstrap';
import Login from './component/login';

export default function App() {
  const [isSignUp, setIsSignUp] = useState("false");

  return (
    <>

      <Router>
        {/* <CompanyNavbar /> */}
        {/* <JobSeekerNavbar></JobSeekerNavbar> */}
        {/* <JobSeekerSidebar></JobSeekerSidebar> */}
        {/* <CompanyForm /> */}
        {/* <BrowseJobs></BrowseJobs> */}
        {/* <Candidates></Candidates> */}
        <JobSeekerNavbar></JobSeekerNavbar>
        <Candidates></Candidates>
        {/* <JobSeekerMyProfileEdit></JobSeekerMyProfileEdit> */}
        {/* <Jobs></Jobs> */}
        {/* <JobsFilter></JobsFilter> */}
        {/* <JobTable></JobTable> */}
        

        <RegisterFormProvider>
          <ToastContainer theme="colored" />
          {/* <ContactForm /> */}
          {/* <JobSeekerProfile /> */}
          {/* <JobSeekerNavbar /> */}
          <Routes>
            <Route path="/SignUp" element={<SignUp />} />
            {/* <Route element={<Guards/>}> */}
            <Route path="/step-two" element={<SignUpStepTwo />} />
            <Route path="/jobseeker" element={<JobSeekerSidebar />} />
            <Route path="/JobsDetails/:id" element={<JobsDetails />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/login" element={<Login />} />☻
            <Route path="/myProfile" element={    <JobSeekerMyProfileEdit></JobSeekerMyProfileEdit>} />
           <Route path="/settings" element={ <Setting></Setting>} />
           <Route path='/savedjobs' element={        <SavedJobs></SavedJobs>
}/>
{/* </Route> */}
          </Routes>
          {/* <Footer /> */}
          {/* <BrowseJobs /> */}
        </RegisterFormProvider>
      </Router>
  

    </>
  );
}

