import React from "react";
import { Nav } from "e-ui-react";

const Header = ({ activeId, menulinks })=>{
 return ( <nav className="navbar navbar-expand-sm" style={{ backgroundColor:'#fff' }}>
 <div className="container-fluid">
   <a className="navbar-brand" href="#">
    {/*<img src={"./images/logo.png"} style={{ width:'300px', height:'auto' }} />*/}
   </a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="collapsibleNavbar">
       <div className="container-fluid">
           <Nav mode="horizontal" 
              align="right" 
              menulinks={menulinks} activeId={activeId}
              colorConfig={{
                active: { color: '#9c27b0', backgroundColor:'#fff' },
                default: { color: '#000', backgroundColor:'#fff' }
              }}  />
       </div>
   </div>
 </div>
</nav>);
};

export default Header;