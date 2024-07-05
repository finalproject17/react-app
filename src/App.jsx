import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/signup";
import SignUpStepTwo from "./component/signupStepTwo";
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
import JobApplication from "./pages/JobApplication"
import SendEmailToForgetPassword from "./pages/SendEmailToForgetPassword";
import { RegisterFormProvider } from "./contexts/RegisterFormContext";
import { ToastContainer } from "react-bootstrap";
import { AuthProvider, useAuth } from "./contexts/authContext";
import AppliedJobs from "./component/AppliedJobs";
import AppliedJobsSlice from "./store/Slices/AppliedJobsSlice";
import ManageCV from "./component/ManageCV/index ";
import Dashboard from "./component/Dashboard";
import axios from "axios";
import BrowseJobs from "./pages/BrowseJobs";
// import AppliedJobs from './component/AppliedJobs/index';
import NotFound from './pages/NotFound/index'
import AboutUsPage from './pages/About'
import Contact from './pages/Contact/index';
import './i18n.js';
import "react-toastify/dist/ReactToastify.css";
import { useTransition } from "react";
import Guards from "./Guards/index.jsx";
export default function App() {
  const {t} = useTransition()

// const [file,setFile]=useState()
// const handleUpload =(e)=>{
//   const formdata=new FormData()
//   formdata.append('image',file)
// axios.post('http://localhost:3001/upload',formdata)
// .then (res => console.log(res))
// .catch(err => console.log(err))
// }



  const [isSignUp, setIsSignUp] = useState("false");
  return (
    <>
      {/* <div><input type="file" onChange={e=>setFile (e.target.files[0])} />
    <button onClick={handleUpload}>upload</button>
    </div> */}
      <AuthProvider>
        <Router>
          {/* <AboutUsPage />  */}
          {/* <NotFound />   */}
          <JobSeekerNavbar></JobSeekerNavbar>
          {/* <AppliedJobs></AppliedJobs> */}
          <RegisterFormProvider>
            <ToastContainer theme="colored" />
            <Routes>
              <Route path="/Home" element={<HomePage />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/aboutus" element={<AboutUsPage></AboutUsPage>} />
              <Route path="/contact" element={<Contact></Contact>} />

              {/* -----------------------------protected--------------------------*/}
              <Route element={<Guards />}>
                <Route path="/step-two" element={<SignUpStepTwo />} />

                <Route path="/jobseeker" element={<JobSeekerSidebar />} />
                <Route path="/JobsDetails/:id" element={<JobsDetails />} />
                <Route path="/jobs" element={<Jobs />} />

                <Route
                  path="/applied-jobs"
                  element={<AppliedJobs></AppliedJobs>}
                />
                <Route
                  path="/myProfile"
                  element={<JobSeekerMyProfileEdit></JobSeekerMyProfileEdit>}
                />
                <Route path="/dashboard" element={<Dashboard></Dashboard>} />
                <Route path="/settings" element={<Setting></Setting>} />
                <Route path="/savedjobs" element={<SavedJobs></SavedJobs>} />
                <Route path="manage-cv" element={<ManageCV></ManageCV>} />
                <Route path="/candidates" element={<Candidates></Candidates>} />
                <Route path="/profile/:userId" element={<JobSeekerProfile />} />
                <Route
                  path="/applicationform/:jobId"
                  element={<JobApplication />}
                />
                <Route
                  path="/endemailtoforgetpass"
                  element={<SendEmailToForgetPassword />}
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <Footer /> */}
          </RegisterFormProvider>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}
