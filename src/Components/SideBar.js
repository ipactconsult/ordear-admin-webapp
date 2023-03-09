

export default function SideBar(props)
{
    return(
        <aside class="sidenav navbar bg-gradient-dark navbar-vertical navbar-expand-xs border-0 border-radius-xl  my-7 px-0  fixed-start ms-3"  id="sidenav-main" style={{"height":"800px"}}>
        <div class="sidenav-header">
          <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
         
        </div>
        <p className="text-secondary px-3"> Welcome  {props.username} !</p>
        <div class="horizontal dark mt-0">
        <div  id="sidenav-collapse-main">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link  active" href="/view_profile">
               
             
                <span class="nav-link-text text-primary ms-1">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  " href={"/"+props.link}>
             
                <span class="nav-link-text text-primary ms-1">{props.role}</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  " href={"/"+props.link_1}>
              
                <span class="nav-link-text text-primary ms-1">{props.role_1}</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  " href={"/"+props.link_2}>
              
                <span class="nav-link-text text-primary ms-1">{props.role_2}</span>
              </a>
            </li>
         
            <li class="nav-item mt-3">
              <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
            </li>
         
          </ul>
        </div>
     
       </div>
      </aside>
    )
}