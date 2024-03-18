import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './index.css';

const Header = ({ activeId, menulinks })=>{
 const [showCollapse, setShowCollapse] = useState(false);
 return ( <nav className="navbar navbar-expand-sm" style={{ backgroundColor:'#7f1231', boxShadow:'2px 2px 2px 2px #999' }}>
 <div className="container-fluid">
   <a className="navbar-brand" href="#" style={{ paddingTop:'0px', paddingBottom:'0px' }}>
     <div className="logo font-white fs26">nellutlalnrao.com</div>
   </a>
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