import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getAppContext, Nav, Button, Icon } from "e-ui-react";
import { useGoogleLogin } from '@react-oauth/google';
import { GetUserProfile, SetUserProfile, ResetUserProfile } from "@Services/AuthManager.js";
import Dropdown from "@Components/dropdown-menu/index.js";
import './index.css';

const ManageAuth = () =>{
 const appContext = getAppContext();
 const { lang } = useParams();
 const initializeAuth = (userDetails) =>{
  appContext.setContextData({ userDetails: userDetails, isLogged: Object.keys(userDetails)?.length>0 });
 };
 useEffect(()=>{
   const userDetails = GetUserProfile();
   initializeAuth(userDetails);
 },[]);
 const AuthSetup = useGoogleLogin({
   onSuccess: async(tokenResponse) =>{
    const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo',
       { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } });
    const user = await userInfo.json();
    const userDetails = {
        surName: user?.family_name,
        name: user?.given_name,
        profilePic: user?.picture,
        email: user?.email,
        emailVerified: user?.email_verified
    };
    SetUserProfile(userDetails);
    initializeAuth(userDetails);
    window.location.href=process.env.PROJECT_URL+lang+'/my-dashboard';
   },
   onError: () => console.log('Login Failed')
 });
 const Logout = () =>{
  ResetUserProfile();
  initializeAuth({});
  window.location.href=process.env.PROJECT_URL+lang+'/home';
 };
 return (<div style={{ marginLeft:'5px' }}>
    {appContext?.contextData?.isLogged?(<>
          <Dropdown dropDownPosition={{ marginTop:'3px', position:'absolute', right:'0%' }}  list={[
            (<div className="upn-dropdown-user-profile-item" 
                onClick={()=>window.location.href=process.env.PROJECT_URL+lang+'/my-study-plan'}>
              <Icon type="FontAwesome" name="fa-clock-o" size={14} style={{ marginRight:'6px'}} />
              <b>My Study Plan</b>
            </div>),
            (<div className="upn-dropdown-user-profile-item" 
              onClick={()=>window.location.href=process.env.PROJECT_URL+lang+'/my-time-table'}>
              <Icon type="FontAwesome" name="fa-calendar" size={12} style={{ marginRight:'6px'}} />
              <b>My Timetable</b>
            </div>),
            (<>
              <button className="btn btn-danger"  style={{ width:'100%', textAlign:'left', fontSize:'12px', paddingLeft:'10px' }} 
                onClick={()=>{ Logout(); }}>
                <Icon type="FontAwesome" name="fa-power-off" size={12} style={{ marginRight:'6px'}} />
                <b>Logout</b>
              </button>
            </>)
          ]}>
            <img src={appContext?.contextData?.userDetails?.profilePic} className="upn-profilePic-google-login" 
                referrerPolicy="no-referrer" onClick={()=>setShowDropdown(!showDropdown)}
                onError={(e) =>SetUserProfile({})} /> 
          </Dropdown>
              </>):(<>
                <button className="upn-btn-google-login" onClick={()=>AuthSetup()}>
                  <img src={process.env.PROJECT_URL+'assets/images/google.png'} className="upn-img-google-login" /> 
                  <span style={{ fontSize:'12px' }}><b>{lang==='hi'?'गूगल से लॉग इन करें':'Login with Google'}</b></span>
                </button>
              </>)}
 </div>);
};

export default ManageAuth;