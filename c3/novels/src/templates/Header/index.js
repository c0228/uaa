import React, { useState, useEffect } from "react";
import { Icon } from "e-ui-react";
import { Link } from 'react-router-dom';
import './index.css';

const Header = ({ activeId, menulinks })=>{
 const [showCollapse, setShowCollapse] = useState(false);
 useEffect(()=>{
  document.body.style.backgroundColor = '#fff';
 },[]);
 return (<>
 <nav className="navbar navbar-expand-sm">
 <div align="right" style={{ width:'100%' }}>
 <a className="navbar-brand padTop0p padBot0p" href="#">
   <button className="navbar-toggler btn-border btn-border-lgt-purple" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" onClick={()=>setShowCollapse(!showCollapse)}>
     <i className="fa fa-bars font-lgt-purple"></i>
   </button>
   </a>
   </div>
 <div align="right" className="container-fluid">
  
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

</>);
};

export default Header;