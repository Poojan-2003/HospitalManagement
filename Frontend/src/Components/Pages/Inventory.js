import React, { useState } from 'react'
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
import dayjs from 'dayjs';


function Inventory() {

  const [name,setname] = useState()
  const [description,setdescription] = useState()
  const [category,setcategory] = useState()
  const [expirydate,setexpirydate] = useState()
  const [mfgdate,setmfgdate] = useState();
  const [quantity,setquantity] = useState()
  const [price,setprice] = useState()
  const [modalOpen, setModalOpen] = useState(false);

  function AddMedicine(){}

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
                        <DatePicker  required label="Expiry Date" value={expirydate} onChange={(newValue) => setmfgdate(newValue)} />
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
                        
                        <FormControl sx={{ m: 1, minWidth: 260 }}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                          required
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={category}
                          label="Category"
                          onChange={(e)=>setcategory(e.target.value)}
                        >
                          <MenuItem value={"Liquid"}>Liquid</MenuItem>
                          <MenuItem value={"Capsules"}>Capsules</MenuItem>
                          <MenuItem value={"Drops"}>Drops</MenuItem>
                          <MenuItem value={"Injections"}>Injections.</MenuItem>
                        </Select>
                        </FormControl> 

                  </div>
                  <div className="SubmitBtn">
                    <button type="submit" className="Sbtn">
                      Add Medicine
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
              Add Medicine 
            </button>
            </div>
          <div>
            
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory