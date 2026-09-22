import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './UserDashboard.css'
import About from './SidePages/About'
import Contact from './SidePages/Contact'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MyContextAPI } from '../../Configs/ContextAPI/MyContextAPI'

import Rents from './SidePages/Rents'

const UserDashboard = () => {
  const [click, setClick] = useState("")
  const { status, setStatus } = useContext(MyContextAPI);

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

            <h2>Welcome to User Dashboard</h2>


          </div>
        )

        break;


    }
  }


  return (
    <div id='user'>
      <div className="aside">

        <div className="links">
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
              alert("hh")
            }}
          >
            Contact
          </span>
        </div>
        <div className="out">
          <span
          ><button

          

          >
              logOut
            </button></span>
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

export default UserDashboard