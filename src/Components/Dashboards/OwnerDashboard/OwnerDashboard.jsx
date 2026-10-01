import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

// Icons
import { CgProfile } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { RiMenuFold4Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";




import './OwnerDashboard.css'
import About from './SidePages/About'
import Contact from './SidePages/Contact'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MyContextAPI } from '../../Configs/ContextAPI/MyContextAPI'

import Rents from './SidePages/Rents'
import Goto from '../../CustomComp/Goto'

const OwnerDashboard = () => {
  const [click, setClick] = useState("")
  const [open, setOpen] = useState(false)
  const { status, setStatus } = useContext(MyContextAPI);
  const { user, setUser } = useContext(MyContextAPI);

  const nav = useNavigate()


  function goTO() {

    switch (click) {
      case "rents":
        return (
          <div className="main-container">

            <Rents />


          </div>
        )

        break;
      case "about":
        return (
          <div className="main-container">

            <About />




          </div>
        )

        break;
      case "contact":
        return (
          <div className="main-container">

            <Contact />


          </div>
        )

        break;
      default:
        return (
          <div className="main-container">

            <div className="about">
              <h2>Welcome to User Dashboard</h2>
            </div>


          </div>
        )

        break;


    }
  }


  return (
    <div id='user'>

 <div id='open'

          onClick={() => {
            setOpen(!open)
           
          }}
        >
     <span>
        {open?(<MdCancel />
      ):(<RiMenuFold4Fill />)}
     </span>
        </div>

      <div className={open?"aside ":"open"}>

        <div className="subAside">

          <div className="links">
            <span
              onClick={() => {
                setClick("Top")
                nav("/profile")
              }}
            >
              <CgProfile />
            </span>
            <span
              onClick={() => {
                setClick("rents")
              }}
            >
              Rents
            </span>
            <span
              onClick={() => {
                setClick("about")
              }}
            >
              About
            </span>
            <span
              onClick={() => {
                setClick("contact")

              }}
            >
              Contact


            </span>
            <Goto name={"Home"} route={"home"} />
          </div>



          {/* Log-Out */}
          <div className="out">
            <span
            ><button
              onClick={() => {
                // alert("go-out")
                setStatus("home")
                localStorage.setItem("users", null)
                localStorage.setItem("status", "home")
                localStorage.clear
                setUser(null)
                nav('/home')
              }}
            >
                <CgLogOut />

              </button></span>
          </div>

        </div>
       
      </div>
      <div className="main">

        {

          goTO()

        }



      </div>

    </div>
  )
}

export default OwnerDashboard