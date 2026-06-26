import React, { useState, useRef, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Icon } from 'e-ui-react';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { setStorage, getStorage, deleteStorage } from "@Utils/LocalStorageManager.js";
import { GetUserProfile, SetUserProfile, ResetUserProfile } from "@Services/AuthManager.js";
import Dropdown from "@Components/dropdown-menu/index.js";

const ManageAuth = ({ userDetails, setUserDetails }) =>{
 const { lang } = useParams();
 const [isLogged, setLogged] = useState(false);
 useEffect(()=>{
  setLogged(Object.keys(userDetails)?.length>0);
 },[userDetails]);
 const login = useGoogleLogin({
   onSuccess: async(tokenResponse) =>{
     const userInfo = await fetch(
       'https://www.googleapis.com/oauth2/v3/userinfo',
       {
         headers: {
           Authorization: `Bearer ${tokenResponse.access_token}`,
         },
       }
     );
     const user = await userInfo.json();
     SetUserProfile({
       surName: user?.family_name,
       name: user?.given_name,
       profilePic: user?.picture,
       email: user?.email,
       emailVerified: user?.email_verified
     });
   },
   onError: () => console.log('Login Failed')
 });
 return (<div className="d-flex" style={{ marginLeft:'5px' }}>
    {isLogged?(<>
      <Dropdown list={[
        (<>
          <Icon type="FontAwesome" name="fa-calendar" size={12} style={{ marginRight:'6px'}} />
          <b>My Timetable</b>
        </>),
        (<>
          <button className="btn btn-danger"  style={{ width:'100%', textAlign:'left', fontSize:'12px', paddingLeft:'10px' }} 
            onClick={()=>{
              ResetUserProfile();
            }}>
            <Icon type="FontAwesome" name="fa-power-off" size={12} style={{ marginRight:'6px'}} />
            <b>Logout</b>
          </button>
        </>)
      ]}>
        <img src={userDetails?.profilePic} className="upn-profilePic-google-login" 
            referrerPolicy="no-referrer" onClick={()=>setShowDropdown(!showDropdown)}
            onError={(e) =>SetUserProfile({})} /> 
      </Dropdown>
          </>):(<>
            <button className="upn-btn-google-login" onClick={()=>login()}>
              <img src={process.env.PROJECT_URL+'assets/images/google.png'} className="upn-img-google-login" /> 
              <span style={{ fontSize:'12px' }}><b>{lang==='hi'?'गूगल से लॉग इन करें':'Login with Google'}</b></span>
            </button>
          </>)}
 </div>);
};

export default ManageAuth;