import React from "react";

import { DoctorDashboard } from "../DoctorDashboard/DoctorDashboard";
import "../Dashboard/AdminDashboard.css";

function Prescription() {
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
            <i class="fa-solid fa-prescription-bottle-medical" id="NavBarIcon"></i>
            <div className="NavDashboard">Prescription</div>
            <div className="NavDashfeature">Send Prescription</div>
          </div>
          

          <div className="">
            <div className="PSendP">Send Prescription To:</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prescription;
