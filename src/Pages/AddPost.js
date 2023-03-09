import axios from "axios"
import { ReactComponent as FBLogo} from "../logo1.svg"
import { ReactComponent as GmailLogo } from "../logo2.svg"
import { useState,useEffect } from "react"

import MuiPhoneNumber from 'material-ui-phone-number';
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";


export default function Add_Post()
{
  const [file,setimage]=useState("")
  const [img,setimg]=useState("")
  const [User,setUser]=useState({"username":"","email":"","password":"","address":"","phone":"","image":"","role":"" ,"restaurant":""})
  const [list,setList]=useState([])
  const [list2,setList2]=useState([])
  const [value, setValue] = useState()
  const [id,setId]=useState(0)
  const [role,setRole]=useState("")
  const  [userlogged , setUserlogged ]=useState({})
    useEffect(()=>{
        const token = {
            token:localStorage.restaurant_responsible_token
        }
        axios.post('/employees/auth_employee',token).then((res)=>{
            console.log(res)
            axios.get('/employees/view_profile/'+res.data[0].employee).then((res)=>{
                console.log(res)
               
                setUserlogged(res.data[0])
            })
        })
      
    },[])  
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
        axios.post("images/home/set_image_profile/"+id,p).then((res)=>{console.log(res)})
        });
       
    }
useEffect(()=>{ axios.get("posts/get_posts").then((res)=>{
  console.log(res.data)
 let x=  res.data.filter(e=>e.post!='responsible_restaurant').filter(e=>e.post!='Responsible_Franchise').filter(e=>e.post!="super-admin")
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
  setRole(event.target.value)
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
  var e = document.getElementById("restaurants");
  var text = e.options[e.selectedIndex].text;
  var value = e.value;
  console.log(value, text);
  User.restaurant=value
  setUser(User)

 }
 const handleChange5= options => {
  // event.preventDefault()
  var e = document.getElementById("roles");
  var text = e.options[e.selectedIndex].text;
  var value = e.value;
  console.log(value, text);
  User.role=value
  setUser(User)
 
   // setUser(User)
 }
 const Confirm = event => {
  console.log(User)
   const post={
    post:role
   }
  axios.post('posts/add_post',post).then((res)=>{
   
    console.log(res.data)
    
 })
}
console.log(User)
    console.log(list)
    return (
    
              <div>
                <NavBar main='restaurant owner'></NavBar>
                <SideBar username={userlogged.username}></SideBar>
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
                  <h1>add Post</h1>
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder="enter post name" aria-label="Name" aria-describedby="email-addon" onChange={handleChange1}/>
                  </div>
                
                   
                  <div class="text-center">
                    <button type="button" class="btn bg-gradient-dark w-100 my-4 mb-2"  onClick={Confirm}>add Post</button>
                  </div>
       
                </form>
              </div></div></div></div></div></div></div></div></div></div>
        
    )
                           
                           }