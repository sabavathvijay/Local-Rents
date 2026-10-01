import React from 'react'
import { useState } from 'react'
import './UserProfile.css'
import { useContext } from 'react'
import { MyContextAPI } from '../Configs/ContextAPI/MyContextAPI'
import { useNavigate } from 'react-router-dom'


const UserProfile = () => {
  const nav=useNavigate()

  const {user,setUser}=useContext(MyContextAPI)

    // console.log("====Profile====",name)
    const [profile,seprofile]=useState(JSON.parse(localStorage.getItem("users")))

    console.log(profile);
  return (
    <div id='profile'>
      <hr />
      <button onClick={()=>{
        nav(-1)
      }}>back</button>
      <hr />
      <h1> UserProfile:</h1>
        <h2>NAME:- 
            {
          profile.name

           }

        </h2>
        <h3>EMAIL:- {
profile.email
}</h3>
        <h3>ROLE:- {
profile.role
}</h3>
        <h3>PASSWORD:- {
profile.password
}</h3>
    </div>
  )
}

export default UserProfile