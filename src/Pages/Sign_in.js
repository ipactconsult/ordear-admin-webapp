import axios from "axios"
import { ReactComponent as FBLogo} from "../logo1.svg"
import { ReactComponent as GmailLogo } from "../logo2.svg"
import { useState,useEffect } from "react"

import MuiPhoneNumber from 'material-ui-phone-number';
import { useNavigate } from "react-router-dom";


export default function Sign_In()
{
  const [User,setUser]=useState({"username":"","email":"","password":"","address":"","phone":"","image":"","role":"" ,"restaurant":""})
  const [list,setList]=useState([])
  const [list2,setList2]=useState([])
  const [value, setValue] = useState()
  const [token,setToken] = useState("")
  const navigate = useNavigate();
useEffect(()=>{ axios.get("posts/get_posts").then((res)=>{
  console.log(res.data)
 let x=  res.data.filter(e=>e.post!='responsible_restaurant').filter(e=>e.post!='Responsible_Franchise')
  setList(x)
})},[])
useEffect(()=>{ axios.get("restaurant/retrieve_restaurants").then((res)=>{
  console.log(res.data)
  setList2(res.data)
})},[])
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
 const handleChange6= options => {
  // event.preventDefault()
  var str=document.querySelector("#restaurants").innerHTML.substring(15,options.target.innerHTML.length)
  var t=str.substring(0,str.indexOf('"'))
  console.log(t)
  User.restaurant=t
  setUser(User)

 }
 const handleChange5= options => {
  // event.preventDefault()
  var str=document.querySelector("#roles").innerHTML.substring(15,options.target.innerHTML.length)
  var t=str.substring(0,str.indexOf('"'))
  console.log(t)
  User.role=t
  setUser(User)
 
   // setUser(User)
 }
 const Confirm = event => {
  console.log(User)
   const user={
  
    email:User.email,
    password:User.password,
  
   }
   const pass={password:User.password}
  axios.post('resp/Login/'+user.email,pass).then((res)=>{
    console.log(res)
    let token=res.data[0].token_parsed
    
    axios.get('employees/get_role/'+res.data[0].employee).then((res)=>{
        console.log(res)
      console.log(token)
        if(res.data[0].post=='responsible_restaurant') {
            localStorage.setItem('restaurant_responsible_token',token)
            navigate('/restaurant_owner_dashboard')
        }
        console.log(res)
        if(res.data[0].post=='Responsible_Franchise') {
            localStorage.setItem('franchise_responsible_token',token)
            navigate('/franchise_owner_dashboard')
        }
        else if(res.data[0].post=='super-admin'){
            localStorage.setItem('super_admin_token',token)
            navigate('/superAdmin_dashboard')
           
        }
    })
 })
}
console.log(User)
    console.log(list)
    return (
        <main class="main-content  mt-0">
    <section class="min-vh-100 mb-8">
      <div class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"    style={{
        backgroundImage: `url(/assets/img/curved-images/curved14.jpg)`}}>
        <span class="mask bg-gradient-dark opacity-6"></span>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 text-center mx-auto">
              <h1 class="text-white mb-2 mt-5">Welcome!</h1>
              <p class="text-lead text-white">here you can register as an Executor </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row mt-lg-n10 mt-md-n11 mt-n10">
          <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div class="card z-index-0">
              <div class="card-header text-center pt-4">
                <h5>Register with</h5>
              </div>
              <div class="row px-xl-5 px-sm-4 px-3">
                <div class="col-3 ms-auto px-1">
                  <a class="btn btn-outline-light w-100" >
                
                     <FBLogo/>
                    
                  </a>
                </div>
                <div class="col-3 px-1">
                  <a class="btn btn-outline-light w-100" >
                   <GmailLogo></GmailLogo>
                 
                    
                  </a>
                </div>
               
                <div class="mt-2 position-relative text-center">
                  <p class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                    or
                  </p>
                </div>
              </div>
              <div class="card-body">
                <form role="form text-left">
               
                  <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" onChange={handleChange2}/>
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" onChange={handleChange3}/>
                  </div>
              
                  <div class="text-center">
                    <button type="button" class="btn bg-gradient-dark w-100 my-4 mb-2"  onClick={Confirm}>Sign In</button>
                  </div>
                  <p class="text-sm mt-3 mb-0">Already have an account? <a  class="text-dark font-weight-bolder">Sign in</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></main>
    )
                           
                           }