import React, { useState, useRef, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Icon } from 'e-ui-react';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { setStorage, getStorage, deleteStorage } from "@Utils/LocalStorageManager.js";

const ManageAuth = () =>{
 const { lang } = useParams();
 const dropdownRef = useRef(null);
 const [userDetails, setuserDetails] = useState({});
 const [showDropdown, setShowDropdown] = useState(false);
 useEffect(()=>{ console.log("userDetails", userDetails); },[userDetails]);
 useEffect(()=>{ console.log(showDropdown); },[showDropdown]);
 const handleDropdownClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
 };
 const GetUserProfile = () =>{ // Get from localStorage and set in userDetails
   let userDetails = getStorage("UPN_AUTH_DETAILS") || {};
     userDetails = JSON.parse(userDetails);
   setuserDetails(userDetails);
 };
 const SetUserProfile = (details) =>{ // Set in localStorage and set in userDetails
   setStorage("UPN_AUTH_DETAILS",JSON.stringify(details));
   setTimeout(()=>{  GetUserProfile(); }, 1000);
 };
 const ResetUserProfile = () =>{ // reset localStorage and userDetails
   deleteStorage("UPN_AUTH_DETAILS");
   setShowDropdown(false); 
   setTimeout(()=>{  setuserDetails({}); }, 1000);
 };
 useEffect(()=>{ 
    GetUserProfile(); 
    document.addEventListener("mousedown", handleDropdownClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleDropdownClickOutside);
    };
 },[]);
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
 return (<div>
    {Object.keys(userDetails)?.length>0?(<>
        <div ref={dropdownRef} className="dropdown" style={{ cursor:'pointer' }}>
        <img src={userDetails?.profilePic} className="upn-profilePic-google-login dropdown-toggle" data-bs-toggle="dropdown"
            referrerPolicy="no-referrer" onClick={()=>setShowDropdown(!showDropdown)}
            onError={(e) =>SetUserProfile({})} /> 
        <ul className={showDropdown?"dropdown-menu show":"dropdown-menu"} 
            style={{ position:'absolute', right:'1%', marginTop:'5px' }}>
            <li><a className="dropdown-item" href="#">Link 1</a></li>
            <li><a className="dropdown-item" href="#">Link 2</a></li>
            <li><button className="btn btn-danger"  style={{ width:'100%', textAlign:'left', fontSize:'12px', paddingLeft:'10px' }} 
                onClick={()=>ResetUserProfile()}>
                <Icon type="FontAwesome" name="fa-power-off" size={12} style={{ marginRight:'6px'}} />
                    <b>Logout</b>
                </button></li>
            </ul>
            </div>
          </>):(<>
            <button className="upn-btn-google-login" onClick={()=>login()}>
              <img src={process.env.PROJECT_URL+'assets/images/google.png'} className="upn-img-google-login" /> 
              <span style={{ fontSize:'12px' }}><b>{lang==='hi'?'गूगल से लॉग इन करें':'Login with Google'}</b></span>
            </button>
          </>)}
 </div>);
};

export default ManageAuth;