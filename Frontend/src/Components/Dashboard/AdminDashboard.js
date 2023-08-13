import React,{useState} from "react";
import { Modal, ModalHeader } from "reactstrap";
import { Dashboard } from "./Dashboard";
import "../Dashboard/AdminDashboard.css";

function AdminDashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  function Logout (){
    window.location.href='/'
  }
  return (
   <div>
      <div className="MainNavbar">
        <div className="Sliding">
        <marquee className="MCol" direction="right">Welcome To Abc Hospital</marquee></div>
        <div>
          
          <Modal
              size="lg"
              isOpen={modalOpen}
              toggle={() => setModalOpen(!modalOpen)}
            >
              <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
                Profile Page
              </ModalHeader>
              <div>
                <div className="AdminInfo">Account Type : Admin</div>
                <div className="AdminInfo">UserName : Admin</div>
                <div className="AdminInfo">Email : Admin@gmail.com</div>
                <div className="AdminInfo">Password : Admin</div>
                <button className="LogOut" onClick={()=>Logout()}>Log Out</button>
              </div>
            </Modal>
            
            <i  onClick={() => {
                setModalOpen(true);
              }} id="ProfilePic"class="fa-solid fa-circle-user"></i></div>
        
        </div>
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
            <i class="fa-sharp fa-solid fa-house" id="NavBarIcon"></i>
            <div className="NavDashboard">Dashboard</div>
            <div className="NavDashfeature">Dashboard Features</div>
          </div>
          {/* <div className="MainBox">
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
          </div> */}

          <div className="Row1">
            <div className="SB1">
              <div className="Icon"><i class="fa-sharp fa-solid fa-tablets" id="MIcon"></i></div>
              <div className="RData">
                  <div className="count">5</div>
                  <div className="Value">Total Medicine</div>
              </div>
            </div>
            <div className="SB2">
              <div className="Icon"><i class="fa-solid fa-user-doctor" id="MIcon2"></i></div>
              <div className="RData">
                  <div className="count">5</div>
                  <div className="Value">Total Doctors</div>
              </div>
            </div>


          </div>

          <div className="Row1">
            <div className="SB1">
              <div className="Icon"><i class="fa-solid fa-person" id="MIcon3"></i></div>
              <div className="RData">
                  <div className="count">5</div>
                  <div className="Value">Total Employee</div>
              </div>
            </div>
            <div className="SB2">
              <div className="Icon"><i class="fa-solid fa-hospital-user" id="MIcon4"></i></div>
              <div className="RData">
                  <div className="count">5</div>
                  <div className="Value">Total Patients</div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
         
   
  );
}

export default AdminDashboard;
