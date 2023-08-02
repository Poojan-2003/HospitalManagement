import React, {  useState, useEffect } from "react";
import { Patientdata } from './Patientdata';
import "../Dashboard/AdminDashboard.css";
import "../DoctorDashboard/MainDoctorDashboard.css";
import { Modal, ModalHeader } from "reactstrap";
import { TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


function PatientAppointment() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name,setname] = useState()
  const [age,setage] = useState()
  const [gender,setgender] = useState()
  const [contact,setcontact] = useState()
  const [email,setemail] = useState()
  const [appreason,setappreason] = useState()
  const [date,setdate] = useState()
  const [time,settime] = useState()
  const [docname,setdocname] = useState()
  
  function SendAppointment(){}
  const doctorname = localStorage.getItem("Dname")
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
                <form onSubmit={SendAppointment}>
                  <div className="Frow">
                    <div className="Fname">
                      <TextField
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        required
                      />
                    </div>
                    <div className="Fname">
                      <TextField
                        type="number"
                        value={age}
                        onChange={(e) => setage(e.target.value)}
                        id="outlined-basic"
                        label="Age"
                        variant="outlined"
                        required
                      />{" "}
                    </div>
                  </div>
                  <div className="Srow">
                    <div className="Fname">
                    <TextField
                        type="number"
                        value={contact}
                        onChange={(e) => setcontact(e.target.value)}
                        id="outlined-basic"
                        label="Contact No."
                        variant="outlined"
                        required
                      />
                    </div>
                    <div className="Fname">
                    <TextField
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        required
                      />
                    </div>
                  </div>
                  <div className="Trow">
                  <div className="Fname">
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        >
                        <FormControlLabel
                          value={"Female"}
                          control={<Radio />}
                          label="Male"
                          onChange={(e)=>{setgender(e.target.value); console.log(gender)}}
                          />
                        <FormControlLabel
                          value={"Male"}
                          control={<Radio />}
                          label="Female"
                          onChange={(e)=>{setgender(e.target.value); console.log(gender)}}
                        />
                        
                        </RadioGroup>


                      </div>
                      <div className="Fname">
                      <TextField
                        type="email"
                        value={appreason}
                        onChange={(e) => setappreason(e.target.value)}
                        id="outlined-basic"
                        label="Reason For Appointment"
                        variant="outlined"
                        required
                      />


                      </div>

                  
                  </div>
                 <div className="Frow">
                    <div className="Fname">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          required
                          label="Appointment Date"
                          value={date}
                          onChange={(newValue) => setdate(newValue)}
                        />{" "}
                      </LocalizationProvider>
                    </div>


                    <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
        <TimePicker label="Pick Your Time For Appointment" />
      </DemoContainer>
      </LocalizationProvider>
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
              className="AddPBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              {" "}
              Book Appointment
            </button>



          </div>



        </div>
      </div>
    </div>
  )
}

export default PatientAppointment