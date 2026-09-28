import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { MyContextAPI } from '../Configs/ContextAPI/MyContextAPI';
import { useState } from 'react';
import "./Goto.css"

// Icons
import { CgProfile } from "react-icons/cg";

const Goto = ({ name, route, bg }) => {

    const { status, setStatus } = useContext(MyContextAPI);



    const nav = useNavigate();


    return (
        <div id='goto'>

            {/* <span style={{
                backgroundColor: bg, color: "white"
            }}
                onClick={() => {
                    nav("/" + route);
                    setStatus(route)

                    localStorage.setItem("status", JSON.stringify(route))
                }}
            >
                {name}
            </span> */}



            <span
                onClick={() => {
                    setStatus(route)
                    nav("/" + route);

                    localStorage.setItem("status")
                    // localStorage.setItem("status", JSON.stringify("logedIn"))
                }}
            >
               {
                name?(name):<CgProfile/>
               }
            </span>

        </div>
    )
}

export default Goto