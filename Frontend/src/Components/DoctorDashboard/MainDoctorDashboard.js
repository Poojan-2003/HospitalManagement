import React from "react";

import { DoctorDashboard } from "../DoctorDashboard/DoctorDashboard";
import "../Dashboard/AdminDashboard.css"
import "../DoctorDashboard/MainDoctorDashboard.css"
import {useDispatch , useSelector} from "react-redux"
function MainDoctorDashboard() {
  // const userlogin  = useSelector(state => state.userlogin)
  // const {userInfo} = userlogin
  // const dispatch = useDispatch()
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
            {/* {userInfo ? (<div>{userInfo.status} </div>) : (<div> </div>)} */}
            <div>Set Current Status as :</div>
              <div className="DCstatus">
                Current Status : 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDoctorDashboard;
