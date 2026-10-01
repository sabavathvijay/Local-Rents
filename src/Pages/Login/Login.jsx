import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContextAPI } from '../../Components/Configs/ContextAPI/MyContextAPI'
import { useContext } from 'react'
import { supabase } from '../../Components/Configs/Supabase/Supabase'
import { toast } from 'react-toastify'
import './Login.css'


const Login = () => {

    let nav = useNavigate();


    //=====> 1


    const { user, setUser } = useContext(MyContextAPI)
    const [users,setUsers]=useState({
        email: "",
        password: "",
        role: ""
    })
    const [fetchedUser, setFetchedUser] = useState({
        email: "",
        password: "",
        role: ""
    })

    const { status, setStatus } = useContext(MyContextAPI);


    //======> 2
    let handleChange = (event) => {

        let { name, value } = event.target;

        console.log(value)



        setUsers((pre) => ({
            ...pre,
            [name]: value
        }))
        //User
        setUser(users)
        
        
        
    }
    setUser(users)
    console.log("=====>>>>Users : ",users)


    //======> 3

    useEffect(() => {

        const isUserExist = async () => {

            if (!user.email) return;

            const { data } = await supabase.from("users").select("*").eq("email", user.email).single();

            setFetchedUser(data)
            console.log("===> From Login , FetchedUser :", fetchedUser)

        }

     



        isUserExist();
    }, [users])







    //======> 4

    

    const validateUser = async () => {

        if(fetchedUser!==null){
        if (fetchedUser.email === users.email && fetchedUser.password === users.password && fetchedUser.role === users.role) {

            localStorage.getItem("users", fetchedUser);
            console.log("===> From login fetchedUser into LocalStorage :", fetchedUser)

            setStatus("logedIn")
            // localStorage.getItem("loginedUser", user)
            // localStorage.getItem("users", user)
            switch (user.role) {
                case "User":
                    toast.success("Welcome to USER Dashboard")
                    nav('/User-dashboard')
                    break;
                case "Owner":
                     toast.success("Welcome to OWNER Dashboard")
                    nav('/Owner-dashboard')
                    break;
                case "Admin":
                  toast.success("Welcome to ADMIN Dashboard")
                    nav('/Admin-dashboard')
                    break;

               default :
                    toast.warning("Invalid User");

                    break;
            }

          
            localStorage.setItem("users",JSON.stringify(fetchedUser))
            setUsers({
                email: "",
                password: "",
                role: ""
            })


        }}
        else{
              toast.warning("Invalid User");
              nav("/register")
               setUsers({
                email: "",
                password: "",
                role:""
            })

            


           
        }




    }


     


    return (
        <div id='loginFit'>

            <fieldset>

                <legend>Login</legend>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    validateUser();
                }}>

                    {/* Email */}
                    <div className="email"><input
                        onChange={(event) => {

                            handleChange(event);
                        }}
                        type="email" placeholder='Enter your email' name='email' value={users.email} required /></div>

                    {/* Password */}
                    <div className="password" ><input
                        onChange={(event) => {

                            handleChange(event);
                        }}
                        type="password" placeholder='Enter your password' name='password' value={users.password} required /></div>

                    {/* Role */}
                    <div className="submit">
                        <div className="role">
                            <select name="role"
                                required
                                onChange={(event) => {


                                    handleChange(event);
                                }}
                            >
                                <option value=""  selected>Role</option>
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