import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import JobSeeker from './pages/JobSeeker';
import Login from "./component/login";
import Jobs from "../src/pages/Jobs";
import JobSeekerProfile from "./pages/JobSeekerProfile";
import "./App.css";
import JobSeekerCard from './component/JobSeekerCard/index';
import JobCard from './component/JobCard';
import EduCard from './component/EduCard/index';

function App() {
  return (
    <>
      <JobSeekerCard></JobSeekerCard>
      <JobCard></JobCard>
      <EduCard></EduCard>
    </>
  );
}

export default App;
