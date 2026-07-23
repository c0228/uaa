import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getAppContext, Nav, Button } from "e-ui-react";
import { jwtDecode } from 'jwt-decode';
import { UpdateAppLangWithChangeUrl } from "@Services/LangManager.js";
import { GetUserProfile } from "@Services/AuthManager.js";
import { AppColors } from "@Utils/AppColorManager.js";
import ManageAuth from "./components/manage-auth/index.js";
import Notifications from "./components/notifications/index.js";
import './index.css';

const Header = ({ activeId, menulinks })=>{
 const appContext = getAppContext();
 const { lang } = useParams();
 const userDetails = appContext?.contextData?.userDetails || {};
 const isLogged = appContext?.contextData?.isLogged || false;
 const switchLanguage = ( lang ) =>{
   window.location.href= UpdateAppLangWithChangeUrl(lang);
 };
 return (<>
 {/*<nav className="navbar navbar-expand-sm">
   <div className="container-fluid">
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        */}  
        <a className="navbar-brand" href="#" style={{ fontFamily:'GeistRegular' }}>
          <b>UPSC</b>
          {/*<img src={process.env.PROJECT_URL+"assets/images/logo.jpg"} style={{ width: '180px', height:'auto' }}/>*/}
        </a>
        <div className="me-auto">
              <Nav menulinks={menulinks} activeId={activeId} 
               colorConfig={{
                   active: { color: '#065fc5', backgroundColor:'' },
                   default: { color: '#000', backgroundColor:'' }
                 }}
              />
          </div>
          <div>
             <div className="btn-group">
               {[{ id:'en', label: (<>English</>) },
                 { id:'hi', label: (<>हिंदी</>) }]?.map((l,i)=>{
                   return (<button key={i} type="button" className={(l?.id===lang)?"btn btn-dark":"btn btn-outline-dark"}
                 style={{ fontSize:'12px', border:'1px solid #000' }}
                 onClick={()=>switchLanguage(l?.id)}><b>{l?.label}</b></button>);
                 })}
             </div>
          </div>
          {isLogged && (<Notifications />)}
          <ManageAuth />
     {/*} </div>
    </div>
 </nav>*/}
 </>);
}

export default Header;