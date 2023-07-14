import React, { useState } from 'react'
import '../Pages/Dashboard.css'
import { Dashboard } from '../Dashboard/Dashboard'
import '../Pages/Patient.css'
import {Modal, ModalHeader} from 'reactstrap'

function Patient() {
  const [modal ,setmodal] = useState(false)
  return (
    <div>
      <div className='navbar'></div>
      <div className='body'>
          <div className='sidebar'>
            <div className='sidebardata'>
            {Dashboard.map((val,key)=>{
              return(
                <div
                  key={key}
                  className='row'
                  id={window.location.pathname === val.link ?   'active' : ""}
                  onClick={()=>{window.location.pathname=val.link}}>
                    <div><i class={val.icon} id='icon'></i></div> {val.title}
                </div>
              );
            })}
            </div>
          </div>
          
        <div className='data'>
        <div className="navbarforpage">
        <i class="fa-solid fa-hospital-user" id='navbaricon'></i>
            <div className="dash" id='patientbig'>Patient</div>
            <div  id='patientsmall'>Patients details</div>
          </div>

          <button className='addpatient' onClick={ () => {setmodal(true)}}>Add Patient</button>
            <Modal
              className='add'
              isOpen = {modal}
              toggle={() => setmodal(!modal)}
            >
              <ModalHeader
               toggle={() => setmodal(!modal)}
              >Register Patient's Detail</ModalHeader>
            </Modal>
        
        </div>
      </div>
    </div>
  )
}

export default Patient