import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Nav, Button } from "e-ui-react";
import { UpdateAppLangWithChangeUrl } from "@Services/LangManager.js";
import { AppColors } from "@Utils/AppColorManager.js";
import ManageAuth from "@Templates/Header/components/manage-auth/index.js";
import './index.css';

const Header = ({ activeId, menulinks })=>{
 const { lang } = useParams();
 const switchLanguage = ( lang ) =>{
  window.location.href= UpdateAppLangWithChangeUrl(lang);
 };
 return ( <nav className="navbar navbar-expand-sm">
 <div className="container-fluid">
   <a className="navbar-brand" href="#">
     <img src={process.env.PROJECT_URL+"assets/images/logo.jpg"} style={{ marginTop:'-15px', width: '180px', height:'auto' }}/>
   </a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="collapsibleNavbar">
       <div className="me-auto">
           <Nav menulinks={menulinks} activeId={activeId} 
            colorConfig={{
                active: { color: '#ec3d0e', backgroundColor:'' },
                default: { color: '#000', backgroundColor:'' }
              }}
           />
       </div>
       <div  className="d-flex">
          <div className="btn-group">
            {[{ id:'en', label: 'View in English' },
              { id:'hi', label: 'हिंदी में देखें' }]?.map((l,i)=>{
                return (<button key={i} type="button" className={(l?.id===lang)?"btn btn-danger":"btn btn-outline-danger"}
              style={{ fontSize:'12px', border:'1px solid #ccc' }}
              onClick={()=>switchLanguage(l?.id)}><b>{l?.label}</b></button>);
              })}
          </div>
       </div>
       <div  className="d-flex" style={{ marginLeft:'5px' }}>
          {/*Sign in with Google ::: START */}
          <ManageAuth />
          {/*Sign in with Google ::: END */}
       </div>
   </div>
 </div>
</nav>);
};

export default Header;