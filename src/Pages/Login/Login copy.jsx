import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContextAPI } from '../../Components/Configs/ContextAPI/MyContextAPI'
import { useContext } from 'react'
// import { useState } from 'react'
import { supabase } from '../../Components/Configs/Supabase/Supabase'

import './Login.css'


const Login = () => {

    let nav = useNavigate();


    //=====> 1
    const [currentUser, setCurrentUSer] = useState("");

    let { user, setUser } = useContext(MyContextAPI)
    const { status, setStatus } = useContext(MyContextAPI);



    //=====> 2

    const validateUser = async (em) => {

        let { data } = await supabase.from("users").select("*").eq("email", em).single();
        setCurrentUSer(data);

        checkUser();



    }
    //=======> 3
    function checkUser() {
        console.log("==============>>>", user)

        if (currentUser.email === user.email && currentUser.password === user.password && currentUser.role === user.role) {

            if (currentUser.role === "Owner") {
                nav('/owner-dashboard')

                localStorage.setItem("status", JSON.stringify("logedIn"))
                setStatus("logedIn")

            }
            if (currentUser.role === "User") {
                nav('/user-dashboard')
                localStorage.setItem("status", JSON.stringify("logedIn"))
                setStatus("logedIn")

            }
            if (currentUser.role === "Admin") {
                nav('/admin-dashboard')

                localStorage.setItem("status", JSON.stringify("logedIn"))
                setStatus("logedIn")
            }



        }
        else {
            alert("Invalid User")
        }

        setUser({
            email: "",
            password: "",

            role: ""
        })

    }






    //======> 4

    let handleChange = (target) => {

        let { name, value } = target;

        // console.log(name)



        setUser((pre) => ({
            ...pre,
            [name]: value
        }))


    }


    //=======> 5
    let handleUser = () => {


        validateUser(user.email)

        console.log("Matched....")
        console.log("=====", user)
        // console.log("==========", loginUser)
        localStorage.setItem("users", JSON.stringify(currentUser))
        // setStatus(JSON.parse(localStorage.getItem("status")))




        // localStorage.setItem("status", JSON.stringify(currentUser))
        // localStorage.setItem("loginedUser", JSON.stringify(currentUser))


        console.log(user)
        // console.log("==========", loginUser)

    }

    // function setLocalStatus() {

    //         setStatus(JSON.parse(localStorage.getItem("")))
    //     }

    // console.log(user)
    // console.log("==========", loginUser)


    return (
        <div id='form'>

            <fieldset>

                <legend>Login</legend>
                <form onSubmit={(e) => {
                    handleUser();
                    e.preventDefault();
                }}>

                    {/* Email */}
                    <div className="email"><input
                        onChange={(event) => {

                            handleChange(event.target);
                        }}
                        type="email" placeholder='Enter your email' name='email' value={user.email} required /></div>

                    {/* Password */}
                    <div className="password"><input
                        onChange={(event) => {

                            handleChange(event.target);
                        }}
                        type="password" placeholder='Enter your password' name='password' value={user.password} required /></div>

                    {/* Role */}
                    <div className="submit">
                        <div className="role">
                            <select name="role"
                                required
                                onChange={(event) => {


                                    handleChange(event.target);
                                }}
                            >
                                <option value="" disabled selected>Role</option>
                                <option value="User" >User</option>
                                <option value="Owner">Owner</option>
                                <option value="Admin">Admin</option>
                            </select>

                        </div>
                        <button>login</button>
                    </div>


                </form>
            </fieldset>

        </div>
    )
}

export default Login