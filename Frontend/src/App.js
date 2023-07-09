import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './Components/Home/Home';
import "./App.css"
import PatientLogin from "./Components/Patient/PatientLogin";
import DoctorLogin from "./Components/DoctorLogin/DoctorLogin";
import NoPage from "./Components/NoPage/NoPage"
import DoctorSignup from "./Components/Doctor/DoctorSignup";
import PatientSignUp from "./Components/Patient/PatientSignUp";
import DoctorDashboard from "./Components/Dashboard/DoctorDashboard";
function App() {
  // const user = localStorage.getItem("token");
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element = {<Home />}></Route>
          <Route exact path='/DoctorLogin' element = {<DoctorLogin />}></Route> 
          <Route exact path='/DoctorSignup' element = {<DoctorSignup />}></Route> 
          <Route exact path='/PatientLogin' element = {<PatientLogin />}></Route>
          <Route exact path='/PatientSignUp' element = {<PatientSignUp />}></Route>
          <Route exact path='/DoctorDashboard' element = {<DoctorDashboard />}></Route>
          <Route exact path='*' element = {<NoPage />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
