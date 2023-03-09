
import './App.css'
import {BrowserRouter,Link,Route,Routes} from "react-router-dom"
import   AddResponsibleRestaurant from './Pages/RegisterResponsibleRestaurant';
import LoginResp_res from './Pages/Login_as_restaurant_owner';
import RestaurantManagement from './Pages/RestaurantManagmentDashbord';
import ViewProfile from './Pages/ViewProfile';
import AddResponsibleFranchise from './Pages/RegisterResponsibleFranchise';
import LoginResp_Franchise from './Pages/Login_as_franchise_owner';
import FranchiseManagement from './Pages/FranchiseManagement';
import Register_executor from './Pages/RegisterExecutor';

import Sign_In from './Pages/Sign_in';
import Login_SuperAdmin from './Pages/LoginAsSuperAdmin';
import SignUpSuperAdmin from './Pages/SignUpSuperAdmin';
import SuperAdminDashBoard from './Pages/SuperAdminDash';
import Add_Post from './Pages/AddPost';
import SignUpCustomer from './Pages/RegisterClient';
import PaymentMethods from './Pages/PaymentMethods'; 
import LoginClient from './Pages/LoginClient';
import CreditCard from './Components/CreditCard';
import EditProfile from './Pages/EditProfile';
function App() {
  return (
    <BrowserRouter>
      <Link to='/login_as_restaurant_responsible?q=token' ></Link>
      <Link to='/login_as_franchise_responsible?q=token' ></Link>
      <Link to='/login_as_executor?q=token' ></Link>
      <Link to='/login_as_super-admin?q=token' ></Link>
      <Link to='/login_as_customer?q=token' ></Link>
      <Link to='/view_profile?q=id' ></Link>
      <Link to='/Edit_profile?q=id' ></Link>
    <Routes>

    <Route exact path="/Register_rr" element={<AddResponsibleRestaurant></AddResponsibleRestaurant>} />
  
    <Route exact path='/login_as_restaurant_responsible' element={<LoginResp_res></LoginResp_res>}></Route>
    <Route exact path='/login_as_franchise_responsible' element={<LoginResp_Franchise></LoginResp_Franchise>}></Route>
    <Route exact path='/login_as_super-admin' element={<Login_SuperAdmin></Login_SuperAdmin>}></Route>
    <Route exact path='/login_as_customer' element={<LoginClient></LoginClient>}></Route>
    <Route exact path='/Register_super_admin' element={<SignUpSuperAdmin></SignUpSuperAdmin>}></Route>
    <Route exact path='/superAdmin_dashboard' element={<SuperAdminDashBoard></SuperAdminDashBoard>}></Route>
    <Route exact path='/restaurant_owner_dashboard' element={<RestaurantManagement></RestaurantManagement>}></Route>
    <Route exact path='/franchise_owner_dashboard' element={<FranchiseManagement></FranchiseManagement>}></Route>
    <Route exact path='/view_profile' element={<ViewProfile></ViewProfile>}></Route>
    <Route exact path='/Register_ex' element={<Register_executor></Register_executor>}></Route>
    <Route exact path='/sign_in' element={<Sign_In></Sign_In>}></Route>
    <Route exact path='/add_post' element={<Add_Post></Add_Post>}></Route>
    <Route exact path='/payment_methods' element={<PaymentMethods></PaymentMethods>}></Route>
    <Route exact path='/customer_sign_up' element={<SignUpCustomer></SignUpCustomer>}></Route>
    <Route exact path='/credit_cards' element={<CreditCard></CreditCard>}></Route>
    <Route exact path='/edit_profile'element={<EditProfile></EditProfile>}></Route>
    <Route exact path='/Register_fr' element={<AddResponsibleFranchise></AddResponsibleFranchise>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
