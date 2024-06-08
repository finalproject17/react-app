import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JobSeeker from "./pages/JobSeeker";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./component/login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Jobs from "../src/pages/Jobs";
import JobSeekerProfile from "./pages/JobSeekerProfile";
import Footer from "./component/Footer/index";
import Navbar from "./component/Navbar/index";
import JobInfoCard from "./component/JobInfoCard/index"
import "./App.css";
import JobCard from "./component/JobCard";
import EduCard from "./component/EduCard";
import JobCategories from "./component/JobCategories/JobCategories";
import JobSeekerProfileCard from "./component/jobSeekerProfileCard";
import JobsDetails from "./pages/JobsDetails";
function App() {
  const jobInfo = {
    img: "Edit.svg", // Replace with your image path
    text: "UI UX",
    backgroundColor: "#f0f0f0" // Optional: replace with desired background color
  };
  return (
    <>

     
   <Navbar/> 
     <JobsDetails/>
     
    <Footer/>
   {/* <JobInfoCard
        img={jobInfo.img} 
        text={jobInfo.text} 
        backgroundColor={jobInfo.backgroundColor} 
      />
  
  <JobCard/>
  <EduCard/>
  <JobSeekerProfileCard/> */}
  


      
        {/* <Routes>
          <Route path="/" element={<JobSeeker />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/profile" element={<JobSeekerProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
     */}
    </>
  );
}

export default App;
