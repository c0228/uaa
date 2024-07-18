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
 <div className="upper-header">
    <div className="upper-header-flex">
      <Icon type="FontAwesome" name="fa-phone-square" size={20} color="#5d607f" className="desktop-view" />
      <span className="desktop-view txt-phone-number">+1 (919)-267-4476</span>
      <span className="desktop-view separator"></span>
      <Icon type="FontAwesome" name="fa-envelope" size={16} color="#5d607f" className="desktop-view padLeft15p" />
      <span className="desktop-view txt-email">contact@thebackyardbarnc.com</span>
      <div className="mobile-view-center desktop-view-right padRight15p">
        <a target="_blank" href="https://www.facebook.com/share/KtPEe3kDySeMTcwV/?mibextid=LQQJ4d">
          <Icon type="FontAwesome" name="fa-facebook" size={16} color="#5d607f" className="padLeft5p padRight5p" />
        </a>
        <a target="_blank" href="https://www.instagram.com/thebackyardbarnc?igsh=MWxycHR0bmo2eGoxZw==">
          <Icon type="FontAwesome" name="fa-instagram" size={16} color="#5d607f" className="padLeft5p padRight5p" />
        </a>
      </div>
    </div>
 </div>

 
 <nav className="navbar navbar-expand-sm">
 <div align="right" style={{ width:'100%' }}>
 <a className="navbar-brand padTop0p padBot0p" href="#">
   <button className="navbar-toggler btn-border btn-border-lgt-purple" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" onClick={()=>setShowCollapse(!showCollapse)}>
     <i className="fa fa-bars font-lgt-purple"></i>
   </button>
   </a>
   </div>
 <div align="right"  className="container-fluid">
  
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
<div className="logo-header">
    <img src={"./assets/images/logo.png"} className="logo-img" />
 </div>
<div align="center" style={{ marginTop:'4.8%', paddingLeft:'15px', paddingRight:'15px', paddingBottom:'8px' }}>
      <span className="welcome-title desktop-view" style={{ paddingLeft:'10px', paddingRight:'30px', fontSize:'40px', fontFamily:'BebasNeue', letterSpacing:'4px', color:'#000' }}>
        <b>Welcome to the Backyard bar</b>
      </span>
      <div className="welcome-title mobile-view" style={{ paddingLeft:'10px', paddingRight:'30px', fontSize:'40px', fontFamily:'BebasNeue', letterSpacing:'4px', color:'#000' }}>
        <b>Welcome to the Backyard bar</b>
      </div>
    </div>
</>);
};

export default Header;