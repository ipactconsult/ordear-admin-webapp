import axios from "axios"
import { useEffect, useState } from "react"
import CreditCard from "../Components/CreditCard"
import SideBar from "../Components/SideBarCustomer"

export default function PaymentMethods()
{
    const [user,setUser]=useState({})
    console.log(localStorage)
    useEffect(()=>{
        const token = {
            token:localStorage.token
        }
        axios.post('/customers/get_authentified_user',token).then((res)=>{
            console.log(res)
            axios.get('/customers/view_profile/'+res.data[0].user).then((res)=>{
                console.log(res) 
                setUser(res.data[0])
            })
        })
    },[])
    console.log(user)
    return (
        <div>
              <div className="NavBar">
                <SideBar></SideBar>
                 <p className="text">Welcome {user.username}</p>
              </div>
              <div class="container">        
                <CreditCard email={user.email} name={user.username}></CreditCard>
              </div>
        </div>
        
    )
}