import React from "react";
import { Nav } from "e-ui-react";
import { useAuth } from "@Provider/AuthProvider";

const Header = ({ activeId, menulinks })=>{
 const { logout } = useAuth();
 return ( <nav className="navbar navbar-expand-sm" style={{ backgroundColor:'#fff', marginBottom:'20px', boxShadow:'1px 1px 1px 1px #808080', borderBottom:'1px solid #ccc' }}>
 <div className="container-fluid">
   <a className="navbar-brand" href="#">
     <img src={process.env.PROJECT_URL+"assets/logo/logo-flat.png"} style={{ marginTop:'-10px', width: '160px', height:'auto' }}/>
   </a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="collapsibleNavbar">
       <div className="me-auto">
          <div style={{ marginTop:'15px' }}>
           <Nav menulinks={menulinks} activeId={activeId} />
          </div>
       </div>
       <div  className="d-flex">
           <button className="btn btn-primary" type="button" 
           style={{ marginTop:'15px', marginRight:'5px' }} onClick={()=>logout('/')}><b>Logout</b></button>
       </div>
   </div>
 </div>
</nav>);
};

export default Header;