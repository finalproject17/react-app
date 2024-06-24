import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/signup";
import SignUpStepTwo from "./component/signupStepTow";
import JobsDetails from "./pages/JobsDetails";
import SavedJobs from "./component/SavedJobs";
import JobSeekerNavbar from "./component/JobSeekerNavbar";
import JobSeekerSidebar from "./component/JobSeekerSidebar";
import Jobs from "./pages/Jobs";
import JobSeekerMyProfileEdit from "./component/JobSeekerMyProfileEdit";
import Setting from "./component/Setting";
import { RegisterFormProvider } from "./contexts/RegisterFormContext";
import { ToastContainer } from "react-bootstrap";
import Login from "./component/login";
import Candidates from "./pages/Candidates"
import { AuthProvider } from "./contexts/authContext";
import Footer from "./component/Footer";

export default function App() {
  const [isSignUp, setIsSignUp] = useState("false");
  return (
    <>
      <AuthProvider>
        <Router>
          {/* <CompanyNavbar /> */}
          {/* <JobSeekerNavbar></JobSeekerNavbar> */}
          {/* <JobSeekerSidebar></JobSeekerSidebar> */}
          {/* <CompanyForm /> */}
          {/* <BrowseJobs></BrowseJobs> */}
          {/* <Candidates></Candidates> */}
          <JobSeekerNavbar></JobSeekerNavbar>

          {/* <Candidates></Candidates> */}
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
              <Route path="/Home" element={<HomePage />} />
              <Route path="/SignUp" element={<SignUp />} />
              {/* <Route element={<Guards/>}> */}
              <Route path="/step-two" element={<SignUpStepTwo />} />
              <Route path="/jobseeker" element={<JobSeekerSidebar />} />
              <Route path="/JobsDetails/:id" element={<JobsDetails />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/myProfile"
                element={<JobSeekerMyProfileEdit></JobSeekerMyProfileEdit>}
              />
              <Route path="/settings" element={<Setting></Setting>} />
              <Route path="/savedjobs" element={<SavedJobs></SavedJobs>} />
              <Route path="/candidates" element={<Candidates></Candidates>} />
              <Route path="*" element={<HomePage></HomePage>} />

              
              {/* </Route> */}
            </Routes>
            <Footer />
            {/* <BrowseJobs /> */}
          </RegisterFormProvider>
        </Router>
      </AuthProvider>
    </>
  );
}
