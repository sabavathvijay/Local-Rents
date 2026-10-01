import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import { useContext } from 'react'
import { MyContextAPI } from '../../Components/Configs/ContextAPI/MyContextAPI'
import { toast } from 'react-toastify'
import { supabase } from '../../Components/Configs/Supabase/Supabase'

const Register = () => {
let nav= useNavigate();

 const { status, setStatus } = useContext(MyContextAPI);

    let [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirm:"",
        role: ""
    })


    let handleChange = (event) => {

        let { name, value } = event.target;

        // console.log(name)



        setUser((pre) => ({
            ...pre,
            [name]: value
        }))


    }

    const handleUser =async () => {

        if(user.confirm===user.password){

            localStorage.setItem("registeredUser", JSON.stringify(user));


            //Supabase

            const {data}=await supabase.from("users").select('*');
            

            console.log("All Data :",data)

            let records=data.filter((record)=>record.email===user.email)

              console.log("All Data  Records:",records)

              if(records.length>0){

                 toast.warning("Registered Failed!, User already Exists")
                 setStatus("login")
                  nav('/login')
                 
                }else{
                     await supabase.from("users").insert({
                      name:user.name,email:user.email,password:user.password,role:user.role
                    })
                    
                    console.log("==>USer ==>",user)

                    toast.success("Registered successfully..!")
                     setStatus("login")
                    nav('/login')
                   
                }
            
        }else{
            toast.warning("Passwords  Mismatched..!")
        }
        setUser({
            name: "",
            email: "",
            password: "",
            confirm:"",
            role: ""
        })

console.log(" From Register page : ",user)

    }

    

    return (
        <div id='registerFit'>

            <fieldset>

                <legend>Register</legend>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleUser();
                }}>

                    {/* NAME */}
                    <div className="name"><input
                        onChange={(event) => {

                            handleChange(event);
                        }}
                        type="text" placeholder='Enter your Name' name='name' value={user.name} required /></div>

                    {/* EMAIL */}
                    <div className="email"><input
                        onChange={(event) => {

                            handleChange(event);
                        }}
                        type="email" placeholder='Enter your email' name='email' value={user.email} required /></div>

                    {/* PASSWORD */}
                    <div className="password"><input
                        onChange={(event) => {

                            handleChange(event);
                        }}
                        type="password" placeholder='Enter your password' name='password' value={user.password} required /></div>

                    {/* CONFIRM */}
                    <div className="confirm"><input
                        onChange={(event) => {

                            handleChange(event);
                        }}
                        type="password" placeholder='Confirm your password' name='confirm' value={user.confirm} required /></div>

                    {/* ROLE */}
                    <div className="submit">
                        <div className="role">
                            <select name="role"  
                        
                               onChange={(event) => {

  
                            handleChange(event);
                        }}  required
                        >
                                <option value=""  selected >Role</option>
                                <option value="User"  >User</option>
                                <option value="Owner">Owner</option>
                                <option value="Admin">Admin</option>
                            </select>

                        </div>
                        <button>register</button>
                    </div>


                </form>
            </fieldset>

        </div>
    )
}

export default Register