import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import Register from '../../Pages/Register/Register'
import { useContext } from 'react'
import { MyContextAPI } from '../Configs/ContextAPI/MyContextAPI'
import { motion } from 'framer-motion'
import { Modal, Button, ModalBody } from 'react-bootstrap'
import LoginModal from '../Modals/LoginModal'

const Home = () => {


  const nav = useNavigate()
  const { status, setStatus } = useContext(MyContextAPI)

  return (
    <div
      id='home' >
      <div className="homeContainer">

        <motion.div className="info"

          whileHover={{
            backgroundColor: "rgba(221, 224, 237, 0.91)", padding: "20px", borderRadius: "30px", margin: "auto",color:"black"

          }}
        >

          <h1>Welcome to Rents & Services Platform</h1>

          <center>
            <p>Here you can find everything YOU want</p>
            <h3>"EVERY-THING"</h3>
          </center>

          <p>HERE you can also RENT your's ASSETs & WORK as a service services Person..</p>



          <center>
            <motion.div className="signup"
              onClick={() => {
                nav('./login')
                setStatus("login")

              }}

              whileHover={{
                backgroundColor: "rgba(223, 142, 20, 0.92)", color: "blue", borderRadius: "30px", scale: "1.2",

                width: "50%", padding: "10px", margin: "auto", border: "1px solid white", display: "flex", justifyContent: "center", alignItems: "center"
              }}
            >
              <span> Sign-Up</span>
            </motion.div>
          </center>


        </motion.div>








      </div>

      <LoginModal />



    </div>
  )
}

export default Home