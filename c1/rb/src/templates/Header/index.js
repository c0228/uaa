import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './index.css';

const Header = ({ activeId, menulinks })=>{
 const [showCollapse, setShowCollapse] = useState(false);
 return (<div align="right">
 <nav className="navbar navbar-expand-sm">
 <div className="container-fluid">
   <a className="navbar-brand" href="#" style={{ paddingTop:'0px', paddingBottom:'0px' }}>
    {/*<img src={"./images/logo.png"} style={{ width:'300px', height:'auto' }} />*/}
   </a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
   onClick={()=>setShowCollapse(!showCollapse)}
   style={{ border: '2px solid #000' }}>
     <i className="fa fa-bars" style={{ color:'#000' }}></i>
   </button>
   <div className={showCollapse?"collapse navbar-collapse show":"collapse navbar-collapse justify-content-end"} id="collapsibleNavbar">
    <ul className="navbar-nav">
      {menulinks?.map((menu,index)=>{
        return (<li key={index} className="nav-item">
          <Link className={(activeId===menu?.id)?"nav-link active":"nav-link"} 
            to={process.env.PROJECT_URL+menu?.url}><b>{menu?.label}</b></Link>
        </li>);
      })}
      </ul>
   </div>
   </div>
</nav>
</div>);
};

export default Header;