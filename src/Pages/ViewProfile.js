import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";

export default function ViewProfile()
{
  const [file,setimage]=useState("")
  const [img,setimg]=useState("")
  const  [user , setUser ]=useState({})
  const [searchParams, setSearchParams] = useSearchParams();
    useEffect(()=>{
    
      
         //  console.log(searchParams.get("q"))
       
            axios.get('/employees/view_profile/'+searchParams.get('q')).then((res)=>{
               // console.log(res)
                setUser(res.data[0])
            })

    },[user])  
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
      
        // Details of the uploaded file
        console.log(file.file);
    //    axios.post("http://localhost:8086/products/save",Product).then((res)=>{console.log(res)})
        axios.post("images/home/upload", formData).then((res)=>
        {console.log(res)
        const p = {
          "image":"http://localhost:8000/images/home/files/"+res.data.file.filename
        }
        axios.post("images/home/set_image_profile/"+searchParams.get('q'),p).then((res)=>{console.log(res)})
        });
       
    }
    return (
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
                    <h5 class="font-weight-bolder">Full_Name:</h5><p class="mb-1 pt-2 text-bold">{user.username}</p>
                    <h5 class="font-weight-bolder">Email:</h5><p class="mb-1 pt-2 text-bold">{user.email}</p>
                    <h5 class="font-weight-bolder">address:</h5><p class="mb-1 pt-2 text-bold">{user.address}</p>
                    <h5 class="font-weight-bolder">Phone:</h5><p class="mb-1 pt-2 text-bold">{user.phone}</p>
                    <h5 class="font-weight-bolder">Image:</h5><p class="mb-1 pt-2 text-bold"><img src={user.image}></img></p>
                  
                    
                  </div>
                </div>
                <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                

                </div>
                <input
          type="file"
          id="file"
          name="file"
          className="form-control"
          onChange={handleChange33}
        />
                    <button type="button" class="btn bg-gradient-dark w-100 my-4 mb-2"  onClick={upload}>upload</button>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div></div>
    ) 
}