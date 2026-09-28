import React from 'react'
import "./AdminDashboard.css"
import Goto from '../../CustomComp/Goto'
const AdminDashboard = () => {
   return (
    <div id='admin'>
        <div className="aside">
            <div className="links">
                <span>link1</span>
                <span>link1</span>
                <span>link2</span>
                <span>link3</span>
                <span>link4</span>
                <Goto name={"Custom"} route={"login"} />
            </div>

             <div className="out">
          <span
          ><button
            onClick={() => {
              // alert("go-out")
              setStatus("home")
              localStorage.setItem("users", null)
              nav('/home')
            }}
          >
              logOut
            </button></span>
        </div>
         
        </div>
        <div className="main">
            main
        </div>
        
    </div>
  )
}

export default AdminDashboard