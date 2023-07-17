import React, { useState } from 'react'
import '../Modal/Modal.css'
import { Modal,ModalHeader } from 'reactstrap';
function Modal() {
const [modal,setmodal] = useState(false)
    return (
            <div>
                <Modal 
                    size='lg'
                    isOpen={modal}
                    toggle = {()=>setmodal(!modal)}
                >
                <ModalHeader
                toggle={()=>setmodal(!modal)}
                > popup</ModalHeader>

                </Modal>
                <button onClick={()=>setmodal(true)}>PopUp</button>
            </div>
      );
}

export default Modal