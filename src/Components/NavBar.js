export default function NavBar(props)
{
    return (
        <div>
             <nav class="navbar navbar-main bg-gradient-dark navbar-expand-lg px-1 mx-1 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div class="container-fluid py-1 px-1">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
          
            <li class="breadcrumb-item text-sm text-secondary active" aria-current="page">Dashboard {props.main}</li>
          </ol>
          <h6 class="font-weight-bolder text-secondary mb-0">Dashboard</h6>
        </nav>
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            <div class="input-group">
              <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
              <input type="text" class="form-control" placeholder="Type here..."/>
            </div>
          </div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-flex align-items-center">
              <a class="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank" href={"/view_profile?q="+props.id}>View Profile</a>
            </li>
            <li class="nav-item d-flex align-items-center">
              <a class="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank" href={"/edit_profile?q="+props.id}>Edit Profile</a>
            </li>
            <li class="nav-item d-flex align-items-center">
              <a href="/sign_in" class="nav-link text-body font-weight-bold px-0">
                <i class="fa fa-user me-sm-1"></i>
                <span class="d-sm-inline d-none">Logout</span>
              </a>
            </li>
            </ul></div></div></nav></div>
    
    )
}