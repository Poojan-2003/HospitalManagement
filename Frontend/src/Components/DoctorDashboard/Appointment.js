import React from "react";

import { DoctorDashboard } from "../DoctorDashboard/DoctorDashboard";
import "../Dashboard/AdminDashboard.css";
import "../DoctorDashboard/MainDoctorDashboard.css";

function Appointment() {
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
          
        </div>
      </div>
    </div>
  );
}

export default Appointment;
