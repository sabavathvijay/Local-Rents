import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'


import { Suspense,lazy } from 'react';
import { MyContextAPI } from './Components/Configs/ContextAPI/MyContextAPI'


import { Route, Routes } from 'react-router-dom'

import './App.css'
import { ToastContainer } from 'react-toastify';
import { h2 } from 'framer-motion/client';
import Loading from './Components/Loader/Loading';


// Lazy Loading
const Home = lazy(() => import('./Components/Home/Home'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Register = lazy(() => import('./Pages/Register/Register'));
const UserDashboard = lazy(() => import('./Components/Dashboards/UserDashboard/UserDashboard'));
const AdminDashboard = lazy(() => import('./Components/Dashboards/AdminDashboard/AdminDashboard'));
const OwnerDashboard = lazy(() => import('./Components/Dashboards/OwnerDashboard/OwnerDashboard'));
const UserProfile = lazy(() => import('./Components/Profiles/UserProfile'));


const App = () => { 

  //states
  const [status, setStatus] = useState((localStorage.getItem("status")) || "home")
  const [user, setUser] = useState( (localStorage.getItem("users"))||{
  
          email: "",
          password: "",
          role: ""
      }
  
      )


      console.log("USER ===> ",user)


  localStorage.setItem("logedIn", "logedIn")
  return (
    <div className="">

      <MyContextAPI.Provider value={{ status, setStatus,user, setUser }} >
      
      <div className="app">

        <div className="nav">
           <Navbar />
        </div>
      

       <main id='main'>
         <Suspense fallback={   <Loading/>}>
          <Routes>
          

            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/User-dashboard' element={<UserDashboard />} />
            <Route path='/Owner-dashboard' element={<OwnerDashboard />} />
            <Route path='/Admin-dashboard' element={<AdminDashboard />} />
            <Route path='/Profile' element={<UserProfile />} />

          </Routes>
        </Suspense>
    
       </main>
      </div>


      </MyContextAPI.Provider>
      <ToastContainer/>
    </div>
  )
}

export default App