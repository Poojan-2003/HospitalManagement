import React, {  useState, useEffect } from "react";
import { Dashboard } from "../Dashboard/Dashboard";
import { Modal, ModalHeader } from "reactstrap";
import { TextField } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { NavLink } from 'react-router-dom';
import "../Pages/Patient.css";
import "react-toastify/dist/ReactToastify.css";

function Patient() {
  //Adding Patient's detail to mongodb 
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
        birthdate
      }),
    });
    const data = await response.json();
    // if (data.error !== undefined) alert(data.error); setModalOpen(true);
    if (data.error !== undefined) {
      setModalOpen(true);
      
      toast.error('${data.error}', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    if (data.status === "ok") {
      toast.success("Patient Added successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      alert("Patiend Added Successfully");
      window.location.href = "/Patient";
    }
  }

  //Fetching Data
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1337/AllPatient")
  //     .then((res) => setAllPatient(res.data))
  //     .catch((err) => console.log(err));
  // }, []);


 //Deleting Patient
  const deleteuser = async (id) => {
    axios.delete('http://localhost:1337/DeletePatient/'+id)
    .then(res => {console.log(res)
     window.location.reload()
     })
    .catch(err => console.log(err))

}
  

  const [modalOpen, setModalOpen] = useState(false);
  const [fname, setfname] = useState("");
  const [mname, setmname] = useState("");
  const [lname, setlname] = useState("");
  const [mobile, setmobile] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [marriedstatus, setmarriedstatus] = useState("");
  const [address, setaddress] = useState("");
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [AllPatient, setAllPatient] = useState([]);

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
            
            <div className="DisplayP">
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
                        required
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
                        required
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
                        required
                      />
                    </div>
                  </div>
                  <div className="Srow">
                    <div className="Fname">
                      <TextField
                        type="tel"
                        required
                        value={mobile}
                        onChange={(e) => {
                          const value = e.target.value;
                          const regex = /^[0-9]+$/;
                          if (regex.test(value)) {
                            setmobile(value);
                          } else {
                            setmobile('');
                          }
                        }}
                        id="outlined-basic"
                        label="Contact No"
                        variant="outlined"
                        inputProps={{
                          maxLength: 10,
                          inputMode: "numeric",
                        }}
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
                        required
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
                        required
                      />
                    </div>
                    <div className="Fname">
                      <TextField
                        required
                        // type="number"
                        // value={height}
                        // onChange={(e) => setheight(e.target.value)}
                        // id="outlined-basic"
                        // label="Height"
                        // variant="outlined"
                        type="number"
                        value={weight}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          if (!isNaN(value) && value > 0) {
                            setweight(value);
                          }else if(value === '-'){
                            setweight('')
                          } 
                          else { 
                            setweight('');
                          }
                        }}
                        id="outlined-basic"
                        label="Weight"
                        variant="outlined"
                      />
                    </div>
                    <div className="Fname">
                      <TextField
                        type="number"
                        value={height}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          if (!isNaN(value) && value > 0) {
                            setheight(value);
                          } else {
                            setheight('');
                          }
                        }}
                        id="outlined-basic"
                        label="height"
                        variant="outlined"
                        required
                      />
                    </div>
                  </div>
                  <div className="Frow">
                    <div className="Fname">
                      <TextField
                        type="number"
                        value={age}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          if (!isNaN(value) && value > 0) {
                            setage(value);
                          } else {
                            setage('');
                          }
                        }}
                        id="outlined-basic"
                        label="Age"
                        variant="outlined"
                        required
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
                        required
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="Firow">
                    <div className="Fname">
                        <div className="PBdate">Birthdate : </div>
                        <br></br>
                        <input  required className="Bdate" type="date" value={birthdate} onChange={(e)  => {setbirthdate(e.target.value); console.log(e.target.value)}}></input>
                    </div>
                    <div className="Fname">
                      <div>Select Gender :</div>
                      <input
                        type="radio"
                        id="Gender"
                        name="Gender"
                        value={"Male"}
                        onChange={(e) => setgender(e.target.value)}
                        required
                      />
                      <label for="Gender">Male</label>
                      <br></br>
                      <input
                        type="radio"
                        id="Gender"
                        name="Gender"
                        value={"Female"}
                        onChange={(e) => setgender(e.target.value)}
                        required
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
                        required
                      />
                      <label for="Gender">Unmarried</label>
                      <br></br>
                      <input
                        type="radio"
                        name="Maratrial"
                        value={"UnMarried"}
                        onChange={(e) => setmarriedstatus(e.target.value)}
                        required
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
              className="AddPBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              {" "}
              Add Patient
            </button>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
               <table className="Ptable">
                <thead className="Thead">
                  <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {AllPatient.map((data, i) => (
                    <tr key={i}>
                      <td>{++i}</td>
                      <td>{data.fname}</td>
                      <td>{data.age}</td>
                      <td>{data.mobile}</td>
                      <td>Status</td>
                      <td className="Paction">
                        <div><NavLink to={`UpdatePatient/${data._id}`} ><i class="fa-solid fa-pen"></i></NavLink></div>
                        <div className="PDelete"><i class="fa-solid fa-trash" id="deleteicon" onClick={() => deleteuser(data._id)}></i></div>
                        </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table> 
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
