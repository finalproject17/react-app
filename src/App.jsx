import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JobSeeker from "./pages/JobSeeker";
import Login from "./component/login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Jobs from "../src/pages/Jobs";
import JobSeekerProfile from "./pages/JobSeekerProfile";
import "./App.css";
function App() {
  return (
    <>

     
   <JobSeeker></JobSeeker>
   


  

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobSeeker />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/profile" element={<JobSeekerProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
