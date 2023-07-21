import {BrowserRouter , Routes , Route} from "react-router-dom"

import Home from './Components/Home/Home';
import "./App.css"
import PatientLogin from "./Components/Patient/PatientLogin";
import DoctorLogin from "./Components/DoctorLogin/DoctorLogin";
import NoPage from "./Components/NoPage/NoPage"
import DoctorSignup from "./Components/Doctor/DoctorSignup";
import PatientSignUp from "./Components/Patient/PatientSignUp";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import Patient from "./Components/Pages/Patient";
import Laboratry from "./Components/Pages/Laboratry";
import Doctor from "./Components/Pages/Doctor";
import Inventory from "./Components/Pages/Inventory";
import Employee from "./Components/Pages/Employee" ;
import UpdatePatient from "./Components/Pages/UpdatePatient";
function App() {
  // const user = localStorage.getItem("token");
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element = {<AdminDashboard />}></Route>
          <Route exact path='/DoctorLogin' element = {<DoctorLogin />}></Route> 
          <Route exact path='/DoctorSignup' element = {<DoctorSignup />}></Route> 
          <Route exact path='/PatientLogin' element = {<PatientLogin />}></Route>
          <Route exact path='/PatientSignUp' element = {<PatientSignUp />}></Route>
          <Route exact path = '/AdminDashboard' element = {<AdminDashboard />}></Route>
          <Route exact path = '/Doctor' element = {<Doctor />}></Route>
          <Route exact path = '/Employee' element = {<Employee />}></Route>
          <Route exact path = '/Inventory' element = {<Inventory />}></Route>
          <Route exact path = '/Laboratry' element = {<Laboratry />}></Route>
          <Route exact path = '/Patient' element = {<Patient />}></Route>
          <Route exact path='/Patient/UpdatePatient/:id' element={<UpdatePatient />}></Route>
          <Route exact path='*' element = {<NoPage />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
