import axios from "axios"
import { ReactComponent as FBLogo} from "../logo1.svg"
import { ReactComponent as GmailLogo } from "../logo2.svg"
import { useState,useEffect } from "react"

import MuiPhoneNumber from 'material-ui-phone-number';
import { display } from "@mui/system";
import { useNavigate } from "react-router-dom";


export default function SignUpCustomer()
{
  const [User,setUser]=useState({"username":"","email":"","password":"","address":"","phone":"","image":"","restaurant":""})
  const [list,setList]=useState([])
  const [file,setimage]=useState("")
  const [value, setValue] = useState()
  const [id,setId]=useState(0)
  const navigate = useNavigate();
useEffect(()=>{ axios.get("restaurant/retrieve_restaurants").then((res)=>{
  console.log(res.data)
  setList(res.data)
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
 
 const Confirm = event => {
  console.log(User)
 
   const user={
    username:User.username,
    email:User.email,
    password:User.password,
    phone:User.phone,
    address:User.address,
    image:"",
    //restaurant:User.restaurant
   }
  axios.post('customers/register',user).then((res)=>{
    const pass= {
      password:user.password
    }
    console.log(pass)
    axios.post('mail/validate/'+user.email+'/validation',pass).then((res)=>{console.log(res)
        if(res.status==200)
        {
            alert("check your maibox")
        }})
    console.log(res)
   
  })
    var login_link_for_restaurant_owner = ""
    //axios.post('/mail/send_mail/:email/authentication',{text:User.email+User.password+login_link_for_restaurant_owner})
 }
 const handleChange33 = event => {
    event.preventDefault()
      setimage({file:event.target.files[0]})   
  }
  const upload = e => {
    console.log("aaaaaa")
    e.preventDefault()
    const formData = new FormData();
    formData.append(
        "file",
        file.file
      );
    
  
      console.log(file.file);
      axios.post("images/home/upload", formData).then((res)=>
      {console.log(res)
      const p = {
        "image":"http://localhost:8000/images/home/files/"+res.data.file.filename
      }
      console.log(id)
      axios.post("images/home/set_image_profile_customer/"+id,p).then((res)=>{console.log(res)})
      });
     
  }
  const GmailPassPortLogin = e => {
    let url = "http://localhost:8000/customers/auth/google"
   navigate(url)

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
              <p class="text-lead text-white">here you can REGISTER AS  Customer </p>
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
                  <a class="btn btn-outline-light w-100" href="http://localhost:8000/customers/auth/google">
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
                    <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="email-addon" onChange={handleChange1}/>
                  </div>
                  <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" onChange={handleChange2}/>
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control" placeholder="password" aria-label="Email" aria-describedby="email-addon" onChange={handleChange3}/>
                  </div>
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder="address" aria-label="Password" aria-describedby="address-addon" onChange={handleChange4}/>
                  </div>
                 
                  <MuiPhoneNumber defaultCountry={'us'} onChange={handleChange}/>
                  <div class="form-check form-check-info text-left">
                    <input class="form-check-input" type="checkbox" value={value}  id="flexCheckDefault" checked/>

                 
                  </div>
                  <input
          type="file"
          id="file"
          name="file"
          className="form-control"
          onChange={handleChange33}
        />
                    <button type="button" class="btn bg-gradient-dark w-100 my-4 mb-2"  onClick={upload}>upload</button>
                  <div class="text-center">
                    <button type="button" class="btn bg-gradient-dark w-100 my-4 mb-2"  onClick={Confirm}>Sign up</button>
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