import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../Configs/Supabase/Supabase'

import { useContext } from 'react'
import { MyContextAPI } from '../Configs/ContextAPI/MyContextAPI'




const Navbar = () => {

    let nav =useNavigate();


    const { status, setStatus } = useContext(MyContextAPI);
    const {user, setUser} = useContext(MyContextAPI);
    
    const users =JSON.parse(localStorage.getItem("users"))

    // const updateStatus = () => {
    //     setStatus("logedIn")
  
    // }
      localStorage.setItem("status", JSON.stringify(status))
    console.log(status)
    // console.log("===>>>>",user)

    return (
        <nav>


            <div className="logo">Local-Rents</div>


            <div className="pages">

                {/* //Role */}
                {/* //Logout */}
                {
                    status === "logedIn" &&  <>

                        <div className="user-role"><b>{users.role}:</b><span>{users.name}</span></div>
                        <div className="log-out">
                            <button
                                onClick={() => {
                                    nav('/home')
                                    localStorage.setItem("status",JSON.stringify(""))
                                    localStorage.getItem("loginedUser","")
                                    localStorage.getItem("users","")
                                    setStatus("home")
                                }}
                            >LogOut</button>
                        </div>
                    </>
                }




                {/* //Pages */}

                {
                    status === "home" && 
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

                    status === "logedIn" && 
                    <>
                        <div className="profile">
                            <span
                            onClick={()=>{
                            //    alert("click")
                                nav("./profile", {state:{user}})
                            }}
                            >👤</span>

                        </div>

                    </>

                }


            </div>

        </nav>
    )
}

export default Navbar