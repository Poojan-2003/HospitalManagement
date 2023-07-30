import React, { useEffect, useState } from "react";

import { DoctorDashboard } from "../DoctorDashboard/DoctorDashboard";
import "../Dashboard/AdminDashboard.css";
import "../DoctorDashboard/MainDoctorDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import axios from "axios"
function MainDoctorDashboard() {
  const [checked, setChecked] = React.useState(false);
  
  const handleChange = (event) => {
    
    setChecked(!checked);
    if(checked == true){setStatus(1)}
    else{setStatus(0)}
    Update();
    
  };

  const [status,setStatus] = useState(0)
  // const userlogin  = useSelector(state => state.userlogin)
  // const {userInfo} = userlogin
  // const dispatch = useDispatch()
  
  const email= localStorage.getItem("email");

  // useEffect(()=>{
  //   axios.get("http://localhost:1337/Data/"+emailD)
  //   .then(result => {
  //     setStatus(value)
  //     console.log(result)
  //   })
  //   .catch(err => console.log(err))
  // },[])



  const Update = (e) => {
    
    axios.put("http://localhost:1337/UpdateStatus",{email,status})
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
            <i class="fa-sharp fa-solid fa-hospital" id="NavBarIcon"></i>
            <div className="NavDashboard">Dashboard</div>
            <div className="NavDashfeature">Dashboard Features</div>
          </div>
          <div className="Ddata">

            <div className="DStatus">
              Set Current Status as :
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDoctorDashboard;
