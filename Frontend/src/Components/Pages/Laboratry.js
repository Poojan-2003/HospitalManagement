import React, {  useState, useEffect } from "react";
import axios from "axios"
import { Dashboard } from "../Dashboard/Dashboard";
import "../Dashboard/AdminDashboard.css";
import "./Laboratry.css"
import { TextField } from "@mui/material";
import dayjs from "dayjs";

function Laboratry() {
  const [Query, setQuery] = useState("");
  const [LeaveData , setLeaveData] = useState([])
  useEffect(()=> {
         
    //  const response =  
    //                    fetch('http://localhost:1337/AllPatient');
    //  const alldata =  response.json();
    //  setAllPatient(alldata.data.AllPatientData);
    async function asyncCall() {
   await axios.get("http://localhost:1337/GetLeave")
   
    .then(result => {setLeaveData(result.data.data.GetLeave); console.log(result.data.data.GetLeave)})
    .catch(err => console.log(err))
    }
    
  
 asyncCall()
}, []);


const Update1 = async(email) => {
  const status = 1;
 
  await axios.post("http://localhost:1337/UpdateLeave",{status,email})
  .then(result => {
    console.log(result)
  }).catch(err => console.log(err))
}
const Update2 = async(email) => {
  const status = 2
 
  await axios.post("http://localhost:1337/UpdateLeave",{status,email})
  .then(result => {
    console.log(result)
  }).catch(err => console.log(err))
  
  }
  return (
    <div>
      <div className="MainNavbar"></div>
      <div className="MainBody">
        <div className="MainSidebar">
          <div className="SideBarData">
            {Dashboard.map((val, key) => {
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
            <i class="fa-solid fa-calendar-days" id="NavBarIcon"></i>
            
            <div className="NavDashboard">Leave </div>
            <div className="LeaveApproval">Leave Approval</div>
          </div>
          
          <div className="PSearch"><TextField  id="outlined-basic" label="Search Doctor Name" variant="outlined" onChange={(e) => setQuery(e.target.value)}/></div>
          <table className="Ptable" >
                <thead className="Thead">
                  <tr>
                    
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>duration</th>
                    <th>Reason</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {LeaveData?.filter(LeaveData => LeaveData.name.toLowerCase().includes(Query)).filter(LeaveData => LeaveData.approve === 0).map((data, i) => (
                   
                    <React.Fragment key={data._id}>
                    <tr key={i}>
              
                     
                      <td>{++i}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td> {dayjs(data.startdate).format('DD/MM/YYYY')}</td>
                      <td> {dayjs(data.enddate).format('DD/MM/YYYY')}</td>
                      <td>{data.duration}</td>
                      <td>{data.reason}</td>
                      <td><button className="LApp" onClick={ () => Update1(data.email)} >Approve</button> <button className="LRej" onClick={ () => Update2(data.email)}>Reject</button></td>
                     
                      
                    </tr>
                    
                      </React.Fragment>
                  ))}
                </tbody>
              </table> 
        </div>
      </div>
    </div>
  );
}

export default Laboratry;
