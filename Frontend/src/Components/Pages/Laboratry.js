import React from "react";

import { Dashboard } from "../Dashboard/Dashboard";
import "../Dashboard/AdminDashboard.css";

function Laboratry() {
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
            <i class="fa-sharp fa-solid fa-hospital" id="NavBarIcon"></i>
            <div className="NavDashboard">Appointment</div>
            <div className="NavDashfeature">Appointment Features</div>
          </div>
          <div className="MainBox">
            <div className="SubBox">
              <div className="LeftSubbox">
                <i class="fa-sharp fa-solid fa-tablets"></i>
                <div className="TextInSubbox">Medicine to be Expired</div>
              </div>
              <div className="NumberInSubbox">3</div>
            </div>
            <div className="SubBox" id="RightColumn">
              <div className="LeftSubbox">
                <i class="fa-solid fa-bed"></i>
                <div className="TextInSubbox">Empty Beds</div>
              </div>
              <div className="NumberInSubbox">3</div>
            </div>
          </div>
          <div className="row2">
            <div className="SubBox">
              <div className="LeftSubbox">
                <i class="fa-solid fa-user-doctor"></i>
                <div className="TextInSubbox">Total Doctors</div>
              </div>
              <div className="NumberInSubbox">3</div>
            </div>

            <div className="SubBox" id="RightColumn">
              <div className="LeftSubbox">
                <i class="fa-solid fa-users-medical"></i>
                <div className="TextInSubbox">Total Patients</div>
              </div>
              <div className="NumberInSubbox">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laboratry;
