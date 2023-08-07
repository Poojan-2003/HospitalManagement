import React, { useState, useEffect } from "react";
import { message } from "antd";
import axios from "axios"
import { DoctorDashboard } from "../DoctorDashboard/DoctorDashboard";
import "../Dashboard/AdminDashboard.css";
import "../DoctorDashboard/MainDoctorDashboard.css";
import dayjs from 'dayjs';

function Appointment() {
  const [Appointment ,setAppointment] = useState([])
  const doctoremail  = localStorage.getItem("Demail");
  const PatientEmail  = localStorage.getItem("Patientemail")
  const email = PatientEmail.slice(1,-1)
  
  const Update1 = async(e) => {
  const status = 1;
  console.log("HEre")
  await axios.post("http://localhost:1337/UpdateAppoin",{status,email})
  .then(result => {
    console.log(result)
  }).then(window.location.reload())
  .catch(err => console.log(err))
}
const Update2 = async(e) => {
  const status = 2
  console.log("HEreasd")
  await axios.post("http://localhost:1337/UpdateAppoin",{status,email})
  .then(result => {
    console.log(result)
  }).then(window.location.reload())
  .catch(err => console.log(err))
  
  }

  useEffect(()=> {

    async function asyncCall() {
    await axios.get('http://localhost:1337/AppointmentData')
    .then(result => {setAppointment(result.data.data.AllAppointmetnData); message.success("Appointments Fetched Successfully")})
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
            {DoctorDashboard.map((val, key) => {
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
            <i class="fa-solid fa-calendar-check" id="NavBarIcon"></i>
            <div className="NavDashboard">Appointment</div>
            <div className="AppFeature">Appointment Features</div>
          </div>
          

          <div>
          <table className="Ptable">
                <thead className="Thead">
                  <tr>
                    
                    <th>Sr No</th>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th className="G">Gender</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Reason</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Appointment?.filter(Appointment => Appointment.doctoremail === doctoremail).filter(Appointment => Appointment.status === 0).map((data, i) => (
                    <React.Fragment key={data._id}>
                    <tr key={i}>
                     
                      <td>{++i}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td  className="G"> {data.gender}</td>
                      <td>{dayjs(data.date).format('DD/MM/YYYY')}</td>
                      <td>{dayjs(data.time).format('HH:MM')}</td>
                      <td>{data.appreason}</td>
                      <td><button className="DAPP" onClick={ () => Update1()} >Approve</button> <button className="DReject" onClick={ () => Update2()}>Reject</button></td>
                    </tr>
                    
                      </React.Fragment>
                  ))}
                </tbody>
              </table> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
