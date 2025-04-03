import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './index.css';

export const LogoTitle = ()=>{
 return (<Link className="navbar-brand" to={process.env.PROJECT_MAIN_URL} style={{ paddingTop:'0px', paddingBottom:'0px' }}>
 <span className="logo" style={{ fontSize:'22px' }}>nellutlalnrao.com</span>
 <span style={{ marginLeft:'5px', borderRadius:'8px', border:'1.8px solid #0d6efd', padding:'5px', fontSize:'11px', 
    letterSpacing:'0.4px', color:'#0d6efd' }}><b>SHOWCASE</b></span>
 </Link>);
};

const Header = ({ activeId, menulinks })=>{
 const [showCollapse, setShowCollapse] = useState(false);
 return ( <nav className="navbar navbar-expand-sm">
 <div className="container-fluid nav-menu-container-fluid"> 
   <LogoTitle />
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
   onClick={()=>setShowCollapse(!showCollapse)}>
     <i className="fa fa-bars" style={{ paddingTop:'5px', paddingBottom:'5px' }}></i>
   </button>
   <div className={showCollapse?"collapse navbar-collapse show":"collapse navbar-collapse"} id="collapsibleNavbar">
   <div className="nav-menu-scroll-wrapper">
    <ul className="navbar-nav">
      {menulinks?.map((menu,index)=>{
        return (<li key={index} className="nav-item">
          <Link className={(activeId===menu?.id)?"nav-link active":"nav-link"} 
            to={process.env.PROJECT_MAIN_URL+menu?.url}><span><b>{menu?.label}</b></span></Link>
        </li>);
      })}
      </ul>
      </div>
   </div>
   </div>
</nav>);
};

export default Header;