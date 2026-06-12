import React, { useState } from "react";
import { Nav, getAppContext } from "e-ui-react";

const Header = ({ activeId, menulinks })=>{
 const appContext = getAppContext();
 const [activeLang, setActiveLang] = useState('en');
 const switchLanguage = ( lang ) =>{
  setActiveLang(lang);
  appContext.setContextData({ lang: lang });
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
                return (<button type="button" className={(l?.id===activeLang)?"btn btn-danger":"btn btn-outline-danger"}
              style={{ fontSize:'12px', border:'1px solid #ccc' }}
              onClick={()=>switchLanguage(l?.id)}><b>{l?.label}</b></button>);
              })}
          </div>
       </div>
       <div  className="d-flex">
          {/*Sign in with Google ::: START */}

          {/*Sign in with Google ::: END */}
       </div>
   </div>
 </div>
</nav>);
};

export default Header;