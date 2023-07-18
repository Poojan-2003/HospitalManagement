import React, { useState } from "react";
import { Dashboard } from "../Dashboard/Dashboard";
import "../Pages/Patient.css";
import { Modal, ModalHeader } from "reactstrap";
import { TextField } from "@mui/material";

function Patient() {
  async function AddPatient(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/AddPatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        mname,
        lname,
        mobile,
        email,
        age,
        gender,
        bloodgroup,
        marriedstatus,
        address,
        height,
        weight,
      }),
    });
    const data = await response.json();
    if (data.error !== undefined) alert(data.error);
    if (data.status === "ok") {
      alert("Patiend Added Successfully");
      window.location.href = "/Patient";
    }
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [fname, setfname] = useState("");
  const [mname, setmname] = useState("");
  const [lname, setlname] = useState("");
  const [mobile, semobile] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [marriedstatus, setmarriedstatus] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [height, setheight] = useState("");
  const [weight, seweight] = useState("");

  return (
    <div>
      <div className="PMainNavbar"></div>
      <div className="PMainBody">
        <div className="PMainSidebar">
          <div className="PSideBarData">
            {Dashboard.map((val, key) => {
              return (
                <div
                  key={key}
                  className="PRowData"
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div>
                    <i class={val.icon} id="PIconForSidebar"></i>
                  </div>{" "}
                  {val.title}
                </div>
              );
            })}
          </div>
        </div>

        <div className="PMainData">
          <div className="PNavBarForMainData">
            <i class="fa-sharp fa-solid fa-hospital" id="PNavBarIcon"></i>
            <div className="PNavDashboard">Patient</div>
            <div className="PNavDashfeature">Patient's Features</div>
          </div>
          <div>
            <Modal
              size="lg"
              isOpen={modalOpen}
              toggle={() => setModalOpen(!modalOpen)}
            >
              <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
                Add Patient
              </ModalHeader>
              <div>
                <form onSubmit={AddPatient}>
                  <div className="Frow">
                    <div className="Fname">
                      <TextField
                        type="text"
                        value={fname}
                        onChange={(e) => setfname(e.target.value)}
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                      />
                    </div>
                    <div className="Fname">
                      <TextField
                        type="text"
                        value={mname}
                        onChange={(e) => setmname(e.target.value)}
                        id="outlined-basic"
                        label="Middle Name"
                        variant="outlined"
                      />{" "}
                    </div>
                    <div className="Fname">
                      {" "}
                      <TextField
                        type="text"
                        value={lname}
                        onChange={(e) => setlname(e.target.value)}
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="Srow">
                    <div className="Fname">
                      <TextField
                        type="tel"
                        value={mobile}
                        onChange={(e) => semobile(e.target.value)}
                        id="outlined-basic"
                        label="Contact No"
                        variant="outlined"
                      />{" "}
                    </div>
                    <div className="Fname">
                      <TextField
                        className="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />{" "}
                    </div>
                  </div>
                  <div className="Trow">
                    <div className="Fname">
                      <TextField
                        type="text"
                        value={bloodgroup}
                        onChange={(e) => setbloodgroup(e.target.value)}
                        id="outlined-basic"
                        label="Blood Group"
                        variant="outlined"
                      />
                    </div>
                    <div className="Fname">
                      <TextField
                        type="number"
                        value={height}
                        onChange={(e) => setheight(e.target.value)}
                        id="outlined-basic"
                        label="Height"
                        variant="outlined"
                      />
                    </div>
                    <div className="Fname">
                      <TextField
                        type="number"
                        value={weight}
                        onChange={(e) => seweight(e.target.value)}
                        id="outlined-basic"
                        label="Weight"
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="Frow">
                    <div className="Fname">
                      <TextField
                        type="number"
                        value={age}
                        onChange={(e) => setage(e.target.value)}
                        id="outlined-basic"
                        label="Age"
                        variant="outlined"
                      />
                    </div>
                    <div className="Fname">
                      <TextField
                        className="Email"
                        type="text"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                        id="outlined-basic"
                        label="Address"
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="Firow">
                    <div className="Fname">
                      <div>Select Gender :</div>
                      <input
                        type="radio"
                        id="Gender"
                        name="Gender"
                        value={"Male"}
                        onChange={(e) => setgender(e.target.value)}
                      />
                      <label for="Gender">Male</label>
                      <br></br>
                      <input
                        type="radio"
                        id="Gender"
                        name="Gender"
                        value={"Female"}
                        onChange={(e) => setgender(e.target.value)}
                      />
                      <label for="Gender">Female</label>
                      <br></br>
                    </div>
                    <div className="Mname">
                      <div>Maratiral Status :</div>
                      <input
                        type="radio"
                        name="Maratrial"
                        value={"Married"}
                        onChange={(e) => setmarriedstatus(e.target.value)}
                      />
                      <label for="Gender">Unmarried</label>
                      <br></br>
                      <input
                        type="radio"
                        name="Maratrial"
                        value={"UnMarried"}
                        onChange={(e) => setmarriedstatus(e.target.value)}
                      />
                      <label for="Gender">Married</label>
                      <br></br>
                    </div>
                  </div>
                  <div className="SubmitBtn">
                    <button type="submit" className="Sbtn">
                      Submit details
                    </button>
                  </div>
                </form>
              </div>
            </Modal>
            <button
              className="btn mt-3"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              {" "}
              Add Patient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
