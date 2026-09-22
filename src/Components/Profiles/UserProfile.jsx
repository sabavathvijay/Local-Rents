import React from 'react'
import './UserProfile.css'
import { useContext } from 'react'
import { MyContextAPI } from '../Configs/ContextAPI/MyContextAPI'
import { useNavigate } from 'react-router-dom'


const UserProfile = (profile) => {
  const nav=useNavigate()

  const {user,setUser}=useContext(MyContextAPI)

    console.log("====Profile====",profile)

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
        user.name
        }
        </h2>
        <h3>EMAIL:- {
user.email
}</h3>
        <h3>ROLE:- {
user.role
}</h3>
        <h3>PASSWORD:- {
user.password
}</h3>
    </div>
  )
}

export default UserProfile