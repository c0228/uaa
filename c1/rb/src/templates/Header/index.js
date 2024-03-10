import React from "react";
import { Nav } from "e-ui-react";

const Header = ({ activeId, menulinks })=>{
 return ( <nav className="navbar navbar-expand-sm" style={{ backgroundColor:'#000' }}>
 <div className="container-fluid">
   <a className="navbar-brand" href="#">
    <img src={"./images/logo.png"} style={{ width:'250px', height:'auto' }} />
   </a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="collapsibleNavbar">
       <div className="me-auto">
           <Nav menulinks={menulinks} activeId={activeId}
           colorConfig={{
            active: { color: '#ec8931', backgroundColor:'#000' },
            default: { color: '#fff', backgroundColor:'#000' }
        }}  />
       </div>
   </div>
 </div>
</nav>);
};

export default Header;