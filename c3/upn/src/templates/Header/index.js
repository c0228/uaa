import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { Nav, Button } from "e-ui-react";
import { UpdateAppLangWithChangeUrl } from "@Services/LangManager.js";
import { AppColors } from "@Utils/AppColorManager.js";
import './index.css';

const Header = ({ activeId, menulinks })=>{
 const [userDetails, setuserDetails] = useState({});
 const { lang } = useParams();
 const login = useGoogleLogin({
  onSuccess: async(tokenResponse) => console.log(tokenResponse),
  onError: () => console.log('Login Failed')
 });
 /*
 const handleSuccess = (credentialResponse) => {
    console.log('Login Success');
    console.log(credentialResponse);
    const user = jwtDecode(
      credentialResponse.credential
    );
  
    console.log(user);
    setuserDetails({
      surName: user?.family_name,
      name: user?.given_name,
      profilePic: user?.picture,
      email: user?.email,
      emailVerified: user?.email_verified
    });
  };
  const handleError = () => {
    console.log('Login Failed');
  };
  */
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
          <button className="upn-btn-google-login" onClick={()=>login()}>
            <img src={process.env.PROJECT_URL+'assets/images/google.png'} className="upn-img-google-login" /> 
            <span style={{ fontSize:'12px' }}><b>{lang==='hi'?'गूगल से लॉग इन करें':'Login with Google'}</b></span>
          </button>
          {/*Sign in with Google ::: END */}
       </div>
   </div>
 </div>
</nav>);
};

export default Header;