import React,{useState,useEffect} from 'react'
import { TextField } from "@mui/material";
import { useParams } from 'react-router-dom';
import axios from 'axios';
function UpdatePatient() {
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

  const id = useParams()
  useEffect(()=> {
         
    //  const response =  
    //                    fetch('http://localhost:1337/AllPatient');
    //  const alldata =  response.json();
    //  setAllPatient(alldata.data.AllPatientData);
    async function asyncCall() {
      console.log(id)
   await axios.get("http://localhost:1337/AllPatientData/"+id)
   
    .then(result => {setAllPatient(result.data.data.AllPatientData); console.log(result.data.data.AllPatientData)})
    .catch(err => console.log(err))
    }
    
  
 asyncCall()
}, []);


  
  // componentDidMount = () => {
  // this.getEmployeeById();
  // }
  
  // // To get employee based on ID
  // getEmployeeById() {
  // axios.get('http://localhost:4000/employees/editEmployee/' + this.props.match.params.id)
  // .then((response) => {
  // this.setState({
  // fname: response.data.fname,
  // lname: response.data.lname,
  // email: response.data.email,
  // mobile: response.data.mobile
  // });
  // })
  // .catch((error) => {
  // console.log(error);
  // })
  




















































  return (
    <div>
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
    </div>
  )
}

export default UpdatePatient