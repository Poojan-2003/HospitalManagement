import React from 'react'
import { Patientdata } from './Patientdata';
import "../Dashboard/AdminDashboard.css";
import "../DoctorDashboard/MainDoctorDashboard.css";
function PatientPrescription() {
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
        
      </div>
    </div>
  </div>
  )
}

export default PatientPrescription