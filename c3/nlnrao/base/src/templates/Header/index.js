import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './index.css';

export const LogoTitle = ()=>{
 return (<Link className="navbar-brand" to={process.env.PROJECT_URL} style={{ paddingTop:'0px', paddingBottom:'0px' }}>
 <span className="logo" style={{ fontSize:'22px' }}>nellutlalnrao.com</span>
 </Link>);
};

const Header = ({ activeId, menulinks })=>{
 const [showCollapse, setShowCollapse] = useState(false);
 return ( <nav className="navbar navbar-expand-sm">
 <div className="container-fluid"> 
   <LogoTitle />
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
   onClick={()=>setShowCollapse(!showCollapse)}>
     <i className="fa fa-bars" style={{ paddingTop:'5px', paddingBottom:'5px' }}></i>
   </button>
   <div className={showCollapse?"collapse navbar-collapse show":"collapse navbar-collapse"} id="collapsibleNavbar">
    <ul className="navbar-nav">
      {menulinks?.map((menu,index)=>{
        return (<li key={index} className="nav-item">
          <Link className={(activeId===menu?.id)?"nav-link active":"nav-link"} 
            to={process.env.PROJECT_URL+menu?.url}><span><b>{menu?.label}</b></span></Link>
        </li>);
      })}
      </ul>
   </div>
   </div>
</nav>);
};

export default Header;