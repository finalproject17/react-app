import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import JobCard from './component/JobCard/index';
import Candidates from "./pages/Candidates";
import Navbar from './component/Navbar';
import CompanyNavbar from "./component/CompanyNavbar";
import JobSeekerNavbar from "./component/Navbar";
import CompanySidebar from './component/CompanySidebar/index';
import JobSeekerMyProfileForm from "./component/JobSeekerMyProfileEdit";
import CompanyForm from "./component/JobSeekerMyProfileEdit";


function App() {
  return (
    <>
      <CompanyNavbar></CompanyNavbar>
      {/* <JobSeekerNavbar></JobSeekerNavbar> */}
      {/* <CompanySidebar></CompanySidebar> */}
      <CompanyForm></CompanyForm>
    </>
  );
}

export default App;
