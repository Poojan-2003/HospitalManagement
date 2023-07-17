import React from 'react'
import { Dashboard } from "../Dashboard/Dashboard";

function Doctor() {
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
          
        </div>
      </div>
    </div>
  );
}

export default Doctor