import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import JobSeeker from './pages/JobSeeker'
//import JobsDetails from './pages/JobsDetails'
import Login from "./component/login";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Jobs from '../src/pages/Jobs'
import JobSeekerProfile from './pages/JobSeekerProfile'
import Contact from './pages/Contact/ContactForm'


// import CompanyNav from './component/CompanyNavBar/companyNav'

function App() {
  return (
    
    <BrowserRouter>
      {/* <CompanyNav/> */}
      <Routes>
        <Route path='/' element={<JobSeeker />} />
        <Route path='/Jobs' element={<Jobs />} />
        <Route path='/profile' element={<JobSeekerProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/profile' element={<SeekingProfile />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
