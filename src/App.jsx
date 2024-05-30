
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  JobSeeker from './pages/JobSeeker'
//import  JobsDetails from './pages/JobsDetails'

//import Login from "./component/login";
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Jobs from '../src/pages/Jobs'
import JobSeekerProfile from './pages/JobSeekerProfile'


function App() {
  

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<JobSeeker/>}/>
    <Route path='/Jobs'element={<Jobs/>}/>
    <Route path='/profile' element={<JobSeekerProfile/>}/>
  </Routes>
  </BrowserRouter>
   </>
  )
}

export default App;
