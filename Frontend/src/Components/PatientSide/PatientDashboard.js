import React, { useEffect, useState } from 'react'
import "../Dashboard/AdminDashboard.css";
import "../DoctorDashboard/MainDoctorDashboard.css";
import axios from "axios"
import { Patientdata } from './Patientdata';
import "./PatientDashboard.css"
import image from "../../Assests/OQ6UTW0.jpg"
import {Link} from "react-router-dom"
function PatientDashboard() {
  // eslint-disable-next-line
const [AllDoctor,setAllDoctor] = useState([])
  useEffect(()=> {
         
    //  const response =  
    //                    fetch('http://localhost:1337/AllPatient');
    //  const alldata =  response.json();
    //  setAllPatient(alldata.data.AllPatientData);
    async function asyncCall() {
   await axios.get('http://localhost:1337/AllDoctor')
   
    .then(result => {setAllDoctor(result.data.data.AllDoctorData); console.log(result.data.data.AllDoctorData)})
    .catch(err => console.log(err))
    }
    
  
 asyncCall()
}, []);
  return (
    <div>
      <div className="MainNavbar"></div>
      <div className="MainBody">
        <div className="MainSidebar">
          <div className="SideBarData">
            {Patientdata.map((val, key) => {
              return (
                <div
                  key={key}
                  className="RowData"
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div>
                    <i class={val.icon} id="IconForSidebar"></i>
                  </div>{" "}
                  {val.title}
                </div>
              );
            })}
          </div>
        </div>

        <div className="MainData">
          <div className="NavBarForMainData">
            <i class="fa-sharp fa-solid fa-hospital" id="NavBarIcon"></i>
            <div className="NavDashboard">Dashboard</div>
            <div className="NavDashfeature">Dashboard Features</div>
          </div> 



          <div className='MainDiv'>
          {AllDoctor.map((data, i) => {
              return (
                <div className='MainOutDiv'>

              <div className='Dimg'><img src={image} className='PDimg'></img></div>
              <div className='PRightData'>
                <div className='Dname'>Name : {data.name}</div>
                <div className='Dspeciality'>Speciality : {data.speciality}</div>
                <div className='DFee'>Consultancy Fees : $500/hr</div>
                <div><Link to={`/BookAppointment`}><button className='PBtn' onClick={()=>{localStorage.setItem("Did",data._id)}}>Book Now !</button></Link></div>
              </div>
            </div>
              );
            })}
            



          </div>


        </div>
      </div>
    </div>
  )
}

export default PatientDashboard