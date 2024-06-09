
import "bootstrap/dist/css/bootstrap.min.css";
import JobSeeker from "./pages/JobSeeker";
import Login from "./component/login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Jobs from "../src/pages/Jobs";
import JobSeekerProfile from "./pages/JobSeekerProfile";
import BrowserJobs from './pages/BrowseJobs'
import "./App.css";
function App() {
  return (
    <>

     
   {/* <JobSeeker></JobSeeker> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobSeeker />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/profile" element={<JobSeekerProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/job" element={<BrowserJobs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
