
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Home from './home/home';
import Applyleave from './apply leave/apply leave';
import Outpatient from './outpatient/outpatient';
import Employee from './employee/employee';
import Profile from './profile/profile';
import Doctor from './doctor/doctor';

function App() {
  return (
    <BrowserRouter> 
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/Applyleave' element={<Applyleave/>}/>
          <Route path='/Outpatient' element={<Outpatient/>}/>
          <Route path='/Doctor' element={<Doctor/>}/>
          <Route path='/Employee' element={<Employee/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
