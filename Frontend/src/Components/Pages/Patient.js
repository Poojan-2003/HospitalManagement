import React, {  useState, useEffect } from "react";
import { Dashboard } from "../Dashboard/Dashboard";
import { Modal, ModalHeader } from "reactstrap";
import { TextField } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { NavLink ,useNavigate } from 'react-router-dom';
import "../Pages/Patient.css";
import "react-toastify/dist/ReactToastify.css";

function Patient() {
  const navigate = useNavigate();
  const AddPatient = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:1337/addPatient",{fname,mname,lname,mobile,email,age,gender,bloodgroup,marriedstatus,address,height,weight})
    .then(result =>{
      if(result.status === 205){
                setModalOpen(false)
                toast.error("Duplicate Email", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }else if(result.data.status === 'Success'){
              setModalOpen(false)
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
            }else{
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
            }
           
            
          }
       
          ).then(window.location.reload())
    .catch(err => console.log(err))
 
    }
  

  
  useEffect(()=> {
         
      //  const response =  
      //                    fetch('http://localhost:1337/AllPatient');
      //  const alldata =  response.json();
      //  setAllPatient(alldata.data.AllPatientData);
      async function asyncCall() {
     await axios.get('http://localhost:1337/AllPatient')
     
      .then(result => {setAllPatient(result.data.data.AllPatientData); console.log(result.data.data.AllPatientData)})
      .catch(err => console.log(err))
      }
      
    
   asyncCall()
  }, []);

  const deleteuser = (id) => {
    axios.delete('http://localhost:1337/DeletePatient/'+id)
    .then(res => {
      if(res.status === 204){
       
            toast.success("Patient Deleted successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
         
    
        }else if(res.status === 500){
                toast.error(res.data.error, {
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
    })
    .then(window.location.reload())
    .catch(err => {
            toast.error(err, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    })
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
                    <i className={val.icon} id="PIconForSidebar"></i>
                  </div>{" "}
                  {val.title}
                </div>
              );
            })}
          </div>
        </div>

        <div className="PMainData">
          <div className="PNavBarForMainData">
            <i className="fa-sharp fa-solid fa-hospital" id="PNavBarIcon"></i>
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
                  {AllPatient?.map((data, i) => (
                    <tr key={i}>
                      <td>{++i}</td>
                      <td>{data.fname}</td>
                      <td>{data.age}</td>
                      <td>{data.mobile}</td>
                      <td><div className="Active">Active</div></td>
                      <td className="Paction">
                        <div><NavLink to={`UpdatePatient/${data._id}`} ><i class="fa-solid fa-pen"></i></NavLink></div>
                        <div className="PDelete"><i class="fa-solid fa-trash" id="deleteicon" onClick={(e) => deleteuser(data._id)}></i></div>
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
