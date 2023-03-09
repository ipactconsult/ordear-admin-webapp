import axios from "axios"
import { ReactComponent as FBLogo} from "../logo1.svg"
import { ReactComponent as GmailLogo } from "../logo2.svg"
import { useState,useEffect } from "react"

import MuiPhoneNumber from 'material-ui-phone-number';
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";


export default function AddResponsibleRestaurant()
{
  const [User,setUser]=useState({"username":"","email":"","password":"","address":"","phone":"","image":"","restaurant":""})
  const [list,setList]=useState([])
  const [value, setValue] = useState()
useEffect(()=>{ axios.get("restaurant/retrieve_restaurants").then((res)=>{
  console.log(res.data)
  setList(res.data)
})},[])
const  [userlogged , setUserlogged ]=useState({})
    useEffect(()=>{
        const token = {
            token:localStorage.super_admin_token
        }
        axios.post('/employees/auth_employee',token).then((res)=>{
            console.log(res)
            axios.get('/employees/view_profile/'+res.data[0].employee).then((res)=>{
                console.log(res)
                setUserlogged(res.data[0])
            })
        })
      
    },[])  
const handleChange = event => {
 // event.preventDefault()
  console.log(event)
   User.phone=event
}
const handleChange1 = event => {
  // event.preventDefault()
   console.log(event.target.value)
    User.username=event.target.value
    setUser(User)
 }
 const handleChange2= event => {
  // event.preventDefault()
   console.log(event.target.value)
    User.email=event.target.value
    setUser(User)
 }
 const handleChange3= event => {
  // event.preventDefault()
   console.log(event.target.value)
    User.password=event.target.value
    setUser(User)
 }
 const handleChange4= event => {
  // event.preventDefault()
   console.log(event.target.value)
    User.address=event.target.value
    setUser(User)
 }
 const handleChange5= options => {
  // event.preventDefault()
  var e = document.getElementById("restaurants");
  var text = e.options[e.selectedIndex].text;
  var value = e.value;
  console.log(value, text);
  User.restaurant=value
   
   
    setUser(User)
 }
 const Confirm = event => {
  console.log(User)
   const user={
    username:User.username,
    email:User.email,
    password:"123456",
    phone:User.phone,
    address:User.address,
    image:"",
    restaurant:User.restaurant
   }
  axios.post('resp/add_restaurant_responsible',user).then((res)=>{
    const pass= {
      password:user.password
    }
    console.log(pass)
    axios.post('mail/validateResp/'+user.email+'/validation',pass).then((res)=>{console.log(res)
      axios.get('mail/send_mail/:email/authentication',{text:User.email+"   "+User.password}).then((res)=>{console.log(res)})})
    console.log(res)
 
  })
    var login_link_for_restaurant_owner = ""
  
 }
    console.log(User)
    console.log(list)
    return (

      <div>
      <NavBar main="super admin"></NavBar>
      <SideBar username={userlogged.username} role="add responsible_franchise" link='Register_fr' role_1="add responsible_restaurant" link_1='Register_rr'></SideBar>
      <div class="container-fluid  px-6">
              <div class="container-fluid py-7 px-12">
                
              <div class="row mt-2">
        <div class="col-lg-8 mb-lg-6 mb-4">
          <div class="card">
            <div class="card-body p-4">
              <div class="row">
                <div class="col-lg-14">
                  <div class="d-flex flex-column h-100">
                <form role="form text-left">
                  <h1>add restaurant_owner</h1>
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="email-addon" onChange={handleChange1}/>
                  </div>
                  <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" onChange={handleChange2}/>
                  </div>
                 
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder="address" aria-label="Password" aria-describedby="address-addon" onChange={handleChange4}/>
                  </div>
                 
                  <MuiPhoneNumber defaultCountry={'us'} onChange={handleChange}/>
                  <div class="form-check form-check-info text-left">
                    <input class="form-check-input" type="checkbox" value={value}  id="flexCheckDefault" checked/>

                    <label class="form-check-label" for="flexCheckDefault">
                      I agree the <a  class="text-dark font-weight-bolder">Terms and Conditions</a>
                    </label>
                  </div>
                  <label for="cars">Choose a restaurant:</label>
                    <select id="restaurants" name="list" className="form-control" onChange={handleChange5}>
                           {list.map((e)=>
                             <option value={e._id} >{e.restaurant_name + " " + e.restaurant_address}</option>
                           )}
                    </select>
                  <div class="text-center">
                    <button type="button" class="btn bg-gradient-dark w-100 my-4 mb-2"  onClick={Confirm}>Add</button>
                  </div>
                  <p class="text-sm mt-3 mb-0">Already have an account? <a  class="text-dark font-weight-bolder">Sign in</a></p>
                </form>
              </div></div></div></div></div></div></div></div></div></div>
         
    )
}