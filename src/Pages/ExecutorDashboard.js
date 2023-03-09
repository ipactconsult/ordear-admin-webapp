import { useEffect,useState } from "react"
import axios from "axios"
import SideBar from "../Components/SideBar"
import NavBar from "../Components/NavBar"
export default function Executor_dashboard()
{
  const  [user , setUser ]=useState({})
    useEffect(()=>{
        const token = {
            token:localStorage.executor_token
        }
        axios.post('/employees/auth_employee',token).then((res)=>{
            console.log(res)
            axios.get('/employees/view_profile/'+res.data[0].employee).then((res)=>{
                console.log(res)
                setUser(res.data[0])
            })
        })
      
    },[])  
    console.log(user)
    return (
        <div>
              <NavBar id={user._id} role1="Register_exec"></NavBar>
              <SideBar username={user.username}></SideBar>  
        </div>
    )
    }