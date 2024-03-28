import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './index.css';

export const LogoTitle = ()=>{
 return (<span className="logo font-white" style={{ paddingLeft:'5px', fontSize:'22px' }}>nellutlalnrao.com</span>);
};

const Header = ({ activeId, menulinks })=>{
 const [showCollapse, setShowCollapse] = useState(false);
 return ( <nav className="navbar navbar-expand-sm" style={{ backgroundColor:'#7f1231', boxShadow:'2px 2px 2px 2px #999' }}>
 <div className="container-fluid">
   <Link className="navbar-brand" to="#" style={{ paddingTop:'0px', paddingBottom:'0px' }}>
   <LogoTitle />
   </Link>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
   onClick={()=>setShowCollapse(!showCollapse)}
   style={{ border: '2px solid #fff' }}>
     <i className="fa fa-bars" style={{ color:'#fff' }}></i>
   </button>
   <div className={showCollapse?"collapse navbar-collapse show":"collapse navbar-collapse"} id="collapsibleNavbar">
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
</nav>);
};

export default Header;