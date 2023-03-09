import { useEffect,useState } from "react"
import axios from "axios"
import SideBar from "../Components/SideBar"
import NavBar from "../Components/NavBar"
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

export default function RestaurantManagement()
{
    
  const  [user , setUser ]=useState({})
  const [list , SetList]=useState([])
  const [roles,setRoles]=useState([])
    useEffect(()=>{
        const token = {
            token:localStorage.restaurant_responsible_token
        }
       
        axios.post('/employees/auth_employee',token).then((res)=>{
            console.log(res)
            axios.get('/employees/view_profile/'+res.data[0].employee).then((res)=>{
                console.log(res)
                
                setUser(res.data[0])
            }
            )
         

        })
        $(document).ready(function(){
            $("#myInput").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $("#myTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
          });
        axios.get('/employees/list/'+user.restaurant).then((res)=>
        {console.log(res)
             
            SetList(res.data)
        })
           axios.get('/posts/get_posts').then((response)=>{
                 console.log(response)
                setRoles(response.data)
            })
           
    },[list])  
   
    console.log(user.restaurant)
    console.log(list)
    
    return (
        <div>
              <NavBar id={user._id} role1="Register_exec" main='restaurant owner'></NavBar>
              <SideBar username={user.username} role='Employees Management' role_1='Posts Management' link="restaurant_owner_dashboard" role_2='add Executor' link_1='add_post' link_2='Register_ex'></SideBar>
              <div class="container-fluid  px-6">
              <div class="container-fluid py-7 px-12">
              <input id="myInput" type="text" placeholder="Search.."/> <br></br><br></br>

              <table id="example" class="table table-striped table-bordered" >
        <thead>
            <tr>
                <th>FullName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Post occupied</th>
                <th>image</th>
            </tr>
        </thead>
        <tbody id="myTable">
            {list.map(e=>(
                <tr key={e._id}>
                    
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.address}</td>
                <td>{e.role[0].post}</td>
                <td>{<img width="20px" height="20px" src={e.image}></img>}</td>
            </tr>
       
            ))}
    
        </tbody>
        </table>
        </div></div></div>
    )
}