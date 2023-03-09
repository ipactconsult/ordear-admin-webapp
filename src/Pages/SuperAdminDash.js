import { useEffect,useState } from "react"
import axios from "axios"
import SideBar from "../Components/SideBar"
import NavBar from "../Components/NavBar"
export default function SuperAdminDashBoard()
{
  const  [user , setUser ]=useState({})
    useEffect(()=>{
        const token = {
            token:localStorage.super_admin_token
        }

        axios.post('/employees/auth_employee',token).then((res)=>{
            console.log(res)
            axios.get('/employees/view_profile/'+res.data[0].employee).then((res)=>{
                console.log(res)
                setUser(res.data[0])
            })
        })
      
    },[])
    console.log(localStorage)  
    console.log(user)
    return (
        <div>
              <NavBar id={user._id} main="super admin"></NavBar>
              <SideBar username={user.username} role="add responsible_franchise" link='Register_fr' role_1="add responsible_restaurant" link_1='Register_rr'></SideBar>  
        </div>
    )
}