import React from "react";
import { Nav } from "e-ui-react";

const Header = ({ activeId, menulinks })=>{
 return ( <nav className="navbar navbar-expand-sm">
 <div className="container-fluid">
   <a className="navbar-brand" href="./home">
     <img src="./assets/logo/logo-flat.png" style={{ width: '130px', height:'auto' }}/>
   </a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="collapsibleNavbar">
       <div className="me-auto">
           <Nav menulinks={menulinks} activeId={activeId} />
       </div>
       {/* <div  className="d-flex">
       <div className="input-group" style={{ marginRight:'5px' }}>
                   <input type="text" className="form-control " placeholder="Ex. Search Universities in USA" />
                   <button className="btn" type="submit" style={{backgroundColor:"red", color:"white", opacity:"0.6"}}>Go</button>
       </div>
       </div>
       <div  className="d-flex">
           <button className="btn" type="button" style={{backgroundColor:"slateblue", color:"white", opacity:"0.9"}}>Login / Signup</button>
       </div> */}
   </div>
 </div>
</nav>);
};

export default Header;