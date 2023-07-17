import React from 'react'
import { Dashboard } from "../Dashboard/Dashboard";

function Employee() {
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
        
      <div className='data'>hello</div>
    </div>
  </div>
  )
}

export default Employee