import React, { useState, useEffect } from "react";
import { Icon } from "e-ui-react";
import { Link } from 'react-router-dom';
import './index.css';

const Header = ({ activeId, menulinks })=>{
 const [showCollapse, setShowCollapse] = useState(false);
 useEffect(()=>{
  document.body.style.backgroundColor = '#fff';
 },[]);
 const HeaderTitle = () =>{
  return (<div style={{ display:'flex', flexDirection:'row', width:'100%', marginLeft:'5px', marginRight:'5px' }}>
    <div style={{ width:'80%' }}>
    <a href="#" style={{ textDecoration:'none', color:'#000' }}>
      <div><span style={{ fontSize:'18px', marginLeft:'8px', fontWeight:600, fontFamily:'Poppins' }}>Pets & Paws Kennels</span>
      </div>
    </a>
    </div>
     <div style={{ width:'20%', marginTop:'4px', marginRight:'5px', textAlign:'right' }}>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#collapsibleNavbar" onClick={()=>setShowCollapse(!showCollapse)}>
        <i className="fa fa-bars" style={{ paddingTop:'5px', marginBottom:'5px' }}></i>
      </button>
     </div>
  </div>);
 };

 const HeaderMenus = ()=>{
  return (<div className="container-fluid textAlignRight">
    <div className={showCollapse?"collapse navbar-collapse show":"collapse navbar-collapse justify-content-end"} 
    id="collapsibleNavbar">
     <ul className="navbar-nav">
       {menulinks?.map((menu,index)=>{
         return (<li key={index} className="nav-item">
           <Link className={(activeId===menu?.id)?"nav-link active":"nav-link"} 
             to={process.env.PROJECT_URL+menu?.url}><b>{menu?.label}</b></Link>
         </li>);
       })}
       </ul>
    </div>
    </div>);
 };
 return ( <nav className="navbar navbar-expand-sm" style={{ backgroundColor:'#fff6bd' }}> 
  <HeaderTitle />
  <HeaderMenus />
</nav>);
};

export default Header;