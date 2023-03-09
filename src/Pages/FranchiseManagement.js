import { useEffect,useState } from "react"
import axios from "axios"
import SideBar from "../Components/SideBar"
import NavBar from "../Components/NavBar"
export default function FranchiseManagement()
{
  const  [user , setUser ]=useState({})
    useEffect(()=>{
        const token = {
            token:localStorage.franchise_responsible_token
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
    console.log(localStorage)
    return (
        <div>
              <NavBar id={user._id} main='franchise owner' ></NavBar>
              <SideBar username={user.username} link='Register_rr' role1=' Restaurant Manager'></SideBar>  
        </div>
    )
}