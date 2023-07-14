import React from "react";
import DoctorDashboard from "./DoctorDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Dashboard } from "./Dashboard";
import "../Dashboard/Dashboard.css";
function AdminDashboard() {
  return (
    <div>
      <div className="navbar"></div>
      <div className="body">
        <div className="sidebar">
          <div className="sidebardata">
            {Dashboard.map((val, key) => {
              return (
                <div
                  key={key}
                  className="row"
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div>
                    <i class={val.icon} id="icon"></i>
                  </div>{" "}
                  {val.title}
                </div>
              );
            })}
          </div>
        </div>

        <div className="data">
          <div className="navbarforpage">
            <i class="fa-sharp fa-solid fa-hospital" id="navbaricon"></i>
            <div className="dash">Dashboard</div>
            <div className="dashfeature">Dashboard Features</div>
          </div>
          <div className="smallboxes">
            <div className="row1">
              <div className="medicine">
                <i class="fa-sharp fa-solid fa-tablets"></i>
                <div className="medicineexpiry">Medicine to be Expired</div>
              </div>
              <div className="remain">3</div>
            </div>
            <div className="row1" id="bedsavai">
              <div className="medicine">
                <i class="fa-solid fa-bed"></i>
                <div className="medicineexpiry">Empty Beds</div>
              </div>
              <div className="remain">3</div>
            </div>
          </div>
          <div className="row2">
            <div className="row1">
              <div className="medicine">
                <i class="fa-solid fa-user-doctor"></i>
                <div className="medicineexpiry">Total Doctors</div>
              </div>
              <div className="remain">3</div>
            </div>

            <div className="row1" id="bedsavai">
              <div className="medicine">
                <i class="fa-solid fa-users-medical"></i>
                <div className="medicineexpiry">Total Patients</div>
              </div>
              <div className="remain">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
