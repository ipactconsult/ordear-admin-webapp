import axios from "axios";
import MuiPhoneNumber from "material-ui-phone-number";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";

export default function  EditProfile()
{
    const [searchParams, setSearchParams] = useSearchParams();
    const  [user , setUser ]=useState({})
    const [value, setValue] = useState()
   const [address,setAddress]=useState("")
   const [phone,setPhone]=useState("")
   const [password,setPassword]=useState("")
    useEffect(()=>{
        axios.get('/employees/view_profile/'+searchParams.get('q')).then((res)=>{
            // console.log(res)
             setUser(res.data[0])
         })
    },[user])
    const handleChange = event => {
        // event.preventDefault()
         console.log(event)
         // phone=event
          setValue(event)
          setPhone(event)
       }
       const handleChange5 = event => {
        // event.preventDefault()
         console.log(event.target.value)
          
          
          setPassword(event.target.value)
       }
       const handleChange4= event => {
      
         console.log(event.target.value)
      
          setAddress(event.target.value)
       }
       const EditProfile = e  =>{
        e.preventDefault()
            let  request_body={
                  phone:phone,
                  address:address,
                  password:password
            }
            console.log(request_body)
            axios.put("employees/edit_profile/"+user._id,request_body).then((res)=>{console.log(res)})
       }
    return (
        <div>
            <div>
              <NavBar id={user._id}></NavBar>
          
              <SideBar username={user.username}></SideBar>  
              <div class="container-fluid  px-6">
              <div class="container-fluid py-7 px-12">
                
              <div class="row mt-2">
        <div class="col-lg-8 mb-lg-6 mb-4">
          <div class="card">
            <div class="card-body p-4">
              <div class="row">
                <div class="col-lg-14">
                  <div class="d-flex flex-column h-100">
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder="address" aria-label="address" aria-describedby="address-addon" onChange={handleChange4}/>
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control" placeholder="password" aria-label="Password" aria-describedby="address-addon" onChange={handleChange5}/>
                  </div>
                  <MuiPhoneNumber defaultCountry={'us'} onChange={handleChange}/>
                  <div class="form-check form-check-info text-left">
                    <input class="form-check-input" type="checkbox" value={value}  id="flexCheckDefault" checked/>

                    <label class="form-check-label" for="flexCheckDefault">
                      I agree the <a  class="text-dark font-weight-bolder">Terms and Conditions</a>
                    </label>
                  </div>
                  
                   <button className="btn btn-secondary" onClick={EditProfile}>Edit Profile</button> 
                  </div>
                </div>
                <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                  <div class=" border-radius-lg h-80">
                    <img src={user.image} class="position-absolute h-50 w-50 top-0 d-lg-block d-none" alt="waves"/>
      
                  </div>

                </div>
            
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div></div>
        </div>
    )
}