import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GmailLogo from "../logo2.svg"
export default function LoginClient(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [password, setPassword] = useState("");


    const [user,setUser]=useState({})
    console.log(searchParams.get("q"))
    const navigate = useNavigate();
         console.log(searchParams.get("q"))
    const redirectToClientInterface = event =>{
        localStorage.setItem('token',searchParams.get("q"))
        console.log(localStorage.token)
        /***
         * useNavigate to redirect to dashboard
         */
      navigate('/payment_methods')
    }
 
      
       
          
           useEffect(()=>{ 
               const token = {
                   token:searchParams.get("q")
               }  
               axios.post('/auth/get_authentified_user/',token).then((res)=>{
                   console.log(res)
                 
               })
             
           },[])  
         
    return(
        <section class="min-vh-100 mb-8">
        <div class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"    style={{
        backgroundImage: `url(/assets/img/curved-images/curved14.jpg)`}}>
        <span class="mask bg-gradient-dark opacity-6"></span>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 text-center mx-auto">
            <div class="col-3 px-1">
                  <a class="btn btn-outline-light w-100" >
                   
                 
                    
                  </a>
                </div>
              <h1 class="text-white mb-2 mt-5">Welcome!</h1>
              <p class="text-lead text-white">Your account is set up Please click on the link below</p>
            </div>
          </div>
        </div>
      
      </div>
   
      <button type="button" class="btn bg-gradient-dark w-100 my-4 mb-2"  onClick={redirectToClientInterface}>Confirm your account</button>
      </section>
        
    )
}