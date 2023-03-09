import './../App.css';
export default function SideBar()
{
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
      function closeNav(event) {
        event.preventDefault()
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }
    return (
        
        <>
        <div id="main">
  <button className="openbtn" onClick={openNav}>☰</button>  
 
</div>
        <div id="mySidebar" className="sidebar">
  <a href="" className="closebtn" onClick={closeNav}>×</a>
  <a href="#"><i class="fa fa-handshake"></i>view Profile</a>
  <a href="#"><i class="fa fa-wallet"></i>view Payment Methods</a>
  
</div>

        </>
    )
}