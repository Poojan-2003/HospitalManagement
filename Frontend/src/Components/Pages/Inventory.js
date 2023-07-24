import React, { useState,useEffect } from 'react'
import { Dashboard } from "../Dashboard/Dashboard";
import "../Dashboard/AdminDashboard.css";
import "../Pages/Patient.css";
import "../Pages/Inventory.css"
import { Modal, ModalHeader } from "reactstrap";
import { TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import {NavLink} from "react-router-dom"

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Inventory() {

  const [name,setname] = useState()
  const [description,setdescription] = useState()
  const [category,setcategory] = useState()
  const [expirydate,setexpirydate] = useState()
  const [mfgdate,setmfgdate] = useState();
  const [quantity,setquantity] = useState()
  const [price,setprice] = useState()
  const [modalOpen, setModalOpen] = useState(false);
  // const [postImage, setPostImage] = useState( { myFile : ""})
  const [AllMedicine, setAllMedicine] = useState([]);
  const [detailshow , setdetailshow] = useState([])


  const AddMedicine = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:1337/AddMedicineData",{price,quantity,mfgdate,expirydate,category,description,name})
    .then(window.location.reload())
    .then(alert("Medicine Added Successfully"))
 
    }

  //   const handleFileUpload = async (e) => {
  //     const file = e.target.files[0];
  //     const base64 = await convertToBase64(file);
  //     console.log(base64)
  //     setPostImage({ ...postImage, myFile : base64 })
  //   }

  // function convertToBase64(file){
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result)
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error)
  //     }
  //   })
  // }

  //Fetching Medicine
  useEffect(()=> {
  async function asyncCall() {
   await axios.get('http://localhost:1337/AllMedicine')
   
    .then(result => {setAllMedicine(result.data.data.AllMedicine); })
    .catch(err => console.log(err))
    } 
 asyncCall()
}, []);
const DeleteMedicine = (id) => {
  axios.delete('http://localhost:1337/DeleteMedicine/'+id)
  .then(window.location.reload())
  .then(alert("Medicine Deleted Successfully"))
}

const toggleShown = username => {
  const shownstate = detailshow.slice();
  const index = shownstate.indexOf(username)

  if(index >= 0){
    shownstate.splice(index,1)
    setdetailshow(shownstate);
  }else{
    shownstate.push(username)
    setdetailshow(shownstate)
  }
}

  return (
    <div>
      <div className='PMainNavbar'></div>
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
        <div className="PMainData">
          <div className="PNavBarForMainData">
            <i className="fa-solid fa-cart-flatbed" id="PNavBarIcon"></i>
            
            <div className="INavDashboard">Inventory</div>
            <div className="INavDashfeature">Inventory Features</div>
          </div>

            <div className=" DisplayP">
            <Modal
              size="lg"
              isOpen={modalOpen}
              toggle={() => setModalOpen(!modalOpen)}
            >
              <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
                Add Medicine
              </ModalHeader>
              <div>
                <form onSubmit={AddMedicine}>
                  <div className="Frow">
                    <div className="Fname">
                      <TextField
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        className='IDesc'
                        required
                      />
                    </div>
                    <div className="Fname">
                      <TextField
                        type="text" 
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        className='IDesc'
                        required
                      />{" "}
                    </div>
                    
                  </div>
                  <div className="Srow">
                    <div className="IFname">
                      <div className='IMfgdate'>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker required label="Manufacture Date"  value={mfgdate}
                              onChange={(newValue) => setmfgdate(newValue)}
           />
                       </LocalizationProvider>
                       </div>
                      <div className='IExpdate'>
                       <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker  required label="Expiry Date" value={expirydate} onChange={(newValue) => setexpirydate(newValue)} />
                       </LocalizationProvider>
                       </div>
                      
                    </div>
                    
                  </div>
                  <div className="ITrow">
                    <div className='IFname'>
                    <div>
                    <TextField
                        type="Number" 
                        value={quantity}
                        onChange={(e) => setquantity(e.target.value)}
                        id="outlined-basic"
                        label="Quantity"
                        variant="outlined"
                        className='IDesc'
                        required
                      />
                    </div>
                    <div className='IExpdate'>
                    <TextField
                        type="Number" 
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        className='IDesc'
                        required
                      />
                    </div>
                    </div>
                  </div>
                  <div className='IFrow'>
                        <div>
                        <FormControl sx={{ m: 1, minWidth: 260 }}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                          defaultValue = "" 
                          required
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={category}
                          label="Category"
                          onChange={(e)=>setcategory(e.target.value)}
                        >
                          <MenuItem value={"Liquid"}>Syrup</MenuItem>
                          <MenuItem value={"Capsules"}>Capsules</MenuItem>
                          <MenuItem value={"Drops"}>Drops</MenuItem>
                          <MenuItem value={"Injections"}>Injections</MenuItem>
                        </Select>
                        </FormControl> 
                        </div>
                      {/* <div className='Iimg'>
                      <input type="file" id="file" style={{display: "none"}} accept='.jpeg, .png, .jpg'
                       onChange={(e) => handleFileUpload(e)}/>
                      <label htmlFor="file" >
                      Upload Image<i class="fa-solid fa-cloud-arrow-up" id='img' ></i>
                      </label>
                      </div> */}
                  </div>

                  <div className="ISubmitBtn">
                    <button type="submit" className="Sbtn">
                      Add Medicine
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
              Add Medicine 
            </button>
            <table className="Ptable">
                <thead className="Thead">
                  <tr>
                    <th></th>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {AllMedicine?.map((data, i) => (
                    <React.Fragment key={data._id}>
                    <tr key={i}>
                      <td><i id="Iicon" class="fa-solid fa-greater-than fa-2xl" onClick={()=>toggleShown(data.name)}></i></td>
                      <td>{++i}</td>
                      <td>{data.name}</td>
                      <td>{data.description}</td>
                      <td>{data.category}</td>
                      <td>{data.quantity}</td>
                      <td>{data.price}</td>
                      <td className="Paction">
                        <div><NavLink to={`UpdatePatient/${data._id}`} ><i class="fa-solid fa-pen"></i></NavLink></div>
                        <div className="PDelete"><i class="fa-solid fa-trash" id="deleteicon" onClick={(e) => DeleteMedicine(data._id)}></i><ToastContainer
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
                          </div>
                        </td>
                      </tr>
                      {detailshow.includes(data.name) && (
                          <tr className='Additional-info'>
                          <td>Name : {data.name}</td>
                          <td>Description : {data.description}</td>
                          <td>Category : {data.category}</td>
                          <td>Manufacture Date : {data.mfgdate}</td>
                          <td>Expiry Date : {data.expirydate}</td>
                          <td>Quantity: {data.quantity}</td>
                          <td>Price : {data.price}</td>
                        </tr>
                      )}
                      
                      </React.Fragment>
                    
                  ))}
                </tbody>
              </table> 
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default Inventory