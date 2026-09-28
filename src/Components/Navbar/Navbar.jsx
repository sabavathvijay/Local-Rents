import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../Configs/Supabase/Supabase'

// Icons
import { CgLogOut } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { motion } from 'framer-motion';


import { useContext } from 'react'
import { MyContextAPI } from '../Configs/ContextAPI/MyContextAPI'
import Goto from '../CustomComp/Goto'




const Navbar = () => {

    let nav = useNavigate();


    const { status, setStatus } = useContext(MyContextAPI);
    const { user, setUser } = useContext(MyContextAPI);

    const users = JSON.parse(localStorage.getItem("users"))

    // const updateStatus = () => {
    //     setStatus("logedIn")

    // }
    localStorage.setItem("status", JSON.stringify(status))
    console.log(status)
    // console.log("===>>>>",user)

    return (
        <nav>


            <motion.div 
            
            whileHover={{
              translateX:2, scale:1.2,
              color:"white"
            }}
            
            className="logo"
            onClick={()=>{
                nav("/home")
            }}
            >
                Local-Rents</motion.div>


            <div className="pages">

                {/* //Role */}
                {/* //Logout */}
             



                {/* //Pages */}

                {
                    status === "home" && !users &&
                    <>
                        <div className="register">
                            <button
                                onClick={() => {
                                    setStatus("register")
                                    nav('/register')
                                }}
                            >Register</button>
                        </div>
                        <div className="login">
                            <button

                                onClick={() => {
                                    setStatus("login")
                                    nav('/login')
                                }}
                            >Login</button>
                        </div>
                    </>

                }
                {
                    status === "home" && users && 
                    <>
                       <div className="user-role"><b>{users.role}:</b><span>{users.name}</span></div>
                        <div className="log-out">
                                <span>
                                    <Goto  route={users.role+"-dashboard"} className="dash" />
                                </span>
                            <button
                                onClick={() => {
                                    setStatus("home")
                                    localStorage.setItem("users", null)
                                    setUser(null)
                                    localStorage.setItem("status", "home")
                                    localStorage.clear
                                    nav('/home')

                                }}
                            ><CgLogOut />
</button>
                        </div>
                    </>

                }

                {
                    status === "register" &&
                    <>

                        <div className="home">
                            <button
                                onClick={() => {

                                    setStatus("home")
                                    nav('/')

                                }}
                            >Home</button>
                        </div>
                        <div className="login">
                            <button
                                onClick={() => {
                                    setStatus("login")
                                    nav('/login')
                                }}
                            >Login</button>
                        </div>
                    </>

                }


                {
                    status === "login" &&
                    <>
                        <div className="home">
                            <button
                                onClick={() => {
                                    setStatus("home")
                                    nav('/')
                                }}
                            >Home</button>
                        </div>
                        <div className="register">
                            <button
                                onClick={() => {
                                    setStatus("register")
                                    nav('/register')
                                }}
                            >Register</button>
                        </div>

                    </>
                }



                {/* //Profile */}

               

            

                   {
                    status === "logedIn" && <>

                        <div className="user-role"><b>{users.role}:</b><span>{users.name}</span></div>
                       
                       {

                    status === "logedIn" &&
                    <>
                        <div className="profile">
                            <span
                                onClick={() => {
                                    //    alert("click")
                                    nav("./profile", { state: { user } })
                                }}
                            ><CgProfile /></span>

                        </div>

                    </>

                }
                        <div className="log-out">

                            <button
                                onClick={() => {
                                    setStatus("home")
                                    localStorage.setItem("users", null)
                                    setUser(null)
                                    localStorage.setItem("status", "home")
                                    localStorage.clear
                                    nav('/home')

                                }}
                            ><CgLogOut />
</button>
                        </div>
                    </>
                }



            </div>

        </nav>
    )
}

export default Navbar