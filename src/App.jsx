import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import JobCard from './component/JobCard/index';
import Candidates from "./pages/Candidates";
import Navbar from './component/Navbar';
import CompanyNavbar from "./component/CompanyNavbar";
import JobSeekerNavbar from "./component/Navbar";


function App() {
  return (
    <>
      <CompanyNavbar></CompanyNavbar>
      {/* <JobSeekerNavbar></JobSeekerNavbar> */}

      <Candidates></Candidates>
    </>
  );
}

export default App;
