import React, { useState, useEffect } from "react";
import { Icon } from "e-ui-react";
import { Link } from 'react-router-dom';
import './index.css';

const Header = ({ activeId, menulinks })=>{
 const [showCollapse, setShowCollapse] = useState(false);
 useEffect(()=>{
  document.body.style.backgroundColor = '#fff';
 },[]);

 const HeaderTop = () =>{
  return (<div className="container-fluid ps-5 pe-0 d-none d-lg-block" style={{ backgroundColor:'#F6F6F6' }}>
    <div className="row gx-0">
        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
                <span className="text-body py-2 pe-3 border-end" href="">FAQs</span>
                <span className="text-body py-2 px-3 border-end" href="">Support</span>
                <span className="text-body py-2 px-3 border-end" href="">Privacy</span>
                <span className="text-body py-2 px-3 border-end" href="">Policy</span>
                <span className="text-body py-2 ps-3" href="">Career</span>
            </div>
        </div>
        <div className="col-md-6 text-center text-lg-end">
            <div className="position-relative d-inline-flex align-items-center text-white top-shape px-5" style={{ backgroundColor:'#06156c' }}>
                <div className="me-3 pe-3 border-end py-2">
                    <p className="m-0"><i className="fa fa-envelope-open me-2"></i>support@theworkdayconsulting.com</p>
                </div>
                <div className="py-2">
                    <p className="m-0"><i className="fa fa-phone-square me-2"></i> +1 (716) 429-5842</p>
                </div>
            </div>
        </div>
    </div>
</div>);
 };

 const HeaderTitle = () =>{
  return (<div style={{ display:'flex', flexDirection:'row', width:'100%', marginLeft:'5px', marginRight:'5px' }}>
    <div style={{ width:'80%' }}>
    <a href="#" style={{ textDecoration:'none' }}>
      <div style={{ display:'flex', }}>
        <i className="fa fa-smile-o" style={{ fontSize:'46px', padding:'8px', color:'#ef0b17' }}></i>
       {/* <img src="./assets/images/icon.png" style={{ width: '34px', height:'32px', marginTop:'5px' }}/> */}
      
        <div style={{ marginLeft:'8px' }}>
          <div style={{ color:'#ef0b17',fontSize:'22px',fontFamily: 'NewtonExtraBold',letterSpacing:'0.8px' }}>
            <b>W<span style={{ color:'#ef0b17' }}>ORK</span> D<span style={{ color:'#ef0b17' }}>AY</span></b>
          </div>
          <div style={{ marginLeft:'2px',color:'#ef0b17',fontFamily:'MetropolisBold',fontSize:'18px',letterSpacing:'0.8px' }}>
            <b>C<span style={{ color:'#ef0b17' }}>ONSULTING</span></b></div>
        </div>
      </div>
    </a>
    </div>
     <div align="right" style={{ width:'20%' }}>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" onClick={()=>setShowCollapse(!showCollapse)}>
        <i className="fa fa-bars"></i>
      </button>
     </div>
  </div>);
 };

 const HeaderMenus = ()=>{
  return (<div align="right"  className="container-fluid">
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
 return (<>
 <HeaderTop />
 <nav className="navbar navbar-expand-sm">
  <HeaderTitle />
  <HeaderMenus />
</nav>
</>);
};

export default Header;