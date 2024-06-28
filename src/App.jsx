import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
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
import Login from "./component/login";
import Candidates from "./pages/Candidates";
import JobSeekerProfile from "./pages/JobSeekerProfile";
import Footer from "./component/Footer";
import { RegisterFormProvider } from "./contexts/RegisterFormContext";
import { ToastContainer } from "react-bootstrap";
import { AuthProvider } from "./contexts/authContext";
import AppliedJobs from "./component/AppliedJobs";
import AppliedJobsSlice from "./store/Slices/AppliedJobsSlice";
export default function App() {
  const [isSignUp, setIsSignUp] = useState("false");
  return (
    <>
      <AuthProvider>
        <Router>
          <JobSeekerNavbar></JobSeekerNavbar>
          {/* <AppliedJobs></AppliedJobs> */}
          <RegisterFormProvider>
            <ToastContainer theme="colored" />
            <Routes>
              <Route path="/Home" element={<HomePage />} />
              <Route path="/SignUp" element={<SignUp />} />
              {/* -----------------------------protected--------------------------*/}
              {/* <Route element={<Guards />}>
                <Route path="/step-two" element={<SignUpStepTwo />} />
              </Route> */}
              <Route path="/jobseeker" element={<JobSeekerSidebar />} />
              <Route path="/JobsDetails/:id" element={<JobsDetails />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/applied-jobs" element={<AppliedJobs></AppliedJobs>}/>
              <Route
                path="/myProfile"
                element={<JobSeekerMyProfileEdit></JobSeekerMyProfileEdit>}
              />
              <Route path="/settings" element={<Setting></Setting>} />
              <Route path="/savedjobs" element={<SavedJobs></SavedJobs>} />
              <Route path="/candidates" element={<Candidates></Candidates>} />
              <Route path="*" element={<HomePage></HomePage>} />
              <Route path="/profile/:userId" element={<JobSeekerProfile />} />
            </Routes>
            {/* <Footer /> */}
          </RegisterFormProvider>
        </Router>
      </AuthProvider>
    </>
  );
}
